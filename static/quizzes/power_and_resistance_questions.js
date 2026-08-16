/* Question bank for power_and_resistance.html — loaded before quiz.js is invoked. */

var powerAndResistanceQuestions = [

  // ---- Numeric: P = IV -----------------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var Vs = [6, 9, 12, 24, 230];
      var Is = [0.5, 1, 2, 3, 5];
      var V = Vs[Math.floor(Math.random() * Vs.length)];
      var I = Is[Math.floor(Math.random() * Is.length)];
      return { V: V, I: I };
    },
    prompt: function (v) {
      return '<p>An appliance operates at $\\quantity{' + v.V + '}{V}$ and draws a current of $\\quantity{' + v.I + '}{A}$. Calculate the power delivered to it.</p><p><i>Give your answer in watts (W).</i></p>';
    },
    answer: function (v) { return v.V * v.I; },
    unit: 'W',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Using $P=IV$:</p>' +
        '<p>$P=\\quantity{' + v.I + '}{A}\\times\\quantity{' + v.V + '}{V}=\\quantity{' + ans.toPrecision(3) + '}{W}$</p>';
    }
  },

  // ---- Numeric: E = Pt with unit conversion (kJ and minutes) --------------
  {
    type: 'numeric',
    generateVars: function () {
      var Ps = [60, 100, 130, 150, 200];
      var E_kJs = [60, 90, 120, 170, 240];
      var P = Ps[Math.floor(Math.random() * Ps.length)];
      var E_kJ = E_kJs[Math.floor(Math.random() * E_kJs.length)];
      return { P: P, E_kJ: E_kJ };
    },
    prompt: function (v) {
      return '<p>A heater with a power rating of $\\quantity{' + v.P + '}{W}$ needs to deliver $\\quantity{' + v.E_kJ + '}{kJ}$ of energy. Calculate the minimum time this will take.</p><p><i>Give your answer in minutes, to 3 s.f. Watch your unit conversions!</i></p>';
    },
    answer: function (v) { return (v.E_kJ * 1000) / v.P / 60; },
    unit: 'minutes',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var E_J = v.E_kJ * 1000;
      var t_s = E_J / v.P;
      return '<p>Convert energy to joules: $\\quantity{' + v.E_kJ + '}{kJ}=\\quantity{' + E_J + '}{J}$</p>' +
        '<p>$t=\\dfrac{E}{P}=\\dfrac{\\quantity{' + E_J + '}{J}}{\\quantity{' + v.P + '}{W}}=\\quantity{' + t_s.toFixed(0) + '}{s}$</p>' +
        '<p>Convert to minutes: $t=\\quantity{' + ans.toPrecision(3) + '}{minutes}$</p>';
    }
  },

  // ---- Numeric: P = I^2 R ----------------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var Is = [0.5, 1, 1.5, 2, 3];
      var Rs = [2, 4, 5, 10, 20];
      var I = Is[Math.floor(Math.random() * Is.length)];
      var R = Rs[Math.floor(Math.random() * Rs.length)];
      return { I: I, R: R };
    },
    prompt: function (v) {
      return '<p>A current of $\\quantity{' + v.I + '}{A}$ flows through a $\\quantity{' + v.R + '}{\\Omega}$ resistor. Calculate the power dissipated.</p><p><i>Give your answer in watts (W).</i></p>';
    },
    answer: function (v) { return v.I * v.I * v.R; },
    unit: 'W',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Using $P=I^{2}R$:</p>' +
        '<p>$P=\\left(\\quantity{' + v.I + '}{A}\\right)^{2}\\times\\quantity{' + v.R + '}{\\Omega}=\\quantity{' + ans.toPrecision(3) + '}{W}$</p>';
    }
  },

  // ---- Numeric: P = V^2 / R ---------------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var Vs = [3, 6, 9, 12, 24];
      var Rs = [2, 3, 4, 6, 10];
      var V = Vs[Math.floor(Math.random() * Vs.length)];
      var R = Rs[Math.floor(Math.random() * Rs.length)];
      return { V: V, R: R };
    },
    prompt: function (v) {
      return '<p>A resistor of $\\quantity{' + v.R + '}{\\Omega}$ has a potential difference of $\\quantity{' + v.V + '}{V}$ across it. Calculate the power dissipated.</p><p><i>Give your answer in watts (W).</i></p>';
    },
    answer: function (v) { return (v.V * v.V) / v.R; },
    unit: 'W',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Using $P=\\dfrac{V^{2}}{R}$:</p>' +
        '<p>$P=\\dfrac{\\left(\\quantity{' + v.V + '}{V}\\right)^{2}}{\\quantity{' + v.R + '}{\\Omega}}=\\quantity{' + ans.toPrecision(3) + '}{W}$</p>';
    }
  },

  // ---- Conceptual: cells in series -------------------------------------------
  {
    type: 'mcq',
    prompt: '<p>Three identical $\\quantity{1.5}{V}$ cells are connected in series. What is the total emf, and how does the current compare to a circuit with just one cell (same external resistance)?</p>',
    options: [
      'emf = 4.5 V; current is greater than with one cell',
      'emf = 1.5 V; current is the same as with one cell',
      'emf = 4.5 V; current is the same as with one cell',
      'emf = 1.5 V; current is three times greater'
    ],
    correctIndex: 0,
    explanation: '<p>In series, emfs add: $3\\times\\quantity{1.5}{V}=\\quantity{4.5}{V}$. Since the total emf driving the circuit has increased (for the same external resistance), the current will also increase compared to using a single cell.</p>'
  },

  // ---- Conceptual: cells in parallel -----------------------------------------
  {
    type: 'mcq',
    prompt: '<p>Three identical $\\quantity{1.5}{V}$ cells are connected in parallel. What is the emf of the combination, and what advantage does this arrangement have over a single cell?</p>',
    options: [
      'emf = 1.5 V; the combination can supply current for longer / at a higher current before running down',
      'emf = 4.5 V; the combination can supply three times the current',
      'emf = 1.5 V; the combination has three times the emf',
      'emf = 0.5 V; the cells share the voltage between them'
    ],
    correctIndex: 0,
    explanation: '<p>For identical cells in parallel, the emf stays the same as a single cell ($\\quantity{1.5}{V}$) &mdash; it doesn\u2019t add up like in series. The advantage is capacity: the combined cells can deliver current for longer, or supply a higher total current, since each cell only needs to provide a fraction of the total current drawn.</p>'
  },

  // ---- Numeric: conservation of energy — find missing branch's power -------
  {
    type: 'numeric',
    generateVars: function () {
      var totalPs = [10, 12, 15, 18, 20];
      var totalP = totalPs[Math.floor(Math.random() * totalPs.length)];
      var knownFraction = [0.3, 0.4, 0.45, 0.5, 0.55][Math.floor(Math.random() * 5)];
      var known1 = +(totalP * knownFraction).toFixed(2);
      var knownFraction2 = [0.15, 0.2, 0.25][Math.floor(Math.random() * 3)];
      var known2 = +(totalP * knownFraction2).toFixed(2);
      return { totalP: totalP, known1: known1, known2: known2 };
    },
    prompt: function (v) {
      return '<p>A cell delivers a total power of $\\quantity{' + v.totalP + '}{W}$ to a circuit containing three components. Two of the components dissipate $\\quantity{' + v.known1 + '}{W}$ and $\\quantity{' + v.known2 + '}{W}$ respectively. Calculate the power dissipated by the third component.</p><p><i>Give your answer in watts (W).</i></p>';
    },
    answer: function (v) { return v.totalP - v.known1 - v.known2; },
    unit: 'W',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>By conservation of energy, the power delivered by the cell equals the total power dissipated by all components:</p>' +
        '<p>$P_{3}=\\quantity{' + v.totalP + '}{W}-\\quantity{' + v.known1 + '}{W}-\\quantity{' + v.known2 + '}{W}=\\quantity{' + ans.toPrecision(3) + '}{W}$</p>';
    }
  },

  // ---- Conceptual: choosing the right power equation --------------------------
  {
    type: 'mcq',
    prompt: '<p>Four different resistors are each tested in turn, connected directly across the same battery (same emf every time, negligible internal resistance). Which equation is most direct for comparing the power dissipated by each?</p>',
    options: [
      '$P=\\dfrac{V^{2}}{R}$, since V is fixed and R is known for each',
      '$P=I^{2}R$, since I is fixed for each test',
      'Both equations require the same amount of extra working',
      'Neither equation can be used without first finding the current'
    ],
    correctIndex: 0,
    explanation: '<p>Since the p.d. (the emf) is the same in every test, $P=\\frac{V^{2}}{R}$ lets you compare the four resistors directly from $V$ and $R$ alone. Using $P=I^{2}R$ would require calculating a different current for each resistor first &mdash; an unnecessary extra step when V is what\u2019s actually fixed.</p>'
  }
];
