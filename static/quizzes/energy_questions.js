/* Question bank for energy.html — loaded before quiz.js is invoked. */

var energyQuestions = [

  // ---- Numeric: W = Fs*cos(theta) ------------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var Fs = [80000, 120000, 150000, 170000];
      var ss = [500, 800, 1000, 1500];
      var angles = [20, 30, 40, 50];
      var F = Fs[Math.floor(Math.random() * Fs.length)];
      var s = ss[Math.floor(Math.random() * ss.length)];
      var angle = angles[Math.floor(Math.random() * angles.length)];
      return { F: F, s: s, angle: angle };
    },
    prompt: function (v) {
      return '<p>A cable pulls a ship with a tension of $\\quantity{' + v.F + '}{N}$, at an angle of ' + v.angle + '\u00B0 to the ship\u2019s direction of travel. The ship moves $\\quantity{' + v.s + '}{m}$. Calculate the work done by the cable.</p><p><i>Give your answer in J, standard form to 3 s.f.</i></p>';
    },
    answer: function (v) { return v.F * v.s * Math.cos(v.angle * Math.PI / 180); },
    unit: 'J',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Using $W=Fs\\cos\\theta$:</p>' +
        '<p>$W=\\quantity{' + v.F + '}{N}\\times\\quantity{' + v.s + '}{m}\\times\\cos(' + v.angle + '\\degree)=\\quantity{' + ans.toExponential(3) + '}{J}$</p>';
    }
  },

  // ---- Numeric: E_k = 1/2 m v^2 --------------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ms = [50, 70, 900, 1200];
      var vs = [4, 8, 15, 20];
      var m = ms[Math.floor(Math.random() * ms.length)];
      var v = vs[Math.floor(Math.random() * vs.length)];
      return { m: m, v: v };
    },
    prompt: function (v) {
      return '<p>Calculate the kinetic energy of an object of mass $\\quantity{' + v.m + '}{kg}$ moving at $\\quantity{' + v.v + '}{m\\,s^{-1}}$.</p><p><i>Give your answer in J, standard form to 3 s.f.</i></p>';
    },
    answer: function (v) { return 0.5 * v.m * v.v * v.v; },
    unit: 'J',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Using $E_k=\\frac{1}{2}mv^{2}$:</p>' +
        '<p>$E_k=\\frac{1}{2}\\times\\quantity{' + v.m + '}{kg}\\times\\left(\\quantity{' + v.v + '}{m\\,s^{-1}}\\right)^{2}=\\quantity{' + ans.toExponential(3) + '}{J}$</p>';
    }
  },

  // ---- Numeric: Delta E_p = mg Delta h --------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ms = [5, 20, 65, 1000];
      var hs = [2, 5, 10, 40];
      var m = ms[Math.floor(Math.random() * ms.length)];
      var h = hs[Math.floor(Math.random() * hs.length)];
      return { m: m, h: h };
    },
    prompt: function (v) {
      return '<p>Calculate the change in gravitational potential energy of an object of mass $\\quantity{' + v.m + '}{kg}$ raised through a height of $\\quantity{' + v.h + '}{m}$.</p><p><i>Use $g=\\quantity{9.81}{m\\,s^{-2}}$. Give your answer in J, standard form to 3 s.f.</i></p>';
    },
    answer: function (v) { return v.m * 9.81 * v.h; },
    unit: 'J',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Using $\\Delta E_p=mg\\Delta h$:</p>' +
        '<p>$\\Delta E_p=\\quantity{' + v.m + '}{kg}\\times\\quantity{9.81}{m\\,s^{-2}}\\times\\quantity{' + v.h + '}{m}=\\quantity{' + ans.toExponential(3) + '}{J}$</p>';
    }
  },

  // ---- Numeric: spring energy, W = 1/2 k e^2 --------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ks = [50, 100, 200, 400];
      var es = [0.05, 0.1, 0.15, 0.2];
      var k = ks[Math.floor(Math.random() * ks.length)];
      var e = es[Math.floor(Math.random() * es.length)];
      return { k: k, e: e };
    },
    prompt: function (v) {
      return '<p>A spring with a spring constant of $\\quantity{' + v.k + '}{N\\,m^{-1}}$ is stretched by $\\quantity{' + v.e + '}{m}$ from its natural length. Calculate the work done in stretching it.</p><p><i>Give your answer in J, to 3 s.f.</i></p>';
    },
    answer: function (v) { return 0.5 * v.k * v.e * v.e; },
    unit: 'J',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Using $W=\\frac{1}{2}ke^{2}$:</p>' +
        '<p>$W=\\frac{1}{2}\\times\\quantity{' + v.k + '}{N\\,m^{-1}}\\times\\left(\\quantity{' + v.e + '}{m}\\right)^{2}=\\quantity{' + ans.toPrecision(3) + '}{J}$</p>';
    }
  },

  // ---- Numeric: energy conservation with resistive forces (skier-style) ------------
  {
    type: 'numeric',
    generateVars: function () {
      var ms = [50, 60, 70, 80];
      var hs = [20, 30, 40, 50];
      var vs = [15, 18, 20, 22];
      var m = ms[Math.floor(Math.random() * ms.length)];
      var h = hs[Math.floor(Math.random() * hs.length)];
      var v = vs[Math.floor(Math.random() * vs.length)];
      return { m: m, h: h, v: v };
    },
    prompt: function (v) {
      return '<p>A skier of mass $\\quantity{' + v.m + '}{kg}$ descends a slope, losing $\\quantity{' + v.h + '}{m}$ in height, and reaches a speed of $\\quantity{' + v.v + '}{m\\,s^{-1}}$ at the bottom. Calculate the work done against resistive forces during the descent.</p><p><i>Use $g=\\quantity{9.81}{m\\,s^{-2}}$. Give your answer in J, standard form to 3 s.f.</i></p>';
    },
    answer: function (v) {
      var Ep = v.m * 9.81 * v.h;
      var Ek = 0.5 * v.m * v.v * v.v;
      return Ep - Ek;
    },
    unit: 'J',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var Ep = (v.m * 9.81 * v.h).toPrecision(4);
      var Ek = (0.5 * v.m * v.v * v.v).toPrecision(4);
      return '<p>$\\Delta E_p=mg\\Delta h=\\quantity{' + Ep + '}{J}$</p>' +
        '<p>$E_k=\\frac{1}{2}mv^{2}=\\quantity{' + Ek + '}{J}$</p>' +
        '<p>Since GPE lost = KE gained + work done against resistive forces:</p>' +
        '<p>$W_{resistive}=\\Delta E_p-E_k=\\quantity{' + ans.toExponential(3) + '}{J}$</p>';
    }
  },

  // ---- Numeric: P = Fv ------------------------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var Fs = [150, 190, 220, 260];
      var vs = [1.2, 1.63, 2.0, 2.5];
      var F = Fs[Math.floor(Math.random() * Fs.length)];
      var v = vs[Math.floor(Math.random() * vs.length)];
      return { F: F, v: v };
    },
    prompt: function (v) {
      return '<p>A cyclist exerts a driving force of $\\quantity{' + v.F + '}{N}$ while travelling at a steady $\\quantity{' + v.v + '}{m\\,s^{-1}}$. Calculate her useful power output.</p><p><i>Give your answer in W, to 3 s.f.</i></p>';
    },
    answer: function (v) { return v.F * v.v; },
    unit: 'W',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Using $P=Fv$:</p>' +
        '<p>$P=\\quantity{' + v.F + '}{N}\\times\\quantity{' + v.v + '}{m\\,s^{-1}}=\\quantity{' + ans.toPrecision(3) + '}{W}$</p>';
    }
  },

  // ---- Conceptual: work done at 90 degrees -----------------------------------------
  {
    type: 'mcq',
    prompt: '<p>A force acts at exactly 90\u00B0 to an object\u2019s direction of motion. How much work does this force do?</p>',
    options: [
      'Zero, since the component of the force in the direction of motion is zero',
      'The full amount, $Fs$, regardless of the angle',
      'Exactly half of $Fs$',
      'It depends on the object\u2019s mass'
    ],
    correctIndex: 0,
    explanation: '<p>Work is given by $W=Fs\\cos\\theta$. At $\\theta=90\\degree$, $\\cos\\theta=0$, so the work done is zero \u2014 a force acting entirely perpendicular to the motion contributes nothing to the object\u2019s displacement in its own direction, and does no work at all.</p>'
  },

  // ---- Conceptual: efficiency can never exceed 100% ---------------------------------
  {
    type: 'mcq',
    prompt: '<p>Why can no real process ever be more than 100% efficient?</p>',
    options: [
      'Because energy is always conserved \u2014 the useful output power can never exceed the input power',
      'Because friction always converts exactly half the input energy to heat',
      'Because efficiency is defined as a fixed constant for each type of machine',
      '100% efficiency is achievable in some processes, just not common ones'
    ],
    correctIndex: 0,
    explanation: '<p>Efficiency is the ratio of useful output power to input power. Since energy can never be created, only transferred, the useful output can never exceed the total input \u2014 any energy not usefully transferred is simply lost elsewhere (often as heat), which is exactly why efficiency is capped at 100%, not because of some separate rule.</p>'
  }
];
