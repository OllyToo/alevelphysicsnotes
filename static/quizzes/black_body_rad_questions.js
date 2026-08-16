/* Question bank for black_body_rad.html — loaded before quiz.js is invoked. */

var blackBodyRadQuestions = [

  // ---- Numeric: Wien's law, find lambda_max -------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var Ts = [3000, 4500, 5800, 8000, 12000];
      var T = Ts[Math.floor(Math.random() * Ts.length)];
      return { T: T };
    },
    prompt: function (v) {
      return '<p>A star has a surface temperature of $\\quantity{' + v.T + '}{K}$. Calculate its peak wavelength.</p><p><i>Use Wien\u2019s constant $=\\quantity{2.9\\times 10^{-3}}{m\\,K}$. Give your answer in nm, to 3 s.f.</i></p>';
    },
    answer: function (v) { return (2.9e-3 / v.T) * 1e9; },
    unit: 'nm',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $\\lambda_{max}=\\dfrac{2.9\\times 10^{-3}}{T}$:</p>' +
        '<p>$\\lambda_{max}=\\dfrac{\\quantity{2.9\\times 10^{-3}}{m\\,K}}{\\quantity{' + v.T + '}{K}}=\\quantity{' + ans.toPrecision(3) + '}{nm}$</p>';
    }
  },

  // ---- Numeric: Wien's law, find T ------------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var lambdas = [250, 350, 500, 700, 1000];
      var lambda = lambdas[Math.floor(Math.random() * lambdas.length)];
      return { lambda: lambda };
    },
    prompt: function (v) {
      return '<p>A star has a peak wavelength of $\\quantity{' + v.lambda + '}{nm}$. Calculate its surface temperature.</p><p><i>Use Wien\u2019s constant $=\\quantity{2.9\\times 10^{-3}}{m\\,K}$. Give your answer in K, to 4 s.f.</i></p>';
    },
    answer: function (v) { return 2.9e-3 / (v.lambda * 1e-9); },
    unit: 'K',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Rearranging $\\lambda_{max}T=2.9\\times 10^{-3}$:</p>' +
        '<p>$T=\\dfrac{2.9\\times 10^{-3}}{\\lambda_{max}}=\\dfrac{\\quantity{2.9\\times 10^{-3}}{m\\,K}}{\\quantity{' + v.lambda + '}{nm}}=\\quantity{' + ans.toPrecision(4) + '}{K}$</p>';
    }
  },

  // ---- Numeric: Stefan's law, find P --------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var rs = [5e8, 7e8, 1e9, 2e9]; // m
      var Ts = [4000, 5800, 8000, 10000];
      var r = rs[Math.floor(Math.random() * rs.length)];
      var T = Ts[Math.floor(Math.random() * Ts.length)];
      return { r: r, T: T };
    },
    prompt: function (v) {
      return '<p>A star has a radius of $\\quantity{' + v.r.toExponential(1) + '}{m}$ and a surface temperature of $\\quantity{' + v.T + '}{K}$. Calculate its luminosity.</p><p><i>Use $\\sigma=\\quantity{5.67\\times 10^{-8}}{W\\,m^{-2}\\,K^{-4}}$. Give your answer in watts, standard form to 3 s.f.</i></p>';
    },
    answer: function (v) {
      var A = 4 * Math.PI * v.r * v.r;
      return 5.67e-8 * A * Math.pow(v.T, 4);
    },
    unit: 'W',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var A = (4 * Math.PI * v.r * v.r).toExponential(3);
      return '<p>$A=4\\pi r^{2}=\\quantity{' + A + '}{m^{2}}$</p>' +
        '<p>$P=\\sigma AT^{4}=\\quantity{5.67\\times 10^{-8}}{W\\,m^{-2}\\,K^{-4}}\\times\\quantity{' + A + '}{m^{2}}\\times\\left(\\quantity{' + v.T + '}{K}\\right)^{4}=\\quantity{' + ans.toExponential(3) + '}{W}$</p>';
    }
  },

  // ---- Numeric: Stefan's law, find T given P and r (Sun-style) -----------------
  {
    type: 'numeric',
    generateVars: function () {
      var Ps = [2e26, 4e26, 6e26, 8e26];
      var rs = [5e8, 7e8, 9e8, 1.2e9];
      var P = Ps[Math.floor(Math.random() * Ps.length)];
      var r = rs[Math.floor(Math.random() * rs.length)];
      return { P: P, r: r };
    },
    prompt: function (v) {
      return '<p>A star has a luminosity of $\\quantity{' + v.P.toExponential(1) + '}{W}$ and a radius of $\\quantity{' + v.r.toExponential(1) + '}{m}$. Calculate its surface temperature.</p><p><i>Use $\\sigma=\\quantity{5.67\\times 10^{-8}}{W\\,m^{-2}\\,K^{-4}}$. Give your answer in K, to 4 s.f.</i></p>';
    },
    answer: function (v) {
      var A = 4 * Math.PI * v.r * v.r;
      return Math.pow(v.P / (5.67e-8 * A), 0.25);
    },
    unit: 'K',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var A = (4 * Math.PI * v.r * v.r).toExponential(3);
      return '<p>$A=4\\pi r^{2}=\\quantity{' + A + '}{m^{2}}$</p>' +
        '<p>Rearranging $P=\\sigma AT^{4}$: $T=\\left(\\dfrac{P}{\\sigma A}\\right)^{1/4}=\\quantity{' + ans.toPrecision(4) + '}{K}$</p>';
    }
  },

  // ---- Numeric: comparing two stars' diameters ----------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var PRatios = [2, 4, 9, 16];
      var TRatios = [0.5, 2, 1.5, 0.8];
      var Pr = PRatios[Math.floor(Math.random() * PRatios.length)];
      var Tr = TRatios[Math.floor(Math.random() * TRatios.length)];
      return { Pr: Pr, Tr: Tr };
    },
    prompt: function (v) {
      return '<p>Star &alpha; has ' + v.Pr + ' times the luminosity of star &beta;, and star &alpha;\u2019s temperature is ' + v.Tr + ' times star &beta;\u2019s temperature. Calculate the ratio of their diameters, $\\frac{D_\\alpha}{D_\\beta}$.</p><p><i>Give your answer to 3 s.f.</i></p>';
    },
    answer: function (v) { return Math.sqrt(v.Pr) * (1 / (v.Tr * v.Tr)); },
    unit: '',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $\\dfrac{D_\\alpha}{D_\\beta}=\\sqrt{\\dfrac{P_\\alpha}{P_\\beta}}\\times\\dfrac{T_\\beta^{2}}{T_\\alpha^{2}}$:</p>' +
        '<p>$\\dfrac{D_\\alpha}{D_\\beta}=\\sqrt{' + v.Pr + '}\\times\\dfrac{1}{' + v.Tr + '^{2}}=' + ans.toPrecision(3) + '$</p>';
    }
  },

  // ---- Conceptual: peak wavelength terminology ----------------------------------
  {
    type: 'mcq',
    prompt: '<p>In Wien\u2019s law, $\\lambda_{max}T=\\mathrm{constant}$, what does $\\lambda_{max}$ represent?</p>',
    options: [
      'The wavelength emitted with the greatest intensity (the "peak" wavelength)',
      'The longest wavelength emitted by the star at all',
      'The shortest wavelength emitted by the star',
      'The average wavelength across the whole emission spectrum'
    ],
    correctIndex: 0,
    explanation: '<p>$\\lambda_{max}$ is the peak wavelength \u2014 the one emitted with the greatest intensity. It is explicitly <b>not</b> the maximum (longest) wavelength emitted; a blackbody continues emitting at longer wavelengths too, just with lower intensity. Calling it the "maximum wavelength" is a common way to lose marks.</p>'
  },

  // ---- Conceptual: same luminosity, hotter = smaller ------------------------------
  {
    type: 'mcq',
    prompt: '<p>Two stars have identical luminosity, but star A is hotter than star B. What can you conclude about their sizes?</p>',
    options: [
      'Star A (the hotter one) has the smaller surface area / diameter',
      'Star A (the hotter one) has the larger surface area / diameter',
      'They must be the same size, since luminosity is identical',
      'No conclusion can be drawn about size from temperature and luminosity alone'
    ],
    correctIndex: 0,
    explanation: '<p>From $P=\\sigma AT^{4}$, if $P$ is fixed and $T$ increases, $A$ must decrease. So the hotter star, despite radiating the same total power, must have a smaller surface area \u2014 counter-intuitive, since "hotter" doesn\u2019t usually suggest "smaller".</p>'
  },

  // ---- Conceptual: Balmer line strength across spectral classes -------------------
  {
    type: 'mcq',
    prompt: '<p>Which spectral classes show the strongest hydrogen Balmer absorption lines?</p>',
    options: [
      'A and B class (mid-to-high temperature) \u2014 not the hottest (O) or coolest (M) stars',
      'O class \u2014 the hottest stars always have the strongest hydrogen lines',
      'M class \u2014 the coolest stars have the most hydrogen available to absorb',
      'All classes show equally strong Balmer lines, since all stars contain hydrogen'
    ],
    correctIndex: 0,
    explanation: '<p>Balmer lines need hydrogen electrons in the $n=2$ state. In the hottest O class stars, hydrogen is mostly <b>ionised</b> (no electron to absorb), so Balmer lines are weak. In the coolest M class stars, electrons stay in the <b>ground state</b> ($n=1$), so Balmer lines are also weak. Only in the intermediate A and B class stars is there enough hydrogen in the $n=2$ state to produce strong Balmer lines.</p>'
  }
];
