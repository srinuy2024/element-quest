// Dr. Atom: Kid-Friendly Mascot Assistant and How-To-Play Guide
class MascotGuide {
  constructor() {
    this.tips = [
      "Hi explorer! Tap any element on the table to see its superhero mascot and watch electrons spin!",
      "Did you know? Two Hydrogen atoms and one Oxygen atom make refreshing drinking water (H₂O)!",
      "Chemistry Joke: Why do chemists like nitrates so much? Because they're cheaper than day rates! 😂",
      "Try the 'Fireworks Chemist' tab to shoot red, green, and blue fireworks rockets into the night sky!",
      "In the 'Molecule Kitchen', try mixing Sodium (Na) and Chlorine (Cl) to make French fry salt!",
      "Chemistry Joke: Never trust an atom... they make up everything! 🤣",
      "Did you know? Bananas have potassium (K) which prevents muscle cramps when you run fast!",
      "Check out the 'Inside Real Life' tab to see which elements power your smartphone and your bones!",
      "Slide the temperature in the 'Thermal Cryo-Burner' to watch Gallium metal melt right in your hand!"
    ];
    this.tipIndex = 0;
  }

  init() {
    // Inject Dr. Atom Mascot into bottom-right corner
    const mascotContainer = document.createElement('div');
    mascotContainer.id = 'dr-atom-assistant';
    mascotContainer.className = 'fixed bottom-4 right-4 z-40 flex items-end gap-2 select-none pointer-events-auto';

    mascotContainer.innerHTML = `
      <!-- Speech Bubble -->
      <div id="dr-atom-bubble" class="bg-slate-900/95 border-2 border-indigo-400 rounded-2xl p-3 max-w-xs shadow-2xl text-xs text-white relative mb-2 hidden animate-fadeIn">
        <div class="flex justify-between items-start gap-1 mb-1">
          <span class="font-bold text-amber-300 flex items-center gap-1">🧪 Dr. Atom says:</span>
          <button id="btn-close-atom-bubble" class="text-slate-400 hover:text-white text-xs">✕</button>
        </div>
        <p id="dr-atom-text" class="text-slate-200 leading-snug">
          ${this.tips[0]}
        </p>
        <div class="mt-2 flex justify-between items-center pt-1 border-t border-slate-800">
          <button id="btn-next-atom-tip" class="text-[10px] text-indigo-300 hover:text-white font-bold">
            💡 Next Tip
          </button>
          <button id="btn-voice-atom" class="text-[10px] bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-2 py-0.5 rounded">
            🔊 Listen
          </button>
        </div>
        <!-- Tail -->
        <div class="absolute -bottom-2 right-6 w-3 h-3 bg-slate-900 border-r-2 border-b-2 border-indigo-400 rotate-45"></div>
      </div>

      <!-- Mascot Avatar Button -->
      <button id="btn-toggle-dr-atom" class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 hover:scale-110 active:scale-95 shadow-xl shadow-indigo-500/40 border-2 border-white/40 flex items-center justify-center text-3xl transition-transform animate-float" title="Ask Dr. Atom for a tip or joke!">
        🧪
      </button>
    `;

    document.body.appendChild(mascotContainer);
    this.attachEvents(mascotContainer);
  }

  attachEvents(container) {
    const bubble = container.querySelector('#dr-atom-bubble');
    const toggleBtn = container.querySelector('#btn-toggle-dr-atom');
    const closeBtn = container.querySelector('#btn-close-atom-bubble');
    const nextBtn = container.querySelector('#btn-next-atom-tip');
    const voiceBtn = container.querySelector('#btn-voice-atom');
    const textEl = container.querySelector('#dr-atom-text');

    toggleBtn.addEventListener('click', () => {
      window.soundEngine?.playPop(750);
      bubble.classList.toggle('hidden');
    });

    closeBtn.addEventListener('click', () => {
      bubble.classList.add('hidden');
    });

    nextBtn.addEventListener('click', () => {
      window.soundEngine?.playPop(600);
      this.tipIndex = (this.tipIndex + 1) % this.tips.length;
      textEl.textContent = this.tips[this.tipIndex];
    });

    voiceBtn.addEventListener('click', () => {
      if (window.soundEngine?.speechEnabled && window.speechSynthesis) {
        const text = textEl.textContent;
        const utt = new SpeechSynthesisUtterance(text);
        utt.rate = 1.0;
        utt.pitch = 1.2;
        window.speechSynthesis.speak(utt);
      }
    });
  }

  // Show "How to Play" Guide Modal
  openHelpModal() {
    let modal = document.getElementById('help-guide-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'help-guide-modal';
      modal.className = 'modal-backdrop';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="modal-card bg-slate-900 border-2 border-indigo-500 max-w-2xl p-6 rounded-3xl shadow-2xl relative">
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center gap-2">
            <span class="text-3xl">🎮</span>
            <h2 class="text-xl font-black text-indigo-300">How to Play ElementQuest!</h2>
          </div>
          <button id="btn-close-help" class="w-8 h-8 rounded-full bg-slate-800 hover:bg-rose-600 text-white font-bold flex items-center justify-center transition">
            ✕
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
          
          <div class="bg-slate-950 border border-indigo-500/30 rounded-2xl p-4 text-center">
            <div class="text-4xl mb-2">1️⃣</div>
            <h3 class="text-sm font-bold text-white mb-1">Explore & Tap</h3>
            <p class="text-xs text-slate-300 leading-snug">
              Tap any element tile to meet its superhero mascot, watch revolving electrons, and test balloons or magnets!
            </p>
          </div>

          <div class="bg-slate-950 border border-teal-500/30 rounded-2xl p-4 text-center">
            <div class="text-4xl mb-2">2️⃣</div>
            <h3 class="text-sm font-bold text-white mb-1">Brew & Combine</h3>
            <p class="text-xs text-slate-300 leading-snug">
              Drop elements into the Reaction Flask to brew real molecules like Water, Salt, Soda, and Elephant Toothpaste!
            </p>
          </div>

          <div class="bg-slate-950 border border-amber-500/30 rounded-2xl p-4 text-center">
            <div class="text-4xl mb-2">3️⃣</div>
            <h3 class="text-sm font-bold text-white mb-1">Earn Your Diploma</h3>
            <p class="text-xs text-slate-300 leading-snug">
              Solve detective riddles, test fireworks, balance equations, and print your official Junior Chemist Certificate!
            </p>
          </div>

        </div>

        <div class="bg-indigo-950/60 border border-indigo-500/40 rounded-xl p-3 text-xs text-indigo-200 flex items-center justify-between">
          <span>💡 <strong>Tip:</strong> You can click the 🔊 button anywhere to hear element facts read out loud!</span>
          <button id="btn-help-ok" class="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition">
            Let's Play!
          </button>
        </div>
      </div>
    `;

    const close = () => modal.classList.remove('open');
    modal.querySelector('#btn-close-help').addEventListener('click', close);
    modal.querySelector('#btn-help-ok').addEventListener('click', close);
    modal.classList.add('open');
    window.soundEngine?.playPop(600);
  }
}

window.mascotGuide = new MascotGuide();
