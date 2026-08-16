/* Question bank for statics.html — loaded before quiz.js is invoked. */

var staticsQuestions = [

  // ---- Numeric: find T_B given T_A and both angles (worked-example style) -----
  {
    type: 'numeric',
    generateVars: function () {
      var TAs = [300, 350, 400, 450, 500];
      var angleAs = [20, 25, 30, 35, 40];
      var angleBs = [8, 10, 12, 15, 18];
      var TA = TAs[Math.floor(Math.random() * TAs.length)];
      var angleA = angleAs[Math.floor(Math.random() * angleAs.length)];
      var angleB = angleBs[Math.floor(Math.random() * angleBs.length)];
      return { TA: TA, angleA: angleA, angleB: angleB };
    },
    prompt: function (v) {
      return '<p>A stationary object is suspended by two cables, A and B, passing over smooth pulleys. Cable A has a tension of $\\quantity{' + v.TA + '}{N}$ and makes an angle of ' + v.angleA + '\u00B0 with the horizontal. Cable B makes an angle of ' + v.angleB + '\u00B0 with the horizontal. Calculate the tension in cable B.</p><p><i>Give your answer in N, to 3 s.f.</i></p>';
    },
    answer: function (v) {
      return (v.TA * Math.cos(v.angleA * Math.PI / 180)) / Math.cos(v.angleB * Math.PI / 180);
    },
    unit: 'N',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Since the object is in equilibrium, the horizontal components of the two tensions must be equal and opposite:</p>' +
        '<p>$T_A\\cos(' + v.angleA + '\\degree)=T_B\\cos(' + v.angleB + '\\degree)$</p>' +
        '<p>$T_B=\\dfrac{T_A\\cos(' + v.angleA + '\\degree)}{\\cos(' + v.angleB + '\\degree)}=\\dfrac{\\quantity{' + v.TA + '}{N}\\times\\cos(' + v.angleA + '\\degree)}{\\cos(' + v.angleB + '\\degree)}=\\quantity{' + ans.toPrecision(3) + '}{N}$</p>';
    }
  },

  // ---- Numeric: find T_A given T_B and both angles (reverse) ------------------
  {
    type: 'numeric',
    generateVars: function () {
      var TBs = [250, 300, 320, 380, 420];
      var angleAs = [20, 25, 30, 35, 40];
      var angleBs = [8, 10, 12, 15, 18];
      var TB = TBs[Math.floor(Math.random() * TBs.length)];
      var angleA = angleAs[Math.floor(Math.random() * angleAs.length)];
      var angleB = angleBs[Math.floor(Math.random() * angleBs.length)];
      return { TB: TB, angleA: angleA, angleB: angleB };
    },
    prompt: function (v) {
      return '<p>A stationary object is suspended by two cables, A and B. Cable B has a tension of $\\quantity{' + v.TB + '}{N}$ and makes an angle of ' + v.angleB + '\u00B0 with the horizontal. Cable A makes an angle of ' + v.angleA + '\u00B0 with the horizontal. Calculate the tension in cable A.</p><p><i>Give your answer in N, to 3 s.f.</i></p>';
    },
    answer: function (v) {
      return (v.TB * Math.cos(v.angleB * Math.PI / 180)) / Math.cos(v.angleA * Math.PI / 180);
    },
    unit: 'N',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>$T_A\\cos(' + v.angleA + '\\degree)=T_B\\cos(' + v.angleB + '\\degree)$</p>' +
        '<p>$T_A=\\dfrac{T_B\\cos(' + v.angleB + '\\degree)}{\\cos(' + v.angleA + '\\degree)}=\\quantity{' + ans.toPrecision(3) + '}{N}$</p>';
    }
  },

  // ---- Numeric: total weight supported (vertical components) ------------------
  {
    type: 'numeric',
    generateVars: function () {
      var TAs = [300, 350, 400, 450];
      var angleAs = [25, 30, 35, 40];
      var angleBs = [8, 10, 12, 15];
      var TA = TAs[Math.floor(Math.random() * TAs.length)];
      var angleA = angleAs[Math.floor(Math.random() * angleAs.length)];
      var angleB = angleBs[Math.floor(Math.random() * angleBs.length)];
      return { TA: TA, angleA: angleA, angleB: angleB };
    },
    prompt: function (v) {
      return '<p>An object is suspended by two cables. Cable A has a tension of $\\quantity{' + v.TA + '}{N}$ at ' + v.angleA + '\u00B0 to the horizontal, and cable B is at ' + v.angleB + '\u00B0 to the horizontal. Calculate the weight of the object.</p><p><i>Give your answer in N, to 3 s.f. (Hint: find T\u2082 first, then sum the vertical components.)</i></p>';
    },
    answer: function (v) {
      var TB = (v.TA * Math.cos(v.angleA * Math.PI / 180)) / Math.cos(v.angleB * Math.PI / 180);
      return v.TA * Math.sin(v.angleA * Math.PI / 180) + TB * Math.sin(v.angleB * Math.PI / 180);
    },
    unit: 'N',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var TB = ((v.TA * Math.cos(v.angleA * Math.PI / 180)) / Math.cos(v.angleB * Math.PI / 180)).toPrecision(4);
      return '<p>First find $T_B$ from the horizontal balance: $T_B=\\quantity{' + TB + '}{N}$</p>' +
        '<p>Since the object is in equilibrium, the sum of the vertical components supports the weight:</p>' +
        '<p>$W=T_A\\sin(' + v.angleA + '\\degree)+T_B\\sin(' + v.angleB + '\\degree)=\\quantity{' + ans.toPrecision(3) + '}{N}$</p>';
    }
  },

  // ---- Numeric: simple vertical equilibrium (single string) -------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ms = [2, 5, 8, 12, 15];
      var m = ms[Math.floor(Math.random() * ms.length)];
      return { m: m };
    },
    prompt: function (v) {
      return '<p>A mass of $\\quantity{' + v.m + '}{kg}$ hangs in equilibrium, suspended by a single vertical string. Calculate the tension in the string.</p><p><i>Use $g=\\quantity{9.81}{m\\,s^{-2}}$. Give your answer in N, to 3 s.f.</i></p>';
    },
    answer: function (v) { return v.m * 9.81; },
    unit: 'N',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Since the mass is in equilibrium, the tension must exactly balance the weight:</p>' +
        '<p>$T=W=mg=\\quantity{' + v.m + '}{kg}\\times\\quantity{9.81}{m\\,s^{-2}}=\\quantity{' + ans.toPrecision(3) + '}{N}$</p>';
    }
  },

  // ---- Conceptual: equilibrium triangle test -----------------------------------
  {
    type: 'mcq',
    prompt: '<p>Three force vectors are arranged head-to-tail, forming a closed triangle, with each arrowhead correctly following the tail of the next vector. What does this tell you?</p>',
    options: [
      'The three forces are in equilibrium',
      'The three forces cannot be in equilibrium',
      'Nothing can be concluded without knowing the exact angles',
      'The object must be accelerating'
    ],
    correctIndex: 0,
    explanation: '<p>If three force vectors can be arranged, without rotating them, into a closed triangle with each vector joining head-to-tail consistently, this shows their vector sum is zero &mdash; meaning the forces are in equilibrium. If two arrowheads meet at the same corner instead, the forces are <b>not</b> in equilibrium.</p>'
  },

  // ---- Conceptual: what Sigma F = 0 actually means ------------------------------
  {
    type: 'mcq',
    prompt: '<p>An object satisfies $\\Sigma F=0$. What does this tell you about its motion?</p>',
    options: [
      'It is either stationary, or moving with constant velocity',
      'It must be completely stationary',
      'It must be accelerating at a constant rate',
      'It is impossible to say anything about its motion'
    ],
    correctIndex: 0,
    explanation: '<p>$\\Sigma F=0$ means there is no resultant force, so by Newton\u2019s first law the object\u2019s velocity is not changing. This includes both an object at rest <b>and</b> an object moving in a straight line at constant speed &mdash; not just the stationary case.</p>'
  },

  // ---- Conceptual: condition for two forces to be in equilibrium -----------------
  {
    type: 'mcq',
    prompt: '<p>Under what condition can just two forces acting on an object be in equilibrium?</p>',
    options: [
      'Only if they are equal in magnitude and act in exactly opposite directions (along the same line)',
      'Only if they act at right angles to each other',
      'Any two forces can be in equilibrium, regardless of their directions',
      'Two forces can never be in equilibrium; at least three are required'
    ],
    correctIndex: 0,
    explanation: '<p>With only two forces, they can only sum to zero if they are equal in magnitude and act in exactly opposite directions along the same line &mdash; like a weight hanging from a single string, balanced by the tension. Any other arrangement of just two non-opposite forces will leave a resultant.</p>'
  },

  // ---- Conceptual: what a free-body diagram shows ---------------------------------
  {
    type: 'mcq',
    prompt: '<p>What must a correctly drawn free-body diagram show for each force acting on an object?</p>',
    options: [
      'The magnitude of the force (via arrow length) and its direction (via arrow orientation)',
      'A realistic, to-scale drawing of the object itself',
      'Only the direction of each force; magnitude is not represented',
      'The internal structure and material of the object'
    ],
    correctIndex: 0,
    explanation: '<p>A free-body diagram is schematic, not a realistic drawing &mdash; the object itself is usually just a box or dot. What matters is that each force arrow correctly represents both magnitude (arrow length, drawn to scale) and direction (arrow orientation).</p>'
  }
];
