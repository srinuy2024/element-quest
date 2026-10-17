// Certified Junior Chemist Diploma Generator
class DiplomaManager {
  constructor() {
    this.modal = null;
  }

  ensureModal() {
    if (!this.modal) {
      this.modal = document.createElement('div');
      this.modal.id = 'diploma-modal';
      this.modal.className = 'modal-backdrop';
      document.body.appendChild(this.modal);
    }
  }

  open() {
    this.ensureModal();
    const score = window.gameManager?.score || 0;
    const discovered = window.gameManager?.discoveredElements.size || 0;
    const molecules = window.moleculeLab?.discoveredMolecules?.size || 0;
    const today = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });

    this.modal.innerHTML = `
      <div class="modal-card bg-slate-900 border-2 border-amber-500 max-w-2xl p-6 relative rounded-3xl shadow-2xl">
        
        <div class="flex justify-between items-center mb-3">
          <span class="text-xs font-bold text-amber-400 uppercase tracking-widest">🎓 Official Science Achievement</span>
          <button id="btn-close-diploma" class="w-8 h-8 rounded-full bg-slate-800 hover:bg-rose-600 text-white font-bold flex items-center justify-center transition">
            ✕
          </button>
        </div>

        <!-- The Printable Certificate Sheet -->
        <div id="printable-certificate" class="bg-gradient-to-b from-amber-50 via-white to-amber-50 text-slate-900 border-8 border-double border-amber-600 rounded-2xl p-6 sm:p-8 text-center shadow-inner relative overflow-hidden">
          
          <!-- Golden Corner Flourishes -->
          <div class="text-3xl text-amber-600 absolute top-2 left-2">✦</div>
          <div class="text-3xl text-amber-600 absolute top-2 right-2">✦</div>
          <div class="text-3xl text-amber-600 absolute bottom-2 left-2">✦</div>
          <div class="text-3xl text-amber-600 absolute bottom-2 right-2">✦</div>

          <div class="text-5xl mb-1 animate-bounce">🏆</div>
          <h2 class="text-2xl sm:text-3xl font-black text-amber-800 uppercase tracking-wider font-serif">
            Diploma of Science Achievement
          </h2>
          <div class="w-32 h-0.5 bg-amber-600 mx-auto my-2"></div>
          
          <p class="text-xs uppercase tracking-widest text-slate-600 font-bold mb-3">
            This certifies that
          </p>

          <!-- Kid Name Field -->
          <div class="my-2">
            <input 
              id="diploma-kid-name" 
              type="text" 
              value="Super Scientist" 
              class="text-2xl sm:text-3xl font-black text-center text-indigo-950 bg-amber-100/60 border-b-2 border-amber-600 px-4 py-1 rounded focus:outline-none max-w-sm mx-auto font-serif"
              title="Click to type your name!"
            >
          </div>

          <p class="text-xs sm:text-sm text-slate-700 max-w-md mx-auto my-3 font-medium leading-relaxed">
            has successfully completed adventures in <strong>ElementQuest</strong>, mastering chemical elements, subatomic particles, and real-world molecular reactions!
          </p>

          <!-- Badges & Stats Ribbon -->
          <div class="grid grid-cols-3 gap-2 bg-amber-100/80 border border-amber-400/50 rounded-xl p-3 my-4 max-w-md mx-auto">
            <div>
              <div class="text-lg font-black text-amber-800 font-mono">${score} XP</div>
              <div class="text-[10px] text-slate-600 font-bold uppercase">Total Score</div>
            </div>
            <div>
              <div class="text-lg font-black text-indigo-800 font-mono">${discovered} / 118</div>
              <div class="text-[10px] text-slate-600 font-bold uppercase">Elements</div>
            </div>
            <div>
              <div class="text-lg font-black text-teal-800 font-mono">${molecules} Crafted</div>
              <div class="text-[10px] text-slate-600 font-bold uppercase">Molecules</div>
            </div>
          </div>

          <!-- Signatures & Date -->
          <div class="flex justify-between items-end max-w-md mx-auto mt-6 pt-3 border-t border-amber-300 text-left">
            <div>
              <div class="font-serif italic font-bold text-amber-900 text-sm">Professor Atom 🧪</div>
              <div class="text-[10px] text-slate-500 uppercase font-semibold">Director of ElementQuest Lab</div>
            </div>
            <div class="text-right">
              <div class="text-xs font-mono font-bold text-slate-700">${today}</div>
              <div class="text-[10px] text-slate-500 uppercase font-semibold">Date of Honor</div>
            </div>
          </div>

        </div>

        <!-- Action Controls -->
        <div class="flex justify-between items-center mt-4">
          <span class="text-xs text-slate-400">💡 Click your name above to customize it!</span>
          <button id="btn-print-certificate" class="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black rounded-xl text-xs shadow-lg flex items-center gap-2 transition active:scale-95">
            🖨️ Print or Save as PDF
          </button>
        </div>

      </div>
    `;

    this.modal.querySelector('#btn-close-diploma').addEventListener('click', () => {
      this.modal.classList.remove('open');
    });

    this.modal.querySelector('#btn-print-certificate').addEventListener('click', () => {
      window.print();
    });

    this.modal.classList.add('open');
    window.soundEngine?.playSuccess();
    window.confetti?.blast();
  }
}

window.diplomaManager = new DiplomaManager();
