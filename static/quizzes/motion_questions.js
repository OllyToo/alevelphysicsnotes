/* Question bank for motion.html — loaded before quiz.js is invoked. */

var motionQuestions = [

  // ---- Numeric: v = u + at ----------------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var us = [0, 2, 5, 8, 10];
      var as = [1.5, 2, 3, 4];
      var ts = [3, 4, 5, 6];
      var u = us[Math.floor(Math.random() * us.length)];
      var a = as[Math.floor(Math.random() * as.length)];
      var t = ts[Math.floor(Math.random() * ts.length)];
      return { u: u, a: a, t: t };
    },
    prompt: function (v) {
      return '<p>An object starts with a velocity of $\\quantity{' + v.u + '}{m\\,s^{-1}}$ and accelerates at $\\quantity{' + v.a + '}{m\\,s^{-2}}$ for $\\quantity{' + v.t + '}{s}$. Calculate its final velocity.</p><p><i>Give your answer in m s<sup>-1</sup>.</i></p>';
    },
    answer: function (v) { return v.u + v.a * v.t; },
    unit: 'm/s',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Using $v=u+at$:</p>' +
        '<p>$v=\\quantity{' + v.u + '}{m\\,s^{-1}}+\\quantity{' + v.a + '}{m\\,s^{-2}}\\times\\quantity{' + v.t + '}{s}=\\quantity{' + ans.toPrecision(3) + '}{m\\,s^{-1}}$</p>';
    }
  },

  // ---- Numeric: s = (u+v)/2 * t -------------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var us = [2, 4, 6, 8];
      var vs = [10, 14, 18, 22];
      var ts = [3, 4, 5, 6];
      var u = us[Math.floor(Math.random() * us.length)];
      var v = vs[Math.floor(Math.random() * vs.length)];
      var t = ts[Math.floor(Math.random() * ts.length)];
      return { u: u, v: v, t: t };
    },
    prompt: function (v) {
      return '<p>An object accelerates uniformly from $\\quantity{' + v.u + '}{m\\,s^{-1}}$ to $\\quantity{' + v.v + '}{m\\,s^{-1}}$ over $\\quantity{' + v.t + '}{s}$. Calculate the distance it travels.</p><p><i>Give your answer in m.</i></p>';
    },
    answer: function (v) { return ((v.u + v.v) / 2) * v.t; },
    unit: 'm',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Using $s=\\dfrac{(u+v)}{2}t$:</p>' +
        '<p>$s=\\dfrac{\\quantity{' + v.u + '}{m\\,s^{-1}}+\\quantity{' + v.v + '}{m\\,s^{-1}}}{2}\\times\\quantity{' + v.t + '}{s}=\\quantity{' + ans.toPrecision(3) + '}{m}$</p>';
    }
  },

  // ---- Numeric: s = ut + 1/2 at^2 -------------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var us = [0, 3, 5, 8];
      var as = [1, 1.5, 2, 2.5];
      var ts = [2, 3, 4, 5];
      var u = us[Math.floor(Math.random() * us.length)];
      var a = as[Math.floor(Math.random() * as.length)];
      var t = ts[Math.floor(Math.random() * ts.length)];
      return { u: u, a: a, t: t };
    },
    prompt: function (v) {
      return '<p>An object with an initial velocity of $\\quantity{' + v.u + '}{m\\,s^{-1}}$ accelerates at $\\quantity{' + v.a + '}{m\\,s^{-2}}$ for $\\quantity{' + v.t + '}{s}$. Calculate the distance travelled.</p><p><i>Give your answer in m, to 3 s.f.</i></p>';
    },
    answer: function (v) { return v.u * v.t + 0.5 * v.a * v.t * v.t; },
    unit: 'm',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Using $s=ut+\\frac{1}{2}at^{2}$:</p>' +
        '<p>$s=\\left(\\quantity{' + v.u + '}{m\\,s^{-1}}\\times\\quantity{' + v.t + '}{s}\\right)+\\left(\\frac{1}{2}\\times\\quantity{' + v.a + '}{m\\,s^{-2}}\\times\\left(\\quantity{' + v.t + '}{s}\\right)^{2}\\right)=\\quantity{' + ans.toPrecision(3) + '}{m}$</p>';
    }
  },

  // ---- Numeric: v^2 = u^2 + 2as ---------------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var us = [0, 2, 4, 6];
      var as = [2, 3, 4, 5];
      var ss = [10, 15, 20, 25];
      var u = us[Math.floor(Math.random() * us.length)];
      var a = as[Math.floor(Math.random() * as.length)];
      var s = ss[Math.floor(Math.random() * ss.length)];
      return { u: u, a: a, s: s };
    },
    prompt: function (v) {
      return '<p>An object with an initial velocity of $\\quantity{' + v.u + '}{m\\,s^{-1}}$ accelerates at $\\quantity{' + v.a + '}{m\\,s^{-2}}$ over a distance of $\\quantity{' + v.s + '}{m}$. Calculate its final velocity.</p><p><i>Give your answer in m s<sup>-1</sup>, to 3 s.f.</i></p>';
    },
    answer: function (v) { return Math.sqrt(v.u * v.u + 2 * v.a * v.s); },
    unit: 'm/s',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Using $v^{2}=u^{2}+2as$:</p>' +
        '<p>$v=\\sqrt{\\left(\\quantity{' + v.u + '}{m\\,s^{-1}}\\right)^{2}+2\\times\\quantity{' + v.a + '}{m\\,s^{-2}}\\times\\quantity{' + v.s + '}{m}}=\\quantity{' + ans.toPrecision(3) + '}{m\\,s^{-1}}$</p>';
    }
  },

  // ---- Conceptual: which quantity is missing/not needed -----------------------
  {
    type: 'mcq',
    prompt: '<p>A question gives you $u$, $a$, and $t$, and asks you to find $s$. Which suvat equation should you use?</p>',
    options: [
      '$s=ut+\\frac{1}{2}at^{2}$, since it\u2019s the only one that doesn\u2019t require $v$',
      '$v=u+at$, since it contains three of the given quantities',
      '$v^{2}=u^{2}+2as$, since it contains $s$',
      'Any of the four equations could be used interchangeably here'
    ],
    correctIndex: 0,
    explanation: '<p>The quantity you haven\u2019t been given and don\u2019t need is $v$. Only $s=ut+\\frac{1}{2}at^{2}$ doesn\u2019t contain $v$, so it\u2019s the correct choice \u2014 the other equations would require a value for $v$ that isn\u2019t available.</p>'
  },

  // ---- Conceptual: sign convention for a ball thrown upward ----------------------
  {
    type: 'mcq',
    prompt: '<p>A ball is thrown straight upwards, then falls back down. Taking upwards as positive throughout, what happens to the sign of the acceleration during the whole flight?</p>',
    options: [
      'It stays negative the whole time, since gravity always acts downwards',
      'It is positive on the way up and negative on the way down',
      'It is zero at the very top of the flight, then becomes negative',
      'It is negative on the way up and positive on the way down'
    ],
    correctIndex: 0,
    explanation: '<p>Acceleration due to gravity acts downwards throughout the entire flight, so with upwards taken as positive, $a$ remains negative the whole time \u2014 including at the top of the flight. It is the <i>velocity</i> that changes sign (positive going up, zero at the top, negative coming down), not the acceleration.</p>'
  },

  // ---- Conceptual: when suvat can't be used -----------------------------------
  {
    type: 'mcq',
    prompt: '<p>A skydiver falls from a plane and eventually reaches terminal velocity before landing. Can a single application of suvat be used to analyse the whole fall?</p>',
    options: [
      'No \u2014 the acceleration isn\u2019t constant throughout, since air resistance changes as speed increases',
      'Yes \u2014 suvat can always be applied to any falling object',
      'Yes, but only if air resistance is completely ignored',
      'No \u2014 suvat can never be used for any part of a fall involving air resistance'
    ],
    correctIndex: 0,
    explanation: '<p>Suvat only applies while acceleration is constant. As the skydiver speeds up, air resistance increases, so the resultant force (and therefore the acceleration) changes throughout the fall until terminal velocity is reached. The fall could still be analysed in <i>separate stages</i> if each stage has its own constant acceleration, but not as a single suvat calculation across the whole fall.</p>'
  },

  // ---- Conceptual: reading a velocity-time graph -----------------------------------
  {
    type: 'mcq',
    prompt: '<p>On a velocity-time graph, what does the area under the line represent?</p>',
    options: [
      'The displacement of the object over that time interval',
      'The acceleration of the object',
      'The average speed of the object',
      'The total distance travelled by the object, always equal to its displacement'
    ],
    correctIndex: 0,
    explanation: '<p>The area under a velocity-time graph gives the displacement over that time interval. (The gradient, not the area, gives the acceleration.) Note this is displacement rather than total distance \u2014 if the velocity goes negative, that area subtracts from the total rather than adding to it.</p>'
  }
];
