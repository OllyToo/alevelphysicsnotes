/* Question bank for moments.html — loaded before quiz.js is invoked. */

var momentsQuestions = [

  // ---- Numeric: basic moment, M = F*d --------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var Fs = [15, 20, 25, 30, 50];
      var ds = [0.2, 0.3, 0.5, 0.8, 1.0];
      var F = Fs[Math.floor(Math.random() * Fs.length)];
      var d = ds[Math.floor(Math.random() * ds.length)];
      return { F: F, d: d };
    },
    prompt: function (v) {
      return '<p>A force of $\\quantity{' + v.F + '}{N}$ is applied perpendicular to a spanner, at a distance of $\\quantity{' + v.d + '}{m}$ from the pivot bolt. Calculate the moment of the force.</p><p><i>Give your answer in N m.</i></p>';
    },
    answer: function (v) { return v.F * v.d; },
    unit: 'Nm',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Using $M=F\\times d$:</p>' +
        '<p>$M=\\quantity{' + v.F + '}{N}\\times\\quantity{' + v.d + '}{m}=\\quantity{' + ans.toPrecision(3) + '}{N\\,m}$</p>';
    }
  },

  // ---- Numeric: principle of moments, simple seesaw balance ----------------------
  {
    type: 'numeric',
    generateVars: function () {
      var F1s = [200, 300, 400, 500];
      var d1s = [1.0, 1.5, 2.0];
      var d2s = [0.5, 1.0, 2.0, 2.5];
      var F1 = F1s[Math.floor(Math.random() * F1s.length)];
      var d1 = d1s[Math.floor(Math.random() * d1s.length)];
      var d2 = d2s[Math.floor(Math.random() * d2s.length)];
      return { F1: F1, d1: d1, d2: d2 };
    },
    prompt: function (v) {
      return '<p>A uniform see-saw is balanced about its pivot. A force of $\\quantity{' + v.F1 + '}{N}$ acts $\\quantity{' + v.d1 + '}{m}$ from the pivot on one side. Calculate the force needed $\\quantity{' + v.d2 + '}{m}$ from the pivot on the other side to keep it balanced.</p><p><i>Give your answer in N, to 3 s.f.</i></p>';
    },
    answer: function (v) { return (v.F1 * v.d1) / v.d2; },
    unit: 'N',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>By the principle of moments, clockwise moment = anticlockwise moment about the pivot:</p>' +
        '<p>$F_1d_1=F_2d_2$</p>' +
        '<p>$F_2=\\dfrac{F_1d_1}{d_2}=\\dfrac{\\quantity{' + v.F1 + '}{N}\\times\\quantity{' + v.d1 + '}{m}}{\\quantity{' + v.d2 + '}{m}}=\\quantity{' + ans.toPrecision(3) + '}{N}$</p>';
    }
  },

  // ---- Numeric: uniform beam pivoted at one end, supported at the far end --------
  {
    type: 'numeric',
    generateVars: function () {
      var Ws = [20, 30, 40, 50, 60];
      var W = Ws[Math.floor(Math.random() * Ws.length)];
      return { W: W };
    },
    prompt: function (v) {
      return '<p>A uniform horizontal shelf bracket of weight $\\quantity{' + v.W + '}{N}$ is hinged at one end to a wall. A vertical supporting force acts at the far end of the bracket, the same distance from the hinge as the bracket\u2019s full length. Calculate the supporting force needed to hold the bracket horizontal.</p><p><i>Give your answer in N. (Hint: the weight acts at the midpoint.)</i></p>';
    },
    answer: function (v) { return v.W / 2; },
    unit: 'N',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Taking moments about the hinge: the weight acts at the midpoint (perpendicular distance $\\frac{L}{2}$), and the supporting force $F$ acts at the far end (perpendicular distance $L$):</p>' +
        '<p>$F\\times L=W\\times\\dfrac{L}{2}$</p>' +
        '<p>$F=\\dfrac{W}{2}=\\quantity{' + ans.toPrecision(3) + '}{N}$</p>';
    }
  },

  // ---- Numeric: couple, M = F*d (distance between the forces) --------------------
  {
    type: 'numeric',
    generateVars: function () {
      var Fs = [5, 8, 10, 15, 20];
      var ds = [0.3, 0.4, 0.5, 0.6];
      var F = Fs[Math.floor(Math.random() * Fs.length)];
      var d = ds[Math.floor(Math.random() * ds.length)];
      return { F: F, d: d };
    },
    prompt: function (v) {
      return '<p>A steering wheel of diameter $\\quantity{' + v.d + '}{m}$ is turned by a driver applying a force of $\\quantity{' + v.F + '}{N}$ with each hand, on opposite sides of the wheel, in opposite directions. Calculate the moment of the couple.</p><p><i>Give your answer in N m.</i></p>';
    },
    answer: function (v) { return v.F * v.d; },
    unit: 'Nm',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>The moment of a couple is one force multiplied by the perpendicular distance <b>between</b> the two forces (here, the wheel\u2019s diameter):</p>' +
        '<p>$M=F\\times d=\\quantity{' + v.F + '}{N}\\times\\quantity{' + v.d + '}{m}=\\quantity{' + ans.toPrecision(3) + '}{N\\,m}$</p>';
    }
  },

  // ---- Numeric: resolving a force before taking the moment ------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var Fs = [40, 50, 60, 80];
      var angles = [20, 30, 40, 50];
      var ds = [0.4, 0.6, 0.8, 1.0];
      var F = Fs[Math.floor(Math.random() * Fs.length)];
      var angle = angles[Math.floor(Math.random() * angles.length)];
      var d = ds[Math.floor(Math.random() * ds.length)];
      return { F: F, angle: angle, d: d };
    },
    prompt: function (v) {
      return '<p>A force of $\\quantity{' + v.F + '}{N}$ is applied to a horizontal rod at an angle of ' + v.angle + '\u00B0 to the rod, at a point $\\quantity{' + v.d + '}{m}$ from the pivot. Calculate the moment of the force about the pivot.</p><p><i>Give your answer in N m, to 3 s.f. (Hint: resolve the force perpendicular to the rod first.)</i></p>';
    },
    answer: function (v) { return v.F * Math.sin(v.angle * Math.PI / 180) * v.d; },
    unit: 'Nm',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var perp = (v.F * Math.sin(v.angle * Math.PI / 180)).toPrecision(3);
      return '<p>Only the component of the force perpendicular to the rod contributes to the moment:</p>' +
        '<p>$F_{\\perp}=F\\sin(' + v.angle + '\\degree)=\\quantity{' + perp + '}{N}$</p>' +
        '<p>$M=F_{\\perp}\\times d=\\quantity{' + perp + '}{N}\\times\\quantity{' + v.d + '}{m}=\\quantity{' + ans.toPrecision(3) + '}{N\\,m}$</p>';
    }
  },

  // ---- Conceptual: the principle of moments ----------------------------------------
  {
    type: 'mcq',
    prompt: '<p>What does the principle of moments state for an object in equilibrium?</p>',
    options: [
      'The sum of clockwise moments about a point equals the sum of anticlockwise moments about the same point',
      'All forces acting on the object must be equal in magnitude',
      'The object must have exactly two forces acting on it',
      'The moment of every force must individually equal zero'
    ],
    correctIndex: 0,
    explanation: '<p>The principle of moments states that for an object in equilibrium, the sum of the clockwise moments about any point equals the sum of the anticlockwise moments about that same point &mdash; not that individual forces or moments must be zero.</p>'
  },

  // ---- Conceptual: couples --------------------------------------------------------
  {
    type: 'mcq',
    prompt: '<p>Which statement correctly describes a couple?</p>',
    options: [
      'Two equal and opposite forces acting along different parallel lines, producing no resultant force but a turning effect',
      'A single large force applied far from the pivot',
      'Two equal forces acting in the same direction along the same line',
      'Any two forces that happen to act on the same object'
    ],
    correctIndex: 0,
    explanation: '<p>A couple is a pair of equal and opposite forces acting along different (parallel) lines. Because the forces are equal and opposite, they produce no resultant force \u2014 the object doesn\u2019t move as a whole, it only turns. This also means the moment of a couple is the same about any point on the object, not just one particular pivot.</p>'
  },

  // ---- Conceptual: stability -------------------------------------------------------
  {
    type: 'mcq',
    prompt: '<p>Which combination of features makes an object most resistant to toppling over?</p>',
    options: [
      'A wide base of support and a low centre of mass',
      'A narrow base of support and a high centre of mass',
      'A wide base of support and a high centre of mass',
      'Base width and centre of mass height make no difference to stability'
    ],
    correctIndex: 0,
    explanation: '<p>An object remains stable as long as a vertical line from its centre of mass falls within its base of support. A <b>wider base</b> and a <b>lower centre of mass</b> both require a larger tilt angle before that line moves outside the base, making the object harder to topple.</p>'
  }
];
