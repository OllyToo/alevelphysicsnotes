/* Question bank for damping.html — loaded before quiz.js is invoked. */

var dampingQuestions = [

  // ---- Numeric: Ek = 1/2 m v^2 ----------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ms = [0.1, 0.2, 0.5, 1.0, 2.0];
      var vs = [0.5, 1, 1.5, 2, 3];
      var m = ms[Math.floor(Math.random() * ms.length)];
      var v = vs[Math.floor(Math.random() * vs.length)];
      return { m: m, v: v };
    },
    prompt: function (v) {
      return '<p>An oscillator of mass $\\quantity{' + v.m + '}{kg}$ passes through its equilibrium position with a speed of $\\quantity{' + v.v + '}{m\\,s^{-1}}$. Calculate its kinetic energy at that point.</p><p><i>Give your answer in joules (J).</i></p>';
    },
    answer: function (v) { return 0.5 * v.m * v.v * v.v; },
    unit: 'J',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $E_k=\\frac{1}{2}mv^{2}$:</p>' +
        '<p>$E_k=\\frac{1}{2}\\times\\quantity{' + v.m + '}{kg}\\times\\left(\\quantity{' + v.v + '}{m\\,s^{-1}}\\right)^{2}=\\quantity{' + ans.toPrecision(3) + '}{J}$</p>';
    }
  },

  // ---- Numeric: Ep = 1/2 k e^2 -----------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ks = [10, 20, 40, 50, 100];
      var es = [0.02, 0.05, 0.1, 0.15];
      var k = ks[Math.floor(Math.random() * ks.length)];
      var e = es[Math.floor(Math.random() * es.length)];
      return { k: k, e: e };
    },
    prompt: function (v) {
      return '<p>A spring of spring constant $\\quantity{' + v.k + '}{N\\,m^{-1}}$ is extended by $\\quantity{' + v.e + '}{m}$. Calculate the potential energy stored.</p><p><i>Give your answer in joules (J).</i></p>';
    },
    answer: function (v) { return 0.5 * v.k * v.e * v.e; },
    unit: 'J',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $E_p=\\frac{1}{2}ke^{2}$:</p>' +
        '<p>$E_p=\\frac{1}{2}\\times\\quantity{' + v.k + '}{N\\,m^{-1}}\\times\\left(\\quantity{' + v.e + '}{m}\\right)^{2}=\\quantity{' + ans.toPrecision(3) + '}{J}$</p>';
    }
  },

  // ---- Numeric: Ek = 1/2 k (A^2 - x^2) ----------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ks = [20, 40, 50, 80];
      var As = [0.1, 0.15, 0.2, 0.25];
      var k = ks[Math.floor(Math.random() * ks.length)];
      var A = As[Math.floor(Math.random() * As.length)];
      var x = +(A * [0.3, 0.4, 0.5, 0.6][Math.floor(Math.random() * 4)]).toFixed(3);
      return { k: k, A: A, x: x };
    },
    prompt: function (v) {
      return '<p>An oscillator has amplitude $\\quantity{' + v.A + '}{m}$ and spring constant $\\quantity{' + v.k + '}{N\\,m^{-1}}$. Calculate its kinetic energy when its displacement is $\\quantity{' + v.x + '}{m}$.</p><p><i>Give your answer in joules (J).</i></p>';
    },
    answer: function (v) { return 0.5 * v.k * (v.A * v.A - v.x * v.x); },
    unit: 'J',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $E_k=\\frac{1}{2}k\\left(A^{2}-x^{2}\\right)$:</p>' +
        '<p>$E_k=\\frac{1}{2}\\times\\quantity{' + v.k + '}{N\\,m^{-1}}\\times\\left(\\left(\\quantity{' + v.A + '}{m}\\right)^{2}-\\left(\\quantity{' + v.x + '}{m}\\right)^{2}\\right)=\\quantity{' + ans.toPrecision(3) + '}{J}$</p>';
    }
  },

  // ---- Numeric: exponential decay, A = A0 * e^(-lambda t) ---------------------
  {
    type: 'numeric',
    generateVars: function () {
      var A0s = [0.1, 0.2, 0.5, 1.0];
      var lambdas = [0.1, 0.2, 0.3, 0.5];
      var ts = [2, 4, 5, 8];
      var A0 = A0s[Math.floor(Math.random() * A0s.length)];
      var lambda = lambdas[Math.floor(Math.random() * lambdas.length)];
      var t = ts[Math.floor(Math.random() * ts.length)];
      return { A0: A0, lambda: lambda, t: t };
    },
    prompt: function (v) {
      return '<p>A damped oscillator has an initial amplitude of $\\quantity{' + v.A0 + '}{m}$ and a decay constant of $\\quantity{' + v.lambda + '}{s^{-1}}$. Calculate its amplitude after $\\quantity{' + v.t + '}{s}$.</p><p><i>Give your answer in metres (m).</i></p>';
    },
    answer: function (v) { return v.A0 * Math.exp(-v.lambda * v.t); },
    unit: 'm',
    tolerancePercent: 3,
    explanation: function (v, ans) {
      return '<p>Using $A=A_{0}e^{-\\lambda t}$:</p>' +
        '<p>$A=\\quantity{' + v.A0 + '}{m}\\times e^{-\\quantity{' + v.lambda + '}{s^{-1}}\\times\\quantity{' + v.t + '}{s}}=\\quantity{' + ans.toPrecision(3) + '}{m}$</p>';
    }
  },

  // ---- Numeric: find lambda from A0, A, t ------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var A0s = [0.2, 0.5, 1.0];
      var lambdas = [0.15, 0.2, 0.25, 0.3];
      var ts = [3, 5, 6];
      var A0 = A0s[Math.floor(Math.random() * A0s.length)];
      var lambda = lambdas[Math.floor(Math.random() * lambdas.length)];
      var t = ts[Math.floor(Math.random() * ts.length)];
      var A = +(A0 * Math.exp(-lambda * t)).toFixed(4);
      return { A0: A0, A: A, t: t };
    },
    prompt: function (v) {
      return '<p>A damped oscillator with an initial amplitude of $\\quantity{' + v.A0 + '}{m}$ has decayed to $\\quantity{' + v.A + '}{m}$ after $\\quantity{' + v.t + '}{s}$. Calculate the decay constant.</p><p><i>Give your answer in s<sup>-1</sup>.</i></p>';
    },
    answer: function (v) { return -Math.log(v.A / v.A0) / v.t; },
    unit: '1/s',
    tolerancePercent: 3,
    explanation: function (v, ans) {
      return '<p>Taking natural logs of $A=A_{0}e^{-\\lambda t}$: $\\ln A=\\ln A_{0}-\\lambda t$</p>' +
        '<p>Rearranging: $\\lambda=-\\dfrac{\\ln\\left(A/A_{0}\\right)}{t}=-\\dfrac{\\ln\\left(\\quantity{' + v.A + '}{m}/\\quantity{' + v.A0 + '}{m}\\right)}{\\quantity{' + v.t + '}{s}}=\\quantity{' + ans.toPrecision(3) + '}{s^{-1}}$</p>';
    }
  },

  // ---- Conceptual: where is Ek max / Ep max ------------------------------------
  {
    type: 'mcq',
    prompt: '<p>At which point in an oscillator\u2019s cycle is its kinetic energy at a maximum?</p>',
    options: [
      'At the equilibrium position (zero displacement)',
      'At maximum displacement',
      'Kinetic energy is constant throughout the cycle',
      'Exactly halfway between equilibrium and maximum displacement'
    ],
    correctIndex: 0,
    explanation: '<p>Kinetic energy is maximum at the equilibrium position, where speed is greatest, and zero at maximum displacement, where the oscillator is momentarily at rest. Potential energy behaves the opposite way &mdash; maximum at the extremes, zero at equilibrium.</p>'
  },

  // ---- Conceptual: fastest return to equilibrium ------------------------------
  {
    type: 'mcq',
    prompt: '<p>Which type of damping returns an oscillator to equilibrium in the shortest possible time, without overshooting?</p>',
    options: [
      'Critical damping',
      'Heavy damping',
      'Light damping',
      'No damping (free oscillation)'
    ],
    correctIndex: 0,
    explanation: '<p><b>Critical</b> damping gives the fastest return to equilibrium without overshooting &mdash; it\u2019s a common mistake to assume "heavier" damping is always faster, but heavy damping actually returns to equilibrium more slowly than critical damping. This is why systems like car suspensions and measuring instruments are designed to be critically damped, not heavily damped.</p>'
  },

  // ---- Conceptual: correct linearisation of exponential decay -----------------
  {
    type: 'mcq',
    prompt: '<p>To find the decay constant $\\lambda$ from the equation $A=A_0 e^{-\\lambda t}$ experimentally, which graph should you plot to get a straight line?</p>',
    options: [
      '$\\ln A$ against $t$',
      '$\\ln A$ against $\\ln t$',
      '$A$ against $t$',
      '$A$ against $\\ln t$'
    ],
    correctIndex: 0,
    explanation: '<p>Taking natural logs of $A=A_0e^{-\\lambda t}$ gives $\\ln A=\\ln A_0-\\lambda t$, which is linear in $t$ (not $\\ln t$). Plotting $\\ln A$ against $t$ gives a straight line with gradient $-\\lambda$ and y-intercept $\\ln A_0$. A $\\ln A$ vs $\\ln t$ plot would be appropriate for a power-law relationship, not an exponential one.</p>'
  }
];
