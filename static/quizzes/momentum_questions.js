/* Question bank for momentum.html — loaded before quiz.js is invoked. */

var momentumQuestions = [

  // ---- Numeric: momentum p = mv --------------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ms = [0.5, 2, 60, 1200];
      var vs = [3, 8, 15, 25];
      var m = ms[Math.floor(Math.random() * ms.length)];
      var v = vs[Math.floor(Math.random() * vs.length)];
      return { m: m, v: v };
    },
    prompt: function (v) {
      return '<p>Calculate the momentum of an object of mass $\\quantity{' + v.m + '}{kg}$ moving at $\\quantity{' + v.v + '}{m\\,s^{-1}}$.</p><p><i>Give your answer in kg m s<sup>-1</sup>.</i></p>';
    },
    answer: function (v) { return v.m * v.v; },
    unit: 'kg\u00B7m/s',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Using $p=mv$:</p>' +
        '<p>$p=\\quantity{' + v.m + '}{kg}\\times\\quantity{' + v.v + '}{m\\,s^{-1}}=\\quantity{' + ans.toPrecision(3) + '}{kg\\,m\\,s^{-1}}$</p>';
    }
  },

  // ---- Numeric: conservation of momentum, collision that sticks (perfectly inelastic) ---
  {
    type: 'numeric',
    generateVars: function () {
      var m1s = [2, 3, 5, 8];
      var m2s = [2, 4, 6, 10];
      var u1s = [3, 4, 6, 8];
      var u2s = [1, 2, 3];
      var m1 = m1s[Math.floor(Math.random() * m1s.length)];
      var m2 = m2s[Math.floor(Math.random() * m2s.length)];
      var u1 = u1s[Math.floor(Math.random() * u1s.length)];
      var u2 = u2s[Math.floor(Math.random() * u2s.length)];
      return { m1: m1, m2: m2, u1: u1, u2: u2 };
    },
    prompt: function (v) {
      return '<p>A trolley of mass $\\quantity{' + v.m1 + '}{kg}$, moving at $\\quantity{' + v.u1 + '}{m\\,s^{-1}}$, collides with a stationary trolley of mass $\\quantity{' + v.m2 + '}{kg}$, and they stick together. Calculate their common velocity after the collision.</p><p><i>Give your answer in m s<sup>-1</sup>, to 3 s.f.</i></p>';
    },
    answer: function (v) { return (v.m1 * v.u1) / (v.m1 + v.m2); },
    unit: 'm/s',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      var p = (v.m1 * v.u1).toPrecision(3);
      return '<p>Using conservation of momentum, $m_1u_1+m_2u_2=(m_1+m_2)v$, with $u_2=0$:</p>' +
        '<p>$v=\\dfrac{m_1u_1}{m_1+m_2}=\\dfrac{\\quantity{' + p + '}{kg\\,m\\,s^{-1}}}{\\quantity{' + (v.m1 + v.m2) + '}{kg}}=\\quantity{' + ans.toPrecision(3) + '}{m\\,s^{-1}}$</p>';
    }
  },

  // ---- Numeric: explosion, find v2 given v1 (relative velocities) -----------------
  {
    type: 'numeric',
    generateVars: function () {
      var m1s = [1, 2, 3];
      var m2s = [4, 6, 9];
      var v1s = [6, 9, 12];
      var m1 = m1s[Math.floor(Math.random() * m1s.length)];
      var m2 = m2s[Math.floor(Math.random() * m2s.length)];
      var v1 = v1s[Math.floor(Math.random() * v1s.length)];
      return { m1: m1, m2: m2, v1: v1 };
    },
    prompt: function (v) {
      return '<p>Two stationary trolleys, of mass $\\quantity{' + v.m1 + '}{kg}$ and $\\quantity{' + v.m2 + '}{kg}$, are pushed apart by a spring released between them. The lighter trolley moves off at $\\quantity{' + v.v1 + '}{m\\,s^{-1}}$. Calculate the speed of the heavier trolley.</p><p><i>Give your answer in m s<sup>-1</sup>, to 3 s.f.</i></p>';
    },
    answer: function (v) { return (v.m1 * v.v1) / v.m2; },
    unit: 'm/s',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Since the initial momentum is zero, $m_1v_1=m_2v_2$ (in magnitude, opposite directions):</p>' +
        '<p>$v_2=\\dfrac{m_1v_1}{m_2}=\\dfrac{\\quantity{' + v.m1 + '}{kg}\\times\\quantity{' + v.v1 + '}{m\\,s^{-1}}}{\\quantity{' + v.m2 + '}{kg}}=\\quantity{' + ans.toPrecision(3) + '}{m\\,s^{-1}}$</p>';
    }
  },

  // ---- Numeric: impulse = change in momentum --------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ms = [0.15, 0.5, 1000, 1500];
      var us = [20, 25, 15, 10];
      var vs = [0, 5, -10, 30];
      var m = ms[Math.floor(Math.random() * ms.length)];
      var u = us[Math.floor(Math.random() * us.length)];
      var v = vs[Math.floor(Math.random() * vs.length)];
      return { m: m, u: u, v: v };
    },
    prompt: function (v) {
      return '<p>An object of mass $\\quantity{' + v.m + '}{kg}$ has its velocity changed from $\\quantity{' + v.u + '}{m\\,s^{-1}}$ to $\\quantity{' + v.v + '}{m\\,s^{-1}}$ during a collision. Calculate the impulse that acted on it.</p><p><i>Give your answer in N s, to 3 s.f. (a negative sign is fine if appropriate).</i></p>';
    },
    answer: function (v) { return v.m * (v.v - v.u); },
    unit: 'Ns',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using Impulse $=\\Delta p=m(v-u)$:</p>' +
        '<p>Impulse $=\\quantity{' + v.m + '}{kg}\\times(\\quantity{' + v.v + '}{m\\,s^{-1}}-\\quantity{' + v.u + '}{m\\,s^{-1}})=\\quantity{' + ans.toPrecision(3) + '}{N\\,s}$</p>';
    }
  },

  // ---- Numeric: F = Delta p / Delta t (safety-style) --------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ms = [0.15, 1200, 800];
      var us = [25, 15, 20];
      var ts = [0.005, 0.1, 0.15, 0.2];
      var m = ms[Math.floor(Math.random() * ms.length)];
      var u = us[Math.floor(Math.random() * us.length)];
      var t = ts[Math.floor(Math.random() * ts.length)];
      return { m: m, u: u, t: t };
    },
    prompt: function (v) {
      return '<p>An object of mass $\\quantity{' + v.m + '}{kg}$, moving at $\\quantity{' + v.u + '}{m\\,s^{-1}}$, is brought to rest in a collision lasting $\\quantity{' + v.t + '}{s}$. Calculate the average force acting on it.</p><p><i>Give your answer in N, standard form to 3 s.f.</i></p>';
    },
    answer: function (v) { return (v.m * v.u) / v.t; },
    unit: 'N',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var dp = (v.m * v.u).toPrecision(3);
      return '<p>Change in momentum: $\\Delta p=m\\Delta v=\\quantity{' + dp + '}{kg\\,m\\,s^{-1}}$</p>' +
        '<p>$F=\\dfrac{\\Delta p}{\\Delta t}=\\dfrac{\\quantity{' + dp + '}{kg\\,m\\,s^{-1}}}{\\quantity{' + v.t + '}{s}}=\\quantity{' + ans.toExponential(3) + '}{N}$</p>';
    }
  },

  // ---- Conceptual: what distinguishes elastic from inelastic collisions -----------
  {
    type: 'mcq',
    prompt: '<p>What distinguishes an elastic collision from an inelastic one?</p>',
    options: [
      'Kinetic energy is conserved in an elastic collision, but not in an inelastic one; momentum is conserved in both',
      'Momentum is conserved in an elastic collision, but not in an inelastic one',
      'Elastic collisions conserve neither momentum nor kinetic energy',
      'Inelastic collisions always involve objects sticking together, while elastic ones never do'
    ],
    correctIndex: 0,
    explanation: '<p>Momentum is conserved in <b>every</b> collision (provided no external force acts), whether elastic or inelastic. The distinction is kinetic energy: it\u2019s conserved in an elastic collision, but some is transferred away (usually as heat or sound) in an inelastic one.</p>'
  },

  // ---- Conceptual: safety and extending collision time -----------------------------
  {
    type: 'mcq',
    prompt: '<p>Why do features like airbags and crumple zones reduce the force experienced in a collision?</p>',
    options: [
      'They extend the time over which the change in momentum happens, reducing the average force needed to produce that change',
      'They reduce the total change in momentum that occurs',
      'They increase the mass of the vehicle, which reduces the force',
      'They prevent momentum from being conserved during the crash'
    ],
    correctIndex: 0,
    explanation: '<p>From $F=\\frac{\\Delta p}{\\Delta t}$, for a given change in momentum, increasing the time over which that change happens reduces the average force required. Airbags, crumple zones, and similar safety features work by extending the collision time, not by changing the total momentum change itself.</p>'
  },

  // ---- Conceptual: identifying elastic vs inelastic from outcome ------------------
  {
    type: 'mcq',
    prompt: '<p>After a collision, two objects rebound and move apart from each other, rather than sticking together. What does this suggest about the collision?</p>',
    options: [
      'It\u2019s likely elastic, or close to it, since kinetic energy must be conserved for the objects to separate again',
      'It must be perfectly inelastic',
      'Momentum was not conserved in this collision',
      'Nothing can be concluded about the type of collision from this observation alone'
    ],
    correctIndex: 0,
    explanation: '<p>Objects can only separate after colliding (rather than sticking together) if the collision conserves kinetic energy as well as momentum. Rebounding apart is therefore a strong sign that a collision is elastic, or close to it \u2014 a genuinely inelastic collision loses kinetic energy, which tends to result in the objects moving together rather than springing apart.</p>'
  }
];
