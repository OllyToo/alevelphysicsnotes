/* Question bank for deadstars.html — loaded before quiz.js is invoked. */

var deadstarsQuestions = [

  // ---- Numeric: Schwarzschild radius, small multiple of solar mass -----------
  {
    type: 'numeric',
    generateVars: function () {
      var multiples = [5, 8, 10, 15, 20];
      var mult = multiples[Math.floor(Math.random() * multiples.length)];
      return { mult: mult };
    },
    prompt: function (v) {
      return '<p>Calculate the Schwarzschild radius of a black hole with a mass of ' + v.mult + ' solar masses.</p><p><i>Use $M_{\\odot}=\\quantity{1.99\\times 10^{30}}{kg}$, $G=\\quantity{6.67\\times 10^{-11}}{N\\,m^{2}\\,kg^{-2}}$. Give your answer in metres, to 3 s.f.</i></p>';
    },
    answer: function (v) {
      var M = v.mult * 1.99e30;
      return (2 * 6.67e-11 * M) / Math.pow(3.00e8, 2);
    },
    unit: 'm',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var M = (v.mult * 1.99e30).toExponential(3);
      return '<p>Using $R_s=\\dfrac{2GM}{c^2}$, with $M=' + v.mult + '\\times\\quantity{1.99\\times 10^{30}}{kg}=\\quantity{' + M + '}{kg}$:</p>' +
        '<p>$R_s=\\dfrac{2\\times\\quantity{6.67\\times 10^{-11}}{N\\,m^{2}\\,kg^{-2}}\\times\\quantity{' + M + '}{kg}}{\\left(\\quantity{3.00\\times 10^{8}}{m\\,s^{-1}}\\right)^{2}}=\\quantity{' + ans.toPrecision(3) + '}{m}$</p>';
    }
  },

  // ---- Numeric: Schwarzschild radius, million-solar-mass scale ----------------
  {
    type: 'numeric',
    generateVars: function () {
      var millions = [10, 20, 40, 60, 80];
      var mult = millions[Math.floor(Math.random() * millions.length)];
      return { mult: mult };
    },
    prompt: function (v) {
      return '<p>Calculate the Schwarzschild radius of a supermassive black hole with a mass of ' + v.mult + ' million solar masses.</p><p><i>Use $M_{\\odot}=\\quantity{1.99\\times 10^{30}}{kg}$. Give your answer in metres, standard form to 3 s.f.</i></p>';
    },
    answer: function (v) {
      var M = v.mult * 1e6 * 1.99e30;
      return (2 * 6.67e-11 * M) / Math.pow(3.00e8, 2);
    },
    unit: 'm',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var M = (v.mult * 1e6 * 1.99e30).toExponential(3);
      return '<p>$M=' + v.mult + '\\times 10^{6}\\times\\quantity{1.99\\times 10^{30}}{kg}=\\quantity{' + M + '}{kg}$</p>' +
        '<p>$R_s=\\dfrac{2GM}{c^2}=\\quantity{' + ans.toExponential(3) + '}{m}$</p>' +
        '<p>Don\u2019t forget the &times;10<sup>6</sup> multiplier when substituting a "million solar masses" figure.</p>';
    }
  },

  // ---- Numeric: average density within the event horizon -----------------------
  {
    type: 'numeric',
    generateVars: function () {
      var millions = [15, 25, 40, 60];
      var mult = millions[Math.floor(Math.random() * millions.length)];
      return { mult: mult };
    },
    prompt: function (v) {
      return '<p>A black hole has a mass of ' + v.mult + ' million solar masses. Calculate the average density of matter within its event horizon.</p><p><i>Use $M_{\\odot}=\\quantity{1.99\\times 10^{30}}{kg}$. Give your answer in kg m<sup>-3</sup>, standard form to 2 s.f.</i></p>';
    },
    answer: function (v) {
      var M = v.mult * 1e6 * 1.99e30;
      var Rs = (2 * 6.67e-11 * M) / Math.pow(3.00e8, 2);
      var Vol = (4 / 3) * Math.PI * Math.pow(Rs, 3);
      return M / Vol;
    },
    unit: 'kg/m\u00B3',
    tolerancePercent: 3,
    explanation: function (v, ans) {
      var M = (v.mult * 1e6 * 1.99e30).toExponential(3);
      var Rs = ((2 * 6.67e-11 * (v.mult * 1e6 * 1.99e30)) / Math.pow(3.00e8, 2)).toExponential(3);
      return '<p>$M=\\quantity{' + M + '}{kg}$, giving $R_s=\\quantity{' + Rs + '}{m}$ from $R_s=\\frac{2GM}{c^2}$.</p>' +
        '<p>$V=\\frac{4}{3}\\pi R_s^{3}$, then $\\rho=\\dfrac{M}{V}=\\quantity{' + ans.toExponential(2) + '}{kg\\,m^{-3}}$</p>';
    }
  },

  // ---- Conceptual: white dwarf vs neutron star density --------------------------
  {
    type: 'mcq',
    prompt: '<p>Roughly how many orders of magnitude greater is the density of a neutron star ($\\sim 10^{17}\\,\\units{kg\\,m^{-3}}$) compared to a white dwarf ($\\sim 10^{9}\\,\\units{kg\\,m^{-3}}$)?</p>',
    options: [
      '8 orders of magnitude',
      '2 orders of magnitude',
      'They are roughly the same density',
      '17 orders of magnitude'
    ],
    correctIndex: 0,
    explanation: '<p>$10^{17}$ vs $10^{9}$ is a difference of $10^{8}$, i.e. 8 orders of magnitude. These are two very different extreme densities \u2014 easy to muddle up if you don\u2019t keep the actual powers of ten in mind rather than just "very very dense" for both.</p>'
  },

  // ---- Conceptual: mass determines final remnant type ----------------------------
  {
    type: 'mcq',
    prompt: '<p>Which correctly summarises how a star\u2019s original mass determines its eventual remnant?</p>',
    options: [
      'Low mass (below ~6 solar masses) \u2192 white dwarf; higher mass \u2192 neutron star; very high mass (>~10 solar masses) \u2192 black hole',
      'All stars end up as white dwarfs regardless of mass',
      'Low mass stars become black holes; only the most massive stars become white dwarfs',
      'The type of remnant depends only on the star\u2019s temperature, not its mass'
    ],
    correctIndex: 0,
    explanation: '<p>Mass is the key factor: stars below about 6 solar masses end as white dwarfs; more massive stars undergo a type II supernova and typically leave a neutron star; the most massive stars (above roughly 10 solar masses) collapse all the way to a black hole.</p>'
  },

  // ---- Conceptual: event horizon is a boundary --------------------------------------
  {
    type: 'mcq',
    prompt: '<p>How should the event horizon of a black hole be described?</p>',
    options: [
      'A boundary (spherical surface) where the escape velocity equals the speed of light',
      'A single point at the centre of the black hole',
      'A specific distance, without any particular shape',
      'The black hole\u2019s singularity'
    ],
    correctIndex: 0,
    explanation: '<p>The event horizon is a boundary \u2014 a spherical surface at the Schwarzschild radius \u2014 not a point, and not just "a distance" without shape. This is explicitly one of the most common ways marks are lost on this topic.</p>'
  },

  // ---- Conceptual: black hole gravity outside the event horizon -------------------
  {
    type: 'mcq',
    prompt: '<p>If the Sun were somehow instantly replaced by a black hole of exactly the same mass, what would happen to Earth\u2019s orbit?</p>',
    options: [
      'Nothing would change \u2014 the gravitational force at Earth\u2019s distance depends only on mass, which is unchanged',
      'Earth would immediately be pulled in, since black holes have much stronger gravity than stars',
      'Earth\u2019s orbit would become unstable and shrink over time',
      'Earth would be flung out of the solar system by the sudden change in gravity'
    ],
    correctIndex: 0,
    explanation: '<p>Outside the event horizon, a black hole\u2019s gravity follows the ordinary inverse square law, exactly like any other object of the same mass. Since Earth\u2019s distance from the Sun is vastly larger than any black hole\u2019s Schwarzschild radius, nothing about Earth\u2019s orbit would change \u2014 only objects very close to the black hole experience anything unusual.</p>'
  },

  // ---- Conceptual: neutron star formation reaction ------------------------------
  {
    type: 'mcq',
    prompt: '<p>Which particle reaction describes how neutrons form inside a collapsing stellar core to create a neutron star?</p>',
    options: [
      'p + e \u2192 n + \u03bd (a proton and electron combine to form a neutron and a neutrino)',
      'n \u2192 p + e (a neutron decays into a proton and an electron)',
      'p + p \u2192 n + n (two protons combine to form two neutrons)',
      'e + e \u2192 n (two electrons combine to form a neutron)'
    ],
    correctIndex: 0,
    explanation: '<p>Under the extreme pressure of core collapse, protons and electrons are forced together, with a proton absorbing an electron to become a neutron, releasing a neutrino: $p+e\\rightarrow n+\\nu_e$. This is essentially inverse beta decay, run in reverse to the usual radioactive decay direction.</p>'
  }
];
