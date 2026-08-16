/* Question bank for classification.html — loaded before quiz.js is invoked. */

var classificationQuestions = [

  // ---- Numeric: distance modulus, find d --------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ms = [0.5, 1.0, 1.5, 2.0, 2.5];
      var Ms = [-1.0, 0.0, 1.0, 2.0, 3.0];
      var m = ms[Math.floor(Math.random() * ms.length)];
      var M = Ms[Math.floor(Math.random() * Ms.length)];
      return { m: m, M: M };
    },
    prompt: function (v) {
      return '<p>A star has an apparent magnitude of ' + v.m + ' and an absolute magnitude of ' + v.M + '. Calculate its distance from Earth.</p><p><i>Give your answer in parsecs, to 3 s.f.</i></p>';
    },
    answer: function (v) { return 10 * Math.pow(10, (v.m - v.M) / 5); },
    unit: 'pc',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var dm = (v.m - v.M).toPrecision(3);
      return '<p>Distance modulus: $m-M=' + v.m + '-(' + v.M + ')=' + dm + '$</p>' +
        '<p>$d=10\\times 10^{(m-M)/5}=10\\times 10^{' + dm + '/5}=\\quantity{' + ans.toPrecision(3) + '}{pc}$</p>';
    }
  },

  // ---- Numeric: distance modulus, find M given m and d ------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ms = [1.0, 2.0, 3.0, 4.0];
      var ds = [5, 15, 25, 50];
      var m = ms[Math.floor(Math.random() * ms.length)];
      var d = ds[Math.floor(Math.random() * ds.length)];
      return { m: m, d: d };
    },
    prompt: function (v) {
      return '<p>A star has an apparent magnitude of ' + v.m + ' and is $\\quantity{' + v.d + '}{pc}$ from Earth. Calculate its absolute magnitude.</p><p><i>Give your answer to 3 s.f.</i></p>';
    },
    answer: function (v) { return v.m - 5 * Math.log10(v.d / 10); },
    unit: '',
    tolerancePercent: 3,
    explanation: function (v, ans) {
      return '<p>Using $m-M=5\\log\\left(\\dfrac{d}{10}\\right)$, rearranged for $M$:</p>' +
        '<p>$M=m-5\\log\\left(\\dfrac{' + v.d + '}{10}\\right)=' + ans.toPrecision(3) + '$</p>';
    }
  },

  // ---- Numeric: brightness ratio from magnitude difference --------------------
  {
    type: 'numeric',
    generateVars: function () {
      var dms = [1, 2, 3, 4, 5];
      var dm = dms[Math.floor(Math.random() * dms.length)];
      return { dm: dm };
    },
    prompt: function (v) {
      return '<p>Two stars have a difference in magnitude of ' + v.dm + '. Calculate how many times brighter the brighter star is than the dimmer one.</p><p><i>Give your answer to 3 s.f.</i></p>';
    },
    answer: function (v) { return Math.pow(2.51, v.dm); },
    unit: '',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Each magnitude step corresponds to a brightness ratio of 2.51:</p>' +
        '<p>$2.51^{' + v.dm + '}=' + ans.toPrecision(3) + '$</p>';
    }
  },

  // ---- Numeric: brightness ratio from absolute magnitudes (Betelgeuse-style) --
  {
    type: 'numeric',
    generateVars: function () {
      var M1s = [3.5, 4.2, 4.83, 5.5];
      var M2s = [-3.0, -5.85, -1.0, -7.0];
      var M1 = M1s[Math.floor(Math.random() * M1s.length)];
      var M2 = M2s[Math.floor(Math.random() * M2s.length)];
      return { M1: M1, M2: M2 };
    },
    prompt: function (v) {
      return '<p>Star A has an absolute magnitude of ' + v.M1 + '. Star B has an absolute magnitude of ' + v.M2 + '. Calculate how many times brighter Star B is than Star A.</p><p><i>Give your answer in standard form, 3 s.f.</i></p>';
    },
    answer: function (v) { return Math.pow(100, (v.M1 - v.M2) / 5); },
    unit: '',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var diff = (v.M1 - v.M2).toPrecision(3);
      return '<p>$\\Delta M=' + v.M1 + '-(' + v.M2 + ')=' + diff + '$</p>' +
        '<p>Brightness ratio $=100^{\\Delta M/5}=100^{' + diff + '/5}=\\quantity{' + ans.toExponential(3) + '}{}$</p>';
    }
  },

  // ---- Conceptual: lower magnitude = brighter -----------------------------------
  {
    type: 'mcq',
    prompt: '<p>Star A has an apparent magnitude of -1.4. Star B has an apparent magnitude of 6.0. Which star appears brighter from Earth?</p>',
    options: [
      'Star A, since a lower (more negative) magnitude means a brighter star',
      'Star B, since a higher magnitude means a brighter star',
      'They appear equally bright',
      'It cannot be determined from magnitude alone'
    ],
    correctIndex: 0,
    explanation: '<p>The magnitude scale runs backwards from what feels intuitive: a <b>lower</b> (more negative) magnitude means a <b>brighter</b> object. Star A, with the lower magnitude, is the brighter star (this happens to match Sirius vs the faintest naked-eye stars).</p>'
  },

  // ---- Conceptual: distance modulus sign --------------------------------------
  {
    type: 'mcq',
    prompt: '<p>A star has a distance modulus ($m-M$) of $-3.2$. What does the negative sign tell you?</p>',
    options: [
      'The star is closer than 10 pc',
      'The star is further than 10 pc',
      'The star\u2019s absolute magnitude has been measured incorrectly',
      'The star is exactly 10 pc away'
    ],
    correctIndex: 0,
    explanation: '<p>A negative distance modulus means the star appears brighter than its absolute magnitude would suggest at 10 pc \u2014 which happens when the star is actually <b>closer</b> than 10 pc. A positive distance modulus means the star is further than 10 pc.</p>'
  },

  // ---- Conceptual: luminosity vs brightness -------------------------------------
  {
    type: 'mcq',
    prompt: '<p>Two stars appear equally bright in the night sky (same apparent magnitude). What can you conclude about their luminosities?</p>',
    options: [
      'Nothing definite \u2014 they could have very different luminosities if they\u2019re at different distances',
      'They must have identical luminosities',
      'The closer one must have the lower luminosity',
      'Luminosity cannot be compared between two different stars'
    ],
    correctIndex: 0,
    explanation: '<p>Apparent brightness depends on both luminosity <i>and</i> distance. Two stars with very different luminosities can appear equally bright if the more luminous one is proportionally further away \u2014 this is exactly why absolute magnitude (brightness at a fixed distance of 10 pc) is needed to compare true luminosities directly.</p>'
  },

  // ---- Conceptual: parallax angle definition ------------------------------------
  {
    type: 'mcq',
    prompt: '<p>A star is observed to shift by a total angle of 0.6 arcsec between two observations six months apart. What parallax angle should be used in distance calculations?</p>',
    options: [
      '0.3 arcsec \u2014 half the total observed shift',
      '0.6 arcsec \u2014 the full observed shift',
      '1.2 arcsec \u2014 double the observed shift',
      'The parallax angle cannot be found from this information'
    ],
    correctIndex: 0,
    explanation: '<p>The parallax angle is defined as the angle subtended by 1 AU (not the full 2 AU baseline between the two observation points). Since the total observed shift corresponds to the full 2 AU baseline, the parallax angle used in calculations is <b>half</b> of the total observed shift.</p>'
  }
];
