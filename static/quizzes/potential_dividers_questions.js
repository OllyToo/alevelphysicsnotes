/* Question bank for potential_dividers.html — loaded before quiz.js is invoked. */

var potentialDividersQuestions = [

  // ---- Numeric: basic potential divider equation ---------------------------
  {
    type: 'numeric',
    generateVars: function () {
      var Vins = [6, 9, 12];
      var R1s = [2, 4, 5, 10, 20];
      var R2s = [3, 6, 8, 15, 30];
      var Vin = Vins[Math.floor(Math.random() * Vins.length)];
      var R1 = R1s[Math.floor(Math.random() * R1s.length)];
      var R2 = R2s[Math.floor(Math.random() * R2s.length)];
      return { Vin: Vin, R1: R1, R2: R2 };
    },
    prompt: function (v) {
      return '<p>A potential divider consists of a $\\quantity{' + v.Vin + '}{V}$ supply connected across two series resistors, $R_1=\\quantity{' + v.R1 + '}{\\Omega}$ and $R_2=\\quantity{' + v.R2 + '}{\\Omega}$. Calculate the voltage across $R_1$.</p><p><i>Give your answer in volts (V).</i></p>';
    },
    answer: function (v) { return v.Vin * v.R1 / (v.R1 + v.R2); },
    unit: 'V',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      return '<p>Using $V_{1}=V_{in}\\times\\dfrac{R_{1}}{R_{1}+R_{2}}$:</p>' +
        '<p>$V_{1}=\\quantity{' + v.Vin + '}{V}\\times\\dfrac{\\quantity{' + v.R1 + '}{\\Omega}}{\\quantity{' + v.R1 + '}{\\Omega}+\\quantity{' + v.R2 + '}{\\Omega}}=\\quantity{' + ans.toPrecision(3) + '}{V}$</p>';
    }
  },

  // ---- Numeric: current-based method (I = V/R_T, then V = IR) --------------
  {
    type: 'numeric',
    generateVars: function () {
      var Vins = [6, 9, 12, 15];
      var R1s = [10, 20, 25, 40];
      var R2s = [5, 10, 15, 20];
      var Vin = Vins[Math.floor(Math.random() * Vins.length)];
      var R1 = R1s[Math.floor(Math.random() * R1s.length)];
      var R2 = R2s[Math.floor(Math.random() * R2s.length)];
      return { Vin: Vin, R1: R1, R2: R2 };
    },
    prompt: function (v) {
      return '<p>A $\\quantity{' + v.Vin + '}{V}$ supply is connected across two series resistors, $R_1=\\quantity{' + v.R1 + '}{k\\Omega}$ and $R_2=\\quantity{' + v.R2 + '}{k\\Omega}$. Calculate the voltage across $R_2$ by first finding the current in the circuit.</p><p><i>Give your answer in volts (V).</i></p>';
    },
    answer: function (v) { return v.Vin * v.R2 / (v.R1 + v.R2); },
    unit: 'V',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var RT = v.R1 + v.R2;
      var I = v.Vin / RT;
      return '<p>$R_{T}=\\quantity{' + v.R1 + '}{k\\Omega}+\\quantity{' + v.R2 + '}{k\\Omega}=\\quantity{' + RT + '}{k\\Omega}$</p>' +
        '<p>$I=\\dfrac{V_{in}}{R_{T}}=\\dfrac{\\quantity{' + v.Vin + '}{V}}{\\quantity{' + RT + '}{k\\Omega}}=\\quantity{' + I.toPrecision(3) + '}{mA}$</p>' +
        '<p>$V_{2}=IR_{2}=\\quantity{' + ans.toPrecision(3) + '}{V}$</p>';
    }
  },

  // ---- Numeric: rearranged — solve for the unknown resistor ----------------
  {
    type: 'numeric',
    generateVars: function () {
      var Vins = [6, 9, 12];
      var R1s = [4, 5, 8, 10];
      var targetFractions = [0.2, 0.25, 0.3, 0.4, 0.5];
      var Vin = Vins[Math.floor(Math.random() * Vins.length)];
      var R1 = R1s[Math.floor(Math.random() * R1s.length)];
      var frac = targetFractions[Math.floor(Math.random() * targetFractions.length)];
      var Vout = +(Vin * frac).toFixed(2);
      return { Vin: Vin, R1: R1, Vout: Vout };
    },
    prompt: function (v) {
      return '<p>A potential divider has $V_{in}=\\quantity{' + v.Vin + '}{V}$ and $R_1=\\quantity{' + v.R1 + '}{\\Omega}$. The voltage across $R_1$ needs to be $\\quantity{' + v.Vout + '}{V}$. Calculate the required value of $R_2$.</p><p><i>Give your answer in ohms (&Omega;).</i></p>';
    },
    answer: function (v) {
      // Vout = Vin * R1/(R1+R2)  =>  R1+R2 = Vin*R1/Vout  =>  R2 = Vin*R1/Vout - R1
      return (v.Vin * v.R1 / v.Vout) - v.R1;
    },
    unit: '\u03A9',
    tolerancePercent: 3,
    explanation: function (v, ans) {
      var RT = v.Vin * v.R1 / v.Vout;
      return '<p>From $V_{1}=V_{in}\\dfrac{R_{1}}{R_{1}+R_{2}}$, rearrange for the total resistance first:</p>' +
        '<p>$R_{1}+R_{2}=\\dfrac{V_{in}R_{1}}{V_{1}}=\\dfrac{\\quantity{' + v.Vin + '}{V}\\times\\quantity{' + v.R1 + '}{\\Omega}}{\\quantity{' + v.Vout + '}{V}}=\\quantity{' + RT.toPrecision(3) + '}{\\Omega}$</p>' +
        '<p>$R_{2}=\\quantity{' + RT.toPrecision(3) + '}{\\Omega}-\\quantity{' + v.R1 + '}{\\Omega}=\\quantity{' + ans.toPrecision(3) + '}{\\Omega}$</p>';
    }
  },

  // ---- Conceptual: LDR position determines behaviour ------------------------
  {
    type: 'mcq',
    prompt: '<p>In a potential divider, an LDR is placed as $R_1$ (top) and a fixed resistor as $R_2$ (bottom), with $V_{out}$ measured across $R_2$. As light intensity on the LDR increases, what happens to $V_{out}$?</p>',
    options: [
      'It increases, because the LDR\u2019s resistance falls, leaving more of the supply voltage across R\u2082',
      'It decreases, because the LDR\u2019s resistance falls',
      'It stays the same, since only R\u2081 changes',
      'It increases only if R\u2082 is also a variable resistor'
    ],
    correctIndex: 0,
    explanation: '<p>As light increases, the LDR\u2019s resistance <i>falls</i>. Since $V_{out}=V_{in}\\times\\frac{R_{2}}{R_{1}+R_{2}}$, a smaller $R_{1}$ (the LDR) means $R_{2}$ makes up a larger fraction of the total resistance, so $V_{out}$ across $R_2$ <b>increases</b>. This is exactly why position matters &mdash; swapping the LDR and resistor would reverse this result.</p>'
  },

  // ---- Conceptual: potential divider equation isn't given ------------------
  {
    type: 'mcq',
    prompt: '<p>You\u2019re in an exam and can\u2019t remember the potential divider equation. What\u2019s the most reliable way to still answer the question?</p>',
    options: [
      'Find the current using $I=\\frac{V_{in}}{R_{T}}$, then use $V=IR$ for the resistor you need',
      'Guess that $V_{out}$ is always half of $V_{in}$',
      'Give up on the question, since the equation isn\u2019t derivable from first principles',
      'Assume $V_{out}$ equals whichever resistor has the larger value, in ohms'
    ],
    correctIndex: 0,
    explanation: '<p>The potential divider equation isn\u2019t on the AQA equation sheet, but it\u2019s just Ohm\u2019s law applied twice: find the current through the series resistors with $I=\\frac{V_{in}}{R_{T}}$, then find the p.d. across the resistor you care about with $V=IR$. No memorised formula required.</p>'
  },

  // ---- Numeric: worked-example style — series resistors, find current -----
  {
    type: 'numeric',
    generateVars: function () {
      var Vs = [6, 9, 12];
      var R1s = [10, 20, 30, 50]; // kOhm
      var R2s = [5, 10, 15, 20];
      var R3s = [2, 5, 8, 10];
      var V = Vs[Math.floor(Math.random() * Vs.length)];
      var R1 = R1s[Math.floor(Math.random() * R1s.length)];
      var R2 = R2s[Math.floor(Math.random() * R2s.length)];
      var R3 = R3s[Math.floor(Math.random() * R3s.length)];
      return { V: V, R1: R1, R2: R2, R3: R3 };
    },
    prompt: function (v) {
      return '<p>A $\\quantity{' + v.V + '}{V}$ battery of negligible internal resistance is connected in series to three resistors: $\\quantity{' + v.R1 + '}{k\\Omega}$, $\\quantity{' + v.R2 + '}{k\\Omega}$, and $\\quantity{' + v.R3 + '}{k\\Omega}$. Calculate the current in the circuit.</p><p><i>Give your answer in mA, to 2 s.f.</i></p>';
    },
    answer: function (v) { return v.V / (v.R1 + v.R2 + v.R3); },
    unit: 'mA',
    tolerancePercent: 2,
    explanation: function (v, ans) {
      var RT = v.R1 + v.R2 + v.R3;
      return '<p>$R_{T}=\\quantity{' + v.R1 + '}{k\\Omega}+\\quantity{' + v.R2 + '}{k\\Omega}+\\quantity{' + v.R3 + '}{k\\Omega}=\\quantity{' + RT + '}{k\\Omega}$</p>' +
        '<p>$I=\\dfrac{V}{R_{T}}=\\dfrac{\\quantity{' + v.V + '}{V}}{\\quantity{' + RT + '}{k\\Omega}}=\\quantity{' + ans.toPrecision(2) + '}{mA}$</p>' +
        '<p>Keep the unrounded value from your calculator if you need it for a later part of the question.</p>';
    }
  },

  // ---- Conceptual: adding a parallel component -------------------------------
  {
    type: 'mcq',
    prompt: '<p>In a potential divider, a lamp is connected in parallel with $R_2$ via a switch. When the switch is closed, what happens to the resistance of that section of the circuit, and to the current drawn from the supply?</p>',
    options: [
      'The resistance of that section decreases; the total current increases',
      'The resistance of that section increases; the total current decreases',
      'Neither changes, since $R_2$\u2019s own value hasn\u2019t changed',
      'The resistance of that section decreases, but the current stays the same'
    ],
    correctIndex: 0,
    explanation: '<p>Adding any component in parallel always <b>decreases</b> the resistance of that section, regardless of the new component\u2019s own resistance. A lower total circuit resistance means more current is drawn from the supply for the same emf.</p>'
  },

  // ---- Conceptual: thermistor potential divider ------------------------------
  {
    type: 'mcq',
    prompt: '<p>An NTC thermistor is used as $R_1$ (top) in a potential divider, with a fixed resistor as $R_2$ (bottom) and $V_{out}$ measured across $R_2$. As temperature increases, what happens to $V_{out}$?</p>',
    options: [
      'It increases, because the thermistor\u2019s resistance falls as it heats up',
      'It decreases, because the thermistor\u2019s resistance falls as it heats up',
      'It stays constant, since thermistors only affect current, not voltage',
      'It increases, because the thermistor\u2019s resistance rises as it heats up'
    ],
    correctIndex: 0,
    explanation: '<p>An NTC thermistor\u2019s resistance <i>decreases</i> as temperature increases. With the thermistor as $R_1$, a smaller $R_1$ means $R_2$ makes up a larger share of the total resistance, so $V_{out}=V_{in}\\times\\frac{R_2}{R_1+R_2}$ across $R_2$ <b>increases</b>. This makes the circuit a simple analogue temperature sensor.</p>'
  }
];
