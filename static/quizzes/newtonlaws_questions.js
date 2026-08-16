/* Question bank for newtonlaws.html — loaded before quiz.js is invoked. */

var newtonLawsQuestions = [

  // ---- Numeric: F = ma, find F --------------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ms = [1000, 1200, 1500, 2000];
      var as = [1.5, 2, 2.5, 3];
      var m = ms[Math.floor(Math.random() * ms.length)];
      var a = as[Math.floor(Math.random() * as.length)];
      return { m: m, a: a };
    },
    prompt: function (v) {
      return '<p>A car of mass $\\quantity{' + v.m + '}{kg}$ accelerates at $\\quantity{' + v.a + '}{m\\,s^{-2}}$. Calculate the resultant force acting on it.</p><p><i>Give your answer in N, standard form to 3 s.f.</i></p>';
    },
    answer: function (v) { return v.m * v.a; },
    unit: 'N',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Using $F=ma$:</p>' +
        '<p>$F=\\quantity{' + v.m + '}{kg}\\times\\quantity{' + v.a + '}{m\\,s^{-2}}=\\quantity{' + ans.toExponential(3) + '}{N}$</p>';
    }
  },

  // ---- Numeric: F = ma, find a --------------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var Fs = [5000, 8000, 12000, 20000];
      var ms = [800, 1000, 1500, 2000];
      var F = Fs[Math.floor(Math.random() * Fs.length)];
      var m = ms[Math.floor(Math.random() * ms.length)];
      return { F: F, m: m };
    },
    prompt: function (v) {
      return '<p>A resultant force of $\\quantity{' + v.F + '}{N}$ acts on an object of mass $\\quantity{' + v.m + '}{kg}$. Calculate its acceleration.</p><p><i>Give your answer in m s<sup>-2</sup>, to 3 s.f.</i></p>';
    },
    answer: function (v) { return v.F / v.m; },
    unit: 'm/s\u00B2',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Rearranging $F=ma$:</p>' +
        '<p>$a=\\dfrac{F}{m}=\\dfrac{\\quantity{' + v.F + '}{N}}{\\quantity{' + v.m + '}{kg}}=\\quantity{' + ans.toPrecision(3) + '}{m\\,s^{-2}}$</p>';
    }
  },

  // ---- Numeric: W = mg -----------------------------------------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var ms = [5, 12, 60, 80, 1200];
      var m = ms[Math.floor(Math.random() * ms.length)];
      return { m: m };
    },
    prompt: function (v) {
      return '<p>Calculate the weight of an object with a mass of $\\quantity{' + v.m + '}{kg}$.</p><p><i>Use $g=\\quantity{9.81}{m\\,s^{-2}}$. Give your answer in N, to 3 s.f.</i></p>';
    },
    answer: function (v) { return v.m * 9.81; },
    unit: 'N',
    tolerancePercent: 1,
    explanation: function (v, ans) {
      return '<p>Using $W=mg$:</p>' +
        '<p>$W=\\quantity{' + v.m + '}{kg}\\times\\quantity{9.81}{m\\,s^{-2}}=\\quantity{' + ans.toPrecision(3) + '}{N}$</p>';
    }
  },

  // ---- Numeric: worked-example style, find air resistance -----------------------
  {
    type: 'numeric',
    generateVars: function () {
      var thrusts = [180000, 200000, 230000, 260000];
      var ms = [9000, 10000, 11000, 12000];
      var as = [2.0, 2.5, 2.9, 3.2];
      var thrust = thrusts[Math.floor(Math.random() * thrusts.length)];
      var m = ms[Math.floor(Math.random() * ms.length)];
      var a = as[Math.floor(Math.random() * as.length)];
      return { thrust: thrust, m: m, a: a };
    },
    prompt: function (v) {
      return '<p>A car has a mass of $\\quantity{' + v.m + '}{kg}$ and a thrust of $\\quantity{' + v.thrust + '}{N}$. At a certain instant, its acceleration is $\\quantity{' + v.a + '}{m\\,s^{-2}}$. Calculate the air resistance acting on the car at this instant.</p><p><i>Give your answer in N, standard form to 3 s.f.</i></p>';
    },
    answer: function (v) { return v.thrust - (v.m * v.a); },
    unit: 'N',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var Fres = (v.m * v.a).toPrecision(4);
      return '<p>First find the resultant force: $F_{resultant}=ma=\\quantity{' + Fres + '}{N}$</p>' +
        '<p>Then: air resistance $=$ thrust $-$ resultant force $=\\quantity{' + v.thrust + '}{N}-\\quantity{' + Fres + '}{N}=\\quantity{' + ans.toExponential(3) + '}{N}$</p>';
    }
  },

  // ---- Numeric: worked-example style, find acceleration --------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var thrusts = [180000, 200000, 230000, 260000];
      var resistances = [150000, 170000, 198000, 210000];
      var ms = [9000, 10000, 11000, 12000];
      var thrust = thrusts[Math.floor(Math.random() * thrusts.length)];
      var resistance = resistances[Math.floor(Math.random() * resistances.length)];
      var m = ms[Math.floor(Math.random() * ms.length)];
      if (resistance >= thrust) { resistance = thrust - 20000; }
      return { thrust: thrust, resistance: resistance, m: m };
    },
    prompt: function (v) {
      return '<p>A car of mass $\\quantity{' + v.m + '}{kg}$ has a thrust of $\\quantity{' + v.thrust + '}{N}$ and experiences an air resistance of $\\quantity{' + v.resistance + '}{N}$. Calculate its acceleration at this instant.</p><p><i>Give your answer in m s<sup>-2</sup>, to 3 s.f.</i></p>';
    },
    answer: function (v) { return (v.thrust - v.resistance) / v.m; },
    unit: 'm/s\u00B2',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var Fres = (v.thrust - v.resistance);
      return '<p>Resultant force $=$ thrust $-$ air resistance $=\\quantity{' + v.thrust + '}{N}-\\quantity{' + v.resistance + '}{N}=\\quantity{' + Fres + '}{N}$</p>' +
        '<p>$a=\\dfrac{F_{resultant}}{m}=\\dfrac{\\quantity{' + Fres + '}{N}}{\\quantity{' + v.m + '}{kg}}=\\quantity{' + ans.toPrecision(3) + '}{m\\,s^{-2}}$</p>';
    }
  },

  // ---- Conceptual: Newton's 1st law -----------------------------------------------
  {
    type: 'mcq',
    prompt: '<p>An object is moving in a straight line at a constant $\\quantity{20}{m\\,s^{-1}}$. What does Newton\u2019s 1st law tell you about the forces acting on it?</p>',
    options: [
      'The forces acting on it must be balanced (sum to zero)',
      'There must be no forces acting on it at all',
      'There must be a constant resultant force acting in the direction of motion',
      'The object cannot have any forces acting on it, since it isn\u2019t accelerating'
    ],
    correctIndex: 0,
    explanation: '<p>Newton\u2019s 1st law says an object\u2019s velocity only changes if there\u2019s a resultant force. Constant velocity (including in a straight line, not just at rest) means the forces acting on it must be balanced \u2014 not that there are no forces at all, just that they sum to zero.</p>'
  },

  // ---- Conceptual: Newton pairs ---------------------------------------------------
  {
    type: 'mcq',
    prompt: '<p>A book rests on a table. Its weight and the normal contact force from the table are equal and opposite. Are these two forces a Newton (action-reaction) pair?</p>',
    options: [
      'No \u2014 they act on the same body (the book), so they can\u2019t be a Newton pair; they\u2019re just balanced forces',
      'Yes \u2014 any two equal and opposite forces form a Newton pair',
      'No \u2014 because the two forces are not the same magnitude',
      'Yes, but only while the book remains stationary'
    ],
    correctIndex: 0,
    explanation: '<p>A genuine Newton pair must act on two <i>different</i> bodies. The weight and the normal contact force both act on the book itself \u2014 they merely happen to balance, which is Newton\u2019s 1st law in action, not his 3rd. The true Newton pair here is the pair of contact forces between the book and the table.</p>'
  },

  // ---- Conceptual: terminal velocity / max speed reasoning ------------------------
  {
    type: 'mcq',
    prompt: '<p>A car\u2019s thrust stays constant as its speed increases. Why does its acceleration eventually reach zero?</p>',
    options: [
      'Air resistance increases with speed, shrinking the resultant force until it reaches zero when air resistance equals the thrust',
      'The engine automatically reduces its thrust as the car gets faster',
      'Newton\u2019s 2nd law only applies at low speeds',
      'The car\u2019s mass increases as it goes faster, cancelling out the thrust'
    ],
    correctIndex: 0,
    explanation: '<p>As speed increases, air resistance increases too, reducing the resultant force (thrust minus air resistance). By $F=ma$, this shrinking resultant force means shrinking acceleration. Once air resistance exactly equals the thrust, the resultant force is zero, so the acceleration is zero and the car has reached its maximum possible speed \u2014 the same idea as terminal velocity for a falling object.</p>'
  }
];
