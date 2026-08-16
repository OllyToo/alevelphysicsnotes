/* Question bank for circular_motion.html — loaded before quiz.js is invoked. */

var circularMotionQuestions = [

  // ---- Numeric: v = 2*pi*r / T ---------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var rs = [0.2, 0.5, 1.0, 1.5, 2.0];
      var Ts = [0.5, 1, 2, 4, 5];
      var r = rs[Math.floor(Math.random() * rs.length)];
      var T = Ts[Math.floor(Math.random() * Ts.length)];
      return { r: r, T: T };
    },
    prompt: function (v) {
      return '<p>An object moves in a circle of radius $\\quantity{' + v.r + '}{m}$, completing one revolution every $\\quantity{' + v.T + '}{s}$. Calculate its linear (tangential) speed.</p><p><i>Give your answer in m s<sup>-1</sup>.</i></p>';
    },
    answer: function (v) { return (2 * Math.PI * v.r) / v.T; },
    unit: 'm/s',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $v=\\dfrac{2\\pi r}{T}$:</p>' +
        '<p>$v=\\dfrac{2\\pi\\times\\quantity{' + v.r + '}{m}}{\\quantity{' + v.T + '}{s}}=\\quantity{' + ans.toPrecision(3) + '}{m\\,s^{-1}}$</p>';
    }
  },

  // ---- Numeric: omega = 2*pi*f -----------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var fs = [0.5, 1, 2, 5, 10, 50];
      var f = fs[Math.floor(Math.random() * fs.length)];
      return { f: f };
    },
    prompt: function (v) {
      return '<p>An object rotates with a frequency of $\\quantity{' + v.f + '}{Hz}$. Calculate its angular velocity.</p><p><i>Give your answer in rad s<sup>-1</sup>.</i></p>';
    },
    answer: function (v) { return 2 * Math.PI * v.f; },
    unit: 'rad/s',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $\\omega=2\\pi f$:</p>' +
        '<p>$\\omega=2\\pi\\times\\quantity{' + v.f + '}{Hz}=\\quantity{' + ans.toPrecision(3) + '}{rad\\,s^{-1}}$</p>';
    }
  },

  // ---- Numeric: v = omega * r --------------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var omegas = [1, 2, 4, 5, 10, 20];
      var rs = [0.1, 0.25, 0.5, 1.0, 2.0];
      var omega = omegas[Math.floor(Math.random() * omegas.length)];
      var r = rs[Math.floor(Math.random() * rs.length)];
      return { omega: omega, r: r };
    },
    prompt: function (v) {
      return '<p>A point on a rotating disc is at a radius of $\\quantity{' + v.r + '}{m}$ from the centre. The disc has an angular velocity of $\\quantity{' + v.omega + '}{rad\\,s^{-1}}$. Calculate the linear speed of the point.</p><p><i>Give your answer in m s<sup>-1</sup>.</i></p>';
    },
    answer: function (v) { return v.omega * v.r; },
    unit: 'm/s',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Using $v=\\omega r$:</p>' +
        '<p>$v=\\quantity{' + v.omega + '}{rad\\,s^{-1}}\\times\\quantity{' + v.r + '}{m}=\\quantity{' + ans.toPrecision(3) + '}{m\\,s^{-1}}$</p>';
    }
  },

  // ---- Numeric: centripetal acceleration, a = v^2/r ---------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var vs = [2, 4, 5, 8, 10];
      var rs = [0.5, 1, 2, 4, 5];
      var v = vs[Math.floor(Math.random() * vs.length)];
      var r = rs[Math.floor(Math.random() * rs.length)];
      return { v: v, r: r };
    },
    prompt: function (v) {
      return '<p>An object moves in a circle of radius $\\quantity{' + v.r + '}{m}$ with a constant speed of $\\quantity{' + v.v + '}{m\\,s^{-1}}$. Calculate its centripetal acceleration.</p><p><i>Give your answer in m s<sup>-2</sup>.</i></p>';
    },
    answer: function (v) { return (v.v * v.v) / v.r; },
    unit: 'm/s\u00B2',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $a=\\dfrac{v^{2}}{r}$:</p>' +
        '<p>$a=\\dfrac{\\left(\\quantity{' + v.v + '}{m\\,s^{-1}}\\right)^{2}}{\\quantity{' + v.r + '}{m}}=\\quantity{' + ans.toPrecision(3) + '}{m\\,s^{-2}}$</p>';
    }
  },

  // ---- Numeric: centripetal force, F = m*omega^2*r -----------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ms = [0.1, 0.2, 0.5, 1.0, 2.0];
      var omegas = [2, 3, 4, 5, 6];
      var rs = [0.2, 0.5, 1.0, 1.5];
      var m = ms[Math.floor(Math.random() * ms.length)];
      var omega = omegas[Math.floor(Math.random() * omegas.length)];
      var r = rs[Math.floor(Math.random() * rs.length)];
      return { m: m, omega: omega, r: r };
    },
    prompt: function (v) {
      return '<p>An object of mass $\\quantity{' + v.m + '}{kg}$ moves in a circle of radius $\\quantity{' + v.r + '}{m}$ with an angular velocity of $\\quantity{' + v.omega + '}{rad\\,s^{-1}}$. Calculate the centripetal force acting on it.</p><p><i>Give your answer in newtons (N).</i></p>';
    },
    answer: function (v) { return v.m * v.omega * v.omega * v.r; },
    unit: 'N',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $F=m\\omega^{2}r$:</p>' +
        '<p>$F=\\quantity{' + v.m + '}{kg}\\times\\left(\\quantity{' + v.omega + '}{rad\\,s^{-1}}\\right)^{2}\\times\\quantity{' + v.r + '}{m}=\\quantity{' + ans.toPrecision(3) + '}{N}$</p>';
    }
  },

  // ---- Conceptual: period vs frequency ------------------------------------------
  {
    type: 'mcq',
    prompt: '<p>A fairground ride completes one revolution every $\\quantity{4}{s}$. What is its frequency?</p>',
    options: [
      '0.25 Hz',
      '4 Hz',
      '2\u03C0/4 Hz',
      '1.5 Hz'
    ],
    correctIndex: 0,
    explanation: '<p>Frequency is the reciprocal of period: $f=\\dfrac{1}{T}=\\dfrac{1}{\\quantity{4}{s}}=\\quantity{0.25}{Hz}$. A common mistake is confusing which of $T$ and $f$ a question is actually describing, or forgetting to take the reciprocal at all.</p>'
  },

  // ---- Conceptual: radians vs degrees ---------------------------------------------
  {
    type: 'mcq',
    prompt: '<p>Which statement about angular velocity, $\\omega$, is correct?</p>',
    options: [
      'It is always measured in radians per second, not degrees per second',
      'It can be measured in either radians or degrees per second, as long as you\u2019re consistent',
      'It is measured in degrees per second by convention in A-level physics',
      'The units don\u2019t matter as long as the final answer is in the right units'
    ],
    correctIndex: 0,
    explanation: '<p>Angular velocity in A-level physics is always in $\\units{rad\\,s^{-1}}$. Using degrees anywhere in a circular motion calculation (or having your calculator in degree mode when it should be in radian mode) introduces an error, since the equations $v=\\omega r$, $a=\\omega^2 r$, etc. are only valid when $\\omega$ is in radians.</p>'
  },

  // ---- Conceptual: what provides centripetal force -----------------------------
  {
    type: 'mcq',
    prompt: '<p>A ball on a string is being swung in a horizontal circle. Which statement best describes the centripetal force in this situation?</p>',
    options: [
      'It is provided by the tension in the string \u2014 there is no separate "centripetal force" to add to the diagram',
      'It is a distinct force that acts in addition to the tension in the string',
      'It is provided equally by gravity and tension, added together as separate forces',
      'It only exists if the ball is moving fast enough'
    ],
    correctIndex: 0,
    explanation: '<p>Centripetal force isn\u2019t a new, separate force \u2014 it\u2019s the name for whichever existing force (or resultant of forces) points towards the centre of the circle and keeps the object moving on its circular path. Here, that\u2019s the tension in the string. Drawing an extra "centripetal force" arrow alongside the real forces on a free-body diagram is a common error.</p>'
  }
];
