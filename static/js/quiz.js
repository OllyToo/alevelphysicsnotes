/* ==========================================================================
   Mr Toogood Physics — Quiz engine
   Drop-in, reusable "test yourself" widget for any topic page.

   Usage on a page:
     <div id="quiz-root"></div>
     <script src="..\javascript\quiz.js"></script>
     <script src="quizzes\charge_and_current.js"></script>
     <script>
       new PhysicsQuiz(document.getElementById('quiz-root'), chargeAndCurrentQuestions, {
         storageKey: 'charge_and_current'
       });
     </script>

   Question object shapes:

   Multiple choice:
     {
       type: 'mcq',
       prompt: '<p>...</p>',              // may contain $...$ MathJax
       options: ['A', 'B', 'C', 'D'],     // strings, may contain MathJax
       correctIndex: 0,
       explanation: '<p>...</p>'
     }

   Numeric (supports randomised values so students can retry with new numbers):
     {
       type: 'numeric',
       generateVars: () => ({ I: (Math.random()*4+1).toFixed(1), t: 60 }),
       prompt: (v) => `<p>A current of $\\quantity{${v.I}}{A}$ flows for $\\quantity{${v.t}}{s}$. Calculate the charge that flows.</p>`,
       answer: (v) => Number(v.I) * Number(v.t),
       unit: 'C',
       tolerancePercent: 2,
       explanation: (v, ans) => `<p>Using $Q=I\\Delta t$: ... $Q=\\quantity{${ans.toFixed(2)}}{C}$</p>`
     }

   ========================================================================== */

(function (global) {

  function typesetMath(el) {
    // Re-typeset MathJax for dynamically inserted content (MathJax v3 promise-based API)
    if (global.MathJax && global.MathJax.typesetPromise) {
      global.MathJax.typesetPromise([el]).catch(function (err) {
        console.error('MathJax typeset error:', err);
      });
    }
  }

  function shuffle(array) {
    var a = array.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function PhysicsQuiz(container, questions, options) {
    this.container = container;
    this.baseQuestions = questions;
    this.options = options || {};
    this.storageKey = 'ttp-quiz-' + (this.options.storageKey || 'default');
    this.reset();
    this.render();
  }

  PhysicsQuiz.prototype.reset = function () {
    // Fresh attempt: shuffle question order, re-roll numeric values, reset score
    this.questions = shuffle(this.baseQuestions).map(this.prepareQuestion, this);
    this.index = 0;
    this.score = 0;
    this.answered = false;
  };

  PhysicsQuiz.prototype.prepareQuestion = function (q) {
    var prepared = { type: q.type, explanationFn: q.explanation };
    if (q.type === 'mcq') {
      var order = shuffle(q.options.map(function (text, i) { return i; }));
      prepared.optionsText = order.map(function (i) { return q.options[i]; });
      prepared.correctIndex = order.indexOf(q.correctIndex);
      prepared.promptHTML = q.prompt;
    } else if (q.type === 'numeric') {
      var vars = q.generateVars();
      prepared.vars = vars;
      prepared.promptHTML = q.prompt(vars);
      prepared.correctAnswer = q.answer(vars);
      prepared.unit = q.unit || '';
      prepared.tolerancePercent = (q.tolerancePercent != null) ? q.tolerancePercent : 3;
    }
    return prepared;
  };

  PhysicsQuiz.prototype.saveBestScore = function () {
    try {
      var best = Number(localStorage.getItem(this.storageKey) || 0);
      if (this.score > best) {
        localStorage.setItem(this.storageKey, String(this.score));
      }
    } catch (e) { /* localStorage unavailable — fail silently */ }
  };

  PhysicsQuiz.prototype.getBestScore = function () {
    try {
      return Number(localStorage.getItem(this.storageKey) || 0);
    } catch (e) { return 0; }
  };

  PhysicsQuiz.prototype.render = function () {
    var self = this;
    var total = this.questions.length;

    if (this.index >= total) {
      this.renderSummary();
      return;
    }

    var q = this.questions[this.index];
    var best = this.getBestScore();

    var html = '';
    html += '<div class="quiz-progress">Question ' + (this.index + 1) + ' of ' + total +
            '<span class="quiz-best">Best score: ' + best + '/' + total + '</span></div>';
    html += '<div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:' +
            (100 * this.index / total) + '%"></div></div>';
    html += '<div class="quiz-question">' + q.promptHTML + '</div>';
    html += '<div class="quiz-answer-area">';

    if (q.type === 'mcq') {
      html += '<div class="quiz-options">';
      q.optionsText.forEach(function (opt, i) {
        html += '<button type="button" class="quiz-option" data-index="' + i + '">' + opt + '</button>';
      });
      html += '</div>';
    } else if (q.type === 'numeric') {
      html += '<div class="quiz-numeric-input">' +
              '<input type="text" inputmode="decimal" class="quiz-input" placeholder="Your answer" aria-label="Your answer">' +
              '<span class="quiz-unit">' + q.unit + '</span>' +
              '<button type="button" class="quiz-check-btn">Check</button>' +
              '</div>';
    }

    html += '</div>'; // .quiz-answer-area
    html += '<div class="quiz-feedback" aria-live="polite"></div>';
    html += '<div class="quiz-controls"></div>';

    this.container.innerHTML = '<div class="quiz-widget">' + html + '</div>';
    typesetMath(this.container);
    this.answered = false;
    this.attachHandlers(q);
  };

  PhysicsQuiz.prototype.attachHandlers = function (q) {
    var self = this;
    var root = this.container;

    if (q.type === 'mcq') {
      var buttons = root.querySelectorAll('.quiz-option');
      buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          if (self.answered) return;
          var chosen = Number(btn.getAttribute('data-index'));
          self.handleMCQAnswer(q, chosen, buttons);
        });
      });
    } else if (q.type === 'numeric') {
      var input = root.querySelector('.quiz-input');
      var checkBtn = root.querySelector('.quiz-check-btn');
      var submit = function () {
        if (self.answered) return;
        self.handleNumericAnswer(q, input.value);
      };
      checkBtn.addEventListener('click', submit);
      input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') submit();
      });
      input.focus({ preventScroll: true });
    }
  };

  PhysicsQuiz.prototype.handleMCQAnswer = function (q, chosenIndex, buttons) {
    this.answered = true;
    var correct = (chosenIndex === q.correctIndex);
    if (correct) this.score++;

    buttons.forEach(function (btn) {
      var i = Number(btn.getAttribute('data-index'));
      btn.disabled = true;
      if (i === q.correctIndex) btn.classList.add('quiz-correct');
      else if (i === chosenIndex) btn.classList.add('quiz-incorrect');
    });

    this.showFeedback(correct, q);
  };

  PhysicsQuiz.prototype.handleNumericAnswer = function (q, rawValue) {
    var value = parseFloat(rawValue);
    var input = this.container.querySelector('.quiz-input');
    var checkBtn = this.container.querySelector('.quiz-check-btn');

    if (isNaN(value)) {
      var fb = this.container.querySelector('.quiz-feedback');
      fb.innerHTML = '<p class="quiz-hint">Enter a numerical value first.</p>';
      return;
    }

    this.answered = true;
    var tolerance = Math.abs(q.correctAnswer) * (q.tolerancePercent / 100);
    // guard against zero tolerance when the correct answer is exactly 0
    tolerance = Math.max(tolerance, Math.abs(q.correctAnswer) * 0.005, 1e-9);
    var correct = Math.abs(value - q.correctAnswer) <= tolerance;
    if (correct) this.score++;

    input.disabled = true;
    checkBtn.disabled = true;
    input.classList.add(correct ? 'quiz-correct' : 'quiz-incorrect');

    this.showFeedback(correct, q);
  };

  PhysicsQuiz.prototype.showFeedback = function (correct, q) {
    var self = this;
    var fb = this.container.querySelector('.quiz-feedback');
    var controls = this.container.querySelector('.quiz-controls');
    var isLast = (this.index === this.questions.length - 1);

    var explanationHTML = '';
    if (q.type === 'mcq') {
      explanationHTML = q.explanationFn;
    } else {
      explanationHTML = q.explanationFn(q.vars, q.correctAnswer);
    }

    var summaryLine = q.type === 'numeric'
      ? '<p class="quiz-correct-answer">Correct answer: ' + q.correctAnswer.toPrecision(3) + ' ' + q.unit + '</p>'
      : '';

    fb.innerHTML =
      '<div class="quiz-result ' + (correct ? 'quiz-result-correct' : 'quiz-result-incorrect') + '">' +
        '<p class="quiz-result-heading">' + (correct ? 'Correct!' : 'Not quite') + '</p>' +
        summaryLine +
        '<div class="quiz-explanation">' + explanationHTML + '</div>' +
      '</div>';

    controls.innerHTML = '<button type="button" class="quiz-next-btn">' +
      (isLast ? 'See your score' : 'Next question') + '</button>';

    typesetMath(fb);

    controls.querySelector('.quiz-next-btn').addEventListener('click', function () {
      self.index++;
      self.render();
    });
  };

  PhysicsQuiz.prototype.renderSummary = function () {
    var self = this;
    this.saveBestScore();
    var total = this.questions.length;
    var best = this.getBestScore();
    var pct = Math.round(100 * this.score / total);

    var message;
    if (pct === 100) message = 'Excellent work — full marks!';
    else if (pct >= 70) message = 'Good work — you know this topic well.';
    else if (pct >= 40) message = 'Getting there — worth another read through the notes above.';
    else message = 'Worth revisiting the notes above before trying again.';

    this.container.innerHTML =
      '<div class="quiz-widget quiz-summary">' +
        '<p class="quiz-score">You scored ' + this.score + ' / ' + total + '</p>' +
        '<p class="quiz-message">' + message + '</p>' +
        '<p class="quiz-best">Best score on this device: ' + best + '/' + total + '</p>' +
        '<button type="button" class="quiz-retry-btn">Try again</button>' +
      '</div>';

    this.container.querySelector('.quiz-retry-btn').addEventListener('click', function () {
      self.reset();
      self.render();
    });
  };

  global.PhysicsQuiz = PhysicsQuiz;

})(window);
