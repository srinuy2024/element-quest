// Real-World Body & Smartphone Explorer Module
class RealWorldLabManager {
  constructor(container, onSelectElement) {
    this.container = container;
    this.onSelectElement = onSelectElement;
    this.activeMode = 'body'; // 'body' or 'smartphone'
  }

  render() {
    if (!this.container) return;
    const currentData = window.REAL_WORLD_MAPS[this.activeMode];

    this.container.innerHTML = `
      <div class="max-w-5xl mx-auto space-y-6">
        
        <!-- Header & Toggle Bar -->
        <div class="flex flex-wrap justify-between items-center gap-3 bg-slate-900 border border-sky-500/30 rounded-2xl p-4 shadow-xl">
          <div class="flex items-center gap-3">
            <span class="text-3xl">${currentData.icon}</span>
            <div>
              <h2 class="text-xl font-bold text-sky-300">${currentData.title}</h2>
              <p class="text-xs text-slate-400">${currentData.subtitle}</p>
            </div>
          </div>
          
          <div class="flex items-center gap-2">
            <button id="btn-toggle-body" class="px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              this.activeMode === 'body' 
                ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg' 
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }">
              🧍 Human Body X-Ray
            </button>
            <button id="btn-toggle-phone" class="px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              this.activeMode === 'smartphone' 
                ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg' 
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }">
              📱 Smartphone Teardown
            </button>
          </div>
        </div>

        <!-- Interactive Hotspot Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${currentData.targets.map((target, idx) => `
            <div class="real-world-target-card bg-slate-900/90 border border-slate-800 hover:border-sky-400 rounded-2xl p-5 shadow-lg transition-all duration-200 transform hover:-translate-y-1 group flex flex-col justify-between">
              <div>
                <div class="flex justify-between items-start mb-3">
                  <div class="flex items-center gap-2.5">
                    <span class="text-3xl group-hover:scale-125 transition-transform">${target.icon}</span>
                    <div>
                      <h3 class="text-base font-black text-white group-hover:text-sky-300 transition-colors">${target.name}</h3>
                      <div class="text-[11px] font-mono font-semibold text-amber-300">${target.elementNames}</div>
                    </div>
                  </div>
                </div>

                <p class="text-xs text-slate-200 leading-relaxed mb-3">
                  ${target.desc}
                </p>

                <div class="bg-slate-950 border border-slate-800 rounded-xl p-2.5 mb-3 text-[11px] text-slate-400 flex items-start gap-2">
                  <span class="text-base">💡</span>
                  <span class="leading-snug">${target.funFact}</span>
                </div>
              </div>

              <!-- Interactive Element Tags with Click-to-Inspect -->
              <div class="pt-2 border-t border-slate-800 flex flex-wrap gap-1.5 items-center justify-between">
                <div class="flex flex-wrap gap-1">
                  ${target.elements.map(sym => `
                    <button class="btn-inspect-symbol px-2.5 py-1 rounded-lg bg-indigo-950 hover:bg-indigo-700 text-indigo-300 hover:text-white font-mono font-black text-xs border border-indigo-500/40 shadow transition active:scale-90" data-sym="${sym}" title="Inspect ${sym} on Periodic Table">
                      ${sym}
                    </button>
                  `).join('')}
                </div>
                <button class="btn-voice-target text-slate-400 hover:text-white text-xs p-1 rounded" title="Read Aloud" data-desc="${target.name}. ${target.desc}">
                  🔊 Listen
                </button>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    `;

    this.attachEvents();
  }

  attachEvents() {
    const btnBody = this.container.querySelector('#btn-toggle-body');
    const btnPhone = this.container.querySelector('#btn-toggle-phone');

    btnBody?.addEventListener('click', () => {
      this.activeMode = 'body';
      window.soundEngine?.playPop(520);
      this.render();
    });

    btnPhone?.addEventListener('click', () => {
      this.activeMode = 'smartphone';
      window.soundEngine?.playPop(620);
      this.render();
    });

    // Inspect Symbol click -> opens element modal
    this.container.querySelectorAll('.btn-inspect-symbol').forEach(btn => {
      btn.addEventListener('click', () => {
        const sym = btn.dataset.sym;
        const elem = window.ALL_ELEMENTS?.find(e => e.symbol.toUpperCase() === sym.toUpperCase());
        if (elem && this.onSelectElement) {
          window.soundEngine?.playSuccess();
          this.onSelectElement(elem);
        }
      });
    });

    // Voice narration button
    this.container.querySelectorAll('.btn-voice-target').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.dataset.desc;
        if (window.soundEngine?.speechEnabled && window.speechSynthesis) {
          const utt = new SpeechSynthesisUtterance(text);
          utt.rate = 0.95;
          utt.pitch = 1.15;
          window.speechSynthesis.speak(utt);
        }
      });
    });
  }
}

window.RealWorldLabManager = RealWorldLabManager;
