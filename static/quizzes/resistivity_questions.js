/* Question bank for resistivity.html — loaded before quiz.js is invoked. */

var resistivityQuestions = [

  // ---- Numeric: basic resistivity equation, rho = RA/l --------------------
  {
    type: 'numeric',
    generateVars: function () {
      var Rs = [2, 4, 5, 8, 10];
      var As = [1, 2, 4, 5]; // x10^-6 m^2
      var ls = [1, 2, 5, 10];
      var R = Rs[Math.floor(Math.random() * Rs.length)];
      var A = As[Math.floor(Math.random() * As.length)];
      var l = ls[Math.floor(Math.random() * ls.length)];
      return { R: R, A: A, l: l };
    },
    prompt: function (v) {
      return '<p>A wire of length $\\quantity{' + v.l + '}{m}$ and cross-sectional area $\\quantity{' + v.A + '\\times 10^{-6}}{m^{2}}$ has a resistance of $\\quantity{' + v.R + '}{\\Omega}$. Calculate its resistivity.</p><p><i>Give your answer in $\\units{\\Omega m}$, standard form to 2 s.f.</i></p>';
    },
    answer: function (v) { return v.R * v.A * 1e-6 / v.l; },
    unit: '\u03A9m',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $\\rho=\\dfrac{RA}{l}$:</p>' +
        '<p>$\\rho=\\dfrac{\\quantity{' + v.R + '}{\\Omega}\\times\\quantity{' + v.A + '\\times 10^{-6}}{m^{2}}}{\\quantity{' + v.l + '}{m}}=\\quantity{' + ans.toExponential(2) + '}{\\Omega m}$</p>';
    }
  },

  // ---- Numeric: R proportional to l ----------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var R0s = [2, 3, 4, 5, 6, 8, 10];
      var multipliers = [2, 3, 4];
      var R0 = R0s[Math.floor(Math.random() * R0s.length)];
      var k = multipliers[Math.floor(Math.random() * multipliers.length)];
      return { R0: R0, k: k };
    },
    prompt: function (v) {
      return '<p>A wire has a resistance of $\\quantity{' + v.R0 + '}{\\Omega}$. It is replaced with a wire of the same material and cross-sectional area, but ' + v.k + ' times the length. Calculate the new resistance.</p><p><i>Give your answer in ohms (&Omega;).</i></p>';
    },
    answer: function (v) { return v.R0 * v.k; },
    unit: '\u03A9',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Resistance is directly proportional to length ($R\\propto l$), with everything else unchanged:</p>' +
        '<p>$R_{new}=' + v.k + '\\times\\quantity{' + v.R0 + '}{\\Omega}=\\quantity{' + ans.toPrecision(3) + '}{\\Omega}$</p>';
    }
  },

  // ---- Numeric: full worked-example style question with unit conversion ---
  {
    type: 'numeric',
    generateVars: function () {
      var Rs = [2.2, 3.3, 4.4, 5.5, 6.6];
      var lengths_km = [0.5, 1.0, 1.5, 2.0];
      var diameters_mm = [4.0, 5.0, 6.0, 7.4, 8.0];
      var R = Rs[Math.floor(Math.random() * Rs.length)];
      var l_km = lengths_km[Math.floor(Math.random() * lengths_km.length)];
      var d_mm = diameters_mm[Math.floor(Math.random() * diameters_mm.length)];
      return { R: R, l_km: l_km, d_mm: d_mm };
    },
    prompt: function (v) {
      return '<p>A cable of length $\\quantity{' + v.l_km + '}{km}$ and diameter $\\quantity{' + v.d_mm + '}{mm}$ has a resistance of $\\quantity{' + v.R + '}{\\Omega}$. Calculate the resistivity of the material.</p><p><i>Give your answer in $\\units{\\Omega m}$, standard form to 2 s.f. Watch your unit conversions!</i></p>';
    },
    answer: function (v) {
      var l = v.l_km * 1000;
      var D = v.d_mm / 1000;
      var A = Math.PI * D * D / 4;
      return v.R * A / l;
    },
    unit: '\u03A9m',
    tolerancePercent: 3,
    explanation: function (v, ans) {
      var l = v.l_km * 1000;
      var D = (v.d_mm / 1000).toExponential(2);
      var A = (Math.PI * Math.pow(v.d_mm / 1000, 2) / 4).toExponential(3);
      return '<p>First convert to SI units: $l=\\quantity{' + l + '}{m}$, $D=\\quantity{' + D + '}{m}$.</p>' +
        '<p>Area: $A=\\dfrac{\\pi D^{2}}{4}=\\quantity{' + A + '}{m^{2}}$</p>' +
        '<p>Resistivity: $\\rho=\\dfrac{RA}{l}=\\quantity{' + ans.toExponential(2) + '}{\\Omega m}$</p>';
    }
  },

  // ---- Conceptual: metals vs NTC thermistors -------------------------------
  {
    type: 'mcq',
    prompt: '<p>A metal wire and an NTC thermistor are both heated. What happens to the resistance of each?</p>',
    options: [
      'Metal wire: resistance increases. Thermistor: resistance decreases.',
      'Metal wire: resistance decreases. Thermistor: resistance increases.',
      'Both increase.',
      'Both decrease.'
    ],
    correctIndex: 0,
    explanation: '<p>A metal wire\u2019s resistance <b>increases</b> with temperature &mdash; more ion vibration means more electron collisions. An NTC thermistor\u2019s resistance <b>decreases</b> with temperature &mdash; heat energy frees more charge carriers into the conduction band, and this effect dominates over any increase in collisions. These are opposite behaviours driven by different physical mechanisms.</p>'
  },

  // ---- Conceptual: effect of cross-sectional area --------------------------
  {
    type: 'mcq',
    prompt: '<p>A wire\u2019s cross-sectional area is doubled, with its length and material unchanged. What happens to its resistance?</p>',
    options: [
      'It halves',
      'It doubles',
      'It stays the same',
      'It quarters'
    ],
    correctIndex: 0,
    explanation: '<p>Resistance is inversely proportional to cross-sectional area ($R\\propto\\frac{1}{A}$), since a wider conductor gives charge carriers more room to flow with fewer collisions. Doubling the area halves the resistance.</p>'
  },

  // ---- Conceptual: comparing resistivity values ----------------------------
  {
    type: 'mcq',
    prompt: '<p>Copper has a resistivity of $1.7\\times 10^{-8}\\,\\units{\\Omega m}$. Aluminium has a resistivity of $2.7\\times 10^{-8}\\,\\units{\\Omega m}$. Which statement is correct?</p>',
    options: [
      'Copper is the better electrical conductor',
      'Aluminium is the better electrical conductor',
      'They conduct electricity equally well',
      'Resistivity alone cannot tell you which conducts better'
    ],
    correctIndex: 0,
    explanation: '<p>A <b>lower</b> resistivity means a material is a better conductor for a given size and shape. Since copper\u2019s resistivity is lower than aluminium\u2019s, copper is the better conductor &mdash; though aluminium is still often chosen for overhead power lines because it\u2019s lighter and stretches less under load.</p>'
  },

  // ---- Conceptual: superconductor definition -------------------------------
  {
    type: 'mcq',
    prompt: '<p>Which statement correctly describes a superconductor?</p>',
    options: [
      'A material with exactly zero resistance at or below its critical temperature',
      'A material with very low resistance at all temperatures',
      'A material whose resistance decreases smoothly to a small non-zero value as it cools',
      'A material that only conducts electricity above its critical temperature'
    ],
    correctIndex: 0,
    explanation: '<p>A superconductor has <b>exactly zero</b> resistance at or below a specific critical temperature &mdash; not just a very small resistance, and not a gradual decrease. Above the critical temperature it behaves as a normal (non-zero resistance) conductor.</p>'
  },

  // ---- Numeric: rearranged resistivity equation, solving for area ---------
  {
    type: 'numeric',
    generateVars: function () {
      var rhos = [1.7, 2.7, 4.9]; // x10^-8, copper/aluminium/constantin-ish
      var Rs = [1, 2, 5, 10];
      var ls = [10, 20, 50, 100];
      var rho = rhos[Math.floor(Math.random() * rhos.length)];
      var R = Rs[Math.floor(Math.random() * Rs.length)];
      var l = ls[Math.floor(Math.random() * ls.length)];
      return { rho: rho, R: R, l: l };
    },
    prompt: function (v) {
      return '<p>A wire of resistivity $\\quantity{' + v.rho + '\\times 10^{-8}}{\\Omega m}$ and length $\\quantity{' + v.l + '}{m}$ has a resistance of $\\quantity{' + v.R + '}{\\Omega}$. Calculate the cross-sectional area of the wire.</p><p><i>Give your answer in $\\units{m^{2}}$, standard form to 2 s.f.</i></p>';
    },
    answer: function (v) { return (v.rho * 1e-8 * v.l) / v.R; },
    unit: 'm\u00B2',
    tolerancePercent: 3,
    explanation: function (v, ans) {
      return '<p>Rearranging $R=\\dfrac{\\rho l}{A}$ to make $A$ the subject:</p>' +
        '<p>$A=\\dfrac{\\rho l}{R}=\\dfrac{\\quantity{' + v.rho + '\\times 10^{-8}}{\\Omega m}\\times\\quantity{' + v.l + '}{m}}{\\quantity{' + v.R + '}{\\Omega}}=\\quantity{' + ans.toExponential(2) + '}{m^{2}}</p>';
    }
  }
];
