/* Question bank for resonance.html — loaded before quiz.js is invoked. */

var resonanceQuestions = [

  // ---- Conceptual: definition of resonance -----------------------------------
  {
    type: 'mcq',
    prompt: '<p>What condition defines resonance in a forced oscillation?</p>',
    options: [
      'The driving frequency equals the natural frequency of the oscillator',
      'The driving frequency is much higher than the natural frequency',
      'The oscillator has zero damping',
      'The amplitude of the driver equals the amplitude of the oscillator'
    ],
    correctIndex: 0,
    explanation: '<p>Resonance occurs specifically when the driving frequency matches the system\u2019s own natural frequency. This is the point at which the amplitude of the forced oscillation becomes largest.</p>'
  },

  // ---- Conceptual: what frequency does a forced oscillator move at ------------
  {
    type: 'mcq',
    prompt: '<p>A system is being driven at a frequency below its natural frequency (not at resonance). At what frequency does the system actually oscillate, once any initial transient has died away?</p>',
    options: [
      'At the driving frequency',
      'At its own natural frequency, regardless of the driver',
      'At a frequency halfway between the driving and natural frequencies',
      'It stops oscillating entirely, since it isn\u2019t at resonance'
    ],
    correctIndex: 0,
    explanation: '<p>A forced oscillator always ends up oscillating at the <b>driving frequency</b>, not its own natural frequency &mdash; this is true whether or not the system is at resonance. Resonance is simply the special case where driving frequency and natural frequency coincide, giving maximum amplitude.</p>'
  },

  // ---- Numeric: phase difference at resonance, radians to degrees -----------
  {
    type: 'numeric',
    generateVars: function () { return {}; },
    prompt: function () {
      return '<p>At resonance, the phase difference between the driving force and the displacement of the oscillator is $\\frac{\\pi}{2}$ radians. Express this in degrees.</p>';
    },
    answer: function () { return 90; },
    unit: 'degrees',
    tolerancePercent: 1,
    explanation: function () {
      return '<p>$\\frac{\\pi}{2}\\,\\units{rad}=90\\degree$, using $\\pi\\,\\units{rad}=180\\degree$.</p>';
    }
  },

  // ---- Conceptual: what is in phase with the driving force at resonance ------
  {
    type: 'mcq',
    prompt: '<p>At resonance, which quantity is exactly in phase with the driving force?</p>',
    options: [
      'Velocity',
      'Displacement',
      'Acceleration',
      'None of these are in phase with the driving force at resonance'
    ],
    correctIndex: 0,
    explanation: '<p>At resonance the driving force is exactly in phase with <b>velocity</b>, while it is $\\frac{\\pi}{2}$ out of phase with displacement. This pairing is easy to get backwards, so it\u2019s worth remembering explicitly rather than guessing.</p>'
  },

  // ---- Numeric: phase difference well above resonance, radians to degrees ---
  {
    type: 'numeric',
    generateVars: function () { return {}; },
    prompt: function () {
      return '<p>As the driving frequency increases well above the natural frequency, the phase difference between the driving force and displacement approaches $\\pi$ radians. Express this in degrees.</p>';
    },
    answer: function () { return 180; },
    unit: 'degrees',
    tolerancePercent: 1,
    explanation: function () {
      return '<p>$\\pi\\,\\units{rad}=180\\degree$ &mdash; at this point the driving force and displacement are completely out of phase (antiphase).</p>';
    }
  },

  // ---- Conceptual: amplitude away from resonance -------------------------------
  {
    type: 'mcq',
    prompt: '<p>As the driving frequency moves further away from the natural frequency (in either direction), what happens to the amplitude of the forced oscillation?</p>',
    options: [
      'It decreases',
      'It increases',
      'It stays the same, only the phase changes',
      'It oscillates unpredictably'
    ],
    correctIndex: 0,
    explanation: '<p>Amplitude is greatest exactly at resonance (driving frequency = natural frequency) and decreases as the driving frequency moves away from this value in either direction.</p>'
  },

  // ---- Conceptual: role of damping in limiting resonance amplitude --------------
  {
    type: 'mcq',
    prompt: '<p>In a real (damped) system at resonance, why doesn\u2019t the amplitude increase forever, even though the driver continuously supplies energy?</p>',
    options: [
      'Damping removes energy each cycle, eventually balancing the energy supplied by the driver',
      'The driving frequency automatically changes to stop resonance',
      'Real systems cannot actually reach resonance',
      'The natural frequency changes as the amplitude increases'
    ],
    correctIndex: 0,
    explanation: '<p>Every real system has some damping. As amplitude grows, so does the energy dissipated by damping each cycle; eventually this balances the energy supplied by the driver, and the amplitude settles at a large but finite value rather than growing without limit.</p>'
  },

  // ---- Conceptual: Barton's pendulums -------------------------------------------
  {
    type: 'mcq',
    prompt: '<p>Barton\u2019s pendulums consists of several pendulums of different lengths, all driven by a single driver pendulum swinging at one particular frequency. What does this demonstration show?</p>',
    options: [
      'Only the pendulum whose natural frequency matches the driver responds with a large amplitude',
      'All the pendulums swing with exactly the same amplitude, regardless of length',
      'Longer pendulums always resonate more strongly than shorter ones',
      'None of the pendulums are affected unless they are touching the driver'
    ],
    correctIndex: 0,
    explanation: '<p>Barton\u2019s pendulums demonstrate resonance directly: because each pendulum has a different length, each has a different natural frequency. Only the one whose natural frequency matches the driving frequency shows a dramatically larger amplitude response &mdash; the others respond only weakly.</p>'
  }
];
