/* Question bank for hr_diagrams.html — loaded before quiz.js is invoked. */

var hrDiagramsQuestions = [

  // ---- Numeric: surface area ratio from temperature ratio ----------------------
  {
    type: 'numeric',
    generateVars: function () {
      var T1s = [2500, 3000, 3500];
      var T2s = [10000, 12500, 15000, 20000];
      var T1 = T1s[Math.floor(Math.random() * T1s.length)];
      var T2 = T2s[Math.floor(Math.random() * T2s.length)];
      return { T1: T1, T2: T2 };
    },
    prompt: function (v) {
      return '<p>A giant star (surface temperature $\\quantity{' + v.T1 + '}{K}$) and a main sequence star (surface temperature $\\quantity{' + v.T2 + '}{K}$) have the same absolute magnitude. Calculate the ratio of their surface areas, $\\frac{A_{giant}}{A_{main}}$.</p><p><i>Give your answer to 3 s.f.</i></p>';
    },
    answer: function (v) { return Math.pow(v.T2 / v.T1, 4); },
    unit: '',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Since both stars have the same power output, $\\sigma A_1T_1^4=\\sigma A_2T_2^4$, so:</p>' +
        '<p>$\\dfrac{A_{giant}}{A_{main}}=\\left(\\dfrac{T_{main}}{T_{giant}}\\right)^{4}=\\left(\\dfrac{' + v.T2 + '}{' + v.T1 + '}\\right)^{4}=' + ans.toPrecision(3) + '$</p>';
    }
  },

  // ---- Numeric: radius ratio (square root of area ratio) -----------------------
  {
    type: 'numeric',
    generateVars: function () {
      var T1s = [2500, 3000, 3500, 4000];
      var T2s = [10000, 15000, 20000, 25000];
      var T1 = T1s[Math.floor(Math.random() * T1s.length)];
      var T2 = T2s[Math.floor(Math.random() * T2s.length)];
      return { T1: T1, T2: T2 };
    },
    prompt: function (v) {
      return '<p>A giant star (surface temperature $\\quantity{' + v.T1 + '}{K}$) and a main sequence star (surface temperature $\\quantity{' + v.T2 + '}{K}$) have the same absolute magnitude. Calculate how many times larger the giant\u2019s radius is than the main sequence star\u2019s.</p><p><i>Give your answer to 3 s.f.</i></p>';
    },
    answer: function (v) { return Math.pow(v.T2 / v.T1, 2); },
    unit: '',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var areaRatio = Math.pow(v.T2 / v.T1, 4).toPrecision(4);
      return '<p>Area ratio: $\\left(\\dfrac{' + v.T2 + '}{' + v.T1 + '}\\right)^{4}=' + areaRatio + '$</p>' +
        '<p>Since $A=4\\pi r^{2}$, radius ratio $=\\sqrt{\\text{area ratio}}=\\sqrt{' + areaRatio + '}=' + ans.toPrecision(3) + '$</p>';
    }
  },

  // ---- Conceptual: y-axis direction ----------------------------------------------
  {
    type: 'mcq',
    prompt: '<p>On a correctly drawn HR diagram, where should the brightest stars (most negative absolute magnitude) appear on the y-axis?</p>',
    options: [
      'Near the top',
      'Near the bottom',
      'In the exact middle, regardless of brightness',
      'The y-axis position doesn\u2019t depend on brightness'
    ],
    correctIndex: 0,
    explanation: '<p>The y-axis runs from +15 at the bottom to \u201310 at the top. Since lower (more negative) magnitude means brighter, the brightest stars appear <b>near the top</b> of the diagram.</p>'
  },

  // ---- Conceptual: x-axis direction ----------------------------------------------
  {
    type: 'mcq',
    prompt: '<p>On a correctly drawn HR diagram, where should the hottest stars appear on the x-axis?</p>',
    options: [
      'On the left',
      'On the right',
      'In the middle',
      'Temperature isn\u2019t shown on the x-axis, only spectral class'
    ],
    correctIndex: 0,
    explanation: '<p>The x-axis runs from $\\quantity{50\\,000}{K}$ on the left to $\\quantity{2\\,500}{K}$ on the right \u2014 the opposite of how you might naturally plot increasing temperature. The hottest stars are on the <b>left</b>.</p>'
  },

  // ---- Conceptual: giants must be huge --------------------------------------------
  {
    type: 'mcq',
    prompt: '<p>A star appears in the "giant" region of the HR diagram: cool (low temperature) but very bright (very negative magnitude). What does this tell you about its size?</p>',
    options: [
      'It must have a huge surface area, since a cool object can only be this bright by radiating from an enormous surface',
      'It must be small, since giants are named for their brightness, not their size',
      'Its size cannot be determined from temperature and brightness alone',
      'It must be similar in size to the Sun, since all stars are roughly the same size'
    ],
    correctIndex: 0,
    explanation: '<p>From $P=\\sigma AT^{4}$, a cool star (low $T$) can only achieve high luminosity ($P$) by having a very large surface area $A$. This is exactly why giant stars in this region of the HR diagram are physically enormous \u2014 it\u2019s a direct consequence of Stefan\u2019s law, not just a naming convention.</p>'
  },

  // ---- Conceptual: white dwarfs must be tiny --------------------------------------
  {
    type: 'mcq',
    prompt: '<p>A star appears in the "white dwarf" region of the HR diagram: hot but very dim. What does this tell you about its size?</p>',
    options: [
      'It must have a tiny surface area, since a hot object radiating so little total power can only have a very small surface',
      'It must be large, since hot objects always have large surface areas',
      'Its size cannot be determined from temperature and brightness alone',
      'White dwarfs are always exactly the same size as main sequence stars'
    ],
    correctIndex: 0,
    explanation: '<p>From $P=\\sigma AT^{4}$, a hot star (high $T$) that\u2019s still very dim (low $P$) must have a very small surface area \u2014 otherwise it would be radiating far more power. This is why white dwarfs, despite their high temperature, are physically tiny (roughly Earth-sized).</p>'
  },

  // ---- Conceptual: absolute vs apparent magnitude for the comparison technique ---
  {
    type: 'mcq',
    prompt: '<p>To compare the sizes of two stars using $\\frac{P_A}{P_B}=\\frac{A_A}{A_B}$ (assuming equal power output), what must be true about the two stars\u2019 magnitudes?</p>',
    options: [
      'They must have the same absolute magnitude, since that directly reflects equal luminosity regardless of distance',
      'They must have the same apparent magnitude, since that\u2019s what we actually observe',
      'Either absolute or apparent magnitude works equally well for this technique',
      'Magnitude isn\u2019t relevant to this comparison at all'
    ],
    correctIndex: 0,
    explanation: '<p>Equal <b>absolute</b> magnitude means equal luminosity, full stop \u2014 that\u2019s the whole point of the absolute magnitude scale. Equal <b>apparent</b> magnitude would only mean equal luminosity if the two stars were also at the same distance from Earth, which usually isn\u2019t the case.</p>'
  },

  // ---- Numeric: another radius ratio, differently framed --------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var T1s = [3000, 3500, 4000];
      var multiples = [2, 3, 4, 5];
      var T1 = T1s[Math.floor(Math.random() * T1s.length)];
      var mult = multiples[Math.floor(Math.random() * multiples.length)];
      var T2 = T1 * mult;
      return { T1: T1, T2: T2 };
    },
    prompt: function (v) {
      return '<p>Two stars have the same absolute magnitude. Star A has a surface temperature of $\\quantity{' + v.T1 + '}{K}$, and Star B has a surface temperature exactly ' + (v.T2 / v.T1) + ' times higher. Calculate the ratio of their radii, $\\frac{r_A}{r_B}$.</p><p><i>Give your answer to 3 s.f.</i></p>';
    },
    answer: function (v) { return Math.pow(v.T2 / v.T1, 2); },
    unit: '',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Star A is cooler, so from $P=\\sigma AT^4$ with equal $P$, Star A must have the larger area (and radius):</p>' +
        '<p>$\\dfrac{r_A}{r_B}=\\left(\\dfrac{T_B}{T_A}\\right)^{2}=\\left(' + (v.T2 / v.T1) + '\\right)^{2}=' + ans.toPrecision(3) + '$</p>';
    }
  },

  // ---- Conceptual: what the HR diagram plots --------------------------------------
  {
    type: 'mcq',
    prompt: '<p>What are the two quantities plotted on the axes of an HR diagram?</p>',
    options: [
      'Temperature (or spectral class) on the x-axis; absolute magnitude (or luminosity) on the y-axis',
      'Distance on the x-axis; apparent magnitude on the y-axis',
      'Mass on the x-axis; radius on the y-axis',
      'Age on the x-axis; temperature on the y-axis'
    ],
    correctIndex: 0,
    explanation: '<p>The HR diagram plots temperature or spectral class on the x-axis, and absolute magnitude or luminosity on the y-axis. It isn\u2019t a graph in the usual sense \u2014 neither axis starts at zero, and both run in a "reversed" direction from what you might expect.</p>'
  }
];
