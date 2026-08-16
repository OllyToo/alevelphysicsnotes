/* Question bank for vectors.html — loaded before quiz.js is invoked. */

var vectorsQuestions = [

  // ---- Numeric: 1D vector addition with sign convention ------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var rights = [5, 8, 10, 12, 15];
      var lefts = [3, 4, 6, 7, 9];
      var right = rights[Math.floor(Math.random() * rights.length)];
      var left = lefts[Math.floor(Math.random() * lefts.length)];
      return { right: right, left: left };
    },
    prompt: function (v) {
      return '<p>A force of $\\quantity{' + v.right + '}{N}$ acts to the right on an object, and a force of $\\quantity{' + v.left + '}{N}$ acts to the left. Taking rightward as positive, calculate the resultant force.</p><p><i>Give your answer in N. Use a negative sign if the resultant acts to the left.</i></p>';
    },
    answer: function (v) { return v.right - v.left; },
    unit: 'N',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Taking rightward as positive: $F_R=\\quantity{' + v.right + '}{N}+(-\\quantity{' + v.left + '}{N})=\\quantity{' + ans.toPrecision(3) + '}{N}$</p>' +
        '<p>The positive sign means the resultant acts to the right.</p>';
    }
  },

  // ---- Numeric: resolving the horizontal component -------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var speeds = [20, 25, 30, 40, 50];
      var angles = [20, 25, 30, 35, 40, 45];
      var s = speeds[Math.floor(Math.random() * speeds.length)];
      var theta = angles[Math.floor(Math.random() * angles.length)];
      return { s: s, theta: theta };
    },
    prompt: function (v) {
      return '<p>A ball is launched with a velocity of $\\quantity{' + v.s + '}{m\\,s^{-1}}$ at an angle of ' + v.theta + '\u00B0 to the horizontal. Calculate the horizontal component of the velocity.</p><p><i>Give your answer in m s<sup>-1</sup>, to 3 s.f.</i></p>';
    },
    answer: function (v) { return v.s * Math.cos(v.theta * Math.PI / 180); },
    unit: 'm/s',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Using $H=s\\cos\\theta$:</p>' +
        '<p>$H=\\quantity{' + v.s + '}{m\\,s^{-1}}\\times\\cos(' + v.theta + '\\degree)=\\quantity{' + ans.toPrecision(3) + '}{m\\,s^{-1}}$</p>';
    }
  },

  // ---- Numeric: resolving the vertical component ----------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var speeds = [15, 20, 30, 35, 45];
      var angles = [15, 20, 30, 40, 50, 60];
      var s = speeds[Math.floor(Math.random() * speeds.length)];
      var theta = angles[Math.floor(Math.random() * angles.length)];
      return { s: s, theta: theta };
    },
    prompt: function (v) {
      return '<p>A force of $\\quantity{' + v.s + '}{N}$ acts at an angle of ' + v.theta + '\u00B0 to the horizontal. Calculate the vertical component of the force.</p><p><i>Give your answer in N, to 3 s.f.</i></p>';
    },
    answer: function (v) { return v.s * Math.sin(v.theta * Math.PI / 180); },
    unit: 'N',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Using $V=F\\sin\\theta$:</p>' +
        '<p>$V=\\quantity{' + v.s + '}{N}\\times\\sin(' + v.theta + '\\degree)=\\quantity{' + ans.toPrecision(3) + '}{N}$</p>';
    }
  },

  // ---- Numeric: combining two perpendicular vectors (Pythagoras) -----------------
  {
    type: 'numeric',
    generateVars: function () {
      var F1s = [3000, 4000, 5000, 6000, 9000];
      var F2s = [4000, 8000, 12000, 6000, 12000];
      var F1 = F1s[Math.floor(Math.random() * F1s.length)];
      var F2 = F2s[Math.floor(Math.random() * F2s.length)];
      return { F1: F1, F2: F2 };
    },
    prompt: function (v) {
      return '<p>A boat experiences a force of $\\quantity{' + v.F1 + '}{N}$ due East and a force of $\\quantity{' + v.F2 + '}{N}$ due North. Calculate the magnitude of the resultant force.</p><p><i>Give your answer in N, standard form to 3 s.f.</i></p>';
    },
    answer: function (v) { return Math.sqrt(v.F1 * v.F1 + v.F2 * v.F2); },
    unit: 'N',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Using Pythagoras\u2019 theorem, $F_R=\\sqrt{F_1^2+F_2^2}$:</p>' +
        '<p>$F_R=\\sqrt{\\left(\\quantity{' + v.F1 + '}{N}\\right)^2+\\left(\\quantity{' + v.F2 + '}{N}\\right)^2}=\\quantity{' + ans.toExponential(3) + '}{N}$</p>';
    }
  },

  // ---- Numeric: finding the angle of the resultant (arctan) -----------------------
  {
    type: 'numeric',
    generateVars: function () {
      var F1s = [3000, 4000, 5000, 6000, 9000];
      var F2s = [4000, 8000, 12000, 6000, 12000];
      var F1 = F1s[Math.floor(Math.random() * F1s.length)];
      var F2 = F2s[Math.floor(Math.random() * F2s.length)];
      return { F1: F1, F2: F2 };
    },
    prompt: function (v) {
      return '<p>A boat experiences a driving force of $\\quantity{' + v.F1 + '}{N}$ due East and a force of $\\quantity{' + v.F2 + '}{N}$ due North. Calculate the angle the resultant force makes with due East.</p><p><i>Give your answer in degrees, to 3 s.f.</i></p>';
    },
    answer: function (v) { return Math.atan(v.F2 / v.F1) * (180 / Math.PI); },
    unit: 'degrees',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Using $\\theta=\\tan^{-1}\\left(\\dfrac{F_{North}}{F_{East}}\\right)$:</p>' +
        '<p>$\\theta=\\tan^{-1}\\left(\\dfrac{\\quantity{' + v.F2 + '}{N}}{\\quantity{' + v.F1 + '}{N}}\\right)=\\quantity{' + ans.toPrecision(3) + '}{\\degree}$</p>';
    }
  },

  // ---- Conceptual: scalar vs vector -------------------------------------------------
  {
    type: 'mcq',
    prompt: '<p>Which of the following is a vector quantity?</p>',
    options: [
      'Momentum',
      'Mass',
      'Energy',
      'Temperature'
    ],
    correctIndex: 0,
    explanation: '<p>Momentum has both magnitude and direction, making it a vector. Mass, energy, and temperature are all scalars \u2014 they are fully described by a size alone, with no direction attached.</p>'
  },

  // ---- Conceptual: distance vs displacement -----------------------------------------
  {
    type: 'mcq',
    prompt: '<p>A runner completes exactly one full lap of a circular track and returns to their starting point. Which statement is correct?</p>',
    options: [
      'Their distance travelled is greater than zero, but their displacement is zero',
      'Both their distance travelled and displacement are zero',
      'Their displacement is greater than zero, but their distance travelled is zero',
      'Distance and displacement must always be equal to each other'
    ],
    correctIndex: 0,
    explanation: '<p>Distance is the total length of the path travelled (a scalar), which is clearly greater than zero for a full lap. Displacement is the straight-line distance from start to end point (a vector) \u2014 since the runner ends up back where they started, their displacement is zero, even though they\u2019ve clearly run somewhere.</p>'
  },

  // ---- Conceptual: choosing trigonometry vs a scale diagram -------------------------
  {
    type: 'mcq',
    prompt: '<p>Two forces act on an object at an angle of 70\u00B0 to each other (not at right angles). What is the most appropriate method to find the resultant force in an exam?</p>',
    options: [
      'Draw a scale diagram \u2014 Pythagoras\u2019 theorem only applies directly to vectors at right angles',
      'Use Pythagoras\u2019 theorem directly, since it works for any angle between two vectors',
      'The resultant cannot be found unless the two forces are equal in magnitude',
      'Always use trigonometry rather than a scale diagram, regardless of the angle'
    ],
    correctIndex: 0,
    explanation: '<p>Pythagoras\u2019 theorem only applies directly when the two vectors are at right angles to each other. For any other angle, a carefully drawn scale diagram (or the sine/cosine rule) is needed \u2014 and in an AQA exam, you\u2019re expected to actually draw the diagram to get full marks, even if you could calculate the answer another way.</p>'
  }
];
