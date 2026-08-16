/* Question bank for shm.html — loaded before quiz.js is invoked. */

var shmQuestions = [

  // ---- Numeric: x = A cos(omega t) -----------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var As = [0.05, 0.1, 0.2, 0.5];
      var omegas = [1, 2, 4, 5];
      var ts = [0.1, 0.2, 0.3, 0.5];
      var A = As[Math.floor(Math.random() * As.length)];
      var omega = omegas[Math.floor(Math.random() * omegas.length)];
      var t = ts[Math.floor(Math.random() * ts.length)];
      return { A: A, omega: omega, t: t };
    },
    prompt: function (v) {
      return '<p>An oscillator has an amplitude of $\\quantity{' + v.A + '}{m}$ and an angular frequency of $\\quantity{' + v.omega + '}{rad\\,s^{-1}}$. At $t=0$ it is at maximum positive displacement. Calculate its displacement at $t=\\quantity{' + v.t + '}{s}$.</p><p><i>Give your answer in metres, and make sure your calculator is in radians mode.</i></p>';
    },
    answer: function (v) { return v.A * Math.cos(v.omega * v.t); },
    unit: 'm',
    tolerancePercent: 3,
    explanation: function (v, ans) {
      return '<p>Using $x=A\\cos(\\omega t)$:</p>' +
        '<p>$x=\\quantity{' + v.A + '}{m}\\times\\cos\\left(\\quantity{' + v.omega + '}{rad\\,s^{-1}}\\times\\quantity{' + v.t + '}{s}\\right)=\\quantity{' + ans.toPrecision(3) + '}{m}$</p>';
    }
  },

  // ---- Numeric: v = omega * sqrt(A^2 - x^2) (magnitude) -------------------
  {
    type: 'numeric',
    generateVars: function () {
      var As = [0.1, 0.2, 0.3, 0.5];
      var omegas = [2, 3, 4, 5];
      var fracs = [0.2, 0.4, 0.5, 0.6];
      var A = As[Math.floor(Math.random() * As.length)];
      var omega = omegas[Math.floor(Math.random() * omegas.length)];
      var x = +(A * fracs[Math.floor(Math.random() * fracs.length)]).toFixed(3);
      return { A: A, omega: omega, x: x };
    },
    prompt: function (v) {
      return '<p>An oscillator has amplitude $\\quantity{' + v.A + '}{m}$ and angular frequency $\\quantity{' + v.omega + '}{rad\\,s^{-1}}$. Calculate the magnitude of its speed when its displacement is $\\quantity{' + v.x + '}{m}$.</p><p><i>Give your answer in m s<sup>-1</sup>.</i></p>';
    },
    answer: function (v) { return v.omega * Math.sqrt(v.A * v.A - v.x * v.x); },
    unit: 'm/s',
    tolerancePercent: 3,
    explanation: function (v, ans) {
      return '<p>Using $v=\\pm\\omega\\sqrt{A^{2}-x^{2}}$ (magnitude only, since direction isn\u2019t asked for):</p>' +
        '<p>$|v|=\\quantity{' + v.omega + '}{rad\\,s^{-1}}\\times\\sqrt{\\left(\\quantity{' + v.A + '}{m}\\right)^{2}-\\left(\\quantity{' + v.x + '}{m}\\right)^{2}}=\\quantity{' + ans.toPrecision(3) + '}{m\\,s^{-1}}$</p>';
    }
  },

  // ---- Numeric: a = omega^2 * x (magnitude) --------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var omegas = [2, 3, 4, 5, 6];
      var xs = [0.05, 0.1, 0.15, 0.2, 0.3];
      var omega = omegas[Math.floor(Math.random() * omegas.length)];
      var x = xs[Math.floor(Math.random() * xs.length)];
      return { omega: omega, x: x };
    },
    prompt: function (v) {
      return '<p>An oscillator has an angular frequency of $\\quantity{' + v.omega + '}{rad\\,s^{-1}}$. Calculate the magnitude of its acceleration when its displacement from equilibrium is $\\quantity{' + v.x + '}{m}$.</p><p><i>Give your answer in m s<sup>-2</sup>.</i></p>';
    },
    answer: function (v) { return v.omega * v.omega * v.x; },
    unit: 'm/s\u00B2',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $|a|=\\omega^{2}x$ (the minus sign only indicates direction, not magnitude):</p>' +
        '<p>$|a|=\\left(\\quantity{' + v.omega + '}{rad\\,s^{-1}}\\right)^{2}\\times\\quantity{' + v.x + '}{m}=\\quantity{' + ans.toPrecision(3) + '}{m\\,s^{-2}}$</p>';
    }
  },

  // ---- Numeric: v_max = omega * A -------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var As = [0.05, 0.1, 0.15, 0.2, 0.3];
      var omegas = [2, 4, 5, 8, 10];
      var A = As[Math.floor(Math.random() * As.length)];
      var omega = omegas[Math.floor(Math.random() * omegas.length)];
      return { A: A, omega: omega };
    },
    prompt: function (v) {
      return '<p>An oscillator has amplitude $\\quantity{' + v.A + '}{m}$ and angular frequency $\\quantity{' + v.omega + '}{rad\\,s^{-1}}$. Calculate its maximum speed.</p><p><i>Give your answer in m s<sup>-1</sup>.</i></p>';
    },
    answer: function (v) { return v.omega * v.A; },
    unit: 'm/s',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Using $v_{max}=\\omega A$:</p>' +
        '<p>$v_{max}=\\quantity{' + v.omega + '}{rad\\,s^{-1}}\\times\\quantity{' + v.A + '}{m}=\\quantity{' + ans.toPrecision(3) + '}{m\\,s^{-1}}$</p>' +
        '<p>Remember this occurs at the equilibrium position (zero displacement), not at maximum displacement.</p>';
    }
  },

  // ---- Numeric: a_max = omega^2 * A -----------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var As = [0.05, 0.1, 0.15, 0.2];
      var omegas = [3, 4, 5, 6, 8];
      var A = As[Math.floor(Math.random() * As.length)];
      var omega = omegas[Math.floor(Math.random() * omegas.length)];
      return { A: A, omega: omega };
    },
    prompt: function (v) {
      return '<p>An oscillator has amplitude $\\quantity{' + v.A + '}{m}$ and angular frequency $\\quantity{' + v.omega + '}{rad\\,s^{-1}}$. Calculate the magnitude of its maximum acceleration.</p><p><i>Give your answer in m s<sup>-2</sup>.</i></p>';
    },
    answer: function (v) { return v.omega * v.omega * v.A; },
    unit: 'm/s\u00B2',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Using $a_{max}=\\omega^{2}A$:</p>' +
        '<p>$a_{max}=\\left(\\quantity{' + v.omega + '}{rad\\,s^{-1}}\\right)^{2}\\times\\quantity{' + v.A + '}{m}=\\quantity{' + ans.toPrecision(3) + '}{m\\,s^{-2}}$</p>' +
        '<p>Remember this occurs at maximum displacement, where velocity is zero.</p>';
    }
  },

  // ---- Conceptual: where is velocity max / acceleration max -----------------
  {
    type: 'mcq',
    prompt: '<p>At which point in an oscillator\u2019s cycle is its speed at a maximum?</p>',
    options: [
      'At the equilibrium position (zero displacement)',
      'At maximum positive displacement',
      'At maximum negative displacement',
      'Speed is the same at every point in the cycle'
    ],
    correctIndex: 0,
    explanation: '<p>Speed is maximum at the equilibrium position (zero displacement) and zero at the extremes of displacement &mdash; the opposite of what many people expect. Acceleration behaves the other way round: zero at equilibrium, maximum at the extremes.</p>'
  },

  // ---- Conceptual: amplitude definition --------------------------------------
  {
    type: 'mcq',
    prompt: '<p>A displacement&ndash;time graph shows an oscillator swinging between $+0.4\\,\\units{m}$ and $-0.4\\,\\units{m}$. What is the amplitude?</p>',
    options: [
      '0.4 m',
      '0.8 m',
      '0.2 m',
      'It cannot be determined without knowing the period'
    ],
    correctIndex: 0,
    explanation: '<p>Amplitude is measured from the equilibrium position (zero) to the maximum displacement, so it\u2019s $\\quantity{0.4}{m}$ &mdash; not the full peak-to-peak swing of $\\quantity{0.8}{m}$, which is $2A$.</p>'
  },

  // ---- Conceptual: meaning of the negative sign in a = -omega^2 x -----------
  {
    type: 'mcq',
    prompt: '<p>In the equation $a=-\\omega^{2}x$, what does the negative sign tell you?</p>',
    options: [
      'The acceleration always points towards the equilibrium position, opposite to the displacement',
      'The acceleration is always negative in value, regardless of position',
      'The oscillator is losing energy over time',
      'The angular frequency must be a negative number'
    ],
    correctIndex: 0,
    explanation: '<p>The negative sign shows that acceleration and displacement are always in opposite directions &mdash; the acceleration is a <i>restoring</i> force, always pulling the oscillator back towards equilibrium, regardless of which side of equilibrium it\u2019s currently on.</p>'
  }
];
