/* Question bank for resistors.html — loaded before quiz.js is invoked. */

var resistorsQuestions = [

  // ---- Numeric: basic Ohm's law R = V/I -----------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var Vs = [3, 6, 9, 12, 15, 24];
      var Is = [0.5, 1, 1.5, 2, 3];
      var V = Vs[Math.floor(Math.random() * Vs.length)];
      var I = Is[Math.floor(Math.random() * Is.length)];
      return { V: V, I: I };
    },
    prompt: function (v) {
      return '<p>A resistor has a potential difference of $\\quantity{' + v.V + '}{V}$ across it when a current of $\\quantity{' + v.I + '}{A}$ flows through it. Calculate its resistance.</p><p><i>Give your answer in ohms (&Omega;).</i></p>';
    },
    answer: function (v) { return v.V / v.I; },
    unit: '\u03A9',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $R=\\dfrac{V}{I}$:</p>' +
        '<p>$R=\\dfrac{\\quantity{' + v.V + '}{V}}{\\quantity{' + v.I + '}{A}}=\\quantity{' + ans.toPrecision(3) + '}{\\Omega}$</p>';
    }
  },

  // ---- Numeric: series resistors -------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var options = [4, 6, 8, 10, 12, 15, 18, 20, 22, 33];
      var shuffled = options.slice().sort(function () { return Math.random() - 0.5; });
      return { R1: shuffled[0], R2: shuffled[1], R3: shuffled[2] };
    },
    prompt: function (v) {
      return '<p>Three resistors of $\\quantity{' + v.R1 + '}{\\Omega}$, $\\quantity{' + v.R2 + '}{\\Omega}$ and $\\quantity{' + v.R3 + '}{\\Omega}$ are connected in series. Calculate the total resistance.</p><p><i>Give your answer in ohms (&Omega;).</i></p>';
    },
    answer: function (v) { return v.R1 + v.R2 + v.R3; },
    unit: '\u03A9',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>In series, resistances simply add:</p>' +
        '<p>$R_{T}=R_{1}+R_{2}+R_{3}=\\quantity{' + v.R1 + '}{\\Omega}+\\quantity{' + v.R2 + '}{\\Omega}+\\quantity{' + v.R3 + '}{\\Omega}=\\quantity{' + ans.toPrecision(3) + '}{\\Omega}$</p>';
    }
  },

  // ---- Numeric: two resistors in parallel — tests the reciprocal step -----
  {
    type: 'numeric',
    generateVars: function () {
      var pairs = [[2, 3], [4, 6], [5, 20], [10, 15], [6, 12], [8, 24], [3, 6]];
      var pair = pairs[Math.floor(Math.random() * pairs.length)];
      return { R1: pair[0], R2: pair[1] };
    },
    prompt: function (v) {
      return '<p>Two resistors of $\\quantity{' + v.R1 + '}{\\Omega}$ and $\\quantity{' + v.R2 + '}{\\Omega}$ are connected in parallel. Calculate the total resistance of the combination.</p><p><i>Give your answer in ohms (&Omega;). Remember the final step!</i></p>';
    },
    answer: function (v) { return 1 / (1 / v.R1 + 1 / v.R2); },
    unit: '\u03A9',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var sumRecip = (1 / v.R1 + 1 / v.R2).toPrecision(3);
      return '<p>$\\dfrac{1}{R_{T}}=\\dfrac{1}{\\quantity{' + v.R1 + '}{\\Omega}}+\\dfrac{1}{\\quantity{' + v.R2 + '}{\\Omega}}=' + sumRecip + '$</p>' +
        '<p>Don&rsquo;t forget to take the reciprocal of this to get $R_{T}$, not $\\frac{1}{R_{T}}$ itself:</p>' +
        '<p>$R_{T}=\\dfrac{1}{' + sumRecip + '}=\\quantity{' + ans.toPrecision(3) + '}{\\Omega}$</p>' +
        '<p>Sanity check: this is smaller than both $\\quantity{' + v.R1 + '}{\\Omega}$ and $\\quantity{' + v.R2 + '}{\\Omega}$, as expected for a parallel combination.</p>';
    }
  },

  // ---- Conceptual: non-linear IV graph gradient mistake -------------------
  {
    type: 'mcq',
    prompt: '<p>A student plots an I&ndash;V graph for a filament bulb and gets a curve that flattens off at higher voltages. To find the resistance at a particular point on the curve, what should they do?</p>',
    options: [
      'Read off the V and I values at that point and calculate V/I',
      'Draw a tangent to the curve at that point and take 1/gradient',
      'Use the gradient of a straight line joining the first and last points on the graph',
      'It is impossible to find resistance from a curved I\u2013V graph'
    ],
    correctIndex: 0,
    explanation: '<p>Resistance is always $R=\\frac{V}{I}$ at a specific point &mdash; the ratio of the coordinates, not the gradient of the curve. The gradient method (or $1/\\text{gradient}$) only gives the correct resistance for a straight line through the origin, i.e. an ohmic conductor. For a curved graph like a filament bulb, you must read off $V$ and $I$ at the point you care about and divide.</p>'
  },

  // ---- Conceptual: temperature and resistance of a metal ------------------
  {
    type: 'mcq',
    prompt: '<p>A metal wire is heated. What happens to its resistance, and why?</p>',
    options: [
      'Resistance increases, because the ions vibrate more and cause more electron collisions',
      'Resistance decreases, because the electrons move faster and collide less often',
      'Resistance stays the same, because the number of free electrons is unchanged',
      'Resistance increases, because the wire gains extra free electrons when heated'
    ],
    correctIndex: 0,
    explanation: '<p>Heating a metal makes the fixed ions in the lattice vibrate more vigorously. This increases the frequency of collisions between the drifting electrons and the ions, transferring more energy to heat and increasing resistance. The number of free electrons available doesn&rsquo;t change &mdash; it&rsquo;s the collision rate that increases.</p>'
  },

  // ---- Numeric: three resistors in parallel (reinforces reciprocal step) --
  {
    type: 'numeric',
    generateVars: function () {
      var sets = [
        [2, 20, 200], [4, 40, 400], [5, 10, 20], [3, 6, 12], [10, 20, 40], [6, 12, 24]
      ];
      var set = sets[Math.floor(Math.random() * sets.length)];
      return { R1: set[0], R2: set[1], R3: set[2] };
    },
    prompt: function (v) {
      return '<p>Three resistors of $\\quantity{' + v.R1 + '}{\\Omega}$, $\\quantity{' + v.R2 + '}{\\Omega}$ and $\\quantity{' + v.R3 + '}{\\Omega}$ are connected in parallel. Calculate the total resistance.</p><p><i>Give your answer in ohms (&Omega;).</i></p>';
    },
    answer: function (v) { return 1 / (1 / v.R1 + 1 / v.R2 + 1 / v.R3); },
    unit: '\u03A9',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>$\\dfrac{1}{R_{T}}=\\dfrac{1}{\\quantity{' + v.R1 + '}{\\Omega}}+\\dfrac{1}{\\quantity{' + v.R2 + '}{\\Omega}}+\\dfrac{1}{\\quantity{' + v.R3 + '}{\\Omega}}$</p>' +
        '<p>Take the reciprocal of the sum to get $R_{T}=\\quantity{' + ans.toPrecision(3) + '}{\\Omega}$ &mdash; smaller than the smallest resistor in the network, as expected.</p>';
    }
  },

  // ---- Conceptual: sanity-check heuristic ----------------------------------
  {
    type: 'mcq',
    prompt: '<p>You calculate the total resistance of three resistors in parallel and get an answer <b>larger</b> than the smallest individual resistor. What does this tell you?</p>',
    options: [
      'You have made a calculation error somewhere',
      'This is a perfectly valid result',
      'It means the resistors are actually connected in series',
      'It means one of the resistors has a negative resistance'
    ],
    correctIndex: 0,
    explanation: '<p>The total resistance of resistors in parallel is always <i>smaller</i> than the smallest individual resistance in that network &mdash; adding another path for current to flow can only make it easier for charge to flow overall. An answer larger than the smallest resistor (often caused by forgetting the final reciprocal step) signals an arithmetic mistake, not a valid physical result.</p>'
  },

  // ---- Numeric: combining series and parallel networks ---------------------
  {
    type: 'numeric',
    generateVars: function () {
      var seriesOptions = [1, 2, 3, 4, 5];
      var parallelPairs = [[4, 12], [6, 12], [3, 6], [8, 24], [5, 20], [10, 40]];
      var Rseries = seriesOptions[Math.floor(Math.random() * seriesOptions.length)];
      var pair = parallelPairs[Math.floor(Math.random() * parallelPairs.length)];
      return { Rseries: Rseries, Rp1: pair[0], Rp2: pair[1] };
    },
    prompt: function (v) {
      return '<p>A circuit has a $\\quantity{' + v.Rseries + '}{\\Omega}$ resistor in series with a parallel combination of a $\\quantity{' + v.Rp1 + '}{\\Omega}$ resistor and a $\\quantity{' + v.Rp2 + '}{\\Omega}$ resistor. Calculate the total resistance of the whole network.</p><p><i>Give your answer in ohms (&Omega;).</i></p>';
    },
    answer: function (v) { return v.Rseries + 1 / (1 / v.Rp1 + 1 / v.Rp2); },
    unit: '\u03A9',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var parallelR = (1 / (1 / v.Rp1 + 1 / v.Rp2)).toPrecision(3);
      return '<p>First resolve the parallel branch (furthest from the series resistor conceptually, but here it\u2019s the sub-network to simplify first):</p>' +
        '<p>$R_{parallel}=\\dfrac{1}{\\frac{1}{\\quantity{' + v.Rp1 + '}{\\Omega}}+\\frac{1}{\\quantity{' + v.Rp2 + '}{\\Omega}}}=\\quantity{' + parallelR + '}{\\Omega}$</p>' +
        '<p>Then add the series resistor: $R_{T}=\\quantity{' + v.Rseries + '}{\\Omega}+\\quantity{' + parallelR + '}{\\Omega}=\\quantity{' + ans.toPrecision(3) + '}{\\Omega}$</p>';
    }
  }
];
