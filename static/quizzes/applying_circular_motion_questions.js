/* Question bank for applying_circular_motion.html — loaded before quiz.js is invoked. */

var applyingCircularMotionQuestions = [

  // ---- Numeric: bucket trick — minimum angular velocity -------------------
  {
    type: 'numeric',
    generateVars: function () {
      var rs = [0.3, 0.4, 0.5, 0.6, 0.8, 1.0];
      var r = rs[Math.floor(Math.random() * rs.length)];
      return { r: r };
    },
    prompt: function (v) {
      return '<p>A bucket of water is spun in a vertical circle of radius $\\quantity{' + v.r + '}{m}$. Calculate the minimum angular velocity required to keep the water in the bucket at the top of the circle.</p><p><i>Give your answer in rad s<sup>-1</sup>. Use $g=\\quantity{9.81}{m\\,s^{-2}}$.</i></p>';
    },
    answer: function (v) { return Math.sqrt(9.81 / v.r); },
    unit: 'rad/s',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>At the minimum speed, gravity alone provides the centripetal acceleration: $r\\omega^{2}=g$</p>' +
        '<p>$\\omega=\\sqrt{\\dfrac{g}{r}}=\\sqrt{\\dfrac{\\quantity{9.81}{m\\,s^{-2}}}{\\quantity{' + v.r + '}{m}}}=\\quantity{' + ans.toPrecision(3) + '}{rad\\,s^{-1}}$</p>';
    }
  },

  // ---- Numeric: artificial gravity space station ----------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var rs = [50, 80, 100, 150, 200, 250];
      var r = rs[Math.floor(Math.random() * rs.length)];
      return { r: r };
    },
    prompt: function (v) {
      return '<p>A space station of radius $\\quantity{' + v.r + '}{m}$ needs to rotate to produce artificial gravity equal to $g=\\quantity{9.81}{m\\,s^{-2}}$ at the outer rim. Calculate the required angular velocity.</p><p><i>Give your answer in rad s<sup>-1</sup>.</i></p>';
    },
    answer: function (v) { return Math.sqrt(9.81 / v.r); },
    unit: 'rad/s',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $a=r\\omega^{2}=g$, rearranged for $\\omega$:</p>' +
        '<p>$\\omega=\\sqrt{\\dfrac{g}{r}}=\\sqrt{\\dfrac{\\quantity{9.81}{m\\,s^{-2}}}{\\quantity{' + v.r + '}{m}}}=\\quantity{' + ans.toPrecision(3) + '}{rad\\,s^{-1}}$</p>';
    }
  },

  // ---- Numeric: max speed over a hill ---------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var rs = [20, 30, 40, 50, 75, 100];
      var r = rs[Math.floor(Math.random() * rs.length)];
      return { r: r };
    },
    prompt: function (v) {
      return '<p>A car travels over a humpback bridge with a radius of curvature of $\\quantity{' + v.r + '}{m}$. Calculate the maximum speed the car can travel at before it loses contact with the road at the top of the bridge.</p><p><i>Give your answer in m s<sup>-1</sup>. Use $g=\\quantity{9.81}{m\\,s^{-2}}$.</i></p>';
    },
    answer: function (v) { return Math.sqrt(9.81 * v.r); },
    unit: 'm/s',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $v_{0}=\\sqrt{gr}$:</p>' +
        '<p>$v_{0}=\\sqrt{\\quantity{9.81}{m\\,s^{-2}}\\times\\quantity{' + v.r + '}{m}}=\\quantity{' + ans.toPrecision(3) + '}{m\\,s^{-1}}$</p>';
    }
  },

  // ---- Numeric: find support force S below critical speed ------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ms = [800, 1000, 1200, 1500];
      var rs = [40, 50, 60, 80];
      var vFractions = [0.5, 0.6, 0.7, 0.8];
      var m = ms[Math.floor(Math.random() * ms.length)];
      var r = rs[Math.floor(Math.random() * rs.length)];
      var vMax = Math.sqrt(9.81 * r);
      var v = +(vMax * vFractions[Math.floor(Math.random() * vFractions.length)]).toFixed(1);
      return { m: m, r: r, v: v };
    },
    prompt: function (v) {
      return '<p>A car of mass $\\quantity{' + v.m + '}{kg}$ travels at $\\quantity{' + v.v + '}{m\\,s^{-1}}$ over a hill with a radius of curvature of $\\quantity{' + v.r + '}{m}$. Calculate the support (normal) force from the road on the car at the top of the hill.</p><p><i>Give your answer in newtons (N). Use $g=\\quantity{9.81}{m\\,s^{-2}}$.</i></p>';
    },
    answer: function (v) { return v.m * 9.81 - (v.m * v.v * v.v) / v.r; },
    unit: 'N',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var weight = (v.m * 9.81).toPrecision(4);
      var centripetal = (v.m * v.v * v.v / v.r).toPrecision(4);
      return '<p>Rearranging $mg-S=\\dfrac{mv^{2}}{r}$ for $S$:</p>' +
        '<p>$S=mg-\\dfrac{mv^{2}}{r}=\\quantity{' + weight + '}{N}-\\quantity{' + centripetal + '}{N}=\\quantity{' + ans.toPrecision(3) + '}{N}$</p>';
    }
  },

  // ---- Conceptual: what happens to support force at critical speed ---------
  {
    type: 'mcq',
    prompt: '<p>A car travels over a hill at exactly the maximum speed before losing contact with the road. What is true of the support force from the road at this exact speed?</p>',
    options: [
      'It is exactly zero',
      'It equals the car\u2019s weight',
      'It is at its maximum value',
      'It equals the centripetal force plus the weight'
    ],
    correctIndex: 0,
    explanation: '<p>"Losing contact with the road" means the road is no longer pushing on the car at all, so the support force $S=0$ at exactly this critical speed. Above this speed the car would be airborne (S can\u2019t go negative); below it, S is positive and increases as speed decreases.</p>'
  },

  // ---- Numeric: banked track angle ------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var vs = [8, 10, 12, 15, 18];
      var rs = [20, 30, 40, 50];
      var v = vs[Math.floor(Math.random() * vs.length)];
      var r = rs[Math.floor(Math.random() * rs.length)];
      return { v: v, r: r };
    },
    prompt: function (v) {
      return '<p>A cyclist travels around a banked bend of radius $\\quantity{' + v.r + '}{m}$ at $\\quantity{' + v.v + '}{m\\,s^{-1}}$, with no sideways friction needed. Calculate the angle of the bank.</p><p><i>Give your answer in degrees. Use $g=\\quantity{9.81}{m\\,s^{-2}}$.</i></p>';
    },
    answer: function (v) {
      var tanTheta = (v.v * v.v) / (9.81 * v.r);
      return Math.atan(tanTheta) * (180 / Math.PI);
    },
    unit: 'degrees',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var tanTheta = ((v.v * v.v) / (9.81 * v.r)).toPrecision(3);
      return '<p>Using $\\tan\\theta=\\dfrac{v^{2}}{gr}$:</p>' +
        '<p>$\\tan\\theta=\\dfrac{\\left(\\quantity{' + v.v + '}{m\\,s^{-1}}\\right)^{2}}{\\quantity{9.81}{m\\,s^{-2}}\\times\\quantity{' + v.r + '}{m}}=' + tanTheta + '$</p>' +
        '<p>$\\theta=\\tan^{-1}(' + tanTheta + ')=\\quantity{' + ans.toPrecision(3) + '}{\\degree}$</p>';
    }
  },

  // ---- Numeric: banked track speed given angle ------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var thetas = [10, 15, 20, 25, 30];
      var rs = [25, 40, 50, 60];
      var theta = thetas[Math.floor(Math.random() * thetas.length)];
      var r = rs[Math.floor(Math.random() * rs.length)];
      return { theta: theta, r: r };
    },
    prompt: function (v) {
      return '<p>A banked bend has an angle of $\\quantity{' + v.theta + '}{\\degree}$ and a radius of $\\quantity{' + v.r + '}{m}$. Calculate the speed at which a vehicle could travel around it with no sideways friction needed.</p><p><i>Give your answer in m s<sup>-1</sup>. Use $g=\\quantity{9.81}{m\\,s^{-2}}$.</i></p>';
    },
    answer: function (v) {
      var tanTheta = Math.tan(v.theta * Math.PI / 180);
      return Math.sqrt(9.81 * v.r * tanTheta);
    },
    unit: 'm/s',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var tanTheta = Math.tan(v.theta * Math.PI / 180).toPrecision(3);
      return '<p>Using $v^{2}=gr\\tan\\theta$:</p>' +
        '<p>$v=\\sqrt{\\quantity{9.81}{m\\,s^{-2}}\\times\\quantity{' + v.r + '}{m}\\times ' + tanTheta + '}=\\quantity{' + ans.toPrecision(3) + '}{m\\,s^{-1}}$</p>';
    }
  },

  // ---- Conceptual: direction of centripetal force ---------------------------
  {
    type: 'mcq',
    prompt: '<p>A car travels over the top of a humpback bridge. In which direction does the centripetal force (the resultant of weight and support force) act at that point?</p>',
    options: [
      'Downwards, towards the centre of the circular arc',
      'Upwards, away from the road',
      'Horizontally, in the direction of travel',
      'There is no resultant force at the top of the bridge'
    ],
    correctIndex: 0,
    explanation: '<p>Centripetal force always points towards the centre of the circular path the object is following. For a car cresting a hill, the centre of that circular arc is below the road, so the resultant force (weight minus support force) points <b>downwards</b>. This is why the equation is $mg-S=\\frac{mv^2}{r}$, with weight being the larger of the two forces.</p>'
  }
];
