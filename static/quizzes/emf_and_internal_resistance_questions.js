/* Question bank for emf_and_internal_resistance.html — loaded before quiz.js is invoked. */

var emfAndInternalResistanceQuestions = [

  // ---- Numeric: epsilon = I(R + r), solve for I ---------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var emfs = [1.5, 3.0, 4.5, 6.0, 9.0, 12.0];
      var Rs = [2, 3, 4, 5, 8];
      var rs = [0.2, 0.4, 0.5, 0.8, 1.0];
      var emf = emfs[Math.floor(Math.random() * emfs.length)];
      var R = Rs[Math.floor(Math.random() * Rs.length)];
      var r = rs[Math.floor(Math.random() * rs.length)];
      return { emf: emf, R: R, r: r };
    },
    prompt: function (v) {
      return '<p>A cell of emf $\\quantity{' + v.emf + '}{V}$ and internal resistance $\\quantity{' + v.r + '}{\\Omega}$ is connected to an external resistor of $\\quantity{' + v.R + '}{\\Omega}$. Calculate the current flowing in the circuit.</p><p><i>Give your answer in amps (A).</i></p>';
    },
    answer: function (v) { return v.emf / (v.R + v.r); },
    unit: 'A',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $\\varepsilon=I(R+r)$, rearranged for $I$:</p>' +
        '<p>$I=\\dfrac{\\varepsilon}{R+r}=\\dfrac{\\quantity{' + v.emf + '}{V}}{\\quantity{' + v.R + '}{\\Omega}+\\quantity{' + v.r + '}{\\Omega}}=\\quantity{' + ans.toPrecision(3) + '}{A}$</p>';
    }
  },

  // ---- Numeric: find internal resistance given emf, terminal V, and I -----
  {
    type: 'numeric',
    generateVars: function () {
      var emfs = [1.5, 3.0, 6.0, 9.0, 12.0];
      var Is = [0.5, 1, 1.5, 2, 2.5];
      var lostFractions = [0.05, 0.08, 0.1, 0.12, 0.15];
      var emf = emfs[Math.floor(Math.random() * emfs.length)];
      var I = Is[Math.floor(Math.random() * Is.length)];
      var lostVolts = +(emf * lostFractions[Math.floor(Math.random() * lostFractions.length)]).toFixed(2);
      var V = +(emf - lostVolts).toFixed(2);
      return { emf: emf, I: I, V: V };
    },
    prompt: function (v) {
      return '<p>A cell has an emf of $\\quantity{' + v.emf + '}{V}$. When a current of $\\quantity{' + v.I + '}{A}$ flows, the terminal p.d. is $\\quantity{' + v.V + '}{V}$. Calculate the internal resistance of the cell.</p><p><i>Give your answer in ohms (&Omega;).</i></p>';
    },
    answer: function (v) { return (v.emf - v.V) / v.I; },
    unit: '\u03A9',
    tolerancePercent: 3,
    explanation: function (v, ans) {
      var lost = (v.emf - v.V).toPrecision(3);
      return '<p>Lost volts $=\\varepsilon-V=\\quantity{' + v.emf + '}{V}-\\quantity{' + v.V + '}{V}=\\quantity{' + lost + '}{V}$</p>' +
        '<p>$r=\\dfrac{\\text{lost volts}}{I}=\\dfrac{\\quantity{' + lost + '}{V}}{\\quantity{' + v.I + '}{A}}=\\quantity{' + ans.toPrecision(3) + '}{\\Omega}$</p>';
    }
  },

  // ---- Numeric: find terminal pd given emf, I, and r -----------------------
  {
    type: 'numeric',
    generateVars: function () {
      var emfs = [3.0, 4.5, 6.0, 9.0, 12.0];
      var Is = [0.5, 1, 1.5, 2, 3];
      var rs = [0.2, 0.3, 0.5, 0.8, 1.0];
      var emf = emfs[Math.floor(Math.random() * emfs.length)];
      var I = Is[Math.floor(Math.random() * Is.length)];
      var r = rs[Math.floor(Math.random() * rs.length)];
      return { emf: emf, I: I, r: r };
    },
    prompt: function (v) {
      return '<p>A cell of emf $\\quantity{' + v.emf + '}{V}$ and internal resistance $\\quantity{' + v.r + '}{\\Omega}$ delivers a current of $\\quantity{' + v.I + '}{A}$. Calculate the terminal p.d. of the cell.</p><p><i>Give your answer in volts (V).</i></p>';
    },
    answer: function (v) { return v.emf - v.I * v.r; },
    unit: 'V',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var lost = (v.I * v.r).toPrecision(3);
      return '<p>Lost volts $=Ir=\\quantity{' + v.I + '}{A}\\times\\quantity{' + v.r + '}{\\Omega}=\\quantity{' + lost + '}{V}$</p>' +
        '<p>Terminal p.d. $=\\varepsilon-Ir=\\quantity{' + v.emf + '}{V}-\\quantity{' + lost + '}{V}=\\quantity{' + ans.toPrecision(3) + '}{V}$</p>';
    }
  },

  // ---- Conceptual: when does terminal pd equal emf -------------------------
  {
    type: 'mcq',
    prompt: '<p>Under what condition does the terminal p.d. of a cell equal its emf?</p>',
    options: [
      'When no current is flowing (open circuit, or measured with an ideal voltmeter)',
      'When the external resistance is very small',
      'Always, regardless of current',
      'Only when the internal resistance is exactly 1 &Omega;'
    ],
    correctIndex: 0,
    explanation: '<p>Terminal p.d. $=\\varepsilon-Ir$. When $I=0$ (open circuit, or an ideal high-resistance voltmeter that draws negligible current), there are no lost volts, so terminal p.d. equals emf exactly. As soon as any current flows, some emf is used up across the internal resistance and the two are no longer equal.</p>'
  },

  // ---- Numeric: full worked-example style — find r from open/closed readings
  {
    type: 'numeric',
    generateVars: function () {
      var emfs = [1.5, 3.0, 4.5, 6.0];
      var Rs = [5, 10, 15, 20];
      var Is = [0.1, 0.15, 0.2, 0.25, 0.3];
      var emf = emfs[Math.floor(Math.random() * emfs.length)];
      var R = Rs[Math.floor(Math.random() * Rs.length)];
      var I = Is[Math.floor(Math.random() * Is.length)];
      var V = +(I * R).toFixed(3);
      // ensure terminal pd is sensibly less than emf
      if (V >= emf) { V = +(emf * 0.85).toFixed(2); I = +(V / R).toFixed(3); }
      return { emf: emf, R: R, I: I, V: V };
    },
    prompt: function (v) {
      return '<p>A battery is connected in series with a $\\quantity{' + v.R + '}{\\Omega}$ resistor and a switch. With the switch open, a voltmeter across the battery reads $\\quantity{' + v.emf + '}{V}$. With the switch closed, a current of $\\quantity{' + v.I + '}{A}$ flows. Calculate the internal resistance of the battery.</p><p><i>Give your answer in ohms (&Omega;).</i></p>';
    },
    answer: function (v) { return (v.emf - v.I * v.R) / v.I; },
    unit: '\u03A9',
    tolerancePercent: 3,
    explanation: function (v, ans) {
      var V = (v.I * v.R).toPrecision(3);
      var lost = (v.emf - v.I * v.R).toPrecision(3);
      return '<p>The open-circuit reading is the emf: $\\varepsilon=\\quantity{' + v.emf + '}{V}$.</p>' +
        '<p>Terminal p.d. when closed: $V=IR=\\quantity{' + v.I + '}{A}\\times\\quantity{' + v.R + '}{\\Omega}=\\quantity{' + V + '}{V}$</p>' +
        '<p>Lost volts: $\\quantity{' + v.emf + '}{V}-\\quantity{' + V + '}{V}=\\quantity{' + lost + '}{V}$</p>' +
        '<p>$r=\\dfrac{\\text{lost volts}}{I}=\\quantity{' + ans.toPrecision(3) + '}{\\Omega}$</p>';
    }
  },

  // ---- Conceptual: V-I graph interpretation --------------------------------
  {
    type: 'mcq',
    prompt: '<p>A graph of terminal p.d. (y-axis) against current (x-axis) is plotted for a cell. What do the y-intercept and the gradient represent?</p>',
    options: [
      'y-intercept = emf; magnitude of gradient = internal resistance',
      'y-intercept = internal resistance; gradient = emf',
      'y-intercept = emf; gradient = emf divided by internal resistance',
      'The x-intercept gives the emf directly'
    ],
    correctIndex: 0,
    explanation: '<p>From $V=\\varepsilon-Ir$: the y-intercept (where $I=0$) gives the emf $\\varepsilon$, and the gradient of the line is $-r$ &mdash; negative, since terminal p.d. falls as current increases. The internal resistance is the <b>magnitude</b> of that gradient.</p>'
  },

  // ---- Conceptual: maximum power theorem -----------------------------------
  {
    type: 'mcq',
    prompt: '<p>For a cell with significant internal resistance connected to a variable external resistor, at what value of external resistance is the power dissipated in the external resistor at its maximum?</p>',
    options: [
      'When the external resistance equals the internal resistance',
      'When the external resistance is as small as possible',
      'When the external resistance is as large as possible',
      'Power dissipated in the external resistor doesn\u2019t depend on its own resistance'
    ],
    correctIndex: 0,
    explanation: '<p>This is the maximum power theorem: power delivered to the external (load) resistance is greatest when it equals the internal resistance of the source. Below this value the p.d. across the load is too small; above it the current is too small &mdash; the peak occurs exactly when load = internal resistance.</p>'
  },

  // ---- Conceptual: negligible internal resistance case ---------------------
  {
    type: 'mcq',
    prompt: '<p>The same experiment (varying an external resistor Y and measuring power dissipated in it) is repeated with a battery of negligible internal resistance. How does the power dissipated in Y now vary as Y is increased from a small to a large value?</p>',
    options: [
      'It decreases continuously across the whole range, with no peak',
      'It shows the same peaked shape, just shifted to a higher value',
      'It stays constant regardless of Y',
      'It increases continuously across the whole range'
    ],
    correctIndex: 0,
    explanation: '<p>With negligible internal resistance, the p.d. across Y is essentially constant and equal to the emf for any value of Y. Since $P=\\frac{V^{2}}{R}$ with V now fixed, power decreases continuously as R increases &mdash; there is no peak at all. This is a different <i>shape</i> of graph, not just a shifted version of the peaked curve seen with significant internal resistance.</p>'
  }
];
