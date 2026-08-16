/* Question bank for big_bang.html — loaded before quiz.js is invoked. */

var bigBangQuestions = [

  // ---- Numeric: v = Hd, find v --------------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ds = [50, 100, 200, 350, 500];
      var d = ds[Math.floor(Math.random() * ds.length)];
      return { d: d };
    },
    prompt: function (v) {
      return '<p>Calculate the recessional velocity of a galaxy $\\quantity{' + v.d + '}{Mpc}$ away.</p><p><i>Use $H=\\quantity{65}{km\\,s^{-1}\\,Mpc^{-1}}$. Give your answer in km s<sup>-1</sup>.</i></p>';
    },
    answer: function (v) { return 65 * v.d; },
    unit: 'km/s',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Using $v=Hd$:</p>' +
        '<p>$v=\\quantity{65}{km\\,s^{-1}\\,Mpc^{-1}}\\times\\quantity{' + v.d + '}{Mpc}=\\quantity{' + ans.toPrecision(3) + '}{km\\,s^{-1}}$</p>';
    }
  },

  // ---- Numeric: v = Hd, find d ----------------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var vs = [3250, 6500, 13000, 22750];
      var v = vs[Math.floor(Math.random() * vs.length)];
      return { v: v };
    },
    prompt: function (v) {
      return '<p>A galaxy is receding at $\\quantity{' + v.v + '}{km\\,s^{-1}}$. Calculate its distance from Earth.</p><p><i>Use $H=\\quantity{65}{km\\,s^{-1}\\,Mpc^{-1}}$. Give your answer in Mpc.</i></p>';
    },
    answer: function (v) { return v.v / 65; },
    unit: 'Mpc',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Rearranging $v=Hd$:</p>' +
        '<p>$d=\\dfrac{v}{H}=\\dfrac{\\quantity{' + v.v + '}{km\\,s^{-1}}}{\\quantity{65}{km\\,s^{-1}\\,Mpc^{-1}}}=\\quantity{' + ans.toPrecision(3) + '}{Mpc}$</p>';
    }
  },

  // ---- Numeric: age of the universe from H -----------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var Hs = [60, 65, 70, 72];
      var H = Hs[Math.floor(Math.random() * Hs.length)];
      return { H: H };
    },
    prompt: function (v) {
      return '<p>Estimate the age of the universe if the Hubble constant is $\\quantity{' + v.H + '}{km\\,s^{-1}\\,Mpc^{-1}}$.</p><p><i>Use $\\quantity{1}{Mpc}=\\quantity{3.08\\times 10^{19}}{km}$. Give your answer in billions of years, to 3 s.f.</i></p>';
    },
    answer: function (v) {
      var H_per_s = v.H / 3.08e19;
      var age_s = 1 / H_per_s;
      return age_s / (365.25 * 24 * 3600) / 1e9;
    },
    unit: 'billion years',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var H_per_s = (v.H / 3.08e19).toExponential(3);
      return '<p>$H=\\dfrac{\\quantity{' + v.H + '}{km\\,s^{-1}\\,Mpc^{-1}}}{\\quantity{3.08\\times 10^{19}}{km\\,Mpc^{-1}}}=\\quantity{' + H_per_s + '}{s^{-1}}$</p>' +
        '<p>Age $=\\dfrac{1}{H}=\\quantity{' + ans.toPrecision(3) + '}{billion\\,years}$</p>';
    }
  },

  // ---- Numeric: multi-step redshift-to-distance problem -----------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var lambdaLabs = [5.00, 5.40, 6.00];
      var shifts = [0.10, 0.15, 0.21, 0.25];
      var lambdaLab = lambdaLabs[Math.floor(Math.random() * lambdaLabs.length)];
      var shift = shifts[Math.floor(Math.random() * shifts.length)];
      var lambdaObs = +(lambdaLab + shift).toFixed(2);
      return { lambdaLab: lambdaLab, lambdaObs: lambdaObs };
    },
    prompt: function (v) {
      return '<p>A spectral line with a lab wavelength of $\\quantity{' + v.lambdaLab + '\\times 10^{-7}}{m}$ is observed at $\\quantity{' + v.lambdaObs + '\\times 10^{-7}}{m}$ from a distant galaxy. Calculate the distance to the galaxy.</p><p><i>Use $H=\\quantity{65}{km\\,s^{-1}\\,Mpc^{-1}}$. Give your answer in Mpc, to 3 s.f.</i></p>';
    },
    answer: function (v) {
      var dlambda = (v.lambdaLab - v.lambdaObs) * 1e-7;
      var vel = -(dlambda / (v.lambdaLab * 1e-7)) * 3.00e8; // m/s
      var vel_km = vel / 1000;
      return vel_km / 65;
    },
    unit: 'Mpc',
    tolerancePercent: 3,
    explanation: function (v, ans) {
      var dlambda = ((v.lambdaLab - v.lambdaObs)).toPrecision(3);
      var vel = (-(((v.lambdaLab - v.lambdaObs) * 1e-7) / (v.lambdaLab * 1e-7)) * 3.00e8);
      return '<p>$\\Delta\\lambda=(\\lambda_{lab}-\\lambda_{obs})=' + dlambda + '\\times 10^{-7}\\,\\units{m}$</p>' +
        '<p>$v=-\\dfrac{\\Delta\\lambda c}{\\lambda}=\\quantity{' + vel.toExponential(3) + '}{m\\,s^{-1}}=\\quantity{' + (vel / 1000).toPrecision(3) + '}{km\\,s^{-1}}$</p>' +
        '<p>$d=\\dfrac{v}{H}=\\quantity{' + ans.toPrecision(3) + '}{Mpc}$</p>';
    }
  },

  // ---- Conceptual: redshift cause -------------------------------------------------
  {
    type: 'mcq',
    prompt: '<p>What actually causes the cosmological redshift described by Hubble\u2019s law?</p>',
    options: [
      'The expansion of space itself stretching the light as it travels',
      'Galaxies physically moving through space away from us, exactly like the ordinary Doppler effect',
      'Light losing energy as it travels through the vacuum of space over long distances',
      'Gravitational attraction from nearby galaxies slowing down the light'
    ],
    correctIndex: 0,
    explanation: '<p>Cosmological redshift comes from the expansion of space itself, stretching the wavelength of light as it travels &mdash; not from galaxies moving through a fixed, unchanging space (which is what the ordinary Doppler effect describes). The balloon analogy captures this: the "distance" between galaxies grows because the space between them expands.</p>'
  },

  // ---- Conceptual: constant H assumption ----------------------------------------------
  {
    type: 'mcq',
    prompt: '<p>Estimating the age of the universe as $\\frac{1}{H}$ relies on which assumption?</p>',
    options: [
      'That the Hubble constant has remained constant throughout the universe\u2019s entire history',
      'That the universe is not actually expanding',
      'That dark energy does not exist',
      'That all galaxies are the same distance from Earth'
    ],
    correctIndex: 0,
    explanation: '<p>The calculation $\\mathrm{age}=\\frac{1}{H}$ only gives an exact age if $H$ has never changed. In reality the expansion rate has varied over cosmic history (and is currently accelerating due to dark energy), so this is a useful estimate rather than an exact figure.</p>'
  },

  // ---- Conceptual: dark energy vs dark matter -----------------------------------------
  {
    type: 'mcq',
    prompt: '<p>What is the key difference between dark energy and dark matter?</p>',
    options: [
      'Dark energy is associated with the accelerating expansion of the universe; dark matter is associated with extra gravitational effects holding galaxies together',
      'They are two names for exactly the same phenomenon',
      'Dark energy holds galaxies together; dark matter causes the universe to expand',
      'Dark matter is a well-understood, directly observed substance, unlike dark energy'
    ],
    correctIndex: 0,
    explanation: '<p>Dark energy is linked to the observed <i>acceleration</i> of universal expansion &mdash; an anti-gravitating effect. Dark matter is linked to <i>gravitational</i> effects, providing extra mass that helps hold galaxies and galaxy clusters together. Both are unexplained, but they refer to different phenomena and shouldn\u2019t be used interchangeably.</p>'
  },

  // ---- Conceptual: quasars as evidence against steady state -----------------------------
  {
    type: 'mcq',
    prompt: '<p>Why does the absence of quasars in the nearby (local) universe count as evidence against the steady state theory?</p>',
    options: [
      'Since light from distant quasars took billions of years to arrive, seeing them only at great distances means we only see them as they were long ago \u2014 showing the universe has changed over time',
      'Quasars are too dim to be detected at any distance, so their absence tells us nothing',
      'The steady state theory specifically predicted that quasars would never exist',
      'Local quasars have simply not been searched for yet'
    ],
    correctIndex: 0,
    explanation: '<p>Because looking at greater distances means looking further back in time, finding quasars only at great distances (and none nearby) means quasars existed in the early universe but don\u2019t exist today. This shows the universe\u2019s properties have changed with time &mdash; something the steady state theory (which claims the universe looks the same at all times) cannot explain.</p>'
  }
];
