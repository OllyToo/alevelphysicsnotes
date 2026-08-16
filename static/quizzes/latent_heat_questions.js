/* Question bank for latent_heat.html — loaded before quiz.js is invoked. */

var latentHeatQuestions = [

  // ---- Numeric: basic Q = ml --------------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ms = [0.1, 0.2, 0.5, 1.0];
      var ls = [334000, 340000, 2260000, 400000];
      var m = ms[Math.floor(Math.random() * ms.length)];
      var l = ls[Math.floor(Math.random() * ls.length)];
      return { m: m, l: l };
    },
    prompt: function (v) {
      return '<p>Calculate the energy required to completely change the state of $\\quantity{' + v.m + '}{kg}$ of a material with specific latent heat $\\quantity{' + v.l.toExponential(2) + '}{J\\,kg^{-1}}$.</p><p><i>Give your answer in joules (J), standard form to 2 s.f.</i></p>';
    },
    answer: function (v) { return v.m * v.l; },
    unit: 'J',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $Q=ml$:</p>' +
        '<p>$Q=\\quantity{' + v.m + '}{kg}\\times\\quantity{' + v.l.toExponential(2) + '}{J\\,kg^{-1}}=\\quantity{' + ans.toExponential(2) + '}{J}$</p>';
    }
  },

  // ---- Numeric: rearranged, find l ---------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ms = [0.05, 0.1, 0.2, 0.5];
      var Qs = [17000, 34000, 68000, 100000];
      var m = ms[Math.floor(Math.random() * ms.length)];
      var Q = Qs[Math.floor(Math.random() * Qs.length)];
      return { m: m, Q: Q };
    },
    prompt: function (v) {
      return '<p>$\\quantity{' + v.Q + '}{J}$ of energy completely melts $\\quantity{' + v.m + '}{kg}$ of a solid. Calculate its specific latent heat of fusion.</p><p><i>Give your answer in J kg<sup>-1</sup>, standard form to 2 s.f.</i></p>';
    },
    answer: function (v) { return v.Q / v.m; },
    unit: 'J/kg',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Rearranging $Q=ml$:</p>' +
        '<p>$l=\\dfrac{Q}{m}=\\dfrac{\\quantity{' + v.Q + '}{J}}{\\quantity{' + v.m + '}{kg}}=\\quantity{' + ans.toExponential(2) + '}{J\\,kg^{-1}}$</p>';
    }
  },

  // ---- Numeric: rearranged, find m ---------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var Qs = [50000, 100000, 170000, 340000];
      var l = 334000;
      var Q = Qs[Math.floor(Math.random() * Qs.length)];
      return { Q: Q, l: l };
    },
    prompt: function (v) {
      return '<p>Ice has a specific latent heat of fusion of $\\quantity{' + v.l.toExponential(2) + '}{J\\,kg^{-1}}$. Calculate the mass of ice that could be melted by $\\quantity{' + v.Q + '}{J}$ of energy.</p><p><i>Give your answer in kg, to 3 s.f.</i></p>';
    },
    answer: function (v) { return v.Q / v.l; },
    unit: 'kg',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Rearranging $Q=ml$:</p>' +
        '<p>$m=\\dfrac{Q}{l}=\\dfrac{\\quantity{' + v.Q + '}{J}}{\\quantity{' + v.l.toExponential(2) + '}{J\\,kg^{-1}}}=\\quantity{' + ans.toPrecision(3) + '}{kg}$</p>';
    }
  },

  // ---- Numeric: multi-stage cooling + freezing (like the worked example) -----
  {
    type: 'numeric',
    generateVars: function () {
      var ms = [0.5, 1.0, 1.5, 2.0];
      var dts = [10, 15, 18, 20];
      var m = ms[Math.floor(Math.random() * ms.length)];
      var dt = dts[Math.floor(Math.random() * dts.length)];
      var c = 4200, l = 340000;
      return { m: m, dt: dt, c: c, l: l };
    },
    prompt: function (v) {
      return '<p>Calculate the total energy released when $\\quantity{' + v.m + '}{kg}$ of water cools by $\\quantity{' + v.dt + '}{\\degree C}$ to reach $\\quantity{0}{\\degree C}$, and then completely freezes at $\\quantity{0}{\\degree C}$.</p><p><i>Use $c=\\quantity{4200}{J\\,kg^{-1}\\,K^{-1}}$ and $l=\\quantity{3.4\\times 10^{5}}{J\\,kg^{-1}}$. Give your answer in joules, standard form to 3 s.f.</i></p>';
    },
    answer: function (v) { return v.m * v.c * v.dt + v.m * v.l; },
    unit: 'J',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var Q1 = v.m * v.c * v.dt;
      var Q2 = v.m * v.l;
      return '<p>Cooling stage: $Q_1=mc\\Delta\\theta=\\quantity{' + Q1.toExponential(3) + '}{J}$</p>' +
        '<p>Freezing stage: $Q_2=ml=\\quantity{' + Q2.toExponential(3) + '}{J}$</p>' +
        '<p>Total: $Q_1+Q_2=\\quantity{' + ans.toExponential(3) + '}{J}$ &mdash; keeping the unrounded values from each stage before adding.</p>';
    }
  },

  // ---- Conceptual: fusion vs vaporisation ---------------------------------------
  {
    type: 'mcq',
    prompt: '<p>Which generally requires more energy for the same mass of a substance: melting it (fusion) or boiling it (vaporisation)?</p>',
    options: [
      'Vaporisation \u2014 boiling requires far more energy than melting',
      'Fusion \u2014 melting requires far more energy than boiling',
      'They always require exactly the same amount of energy',
      'It depends only on the mass, not the substance'
    ],
    correctIndex: 0,
    explanation: '<p>Vaporisation requires much more energy than fusion for the same mass \u2014 around 7\u00D7 more for water. Melting only loosens the bonds between particles enough for them to move past each other; boiling has to break essentially all of the bonds so particles can separate completely into a gas.</p>'
  },

  // ---- Conceptual: ice vs water for cooling ---------------------------------------
  {
    type: 'mcq',
    prompt: '<p>A can of drink is cooled either in a bucket of ice at $0\\degree C$, or in a bucket of liquid water also at $0\\degree C$. Why does the ice cool the drink more effectively?</p>',
    options: [
      'The ice keeps absorbing latent heat while melting, staying at 0\u00B0C throughout, so it can absorb far more energy before warming up',
      'Ice is colder than 0\u00B0C water, even though both are measured at the same temperature',
      'Ice has a higher specific heat capacity than water',
      'There is actually no difference between the two methods'
    ],
    correctIndex: 0,
    explanation: '<p>Both are at the same temperature, so it isn\u2019t about temperature difference. The ice keeps absorbing energy as latent heat while it melts, remaining at $0\\degree C$ throughout that process, whereas water at $0\\degree C$ can only absorb energy by actually increasing in temperature. That extra absorption capacity (the latent heat of fusion) is what makes ice more effective.</p>'
  },

  // ---- Conceptual: when to use Q=ml vs Q=mc*deltaTheta -----------------------------
  {
    type: 'mcq',
    prompt: '<p>A substance is being heated and its temperature-time graph shows a flat plateau while boiling. Which equation applies during that flat section?</p>',
    options: [
      '$Q=ml$, since temperature is constant during a phase change',
      '$Q=mc\\Delta\\theta$, since heat is still being supplied',
      'Both equations apply simultaneously and should be added',
      'Neither equation applies once boiling starts'
    ],
    correctIndex: 0,
    explanation: '<p>During a phase change, temperature stays constant even though energy is still being supplied \u2014 that energy goes into breaking bonds (potential energy), not increasing kinetic energy. This is exactly when $Q=ml$ applies. $Q=mc\\Delta\\theta$ only applies when temperature is actually changing, i.e. outside the flat plateau.</p>'
  },

  // ---- Conceptual: why E cancels in the two-power method ---------------------------
  {
    type: 'mcq',
    prompt: '<p>In the two-power method for measuring latent heat of vaporisation, why does the heat lost to the surroundings, E, cancel out when the two equations are subtracted?</p>',
    options: [
      'Because the liquid boils at the same temperature in both trials, so the rate of heat loss is the same both times',
      'Because E is always zero in a correctly insulated experiment',
      'Because the two power settings are always identical',
      'E doesn\u2019t actually cancel \u2014 it has to be measured separately and subtracted manually'
    ],
    correctIndex: 0,
    explanation: '<p>The liquid boils at a fixed temperature regardless of the heater power, so the temperature difference to the surroundings \u2014 and therefore the rate of heat loss, $E$ \u2014 is the same in both trials. That\u2019s what allows $E$ to cancel exactly when the two equations are subtracted, without ever needing to measure it directly.</p>'
  }
];
