/* Question bank for telescopes.html — loaded before quiz.js is invoked. */

var telescopesQuestions = [

  // ---- Numeric: angular size, theta = s/r ------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ss = [1000, 2000, 3474, 5000];
      var rs = [200000, 300000, 384400, 500000];
      var s = ss[Math.floor(Math.random() * ss.length)];
      var r = rs[Math.floor(Math.random() * rs.length)];
      return { s: s, r: r };
    },
    prompt: function (v) {
      return '<p>An object has a diameter of $\\quantity{' + v.s + '}{km}$ and is $\\quantity{' + v.r + '}{km}$ from an observer. Calculate its angular size.</p><p><i>Give your answer in radians, standard form to 3 s.f.</i></p>';
    },
    answer: function (v) { return v.s / v.r; },
    unit: 'rad',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $\\theta=\\dfrac{s}{r}$:</p>' +
        '<p>$\\theta=\\dfrac{\\quantity{' + v.s + '}{km}}{\\quantity{' + v.r + '}{km}}=\\quantity{' + ans.toExponential(3) + '}{rad}$</p>';
    }
  },

  // ---- Numeric: angular magnification, M = fo/fe ------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var fos = [800, 1000, 1200, 1500];
      var fes = [10, 20, 25, 40];
      var fo = fos[Math.floor(Math.random() * fos.length)];
      var fe = fes[Math.floor(Math.random() * fes.length)];
      return { fo: fo, fe: fe };
    },
    prompt: function (v) {
      return '<p>A refracting telescope in normal adjustment has an objective lens with focal length $\\quantity{' + v.fo + '}{mm}$ and an eyepiece with focal length $\\quantity{' + v.fe + '}{mm}$. Calculate the angular magnification.</p>';
    },
    answer: function (v) { return v.fo / v.fe; },
    unit: '',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Using $M=\\dfrac{f_o}{f_e}$:</p>' +
        '<p>$M=\\dfrac{\\quantity{' + v.fo + '}{mm}}{\\quantity{' + v.fe + '}{mm}}=' + ans.toPrecision(3) + '$</p>';
    }
  },

  // ---- Numeric: telescope length problem (like the worked example) -----------
  {
    type: 'numeric',
    generateVars: function () {
      var lengths = [2.0, 3.0, 3.7, 4.5, 5.0];
      var Ms = [30, 40, 50, 60];
      var length = lengths[Math.floor(Math.random() * lengths.length)];
      var M = Ms[Math.floor(Math.random() * Ms.length)];
      return { length: length, M: M };
    },
    prompt: function (v) {
      return '<p>A refracting telescope in normal adjustment has a total length of $\\quantity{' + v.length + '}{m}$ and a magnification of ' + v.M + '. Calculate the focal length of the eyepiece.</p><p><i>Give your answer in metres, to 3 s.f.</i></p>';
    },
    answer: function (v) { return v.length / (v.M + 1); },
    unit: 'm',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Since $f_o+f_e=\\quantity{' + v.length + '}{m}$ and $f_o=' + v.M + 'f_e$:</p>' +
        '<p>$' + v.M + 'f_e+f_e=\\quantity{' + v.length + '}{m}\\Rightarrow f_e=\\dfrac{\\quantity{' + v.length + '}{m}}{' + (v.M + 1) + '}=\\quantity{' + ans.toPrecision(3) + '}{m}$</p>';
    }
  },

  // ---- Numeric: Rayleigh criterion, find theta --------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var lambdas = [400, 500, 550, 650]; // nm
      var Ds = [0.1, 0.2, 0.5, 1.0, 2.4]; // m
      var lambda = lambdas[Math.floor(Math.random() * lambdas.length)];
      var D = Ds[Math.floor(Math.random() * Ds.length)];
      return { lambda: lambda, D: D };
    },
    prompt: function (v) {
      return '<p>A telescope has an objective diameter of $\\quantity{' + v.D + '}{m}$ and observes light of wavelength $\\quantity{' + v.lambda + '}{nm}$. Calculate the minimum angular resolution of the telescope.</p><p><i>Use $\\theta\\approx\\frac{\\lambda}{D}$. Give your answer in radians, standard form to 3 s.f.</i></p>';
    },
    answer: function (v) { return (v.lambda * 1e-9) / v.D; },
    unit: 'rad',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var lambdaM = (v.lambda * 1e-9).toExponential(2);
      return '<p>Using $\\theta\\approx\\dfrac{\\lambda}{D}$, with $\\lambda=\\quantity{' + lambdaM + '}{m}$:</p>' +
        '<p>$\\theta=\\dfrac{\\quantity{' + lambdaM + '}{m}}{\\quantity{' + v.D + '}{m}}=\\quantity{' + ans.toExponential(3) + '}{rad}$</p>';
    }
  },

  // ---- Numeric: Rayleigh criterion, find D -------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var lambdas = [500, 550, 600, 700]; // nm
      var thetas = [1e-6, 2e-6, 5e-6, 1e-7]; // rad
      var lambda = lambdas[Math.floor(Math.random() * lambdas.length)];
      var theta = thetas[Math.floor(Math.random() * thetas.length)];
      return { lambda: lambda, theta: theta };
    },
    prompt: function (v) {
      return '<p>A telescope needs to resolve an angle of $\\quantity{' + v.theta.toExponential(1) + '}{rad}$ when observing light of wavelength $\\quantity{' + v.lambda + '}{nm}$. Calculate the minimum diameter of the objective required.</p><p><i>Use $\\theta\\approx\\frac{\\lambda}{D}$. Give your answer in metres, standard form to 3 s.f.</i></p>';
    },
    answer: function (v) { return (v.lambda * 1e-9) / v.theta; },
    unit: 'm',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var lambdaM = (v.lambda * 1e-9).toExponential(2);
      return '<p>Rearranging $\\theta\\approx\\dfrac{\\lambda}{D}$ for $D$:</p>' +
        '<p>$D=\\dfrac{\\lambda}{\\theta}=\\dfrac{\\quantity{' + lambdaM + '}{m}}{\\quantity{' + v.theta.toExponential(1) + '}{rad}}=\\quantity{' + ans.toExponential(3) + '}{m}$</p>';
    }
  },

  // ---- Conceptual: spherical vs chromatic aberration --------------------------
  {
    type: 'mcq',
    prompt: '<p>Which statement correctly distinguishes spherical and chromatic aberration?</p>',
    options: [
      'Spherical aberration affects both refractors and reflectors; chromatic aberration affects only refractors',
      'Chromatic aberration affects both refractors and reflectors; spherical aberration affects only refractors',
      'Both aberrations affect only reflecting telescopes',
      'Both aberrations are corrected using an achromatic doublet'
    ],
    correctIndex: 0,
    explanation: '<p>Spherical aberration comes from the shape of a spherical lens or mirror, so it can affect <b>both</b> refracting and reflecting telescopes (corrected with a parabolic lens/mirror). Chromatic aberration comes from different wavelengths refracting by different amounts, so it only affects <b>refracting</b> telescopes, since mirrors don\u2019t refract light (corrected with an achromatic doublet).</p>'
  },

  // ---- Conceptual: smaller theta = better resolution --------------------------
  {
    type: 'mcq',
    prompt: '<p>Telescope A has a minimum angular resolution of $2\\times10^{-6}\\,\\units{rad}$. Telescope B has a minimum angular resolution of $5\\times10^{-7}\\,\\units{rad}$. Which telescope can resolve finer detail?</p>',
    options: [
      'Telescope B, since a smaller minimum angular resolution means better resolving power',
      'Telescope A, since a larger number means it can resolve more',
      'They have identical resolving power',
      'It depends on which one has the larger objective diameter, not the angle given'
    ],
    correctIndex: 0,
    explanation: '<p>A <b>smaller</b> value of the minimum angular resolution means a telescope can distinguish two objects that are closer together \u2014 i.e. better resolving power. Telescope B\u2019s value is smaller, so it resolves finer detail. This is counter-intuitive if you expect "bigger number = better", so it\u2019s worth double-checking on any comparison question.</p>'
  },

  // ---- Conceptual: collecting power proportional to D^2 -------------------------
  {
    type: 'mcq',
    prompt: '<p>A telescope\u2019s objective diameter is doubled, with everything else unchanged. What happens to the amount of light it can collect?</p>',
    options: [
      'It increases by a factor of 4',
      'It increases by a factor of 2',
      'It increases by a factor of 8',
      'It stays the same, since collecting power depends only on wavelength'
    ],
    correctIndex: 0,
    explanation: '<p>Collecting power (the amount of light gathered) is proportional to the <b>square</b> of the diameter. Doubling the diameter increases the light-collecting area by a factor of $2^2=4$ \u2014 this is one of the main reasons astronomers build telescopes with the largest possible mirrors.</p>'
  }
];
