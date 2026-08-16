/* Question bank for specific_heat.html — loaded before quiz.js is invoked. */

var specificHeatQuestions = [

  // ---- Numeric: basic Q = mc*deltaTheta -------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ms = [0.1, 0.2, 0.5, 1.0, 2.0];
      var cs = [385, 900, 4200, 130];
      var dts = [5, 10, 15, 20];
      var m = ms[Math.floor(Math.random() * ms.length)];
      var c = cs[Math.floor(Math.random() * cs.length)];
      var dt = dts[Math.floor(Math.random() * dts.length)];
      return { m: m, c: c, dt: dt };
    },
    prompt: function (v) {
      return '<p>Calculate the heat energy required to raise the temperature of $\\quantity{' + v.m + '}{kg}$ of a material with specific heat capacity $\\quantity{' + v.c + '}{J\\,kg^{-1}\\,\\degree C^{-1}}$ by $\\quantity{' + v.dt + '}{\\degree C}$.</p><p><i>Give your answer in joules (J).</i></p>';
    },
    answer: function (v) { return v.m * v.c * v.dt; },
    unit: 'J',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $Q=mc\\Delta\\theta$:</p>' +
        '<p>$Q=\\quantity{' + v.m + '}{kg}\\times\\quantity{' + v.c + '}{J\\,kg^{-1}\\,\\degree C^{-1}}\\times\\quantity{' + v.dt + '}{\\degree C}=\\quantity{' + ans.toPrecision(3) + '}{J}$</p>';
    }
  },

  // ---- Numeric: rearranged, find c -------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ms = [0.2, 0.5, 1.0];
      var Qs = [2000, 4000, 8000, 10000];
      var dts = [5, 10, 20];
      var m = ms[Math.floor(Math.random() * ms.length)];
      var Q = Qs[Math.floor(Math.random() * Qs.length)];
      var dt = dts[Math.floor(Math.random() * dts.length)];
      return { m: m, Q: Q, dt: dt };
    },
    prompt: function (v) {
      return '<p>$\\quantity{' + v.Q + '}{J}$ of heat is supplied to $\\quantity{' + v.m + '}{kg}$ of a material, raising its temperature by $\\quantity{' + v.dt + '}{\\degree C}$. Calculate the specific heat capacity of the material.</p><p><i>Give your answer in J kg<sup>-1</sup> \u00B0C<sup>-1</sup>.</i></p>';
    },
    answer: function (v) { return v.Q / (v.m * v.dt); },
    unit: 'J/(kg\u00B7\u00B0C)',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Rearranging $Q=mc\\Delta\\theta$:</p>' +
        '<p>$c=\\dfrac{Q}{m\\Delta\\theta}=\\dfrac{\\quantity{' + v.Q + '}{J}}{\\quantity{' + v.m + '}{kg}\\times\\quantity{' + v.dt + '}{\\degree C}}=\\quantity{' + ans.toPrecision(3) + '}{J\\,kg^{-1}\\,\\degree C^{-1}}$</p>';
    }
  },

  // ---- Numeric: mixing two masses of the SAME material -----------------------
  {
    type: 'numeric',
    generateVars: function () {
      var m1s = [0.2, 0.3, 0.4];
      var m2s = [0.4, 0.5, 0.6];
      var t1s = [10, 15, 20];
      var t2s = [60, 70, 80];
      var m1 = m1s[Math.floor(Math.random() * m1s.length)];
      var m2 = m2s[Math.floor(Math.random() * m2s.length)];
      var t1 = t1s[Math.floor(Math.random() * t1s.length)];
      var t2 = t2s[Math.floor(Math.random() * t2s.length)];
      return { m1: m1, m2: m2, t1: t1, t2: t2 };
    },
    prompt: function (v) {
      return '<p>$\\quantity{' + v.m1 + '}{kg}$ of water at $\\quantity{' + v.t1 + '}{\\degree C}$ is mixed with $\\quantity{' + v.m2 + '}{kg}$ of water at $\\quantity{' + v.t2 + '}{\\degree C}$. Assuming no heat is lost to the surroundings, calculate the equilibrium temperature.</p><p><i>Give your answer in \u00B0C.</i></p>';
    },
    answer: function (v) { return (v.m1 * v.t1 + v.m2 * v.t2) / (v.m1 + v.m2); },
    unit: '\u00B0C',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Since both masses are the same material, $c$ cancels from $Q_1=Q_2$, leaving a mass-weighted average:</p>' +
        '<p>$\\theta_{eq}=\\dfrac{m_1\\theta_1+m_2\\theta_2}{m_1+m_2}=\\dfrac{\\quantity{' + v.m1 + '}{kg}\\times\\quantity{' + v.t1 + '}{\\degree C}+\\quantity{' + v.m2 + '}{kg}\\times\\quantity{' + v.t2 + '}{\\degree C}}{\\quantity{' + v.m1 + '}{kg}+\\quantity{' + v.m2 + '}{kg}}=\\quantity{' + ans.toPrecision(3) + '}{\\degree C}$</p>';
    }
  },

  // ---- Numeric: worked-example style, two different materials ----------------
  {
    type: 'numeric',
    generateVars: function () {
      var mbs = [0.03, 0.05, 0.08];
      var mws = [0.2, 0.25, 0.3];
      var tis = [18, 20, 23];
      var tfs = [28, 30, 33];
      var mb = mbs[Math.floor(Math.random() * mbs.length)];
      var mw = mws[Math.floor(Math.random() * mws.length)];
      var ti = tis[Math.floor(Math.random() * tis.length)];
      var tf = tfs[Math.floor(Math.random() * tfs.length)];
      var cw = 4200, cb = 380;
      return { mb: mb, mw: mw, ti: ti, tf: tf, cw: cw, cb: cb };
    },
    prompt: function (v) {
      return '<p>A $\\quantity{' + v.mb + '}{kg}$ brass mass (specific heat capacity $\\quantity{' + v.cb + '}{J\\,kg^{-1}\\,\\degree C^{-1}}$) at an unknown initial temperature is dropped into $\\quantity{' + v.mw + '}{kg}$ of water (specific heat capacity $\\quantity{' + v.cw + '}{J\\,kg^{-1}\\,\\degree C^{-1}}$) at $\\quantity{' + v.ti + '}{\\degree C}$. The water\u2019s temperature rises to $\\quantity{' + v.tf + '}{\\degree C}$. Calculate the initial temperature of the brass.</p><p><i>Give your answer in \u00B0C.</i></p>';
    },
    answer: function (v) { return (v.mw * v.cw * (v.tf - v.ti)) / (v.mb * v.cb) + v.tf; },
    unit: '\u00B0C',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $m_bc_b(\\theta_I-\\theta_F)=m_wc_w(\\theta_F-\\theta_i)$, rearranged for $\\theta_I$:</p>' +
        '<p>$\\theta_I=\\dfrac{m_wc_w(\\theta_F-\\theta_i)}{m_bc_b}+\\theta_F=\\quantity{' + ans.toPrecision(3) + '}{\\degree C}$</p>' +
        '<p>Notice the hot brass term uses (initial &minus; final) and the cold water term uses (final &minus; initial), keeping both sides positive.</p>';
    }
  },

  // ---- Conceptual: heat vs temperature ----------------------------------------
  {
    type: 'mcq',
    prompt: '<p>Two objects, A and B, are at the same temperature, but object A has a much greater mass than object B. Which statement is correct?</p>',
    options: [
      'Object A contains more heat energy than object B, despite being at the same temperature',
      'They contain exactly the same amount of heat energy, since temperature is the same',
      'Object B must contain more heat energy, since heat and mass are inversely related',
      'It\u2019s impossible for two objects of different mass to be at the same temperature'
    ],
    correctIndex: 0,
    explanation: '<p>Temperature does not directly tell you how much heat (internal energy) an object contains. Since $Q=mc\\Delta\\theta$, a larger mass at the same temperature (and same material) has absorbed and stores more heat energy than a smaller mass, even though their temperatures are identical.</p>'
  },

  // ---- Conceptual: heat capacity vs specific heat capacity --------------------
  {
    type: 'mcq',
    prompt: '<p>What is the difference between "heat capacity" and "specific heat capacity"?</p>',
    options: [
      'Heat capacity applies to a specific object (J \u00B0C\u207B\u00B9); specific heat capacity is per kilogram of material (J kg\u207B\u00B9 \u00B0C\u207B\u00B9)',
      'They are two names for exactly the same quantity',
      'Heat capacity is measured in kelvin; specific heat capacity is measured in \u00B0C',
      'Specific heat capacity only applies to liquids, heat capacity only to solids'
    ],
    correctIndex: 0,
    explanation: '<p>Heat capacity describes a particular object as a whole (how much energy it takes to raise <i>that object\u2019s</i> temperature by 1\u00B0C). Specific heat capacity is a property of the material itself, per kilogram, letting you calculate the heat capacity of any mass of that material.</p>'
  },

  // ---- Conceptual: why continuous flow needs matched delta-theta --------------
  {
    type: 'mcq',
    prompt: '<p>In the continuous flow method for measuring specific heat capacity, why is the heater adjusted so that $\\Delta\\theta$ is the same for both flow rates?</p>',
    options: [
      'So that the heat lost to the surroundings, E, is the same in both equations and cancels out when subtracted',
      'So that the current and voltage don\u2019t need to be measured at all',
      'So that the specific heat capacity of water doesn\u2019t change during the experiment',
      'It isn\u2019t actually necessary \u2014 any values of \u0394\u03b8 would work equally well'
    ],
    correctIndex: 0,
    explanation: '<p>Keeping $\\Delta\\theta$ identical between the two flow rates ensures the heat lost to the surroundings, $E$, is the same both times. That\u2019s what allows $E$ to cancel out when the two equations are subtracted \u2014 the whole point of the method is to eliminate heat loss without having to measure it directly.</p>'
  },

  // ---- Conceptual: assumption behind Q1 = Q2 -----------------------------------
  {
    type: 'mcq',
    prompt: '<p>When using $Q_1=Q_2$ to find an equilibrium temperature in a mixing problem, what key assumption is being made?</p>',
    options: [
      'No heat is lost to the surroundings or the container \u2014 the system is perfectly insulated',
      'Both substances must have the same specific heat capacity',
      'Both substances must have the same mass',
      'The two objects must start at the same temperature'
    ],
    correctIndex: 0,
    explanation: '<p>$Q_1=Q_2$ only holds if all the heat lost by the hotter object is gained by the cooler one, with none escaping elsewhere. In reality some heat is always lost to the container and surroundings, which is why well-designed calorimetry experiments use good insulation, and why methods like continuous flow were developed to account for this heat loss directly.</p>'
  }
];
