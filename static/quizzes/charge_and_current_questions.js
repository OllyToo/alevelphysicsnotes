/* Question bank for charge_and_current.html — loaded before quiz.js is invoked. */

var chargeAndCurrentQuestions = [

  // ---- Conceptual: conventional current -------------------------------
  {
    type: 'mcq',
    prompt: '<p>In a metal wire, electrons drift from the negative terminal towards the positive terminal of the cell. In which direction does <b>conventional current</b> flow?</p>',
    options: [
      'From the positive terminal to the negative terminal',
      'From the negative terminal to the positive terminal',
      'In the same direction as the electrons',
      'There is no defined direction for conventional current'
    ],
    correctIndex: 0,
    explanation: '<p>Conventional current is defined as flowing from positive to negative — the opposite direction to the drift of (negatively charged) electrons. This is a historical convention that predates the discovery of the electron.</p>'
  },

  // ---- Numeric: Q = I * t ------------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var currents = [0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 4.0];
      var times = [10, 20, 30, 60, 90, 120];
      var I = currents[Math.floor(Math.random() * currents.length)];
      var t = times[Math.floor(Math.random() * times.length)];
      return { I: I, t: t };
    },
    prompt: function (v) {
      return '<p>A current of $\\quantity{' + v.I + '}{A}$ flows through a resistor for $\\quantity{' + v.t + '}{s}$. Calculate the charge that flows.</p><p><i>Give your answer in coulombs (C).</i></p>';
    },
    answer: function (v) { return v.I * v.t; },
    unit: 'C',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $Q=I\\Delta t$:</p>' +
        '<p>$Q=\\quantity{' + v.I + '}{A}\\times\\quantity{' + v.t + '}{s}=\\quantity{' + ans.toPrecision(3) + '}{C}$</p>';
    }
  },

  // ---- Numeric: I = Q / t (rearrangement) --------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var Qs = [12, 24, 36, 48, 60, 90, 120];
      var ts = [4, 6, 8, 10, 12, 15, 20];
      var Q = Qs[Math.floor(Math.random() * Qs.length)];
      var t = ts[Math.floor(Math.random() * ts.length)];
      return { Q: Q, t: t };
    },
    prompt: function (v) {
      return '<p>A charge of $\\quantity{' + v.Q + '}{C}$ passes through a lamp in $\\quantity{' + v.t + '}{s}$. Calculate the current flowing through the lamp.</p><p><i>Give your answer in amps (A).</i></p>';
    },
    answer: function (v) { return v.Q / v.t; },
    unit: 'A',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Rearranging $I=\\dfrac{\\Delta Q}{\\Delta t}$:</p>' +
        '<p>$I=\\dfrac{\\quantity{' + v.Q + '}{C}}{\\quantity{' + v.t + '}{s}}=\\quantity{' + ans.toPrecision(3) + '}{A}$</p>';
    }
  },

  // ---- Numeric: Kirchhoff's 1st law --------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var I1s = [0.2, 0.3, 0.4, 0.5, 0.6, 0.8];
      var I2s = [0.1, 0.15, 0.2, 0.25, 0.3, 0.4];
      var I1 = I1s[Math.floor(Math.random() * I1s.length)];
      var I2 = I2s[Math.floor(Math.random() * I2s.length)];
      return { I1: I1, I2: I2 };
    },
    prompt: function (v) {
      return '<p>Two branches of a parallel circuit meet at a junction. A current of $\\quantity{' + v.I1 + '}{A}$ flows into the junction along one branch, and $\\quantity{' + v.I2 + '}{A}$ flows in along the other. A single wire carries current away from the junction. Calculate the current in that wire.</p><p><i>Give your answer in amps (A).</i></p>';
    },
    answer: function (v) { return v.I1 + v.I2; },
    unit: 'A',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>By Kirchhoff\u2019s 1st law, the current entering a junction equals the current leaving it:</p>' +
        '<p>$I_{3}=I_{1}+I_{2}=\\quantity{' + v.I1 + '}{A}+\\quantity{' + v.I2 + '}{A}=\\quantity{' + ans.toPrecision(3) + '}{A}$</p>';
    }
  },

  // ---- Conceptual: ideal meters ------------------------------------------
  {
    type: 'mcq',
    prompt: '<p>Which pair correctly describes the resistance of an <b>ideal</b> ammeter and an <b>ideal</b> voltmeter?</p>',
    options: [
      'Ammeter: zero resistance. Voltmeter: infinite resistance.',
      'Ammeter: infinite resistance. Voltmeter: zero resistance.',
      'Both have zero resistance.',
      'Both have infinite resistance.'
    ],
    correctIndex: 0,
    explanation: '<p>An ideal ammeter has zero resistance so it doesn\u2019t reduce the current it is measuring. An ideal voltmeter has (near) infinite resistance so no current is diverted through it, meaning it doesn\u2019t affect the circuit it is connected across.</p>'
  },

  // ---- Numeric: V = W / Q -------------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var Ws = [6, 12, 18, 24, 30, 48];
      var Qs = [2, 3, 4, 5, 6];
      var W = Ws[Math.floor(Math.random() * Ws.length)];
      var Q = Qs[Math.floor(Math.random() * Qs.length)];
      return { W: W, Q: Q };
    },
    prompt: function (v) {
      return '<p>A charge of $\\quantity{' + v.Q + '}{C}$ does $\\quantity{' + v.W + '}{J}$ of work as it passes through a resistor. Calculate the potential difference across the resistor.</p><p><i>Give your answer in volts (V).</i></p>';
    },
    answer: function (v) { return v.W / v.Q; },
    unit: 'V',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $V=\\dfrac{W}{Q}$:</p>' +
        '<p>$V=\\dfrac{\\quantity{' + v.W + '}{J}}{\\quantity{' + v.Q + '}{C}}=\\quantity{' + ans.toPrecision(3) + '}{V}$</p>';
    }
  },

  // ---- Numeric: emf = E / Q -----------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var Es = [24, 36, 48, 60, 72, 96];
      var Qs = [4, 6, 8, 10, 12];
      var E = Es[Math.floor(Math.random() * Es.length)];
      var Q = Qs[Math.floor(Math.random() * Qs.length)];
      return { E: E, Q: Q };
    },
    prompt: function (v) {
      return '<p>A cell supplies $\\quantity{' + v.E + '}{J}$ of energy to $\\quantity{' + v.Q + '}{C}$ of charge as it passes through the cell. Calculate the emf of the cell.</p><p><i>Give your answer in volts (V).</i></p>';
    },
    answer: function (v) { return v.E / v.Q; },
    unit: 'V',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $\\varepsilon=\\dfrac{E}{Q}$:</p>' +
        '<p>$\\varepsilon=\\dfrac{\\quantity{' + v.E + '}{J}}{\\quantity{' + v.Q + '}{C}}=\\quantity{' + ans.toPrecision(3) + '}{V}$</p>';
    }
  },

  // ---- Conceptual: Kirchhoff's 2nd law in a parallel circuit -------------
  {
    type: 'mcq',
    prompt: '<p>A cell with negligible internal resistance is connected to two parallel branches, each containing a single resistor. The two branches have different resistances. What can be said about the potential difference across each branch?</p>',
    options: [
      'The p.d. across each branch is equal to the emf of the cell',
      'The p.d. is greater across the branch with the lower resistance',
      'The p.d. is greater across the branch with the higher resistance, and is not equal to the emf',
      'The p.d. across each branch is zero, since the cell has no internal resistance'
    ],
    correctIndex: 0,
    explanation: '<p>By Kirchhoff\u2019s 2nd law, the p.d. around any closed loop equals the total emf in that loop. Since each branch forms its own loop with the cell, and there\u2019s no internal resistance to cause a voltage drop inside the cell, the p.d. across <i>each</i> branch equals the full emf — even though the branches have different resistances (and therefore different currents).</p>'
  }
];
