/* Question bank for lenses.html — loaded before quiz.js is invoked. */

var lensesQuestions = [

  // ---- Numeric: lens equation, find v ----------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var fs = [10, 12, 15, 20, 25];
      var us = [18, 20, 25, 30, 40];
      var f = fs[Math.floor(Math.random() * fs.length)];
      var u = us[Math.floor(Math.random() * us.length)];
      if (u <= f) { u = f + 10; }
      return { f: f, u: u };
    },
    prompt: function (v) {
      return '<p>An object is placed $\\quantity{' + v.u + '}{cm}$ from a convex lens with a focal length of $\\quantity{' + v.f + '}{cm}$. Calculate the position of the image.</p><p><i>Give your answer in cm.</i></p>';
    },
    answer: function (v) { return 1 / (1 / v.f - 1 / v.u); },
    unit: 'cm',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $\\dfrac{1}{f}=\\dfrac{1}{u}+\\dfrac{1}{v}$, rearranged for $v$:</p>' +
        '<p>$\\dfrac{1}{v}=\\dfrac{1}{\\quantity{' + v.f + '}{cm}}-\\dfrac{1}{\\quantity{' + v.u + '}{cm}}$</p>' +
        '<p>$v=\\quantity{' + ans.toPrecision(3) + '}{cm}$. Since this is positive, the image is real.</p>';
    }
  },

  // ---- Numeric: magnification from u and v -----------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var us = [10, 15, 20, 25];
      var vs = [30, 40, 50, 60];
      var u = us[Math.floor(Math.random() * us.length)];
      var v = vs[Math.floor(Math.random() * vs.length)];
      return { u: u, v: v };
    },
    prompt: function (v) {
      return '<p>An object at $\\quantity{' + v.u + '}{cm}$ from a lens forms a real image at $\\quantity{' + v.v + '}{cm}$ from the lens. Calculate the magnification.</p><p><i>Give your answer to 3 s.f.</i></p>';
    },
    answer: function (v) { return v.v / v.u; },
    unit: '',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $M=\\dfrac{v}{u}$:</p>' +
        '<p>$M=\\dfrac{\\quantity{' + v.v + '}{cm}}{\\quantity{' + v.u + '}{cm}}=' + ans.toPrecision(3) + '$</p>';
    }
  },

  // ---- Numeric: find f given u and v ------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var us = [20, 25, 30, 40];
      var vs = [40, 50, 60, 80];
      var u = us[Math.floor(Math.random() * us.length)];
      var v = vs[Math.floor(Math.random() * vs.length)];
      return { u: u, v: v };
    },
    prompt: function (v) {
      return '<p>An object at $\\quantity{' + v.u + '}{cm}$ from a lens forms a real image at $\\quantity{' + v.v + '}{cm}$ from the lens. Calculate the focal length of the lens.</p><p><i>Give your answer in cm, to 3 s.f.</i></p>';
    },
    answer: function (v) { return 1 / (1 / v.u + 1 / v.v); },
    unit: 'cm',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $\\dfrac{1}{f}=\\dfrac{1}{u}+\\dfrac{1}{v}$:</p>' +
        '<p>$\\dfrac{1}{f}=\\dfrac{1}{\\quantity{' + v.u + '}{cm}}+\\dfrac{1}{\\quantity{' + v.v + '}{cm}}$</p>' +
        '<p>$f=\\quantity{' + ans.toPrecision(3) + '}{cm}$</p>';
    }
  },

  // ---- Numeric: magnification from heights -------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var hos = [2, 3, 4, 5];
      var Ms = [2, 2.5, 3, 4];
      var ho = hos[Math.floor(Math.random() * hos.length)];
      var M = Ms[Math.floor(Math.random() * Ms.length)];
      return { ho: ho, M: M };
    },
    prompt: function (v) {
      return '<p>An object of height $\\quantity{' + v.ho + '}{cm}$ is imaged with a magnification of ' + v.M + '. Calculate the height of the image.</p><p><i>Give your answer in cm.</i></p>';
    },
    answer: function (v) { return v.ho * v.M; },
    unit: 'cm',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Using $M=\\dfrac{h_i}{h_o}$, rearranged for $h_i$:</p>' +
        '<p>$h_i=M\\times h_o=' + v.M + '\\times\\quantity{' + v.ho + '}{cm}=\\quantity{' + ans.toPrecision(3) + '}{cm}$</p>';
    }
  },

  // ---- Conceptual: sign convention for v -------------------------------------
  {
    type: 'mcq',
    prompt: '<p>Solving the lens equation for an object gives a value of $v=-12\\,\\units{cm}$. What does the negative sign tell you?</p>',
    options: [
      'The image is virtual',
      'The image is real',
      'The calculation must be wrong, since distances can\u2019t be negative',
      'The object must also be virtual'
    ],
    correctIndex: 0,
    explanation: '<p>In this sign convention, a positive value of $v$ means a real image and a negative value means a virtual image. A negative result isn\u2019t an error \u2014 it\u2019s the equation telling you the image is virtual.</p>'
  },

  // ---- Conceptual: orientation not given by the equation -----------------------
  {
    type: 'mcq',
    prompt: '<p>The lens equation gives a positive value of $v$ for a convex lens, confirming the image is real. What can you conclude about its orientation?</p>',
    options: [
      'It must be inverted \u2014 a real image from a convex lens is always inverted',
      'It must be upright \u2014 all real images are upright',
      'The equation directly tells you the orientation, so no further reasoning is needed',
      'Orientation cannot be determined for any lens under any circumstances'
    ],
    correctIndex: 0,
    explanation: '<p>The lens equation itself never tells you orientation \u2014 that has to be known separately. For a convex lens, any real image is always inverted, and the only way to get an upright image is a virtual one (which only happens when the object is inside the focal length).</p>'
  },

  // ---- Conceptual: matching object position to image properties ---------------
  {
    type: 'mcq',
    prompt: '<p>An object is placed between the focal point (F) and 2F of a convex lens. What are the properties of the resulting image?</p>',
    options: [
      'Real, inverted, magnified \u2014 forms beyond 2F (used in projectors)',
      'Virtual, upright, magnified \u2014 forms on the same side as the object',
      'Real, inverted, diminished \u2014 forms between F and 2F',
      'Real, upright, same size \u2014 forms at 2F'
    ],
    correctIndex: 0,
    explanation: '<p>An object between F and 2F produces a real, inverted image that is magnified and forms beyond 2F on the far side of the lens \u2014 this is the arrangement used in projectors. (An object beyond 2F instead gives a diminished image between F and 2F, as in a camera.)</p>'
  },

  // ---- Conceptual: when a virtual image forms --------------------------------
  {
    type: 'mcq',
    prompt: '<p>Under what condition does a convex lens produce a virtual image?</p>',
    options: [
      'When the object is placed closer to the lens than the focal length',
      'When the object is placed exactly at 2F',
      'When the object is placed further than 2F from the lens',
      'A convex lens can never produce a virtual image'
    ],
    correctIndex: 0,
    explanation: '<p>A convex lens only produces a virtual image when the object is inside the focal length (closer than F). This virtual image is upright and magnified \u2014 exactly the arrangement used in a magnifying glass. Any object placed further away than F produces a real image instead.</p>'
  }
];
