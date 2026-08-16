/* Question bank for non_optical_telescopes.html — loaded before quiz.js is invoked. */

var nonOpticalTelescopesQuestions = [

  // ---- Numeric: minimum angular resolution for a radio telescope -------------
  {
    type: 'numeric',
    generateVars: function () {
      var lambdas_cm = [10, 15, 21, 30];
      var Ds = [25, 50, 76, 100];
      var lambda = lambdas_cm[Math.floor(Math.random() * lambdas_cm.length)];
      var D = Ds[Math.floor(Math.random() * Ds.length)];
      return { lambda: lambda, D: D };
    },
    prompt: function (v) {
      return '<p>A radio telescope has a dish diameter of $\\quantity{' + v.D + '}{m}$ and observes a wavelength of $\\quantity{' + v.lambda + '}{cm}$. Calculate its minimum angular resolution.</p><p><i>Use $\\theta\\approx\\frac{\\lambda}{D}$. Give your answer in radians, standard form to 3 s.f.</i></p>';
    },
    answer: function (v) { return (v.lambda / 100) / v.D; },
    unit: 'rad',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var lambdaM = (v.lambda / 100);
      return '<p>Using $\\theta\\approx\\dfrac{\\lambda}{D}$, with $\\lambda=\\quantity{' + lambdaM + '}{m}$:</p>' +
        '<p>$\\theta=\\dfrac{\\quantity{' + lambdaM + '}{m}}{\\quantity{' + v.D + '}{m}}=\\quantity{' + ans.toExponential(3) + '}{rad}$</p>';
    }
  },

  // ---- Numeric: diameter needed to match an optical telescope's resolution ---
  {
    type: 'numeric',
    generateVars: function () {
      var opticalThetas = [1e-6, 2e-6, 5e-6];
      var radioLambdas_cm = [10, 21, 30];
      var theta = opticalThetas[Math.floor(Math.random() * opticalThetas.length)];
      var lambda = radioLambdas_cm[Math.floor(Math.random() * radioLambdas_cm.length)];
      return { theta: theta, lambda: lambda };
    },
    prompt: function (v) {
      return '<p>A radio telescope observes a wavelength of $\\quantity{' + v.lambda + '}{cm}$. Calculate the dish diameter it would need to match a minimum angular resolution of $\\quantity{' + v.theta.toExponential(1) + '}{rad}$.</p><p><i>Give your answer in metres, standard form to 3 s.f.</i></p>';
    },
    answer: function (v) { return (v.lambda / 100) / v.theta; },
    unit: 'm',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var lambdaM = (v.lambda / 100);
      return '<p>Rearranging $\\theta\\approx\\dfrac{\\lambda}{D}$ for $D$:</p>' +
        '<p>$D=\\dfrac{\\lambda}{\\theta}=\\dfrac{\\quantity{' + lambdaM + '}{m}}{\\quantity{' + v.theta.toExponential(1) + '}{rad}}=\\quantity{' + ans.toExponential(3) + '}{m}$</p>' +
        '<p>This demonstrates why radio telescopes need to be so enormous to match the resolution of a much smaller optical telescope.</p>';
    }
  },

  // ---- Numeric: mesh size threshold, lambda/20 ----------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var lambdas_cm = [8, 10, 21, 40];
      var lambda = lambdas_cm[Math.floor(Math.random() * lambdas_cm.length)];
      return { lambda: lambda };
    },
    prompt: function (v) {
      return '<p>A mesh radio telescope is designed to observe a wavelength of $\\quantity{' + v.lambda + '}{cm}$. Calculate the maximum gap size in the mesh for it to act as an effective reflector.</p><p><i>Give your answer in cm.</i></p>';
    },
    answer: function (v) { return v.lambda / 20; },
    unit: 'cm',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>The mesh gaps must be less than $\\dfrac{\\lambda}{20}$:</p>' +
        '<p>$\\dfrac{\\quantity{' + v.lambda + '}{cm}}{20}=\\quantity{' + ans.toPrecision(3) + '}{cm}$</p>';
    }
  },

  // ---- Conceptual: smaller resolution number = better --------------------------
  {
    type: 'mcq',
    prompt: '<p>Telescope A has a minimum angular resolution of $2\\times 10^{-6}\\,\\units{rad}$. Telescope B has a minimum angular resolution of $2.8\\times 10^{-3}\\,\\units{rad}$, despite having a much larger dish. Which telescope actually resolves finer detail?</p>',
    options: [
      'Telescope A, because a smaller minimum angular resolution means better resolving power',
      'Telescope B, because its larger dish must give it better resolving power',
      'They resolve the same level of detail',
      'It cannot be determined without knowing the collecting power of each'
    ],
    correctIndex: 0,
    explanation: '<p>Minimum angular resolution works the opposite way to what "bigger dish = better" intuition suggests: a <b>smaller</b> value means finer detail can be resolved. Telescope A, despite being smaller, resolves finer detail here \u2014 exactly the situation with a small amateur telescope compared to the much larger Lovell radio telescope, because the Lovell telescope observes a far longer wavelength.</p>'
  },

  // ---- Conceptual: interferometry / array baseline -----------------------------
  {
    type: 'mcq',
    prompt: '<p>A radio telescope array combines the signals from several dishes spread out over a wide area. What determines the improvement in resolution?</p>',
    options: [
      'The baseline \u2014 the distance between the dishes \u2014 analysed through interferometry',
      'The total combined collecting area of all the dishes added together',
      'The number of dishes in the array, regardless of their spacing',
      'The average diameter of the individual dishes'
    ],
    correctIndex: 0,
    explanation: '<p>The improved resolution comes from the <b>baseline</b> \u2014 the separation between dishes \u2014 not from simply summing up the collecting area of each dish. Spreading dishes further apart improves resolution even without adding more collecting area, which is why very long baseline arrays (even spanning continents) are used to achieve extremely fine resolution.</p>'
  },

  // ---- Conceptual: why different telescope types need to be in orbit -----------
  {
    type: 'mcq',
    prompt: '<p>Which of these telescope types can make observations from the ground without needing to be placed in orbit?</p>',
    options: [
      'Radio telescopes (and IR telescopes, if placed somewhere high and dry)',
      'X-ray and gamma-ray telescopes',
      'UV telescopes',
      'All of the above require orbit, since only visible light reaches the ground'
    ],
    correctIndex: 0,
    explanation: '<p>Radio waves pass through the atmosphere largely unimpeded, so radio telescopes work perfectly well on the ground. IR telescopes can also work from the ground if placed somewhere high-altitude and dry, avoiding water vapour absorption. UV, X-ray, and gamma rays are all strongly absorbed by the atmosphere, so telescopes observing these wavelengths generally need to be in orbit.</p>'
  },

  // ---- Conceptual: why IR telescopes need cooling -------------------------------
  {
    type: 'mcq',
    prompt: '<p>Why do infrared telescopes need to be cooled to very low temperatures?</p>',
    options: [
      'Any warm object, including the telescope itself, emits its own IR radiation, which would swamp the faint signal from space',
      'Cooling increases the telescope\u2019s resolving power',
      'Cooling prevents water vapour in the atmosphere from absorbing IR radiation',
      'Cooling is needed to prevent the mirror from expanding and losing its shape'
    ],
    correctIndex: 0,
    explanation: '<p>Any object above absolute zero radiates some IR energy, including the telescope\u2019s own components. Without cooling, this self-emitted IR radiation would overwhelm the very faint IR signals arriving from distant astronomical objects. This is a separate issue from atmospheric water vapour absorption, which is instead addressed by choosing high-altitude, dry observation sites.</p>'
  },

  // ---- Conceptual: why shorter-wavelength telescopes can be smaller -------------
  {
    type: 'mcq',
    prompt: '<p>UV and X-ray telescopes can be much smaller than radio telescopes while still achieving the same resolving power. Why?</p>',
    options: [
      'Because $\\theta\\approx\\frac{\\lambda}{D}$: a much shorter wavelength needs a much smaller diameter to reach the same minimum angular resolution',
      'Because UV and X-ray radiation doesn\u2019t diffract, unlike radio waves',
      'Because UV and X-ray detectors are inherently more sensitive than radio receivers',
      'There is no real difference \u2014 all telescope types need similar sizes for similar resolution'
    ],
    correctIndex: 0,
    explanation: '<p>The relationship $\\theta\\approx\\frac{\\lambda}{D}$ applies across the whole electromagnetic spectrum. Since UV and X-rays have much shorter wavelengths than radio waves, a much smaller $D$ is needed to achieve the same $\\theta$ (resolving power). This single equation explains the size comparisons made throughout this page.</p>'
  }
];
