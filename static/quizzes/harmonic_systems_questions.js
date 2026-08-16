/* Question bank for harmonic_systems.html — loaded before quiz.js is invoked. */

var harmonicSystemsQuestions = [

  // ---- Numeric: pendulum period, T = 2*pi*sqrt(l/g) ------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ls = [0.3, 0.5, 0.8, 1.0, 1.5, 2.0];
      var l = ls[Math.floor(Math.random() * ls.length)];
      return { l: l };
    },
    prompt: function (v) {
      return '<p>A simple pendulum has a length of $\\quantity{' + v.l + '}{m}$. Calculate its period of oscillation.</p><p><i>Give your answer in seconds. Use $g=\\quantity{9.81}{m\\,s^{-2}}$.</i></p>';
    },
    answer: function (v) { return 2 * Math.PI * Math.sqrt(v.l / 9.81); },
    unit: 's',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $T=2\\pi\\sqrt{\\dfrac{l}{g}}$:</p>' +
        '<p>$T=2\\pi\\sqrt{\\dfrac{\\quantity{' + v.l + '}{m}}{\\quantity{9.81}{m\\,s^{-2}}}}=\\quantity{' + ans.toPrecision(3) + '}{s}$</p>';
    }
  },

  // ---- Numeric: find g from pendulum T and l --------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ls = [0.4, 0.6, 0.8, 1.0, 1.2];
      var l = ls[Math.floor(Math.random() * ls.length)];
      var T = +(2 * Math.PI * Math.sqrt(l / 9.81)).toFixed(2);
      return { l: l, T: T };
    },
    prompt: function (v) {
      return '<p>A pendulum of length $\\quantity{' + v.l + '}{m}$ is found to have a period of $\\quantity{' + v.T + '}{s}$. Calculate the value of $g$ this implies.</p><p><i>Give your answer in m s<sup>-2</sup>.</i></p>';
    },
    answer: function (v) { return (4 * Math.PI * Math.PI * v.l) / (v.T * v.T); },
    unit: 'm/s\u00B2',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Rearranging $T=2\\pi\\sqrt{\\dfrac{l}{g}}$, first square both sides: $T^{2}=4\\pi^{2}\\dfrac{l}{g}$</p>' +
        '<p>$g=\\dfrac{4\\pi^{2}l}{T^{2}}=\\dfrac{4\\pi^{2}\\times\\quantity{' + v.l + '}{m}}{\\left(\\quantity{' + v.T + '}{s}\\right)^{2}}=\\quantity{' + ans.toPrecision(3) + '}{m\\,s^{-2}}$</p>';
    }
  },

  // ---- Numeric: mass-spring period, T = 2*pi*sqrt(m/k) ----------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ms = [0.1, 0.2, 0.5, 1.0, 2.0];
      var ks = [10, 20, 40, 50, 100];
      var m = ms[Math.floor(Math.random() * ms.length)];
      var k = ks[Math.floor(Math.random() * ks.length)];
      return { m: m, k: k };
    },
    prompt: function (v) {
      return '<p>A mass of $\\quantity{' + v.m + '}{kg}$ is attached to a spring of spring constant $\\quantity{' + v.k + '}{N\\,m^{-1}}$. Calculate the period of oscillation.</p><p><i>Give your answer in seconds.</i></p>';
    },
    answer: function (v) { return 2 * Math.PI * Math.sqrt(v.m / v.k); },
    unit: 's',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $T=2\\pi\\sqrt{\\dfrac{m}{k}}$:</p>' +
        '<p>$T=2\\pi\\sqrt{\\dfrac{\\quantity{' + v.m + '}{kg}}{\\quantity{' + v.k + '}{N\\,m^{-1}}}}=\\quantity{' + ans.toPrecision(3) + '}{s}$</p>';
    }
  },

  // ---- Numeric: find k from mass-spring T and m ------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ms = [0.2, 0.4, 0.5, 0.8, 1.0];
      var ks = [15, 25, 30, 50];
      var m = ms[Math.floor(Math.random() * ms.length)];
      var k = ks[Math.floor(Math.random() * ks.length)];
      var T = +(2 * Math.PI * Math.sqrt(m / k)).toFixed(3);
      return { m: m, T: T };
    },
    prompt: function (v) {
      return '<p>A mass of $\\quantity{' + v.m + '}{kg}$ attached to a spring oscillates with a period of $\\quantity{' + v.T + '}{s}$. Calculate the spring constant.</p><p><i>Give your answer in N m<sup>-1</sup>.</i></p>';
    },
    answer: function (v) { return (4 * Math.PI * Math.PI * v.m) / (v.T * v.T); },
    unit: 'N/m',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Rearranging $T=2\\pi\\sqrt{\\dfrac{m}{k}}$, first square both sides: $T^{2}=4\\pi^{2}\\dfrac{m}{k}$</p>' +
        '<p>$k=\\dfrac{4\\pi^{2}m}{T^{2}}=\\dfrac{4\\pi^{2}\\times\\quantity{' + v.m + '}{kg}}{\\left(\\quantity{' + v.T + '}{s}\\right)^{2}}=\\quantity{' + ans.toPrecision(3) + '}{N\\,m^{-1}}$</p>';
    }
  },

  // ---- Conceptual: does pendulum period depend on mass? ---------------------
  {
    type: 'mcq',
    prompt: '<p>Two pendulums have identical lengths, but one has a much heavier bob than the other. How do their periods compare?</p>',
    options: [
      'They are the same \u2014 pendulum period doesn\u2019t depend on mass',
      'The heavier bob has a longer period',
      'The heavier bob has a shorter period',
      'It depends on the shape of the bob, not just its mass'
    ],
    correctIndex: 0,
    explanation: '<p>$T=2\\pi\\sqrt{\\frac{l}{g}}$ contains no mass term at all \u2014 pendulum period depends only on length (and $g$). This is genuinely counter-intuitive to many students, since a heavier bob feels like it should behave differently, but mass cancels out of the derivation entirely.</p>'
  },

  // ---- Conceptual: does spring period depend on mass? ------------------------
  {
    type: 'mcq',
    prompt: '<p>A mass-spring system is set up with a certain mass attached. If a larger mass is attached to the same spring instead, what happens to the period?</p>',
    options: [
      'The period increases',
      'The period decreases',
      'The period stays the same \u2014 mass doesn\u2019t affect a spring\u2019s period',
      'It depends on the amplitude of oscillation'
    ],
    correctIndex: 0,
    explanation: '<p>$T=2\\pi\\sqrt{\\frac{m}{k}}$ shows period increases with mass (for a fixed spring constant) \u2014 the opposite situation to a pendulum, where mass has no effect at all. Mixing these two systems up is one of the most common errors in this topic.</p>'
  },

  // ---- Conceptual: small angle approximation validity -------------------------
  {
    type: 'mcq',
    prompt: '<p>The equation $T=2\\pi\\sqrt{\\frac{l}{g}}$ for a simple pendulum relies on the small-angle approximation. Up to roughly what angle does this approximation hold?</p>',
    options: [
      'About 10\u00B0',
      'About 45\u00B0',
      'About 90\u00B0',
      'There is no angle limit \u2014 it works for any swing'
    ],
    correctIndex: 0,
    explanation: '<p>The small-angle approximation $\\sin\\theta\\approx\\theta$ (in radians) only holds well up to about $10\\degree$. Beyond that, a pendulum still oscillates, but the motion increasingly deviates from true SHM, and $T=2\\pi\\sqrt{\\frac{l}{g}}$ becomes less accurate.</p>'
  },

  // ---- Conceptual: measuring pendulum length correctly -------------------------
  {
    type: 'mcq',
    prompt: '<p>When measuring the length $l$ to use in $T=2\\pi\\sqrt{\\frac{l}{g}}$ for a pendulum with a large bob, where should the measurement be taken to?</p>',
    options: [
      'The centre of mass of the bob',
      'The top of the bob, where the string attaches',
      'The bottom of the bob',
      'It doesn\u2019t matter, since the bob\u2019s size is negligible either way'
    ],
    correctIndex: 0,
    explanation: '<p>$l$ should be measured from the pivot to the <b>centre of mass</b> of the bob. For a bob with any appreciable size, measuring only to the top (where the string attaches) systematically underestimates $l$, which is a common source of error in pendulum practicals.</p>'
  }
];
