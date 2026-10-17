// Audio & Voice Engine using Web Audio API and Web Speech API
// 100% self-contained, no external mp3 dependencies!

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = localStorage.getItem('eq_sound_muted') === 'true';
    this.speechEnabled = localStorage.getItem('eq_speech_enabled') !== 'false';
    this.synth = window.speechSynthesis || null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem('eq_sound_muted', this.muted);
    return this.muted;
  }

  toggleSpeech() {
    this.speechEnabled = !this.speechEnabled;
    localStorage.setItem('eq_speech_enabled', this.speechEnabled);
    if (!this.speechEnabled && this.synth) {
      this.synth.cancel();
    }
    return this.speechEnabled;
  }

  haptic(pattern = 15) {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(pattern);
      } catch (e) {}
    }
  }

  // Play a cheerful bubbly pop
  playPop(freq = 600) {
    this.haptic(12);
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.6, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (e) {
      console.warn("Audio play error", e);
    }
  }

  // Play atom inspection hum
  playAtomHum() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(180, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(440, this.ctx.currentTime + 0.25);
      osc.frequency.exponentialRampToValueAtTime(220, this.ctx.currentTime + 0.5);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.5);
    } catch (e) {}
  }

  // Play success chime
  playSuccess() {
    this.haptic([30, 40, 60]);
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        try {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

          gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.28);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start();
          osc.stop(this.ctx.currentTime + 0.28);
        } catch (e) {}
      }, idx * 75);
    });
  }

  // Sparkle magical shimmer
  playSparkle() {
    this.haptic(20);
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const freqs = [880, 1108.73, 1318.51, 1567.98, 1760];
    freqs.forEach((freq, idx) => {
      setTimeout(() => {
        try {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

          gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start();
          osc.stop(this.ctx.currentTime + 0.2);
        } catch (e) {}
      }, idx * 60);
    });
  }

  // Soft gentle boop for wrong guess
  playBoop() {
    this.haptic(50);
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, this.ctx.currentTime + 0.2);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.2);
    } catch (e) {}
  }

  // Victory fanfare
  playVictory() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const chords = [
      { f: 523.25, d: 0 },
      { f: 659.25, d: 100 },
      { f: 783.99, d: 200 },
      { f: 1046.50, d: 350 },
      { f: 1318.51, d: 500 }
    ];

    chords.forEach(({ f, d }) => {
      setTimeout(() => {
        try {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(f, this.ctx.currentTime);

          gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.45);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start();
          osc.stop(this.ctx.currentTime + 0.45);
        } catch (e) {}
      }, d);
    });
  }

  // Speak element out loud for kids!
  speakElement(elem) {
    if (!this.speechEnabled || !this.synth) return;

    this.synth.cancel(); // cancel previous speaking

    const text = `${elem.name}. Symbol: ${elem.symbol}. Atomic number: ${elem.number}. ${elem.character.title}. Superpower: ${elem.character.superpower}. Did you know? ${elem.character.funFact}`;
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Choose kid-friendly warm voice if available
    const voices = this.synth.getVoices();
    const naturalVoice = voices.find(v => (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Jenny') || v.name.includes('Zira') || v.name.includes('Samantha')) && v.lang.startsWith('en')) || voices[0];
    if (naturalVoice) {
      utterance.voice = naturalVoice;
    }
    
    utterance.rate = 0.95; // Slightly slower for clarity
    utterance.pitch = 1.15; // Cheerful friendly pitch
    
    this.synth.speak(utterance);
  }

  stopSpeaking() {
    if (this.synth) {
      this.synth.cancel();
    }
  }
}

// Global instance
window.soundEngine = new SoundEngine();
