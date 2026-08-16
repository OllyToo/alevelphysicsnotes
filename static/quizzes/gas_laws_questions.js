/* Question bank for gas_laws.html — loaded before quiz.js is invoked. */

var gasLawsQuestions = [

  // ---- Numeric: pV = nRT, find p ---------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ns = [0.5, 1.0, 2.0, 3.0];
      var Vs = [0.01, 0.02, 0.05, 0.1];
      var Ts = [280, 300, 320, 350];
      var n = ns[Math.floor(Math.random() * ns.length)];
      var V = Vs[Math.floor(Math.random() * Vs.length)];
      var T = Ts[Math.floor(Math.random() * Ts.length)];
      return { n: n, V: V, T: T };
    },
    prompt: function (v) {
      return '<p>Calculate the pressure of $\\quantity{' + v.n + '}{mol}$ of an ideal gas occupying $\\quantity{' + v.V + '}{m^{3}}$ at a temperature of $\\quantity{' + v.T + '}{K}$.</p><p><i>Use $R=\\quantity{8.31}{J\\,K^{-1}\\,mol^{-1}}$. Give your answer in Pa, standard form to 3 s.f.</i></p>';
    },
    answer: function (v) { return (v.n * 8.31 * v.T) / v.V; },
    unit: 'Pa',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $p=\\dfrac{nRT}{V}$:</p>' +
        '<p>$p=\\dfrac{\\quantity{' + v.n + '}{mol}\\times\\quantity{8.31}{J\\,K^{-1}\\,mol^{-1}}\\times\\quantity{' + v.T + '}{K}}{\\quantity{' + v.V + '}{m^{3}}}=\\quantity{' + ans.toExponential(3) + '}{Pa}$</p>';
    }
  },

  // ---- Numeric: two-state equation, find unknown volume -----------------------
  {
    type: 'numeric',
    generateVars: function () {
      var p1s = [1.0, 1.5, 2.0];
      var V1s = [0.002, 0.004, 0.006];
      var T1s = [280, 300];
      var p2s = [3.0, 4.0, 5.0];
      var T2s = [330, 350, 370];
      var p1 = p1s[Math.floor(Math.random() * p1s.length)] * 1e5;
      var V1 = V1s[Math.floor(Math.random() * V1s.length)];
      var T1 = T1s[Math.floor(Math.random() * T1s.length)];
      var p2 = p2s[Math.floor(Math.random() * p2s.length)] * 1e5;
      var T2 = T2s[Math.floor(Math.random() * T2s.length)];
      return { p1: p1, V1: V1, T1: T1, p2: p2, T2: T2 };
    },
    prompt: function (v) {
      return '<p>A gas has an initial pressure of $\\quantity{' + v.p1.toExponential(1) + '}{Pa}$, volume $\\quantity{' + v.V1 + '}{m^{3}}$, and temperature $\\quantity{' + v.T1 + '}{K}$. It is compressed and heated to a pressure of $\\quantity{' + v.p2.toExponential(1) + '}{Pa}$ and temperature $\\quantity{' + v.T2 + '}{K}$. Calculate the new volume.</p><p><i>Give your answer in m<sup>3</sup>, standard form to 2 s.f.</i></p>';
    },
    answer: function (v) { return (v.p1 * v.V1 * v.T2) / (v.T1 * v.p2); },
    unit: 'm\u00B3',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $\\dfrac{p_1V_1}{T_1}=\\dfrac{p_2V_2}{T_2}$, rearranged for $V_2$:</p>' +
        '<p>$V_2=\\dfrac{p_1V_1T_2}{T_1p_2}=\\quantity{' + ans.toExponential(2) + '}{m^{3}}$</p>';
    }
  },

  // ---- Numeric: pV = NkT, find N ------------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ps = [1.0, 1.5, 2.0];
      var Vs = [0.001, 0.002, 0.005];
      var Ts = [290, 300, 310];
      var p = ps[Math.floor(Math.random() * ps.length)] * 1e5;
      var V = Vs[Math.floor(Math.random() * Vs.length)];
      var T = Ts[Math.floor(Math.random() * Ts.length)];
      return { p: p, V: V, T: T };
    },
    prompt: function (v) {
      return '<p>A gas occupies $\\quantity{' + v.V + '}{m^{3}}$ at a pressure of $\\quantity{' + v.p.toExponential(1) + '}{Pa}$ and a temperature of $\\quantity{' + v.T + '}{K}$. Calculate the number of molecules of gas present.</p><p><i>Use $k=\\quantity{1.38\\times 10^{-23}}{J\\,K^{-1}}$. Give your answer in standard form, 3 s.f.</i></p>';
    },
    answer: function (v) { return (v.p * v.V) / (1.38e-23 * v.T); },
    unit: 'molecules',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $N=\\dfrac{pV}{kT}$:</p>' +
        '<p>$N=\\dfrac{\\quantity{' + v.p.toExponential(1) + '}{Pa}\\times\\quantity{' + v.V + '}{m^{3}}}{\\quantity{1.38\\times 10^{-23}}{J\\,K^{-1}}\\times\\quantity{' + v.T + '}{K}}=\\quantity{' + ans.toExponential(3) + '}{}$</p>' +
        '<p>Note the Boltzmann constant $k$ is used here since we\u2019re counting molecules, not moles.</p>';
    }
  },

  // ---- Numeric: work done by an expanding gas at constant pressure -----------
  {
    type: 'numeric',
    generateVars: function () {
      var ps = [1.0, 2.0, 3.0, 5.0];
      var dVs = [0.0005, 0.001, 0.002, 0.005];
      var p = ps[Math.floor(Math.random() * ps.length)] * 1e5;
      var dV = dVs[Math.floor(Math.random() * dVs.length)];
      return { p: p, dV: dV };
    },
    prompt: function (v) {
      return '<p>A gas expands at a constant pressure of $\\quantity{' + v.p.toExponential(1) + '}{Pa}$, increasing its volume by $\\quantity{' + v.dV + '}{m^{3}}$. Calculate the work done by the gas.</p><p><i>Give your answer in joules (J).</i></p>';
    },
    answer: function (v) { return v.p * v.dV; },
    unit: 'J',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $W=p\\Delta V$ (valid here since pressure is constant):</p>' +
        '<p>$W=\\quantity{' + v.p.toExponential(1) + '}{Pa}\\times\\quantity{' + v.dV + '}{m^{3}}=\\quantity{' + ans.toPrecision(3) + '}{J}$</p>';
    }
  },

  // ---- Conceptual: absolute temperature required -------------------------------
  {
    type: 'mcq',
    prompt: '<p>A student substitutes a temperature of $27\\degree C$ directly into $pV=nRT$ without converting it. What is wrong with this?</p>',
    options: [
      'T must be in kelvin, not \u00B0C \u2014 it should be converted to 300 K first',
      'Nothing is wrong, \u00B0C works fine in this equation',
      'The equation requires Fahrenheit, not \u00B0C',
      'The pressure and volume also need to be in \u00B0C-equivalent units'
    ],
    correctIndex: 0,
    explanation: '<p>Every gas law equation requires absolute temperature in kelvin. $27\\degree C=300\\,\\units{K}$ (using $T(K)=T(\\degree C)+273.15$, rounded here). Substituting the \u00B0C value directly gives a badly wrong answer, since 0\u00B0C is nowhere near the actual zero point of the temperature scale used in these equations.</p>'
  },

  // ---- Conceptual: R vs k -------------------------------------------------------
  {
    type: 'mcq',
    prompt: '<p>Which pairing of constant and variable is correct?</p>',
    options: [
      'R (molar gas constant) with n (moles); k (Boltzmann constant) with N (molecules)',
      'R (molar gas constant) with N (molecules); k (Boltzmann constant) with n (moles)',
      'Either constant can be used with either variable, they\u2019re interchangeable',
      'R and k are just two names for the same constant'
    ],
    correctIndex: 0,
    explanation: '<p>$pV=nRT$ uses the molar gas constant $R$ with the number of <b>moles</b>, $n$. $pV=NkT$ uses the Boltzmann constant $k$ with the number of <b>molecules</b>, $N$. Mixing these up gives an answer wrong by a factor of the Avogadro constant, $N_A\\approx6.02\\times10^{23}\\,\\units{mol^{-1}}$.</p>'
  },

  // ---- Conceptual: why pressure increases in Boyle's law -----------------------
  {
    type: 'mcq',
    prompt: '<p>A gas is compressed into a smaller volume at constant temperature. Why does its pressure increase?</p>',
    options: [
      'Particles collide with the container walls more frequently, not because each collision is more energetic',
      'Each particle moves faster, hitting the walls harder',
      'The particles gain kinetic energy from being squeezed together',
      'The gas temperature rises slightly, increasing particle speed'
    ],
    correctIndex: 0,
    explanation: '<p>At constant temperature, the average particle speed (and kinetic energy) doesn\u2019t change. Collisions with the walls are perfectly elastic under the ideal gas assumptions, so no energy is gained or lost in them. The pressure rises simply because particles have less distance to travel between collisions, so they hit the walls more often.</p>'
  },

  // ---- Conceptual: when W = p*deltaV applies --------------------------------------
  {
    type: 'mcq',
    prompt: '<p>Under what condition is $W=p\\Delta V$ a valid way to calculate the work done by an expanding gas?</p>',
    options: [
      'Only when the pressure remains constant throughout the expansion',
      'Only when the temperature remains constant throughout the expansion (isothermal)',
      'It works for any gas expansion, regardless of how pressure or temperature change',
      'Only when the volume remains constant'
    ],
    correctIndex: 0,
    explanation: '<p>$W=p\\Delta V$ assumes a single, constant value of pressure throughout the change. For an isothermal expansion, pressure actually changes continuously as volume changes, so this simple formula doesn\u2019t apply \u2014 a logarithmic expression (derived using calculus) is needed instead.</p>'
  }
];
