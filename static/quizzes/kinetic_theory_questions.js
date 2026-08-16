/* Question bank for kinetic_theory.html — loaded before quiz.js is invoked. */

var kineticTheoryQuestions = [

  // ---- Numeric: rms speed from a small list of speeds -----------------------
  {
    type: 'numeric',
    generateVars: function () {
      var sets = [
        [400, 420, 450, 480, 500],
        [350, 500, 550, 600, 620],
        [300, 320, 340, 600, 650],
        [450, 460, 470, 480, 490]
      ];
      var set = sets[Math.floor(Math.random() * sets.length)];
      return { speeds: set };
    },
    prompt: function (v) {
      return '<p>Five gas particles have speeds of $\\quantity{' + v.speeds.join('}{m\\,s^{-1}}$, $\\quantity{') + '}{m\\,s^{-1}}$. Calculate the root mean square speed.</p><p><i>Give your answer in m s<sup>-1</sup>, to 3 s.f.</i></p>';
    },
    answer: function (v) {
      var sumSq = v.speeds.reduce(function (acc, s) { return acc + s * s; }, 0);
      return Math.sqrt(sumSq / v.speeds.length);
    },
    unit: 'm/s',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      var sumSq = v.speeds.reduce(function (acc, s) { return acc + s * s; }, 0);
      return '<p>Square each speed, average them, then take the square root:</p>' +
        '<p>$c_{rms}=\\sqrt{\\dfrac{' + v.speeds.map(function (s) { return s + '^{2}'; }).join('+') + '}{' + v.speeds.length + '}}=\\quantity{' + ans.toPrecision(3) + '}{m\\,s^{-1}}$</p>';
    }
  },

  // ---- Numeric: p = (1/3) rho c^2 --------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var rhos = [1.2, 1.3, 1.4, 1.5];
      var crmss = [400, 450, 500, 550];
      var rho = rhos[Math.floor(Math.random() * rhos.length)];
      var crms = crmss[Math.floor(Math.random() * crmss.length)];
      return { rho: rho, crms: crms };
    },
    prompt: function (v) {
      return '<p>A gas has a density of $\\quantity{' + v.rho + '}{kg\\,m^{-3}}$ and a root mean square speed of $\\quantity{' + v.crms + '}{m\\,s^{-1}}$. Calculate the pressure of the gas.</p><p><i>Give your answer in Pa, standard form to 3 s.f.</i></p>';
    },
    answer: function (v) { return (1 / 3) * v.rho * v.crms * v.crms; },
    unit: 'Pa',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $p=\\dfrac{1}{3}\\rho\\overline{c^{2}}$, where $\\overline{c^2}=c_{rms}^{2}$:</p>' +
        '<p>$p=\\dfrac{1}{3}\\times\\quantity{' + v.rho + '}{kg\\,m^{-3}}\\times\\left(\\quantity{' + v.crms + '}{m\\,s^{-1}}\\right)^{2}=\\quantity{' + ans.toExponential(3) + '}{Pa}$</p>';
    }
  },

  // ---- Numeric: E = (3/2) kT, average KE per particle --------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var Ts = [250, 280, 300, 320, 350];
      var T = Ts[Math.floor(Math.random() * Ts.length)];
      return { T: T };
    },
    prompt: function (v) {
      return '<p>Calculate the average kinetic energy of a single gas particle at a temperature of $\\quantity{' + v.T + '}{K}$.</p><p><i>Use $k=\\quantity{1.38\\times 10^{-23}}{J\\,K^{-1}}$. Give your answer in joules, standard form to 3 s.f.</i></p>';
    },
    answer: function (v) { return 1.5 * 1.38e-23 * v.T; },
    unit: 'J',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $E=\\dfrac{3}{2}kT$:</p>' +
        '<p>$E=\\dfrac{3}{2}\\times\\quantity{1.38\\times 10^{-23}}{J\\,K^{-1}}\\times\\quantity{' + v.T + '}{K}=\\quantity{' + ans.toExponential(3) + '}{J}$</p>' +
        '<p>This is the energy of one particle &mdash; not the total energy of the gas sample.</p>';
    }
  },

  // ---- Numeric: total internal energy = N * (3/2) kT ---------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var Ns = [1e22, 5e22, 1e23, 5e23];
      var Ts = [280, 300, 320];
      var N = Ns[Math.floor(Math.random() * Ns.length)];
      var T = Ts[Math.floor(Math.random() * Ts.length)];
      return { N: N, T: T };
    },
    prompt: function (v) {
      return '<p>A sample of gas contains $\\quantity{' + v.N.toExponential(1) + '}{}$ particles at a temperature of $\\quantity{' + v.T + '}{K}$. Calculate the total kinetic energy of the sample.</p><p><i>Use $k=\\quantity{1.38\\times 10^{-23}}{J\\,K^{-1}}$. Give your answer in joules, standard form to 3 s.f.</i></p>';
    },
    answer: function (v) { return 1.5 * v.N * 1.38e-23 * v.T; },
    unit: 'J',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>The total energy is $N$ times the per-particle average, $E_{total}=\\dfrac{3}{2}NkT$:</p>' +
        '<p>$E_{total}=\\dfrac{3}{2}\\times\\quantity{' + v.N.toExponential(1) + '}{}\\times\\quantity{1.38\\times 10^{-23}}{J\\,K^{-1}}\\times\\quantity{' + v.T + '}{K}=\\quantity{' + ans.toExponential(3) + '}{J}$</p>' +
        '<p>Forgetting to multiply by $N$ here is a very common mistake &mdash; $\\frac{3}{2}kT$ alone only gives the energy of a single particle.</p>';
    }
  },

  // ---- Conceptual: mean square speed vs (mean speed)^2 --------------------------
  {
    type: 'mcq',
    prompt: '<p>Which correctly describes how to calculate root mean square speed?</p>',
    options: [
      'Square each speed, find the average of the squares, then take the square root',
      'Find the average speed first, then square that result',
      'Both methods above always give exactly the same answer',
      'Find the square root of each speed, then average those roots'
    ],
    correctIndex: 0,
    explanation: '<p>The order matters: <b>root</b> of the <b>mean</b> of the <b>squares</b>, in that sequence. Squaring first and then averaging generally gives a different (larger) result than averaging first and squaring afterwards \u2014 these are genuinely different quantities, not two routes to the same number.</p>'
  },

  // ---- Conceptual: why speed not velocity ---------------------------------------
  {
    type: 'mcq',
    prompt: '<p>Why does kinetic theory use mean square <i>speed</i> rather than mean <i>velocity</i> when describing a gas?</p>',
    options: [
      'Velocity is a vector, so the velocities of randomly-moving particles would average to zero and give no useful information',
      'Speed is always a larger number than velocity, making the maths easier',
      'Velocity cannot be measured experimentally, but speed can',
      'There is no real difference between the two in this context'
    ],
    correctIndex: 0,
    explanation: '<p>Gas particles move in completely random directions, so if you averaged their velocities (which have direction), the positive and negative components would cancel out to give zero \u2014 not useful. Speed has no direction, so squaring it (which also removes any sign) and averaging gives a meaningful, always-positive result.</p>'
  },

  // ---- Conceptual: E = 3/2 kT is per particle -----------------------------------
  {
    type: 'mcq',
    prompt: '<p>A question asks for the total internal energy of a sample of gas containing $N$ particles at temperature $T$. Which expression should you use?</p>',
    options: [
      '$E_{total}=\\frac{3}{2}NkT$',
      '$E_{total}=\\frac{3}{2}kT$',
      '$E_{total}=\\frac{3}{2}kT^{2}$',
      '$E_{total}=\\frac{2}{3}NkT$'
    ],
    correctIndex: 0,
    explanation: '<p>$\\frac{3}{2}kT$ is the average energy of a <b>single</b> particle. To find the total energy of all $N$ particles in the sample, you must multiply by $N$: $E_{total}=\\frac{3}{2}NkT$. Using $\\frac{3}{2}kT$ alone when a total is asked for is a very common mistake.</p>'
  },

  // ---- Conceptual: Newton's 3rd law pair in the derivation ------------------------
  {
    type: 'mcq',
    prompt: '<p>In deriving the pressure of a gas from a single particle bouncing off a wall, the force calculated is initially the force <i>on the wall</i>. Why can the minus sign then be dropped to get the force on the particle?</p>',
    options: [
      'Newton\u2019s 3rd law: the force on the particle from the wall is equal in magnitude and opposite in direction to the force on the wall from the particle',
      'The minus sign was a typo in the original derivation and has no physical meaning',
      'Force is a scalar quantity, so it never has a sign in the first place',
      'The particle and the wall always experience exactly the same force, sign included'
    ],
    correctIndex: 0,
    explanation: '<p>By Newton\u2019s 3rd law, the particle and wall exert equal and opposite forces on each other. The derivation switches perspective from "force on the wall" to "force on the particle" partway through, which is exactly why the sign flips \u2014 not because of an error, but because it\u2019s now describing the other half of the action-reaction pair.</p>'
  }
];
