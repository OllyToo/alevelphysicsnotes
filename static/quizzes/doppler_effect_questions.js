/* Question bank for doppler_effect.html — loaded before quiz.js is invoked. */

var dopplerEffectQuestions = [

  // ---- Numeric: v from Delta-lambda and lambda ---------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var lambdas = [434.05, 500, 656.3, 486.1];
      var dlambdas = [-0.05, -0.1, 0.08, 0.15, -0.2];
      var lambda = lambdas[Math.floor(Math.random() * lambdas.length)];
      var dlambda = dlambdas[Math.floor(Math.random() * dlambdas.length)];
      return { lambda: lambda, dlambda: dlambda };
    },
    prompt: function (v) {
      return '<p>A spectral line with a rest wavelength of $\\quantity{' + v.lambda + '}{nm}$ is observed with $\\Delta\\lambda=\\quantity{' + v.dlambda + '}{nm}$ (using the AQA convention, $\\Delta\\lambda=\\lambda_{lab}-\\lambda_{obs}$). Calculate the velocity of the source.</p><p><i>Give your answer in m s<sup>-1</sup>, standard form to 3 s.f. A negative answer means moving away.</i></p>';
    },
    answer: function (v) { return -(v.dlambda / v.lambda) * 3.00e8; },
    unit: 'm/s',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $v=-\\dfrac{\\Delta\\lambda\\,c}{\\lambda}$:</p>' +
        '<p>$v=-\\dfrac{\\quantity{' + v.dlambda + '}{nm}\\times\\quantity{3.00\\times 10^{8}}{m\\,s^{-1}}}{\\quantity{' + v.lambda + '}{nm}}=\\quantity{' + ans.toExponential(3) + '}{m\\,s^{-1}}$</p>';
    }
  },

  // ---- Numeric: v from Delta-f and f -----------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var fs = [5.0e14, 6.0e14, 4.5e14];
      var dfs = [1e11, 2e11, -1.5e11, 3e11];
      var f = fs[Math.floor(Math.random() * fs.length)];
      var df = dfs[Math.floor(Math.random() * dfs.length)];
      return { f: f, df: df };
    },
    prompt: function (v) {
      return '<p>A spectral line with a rest frequency of $\\quantity{' + v.f.toExponential(2) + '}{Hz}$ is observed with $\\Delta f=\\quantity{' + v.df.toExponential(2) + '}{Hz}$ (using $\\Delta f=f_{lab}-f_{obs}$). Calculate the velocity of the source.</p><p><i>Give your answer in m s<sup>-1</sup>, standard form to 3 s.f.</i></p>';
    },
    answer: function (v) { return (v.df / v.f) * 3.00e8; },
    unit: 'm/s',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $\\dfrac{\\Delta f}{f}=\\dfrac{v}{c}$:</p>' +
        '<p>$v=\\dfrac{\\Delta f}{f}\\times c=\\dfrac{\\quantity{' + v.df.toExponential(2) + '}{Hz}}{\\quantity{' + v.f.toExponential(2) + '}{Hz}}\\times\\quantity{3.00\\times 10^{8}}{m\\,s^{-1}}=\\quantity{' + ans.toExponential(3) + '}{m\\,s^{-1}}$</p>';
    }
  },

  // ---- Numeric: rearranged, find Delta-lambda given v and lambda --------------
  {
    type: 'numeric',
    generateVars: function () {
      var vs = [1000, 5000, 20000, 50000];
      var lambdas = [500, 550, 656.3];
      var v = vs[Math.floor(Math.random() * vs.length)];
      var lambda = lambdas[Math.floor(Math.random() * lambdas.length)];
      return { v: v, lambda: lambda };
    },
    prompt: function (v) {
      return '<p>A star is moving away from Earth at $\\quantity{' + v.v + '}{m\\,s^{-1}}$. A spectral line has a rest wavelength of $\\quantity{' + v.lambda + '}{nm}$. Calculate $\\Delta\\lambda$ (using the AQA convention).</p><p><i>Give your answer in nm, to 3 s.f. (should be negative, since the star is receding).</i></p>';
    },
    answer: function (v) { return -(v.v / 3.00e8) * v.lambda; },
    unit: 'nm',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $\\dfrac{v}{c}=-\\dfrac{\\Delta\\lambda}{\\lambda}$, rearranged:</p>' +
        '<p>$\\Delta\\lambda=-\\dfrac{v\\lambda}{c}=-\\dfrac{\\quantity{' + v.v + '}{m\\,s^{-1}}\\times\\quantity{' + v.lambda + '}{nm}}{\\quantity{3.00\\times 10^{8}}{m\\,s^{-1}}}=\\quantity{' + ans.toPrecision(3) + '}{nm}$</p>';
    }
  },

  // ---- Numeric: solar-rotation style, differential limb method ----------------
  {
    type: 'numeric',
    generateVars: function () {
      var restLambda = 434.0472;
      var shifts = [0.002, 0.003, 0.004, 0.005, 0.006];
      var shift = shifts[Math.floor(Math.random() * shifts.length)];
      var lambdaLeft = +(restLambda - shift).toFixed(4);
      var lambdaRight = +(restLambda + shift).toFixed(4);
      return { lambdaLeft: lambdaLeft, lambdaRight: lambdaRight, restLambda: restLambda };
    },
    prompt: function (v) {
      return '<p>A hydrogen line observed from one limb of a rotating star has a wavelength of $\\quantity{' + v.lambdaLeft + '}{nm}$, and from the opposite limb, $\\quantity{' + v.lambdaRight + '}{nm}$. The rest wavelength is $\\quantity{' + v.restLambda + '}{nm}$. Calculate the star\u2019s rotational speed at its surface.</p><p><i>Give your answer in m s<sup>-1</sup>, to 3 s.f.</i></p>';
    },
    answer: function (v) {
      var dlambda = (v.lambdaLeft - v.lambdaRight) / 2;
      return -(dlambda / v.restLambda) * 3.00e8;
    },
    unit: 'm/s',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var dlambda = ((v.lambdaLeft - v.lambdaRight) / 2).toPrecision(3);
      return '<p>$\\Delta\\lambda=\\dfrac{\\lambda_{left}-\\lambda_{right}}{2}=\\quantity{' + dlambda + '}{nm}$</p>' +
        '<p>$v=-\\dfrac{\\Delta\\lambda\\,c}{\\lambda}=\\quantity{' + ans.toPrecision(3) + '}{m\\,s^{-1}}$</p>';
    }
  },

  // ---- Numeric: rotational period from v and r (like the worked example) ------
  {
    type: 'numeric',
    generateVars: function () {
      var rs = [3e8, 5e8, 7e8, 1e9];
      var vs = [1000, 1500, 2000, 3000];
      var r = rs[Math.floor(Math.random() * rs.length)];
      var v = vs[Math.floor(Math.random() * vs.length)];
      return { r: r, v: v };
    },
    prompt: function (v) {
      return '<p>A star has a radius of $\\quantity{' + v.r.toExponential(1) + '}{m}$ and a surface rotational speed of $\\quantity{' + v.v + '}{m\\,s^{-1}}$. Calculate its rotational period.</p><p><i>Give your answer in days, to 3 s.f.</i></p>';
    },
    answer: function (v) { return (2 * Math.PI * v.r / v.v) / 86400; },
    unit: 'days',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var Ts = (2 * Math.PI * v.r / v.v).toPrecision(4);
      return '<p>Using $T=\\dfrac{2\\pi r}{v}$:</p>' +
        '<p>$T=\\dfrac{2\\pi\\times\\quantity{' + v.r.toExponential(1) + '}{m}}{\\quantity{' + v.v + '}{m\\,s^{-1}}}=\\quantity{' + Ts + '}{s}=\\quantity{' + ans.toPrecision(3) + '}{days}$</p>';
    }
  },

  // ---- Conceptual: sign of z --------------------------------------------------
  {
    type: 'mcq',
    prompt: '<p>A galaxy is found to have a redshift of $z=+0.02$. What does the positive sign tell you?</p>',
    options: [
      'The galaxy is moving away from us',
      'The galaxy is moving towards us',
      'The galaxy is stationary relative to us',
      'The sign of z has no physical meaning, only its magnitude matters'
    ],
    correctIndex: 0,
    explanation: '<p>Positive $z$ means redshift, which corresponds to the source <b>moving away</b> from the observer. Negative $z$ (blueshift) would mean moving towards the observer.</p>'
  },

  // ---- Conceptual: validity of the equation (v << c) -----------------------------
  {
    type: 'mcq',
    prompt: '<p>Under what condition is $z=\\frac{\\Delta\\lambda}{\\lambda}=\\frac{v}{c}$ a valid approximation?</p>',
    options: [
      'When the source\u2019s speed is much less than the speed of light',
      'Only when the source is moving directly towards the observer',
      'It is valid for any speed, including speeds close to c',
      'Only when observing radio wavelengths, not optical'
    ],
    correctIndex: 0,
    explanation: '<p>This is a non-relativistic approximation, valid only when $v\\ll c$. For speeds that are a significant fraction of the speed of light, relativistic effects become important and this simple equation is no longer accurate.</p>'
  },

  // ---- Conceptual: radial velocity vs transit method -----------------------------
  {
    type: 'mcq',
    prompt: '<p>Which statement correctly distinguishes the radial velocity method from the transit method for studying binary stars or exoplanets?</p>',
    options: [
      'Radial velocity (Doppler shift) reveals speed, period, and mass; the transit method (light curve dimming) reveals relative size',
      'Both methods measure exactly the same physical quantities',
      'The transit method uses Doppler shift; the radial velocity method uses light curves',
      'Radial velocity only works for exoplanets; the transit method only works for binary stars'
    ],
    correctIndex: 0,
    explanation: '<p>The radial velocity method tracks Doppler shifts in spectral lines, giving information about speed, and from that, orbital period and mass. The transit method tracks dimming in the light curve as one object passes in front of another, which depends on the relative size of the eclipsing object rather than its speed or mass directly.</p>'
  }
];
