/* Question bank for projectiles.html — loaded before quiz.js is invoked. */

var projectilesQuestions = [

  // ---- Numeric: horizontal launch, time of flight -------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ss = [5, 10, 20, 45, 80];
      var s = ss[Math.floor(Math.random() * ss.length)];
      return { s: s };
    },
    prompt: function (v) {
      return '<p>An object is launched horizontally from the top of a cliff $\\quantity{' + v.s + '}{m}$ high. Calculate the time taken for it to reach the ground.</p><p><i>Use $g=\\quantity{9.81}{m\\,s^{-2}}$. Give your answer in s, to 3 s.f.</i></p>';
    },
    answer: function (v) { return Math.sqrt((2 * v.s) / 9.81); },
    unit: 's',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Since $u_V=0$, using $s=\\frac{1}{2}gt^2$, rearranged:</p>' +
        '<p>$t=\\sqrt{\\dfrac{2s}{g}}=\\sqrt{\\dfrac{2\\times\\quantity{' + v.s + '}{m}}{\\quantity{9.81}{m\\,s^{-2}}}}=\\quantity{' + ans.toPrecision(3) + '}{s}$</p>';
    }
  },

  // ---- Numeric: horizontal launch, range -----------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ss = [10, 20, 45, 80];
      var uHs = [5, 8, 12, 15, 20];
      var s = ss[Math.floor(Math.random() * ss.length)];
      var uH = uHs[Math.floor(Math.random() * uHs.length)];
      return { s: s, uH: uH };
    },
    prompt: function (v) {
      return '<p>An object is launched horizontally at $\\quantity{' + v.uH + '}{m\\,s^{-1}}$ from the top of a cliff $\\quantity{' + v.s + '}{m}$ high. Calculate the horizontal distance it travels before landing.</p><p><i>Use $g=\\quantity{9.81}{m\\,s^{-2}}$. Give your answer in m, to 3 s.f.</i></p>';
    },
    answer: function (v) { return v.uH * Math.sqrt((2 * v.s) / 9.81); },
    unit: 'm',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      var t = Math.sqrt((2 * v.s) / 9.81).toPrecision(3);
      return '<p>First find the time of flight: $t=\\sqrt{\\dfrac{2s}{g}}=\\quantity{' + t + '}{s}$</p>' +
        '<p>Then the range: $s_H=u_Ht=\\quantity{' + v.uH + '}{m\\,s^{-1}}\\times\\quantity{' + t + '}{s}=\\quantity{' + ans.toPrecision(3) + '}{m}$</p>';
    }
  },

  // ---- Numeric: resolving the initial velocity at an angle ----------------------
  {
    type: 'numeric',
    generateVars: function () {
      var us = [20, 25, 30, 35, 40];
      var angles = [20, 25, 30, 35, 40, 45];
      var u = us[Math.floor(Math.random() * us.length)];
      var angle = angles[Math.floor(Math.random() * angles.length)];
      return { u: u, angle: angle };
    },
    prompt: function (v) {
      return '<p>A projectile is launched at $\\quantity{' + v.u + '}{m\\,s^{-1}}$ at an angle of ' + v.angle + '\u00B0 above the horizontal. Calculate the initial vertical component of its velocity.</p><p><i>Give your answer in m s<sup>-1</sup>, to 3 s.f.</i></p>';
    },
    answer: function (v) { return v.u * Math.sin(v.angle * Math.PI / 180); },
    unit: 'm/s',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Using $u_V=u\\sin\\theta$:</p>' +
        '<p>$u_V=\\quantity{' + v.u + '}{m\\,s^{-1}}\\times\\sin(' + v.angle + '\\degree)=\\quantity{' + ans.toPrecision(3) + '}{m\\,s^{-1}}$</p>';
    }
  },

  // ---- Numeric: time to reach maximum height -------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var us = [15, 20, 26, 30, 35];
      var angles = [20, 25, 30, 35, 40];
      var u = us[Math.floor(Math.random() * us.length)];
      var angle = angles[Math.floor(Math.random() * angles.length)];
      return { u: u, angle: angle };
    },
    prompt: function (v) {
      return '<p>A flare is fired at $\\quantity{' + v.u + '}{m\\,s^{-1}}$ at an angle of ' + v.angle + '\u00B0 to the horizontal. Calculate the time taken to reach its maximum height.</p><p><i>Use $g=\\quantity{9.81}{m\\,s^{-2}}$. Give your answer in s, to 3 s.f.</i></p>';
    },
    answer: function (v) { return (v.u * Math.sin(v.angle * Math.PI / 180)) / 9.81; },
    unit: 's',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Using $t=\\dfrac{u\\sin\\theta}{g}$:</p>' +
        '<p>$t=\\dfrac{\\quantity{' + v.u + '}{m\\,s^{-1}}\\times\\sin(' + v.angle + '\\degree)}{\\quantity{9.81}{m\\,s^{-2}}}=\\quantity{' + ans.toPrecision(3) + '}{s}$</p>';
    }
  },

  // ---- Numeric: full range for launch and landing at the same height -----------
  {
    type: 'numeric',
    generateVars: function () {
      var us = [20, 25, 30, 35];
      var angles = [25, 30, 35, 40];
      var u = us[Math.floor(Math.random() * us.length)];
      var angle = angles[Math.floor(Math.random() * angles.length)];
      return { u: u, angle: angle };
    },
    prompt: function (v) {
      return '<p>A ball is launched at $\\quantity{' + v.u + '}{m\\,s^{-1}}$ at an angle of ' + v.angle + '\u00B0 above the horizontal, from and to the same height. Calculate the total horizontal range.</p><p><i>Use $g=\\quantity{9.81}{m\\,s^{-2}}$. Give your answer in m, to 3 s.f.</i></p>';
    },
    answer: function (v) {
      var uV = v.u * Math.sin(v.angle * Math.PI / 180);
      var uH = v.u * Math.cos(v.angle * Math.PI / 180);
      var tTotal = 2 * (uV / 9.81);
      return uH * tTotal;
    },
    unit: 'm',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      var uV = (v.u * Math.sin(v.angle * Math.PI / 180)).toPrecision(3);
      var uH = (v.u * Math.cos(v.angle * Math.PI / 180)).toPrecision(3);
      var tTotal = (2 * (v.u * Math.sin(v.angle * Math.PI / 180) / 9.81)).toPrecision(3);
      return '<p>$u_V=\\quantity{' + uV + '}{m\\,s^{-1}}$, $u_H=\\quantity{' + uH + '}{m\\,s^{-1}}$</p>' +
        '<p>Total time of flight (double the time to the top): $t=\\quantity{' + tTotal + '}{s}$</p>' +
        '<p>Range: $s_H=u_Ht=\\quantity{' + ans.toPrecision(3) + '}{m}$</p>';
    }
  },

  // ---- Conceptual: monkey and hunter ----------------------------------------------
  {
    type: 'mcq',
    prompt: '<p>In the "monkey and hunter" thought experiment, a hunter fires directly at a monkey the instant it lets go of a branch. Why does the bullet always hit the monkey (ignoring air resistance)?</p>',
    options: [
      'Both the bullet and the monkey fall the same vertical distance in the same time, since gravity accelerates them equally, regardless of the bullet\u2019s horizontal motion',
      'The bullet is too fast for gravity to have a noticeable effect on it',
      'The monkey doesn\u2019t actually start falling until the bullet arrives',
      'The bullet\u2019s horizontal motion cancels out the effect of gravity on the vertical motion'
    ],
    correctIndex: 0,
    explanation: '<p>Horizontal and vertical motion are independent. Gravity accelerates the bullet downwards by exactly the same amount, in exactly the same time, as it accelerates the falling monkey \u2014 regardless of how fast the bullet is travelling horizontally. Since both fall the same vertical distance in the same time, the bullet always ends up exactly where the monkey has fallen to.</p>'
  },

  // ---- Conceptual: independence of horizontal and vertical motion -----------------
  {
    type: 'mcq',
    prompt: '<p>A projectile is launched at an angle, with no air resistance. Which statement correctly describes its motion?</p>',
    options: [
      'The horizontal velocity stays constant throughout the flight; the vertical velocity changes at a constant rate due to gravity',
      'Both the horizontal and vertical velocities stay constant throughout the flight',
      'The horizontal velocity decreases due to gravity, while the vertical velocity stays constant',
      'Both the horizontal and vertical velocities change at the same rate'
    ],
    correctIndex: 0,
    explanation: '<p>With no air resistance, there is no horizontal force acting on a projectile, so its horizontal velocity remains constant throughout the flight. Gravity acts only vertically, providing a constant downward acceleration that continuously changes the vertical velocity, whether the object is rising or falling.</p>'
  },

  // ---- Conceptual: effect of air resistance ----------------------------------------
  {
    type: 'mcq',
    prompt: '<p>Compared to the idealised parabolic path (no air resistance), how does air resistance change a projectile\u2019s trajectory?</p>',
    options: [
      'It reduces both the maximum height and the range, and makes the final descent steeper than the ascent',
      'It increases both the maximum height and the range',
      'It has no effect on the shape of the path, only on the total flight time',
      'It makes the path perfectly symmetrical, unlike the idealised case'
    ],
    correctIndex: 0,
    explanation: '<p>Air resistance reduces both the vertical and horizontal components of velocity throughout the flight. This produces a lower maximum height (reached sooner), a shorter range, and an asymmetric path that descends more steeply than it ascended \u2014 quite different from the idealised, symmetrical parabola.</p>'
  }
];
