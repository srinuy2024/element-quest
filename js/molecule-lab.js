// Molecule Crafting Lab, Reaction Simulator, and Equation Balancer for ElementQuest
class MoleculeLabManager {
  constructor(container) {
    this.container = container;
    this.beakerIngredients = {};
    this.discoveredMolecules = new Set(JSON.parse(localStorage.getItem('eq_discovered_molecules') || '[]'));
    this.currentReaction = null;
    this.balancerIndex = 0;
  }

  markMoleculeDiscovered(id) {
    if (!this.discoveredMolecules.has(id)) {
      this.discoveredMolecules.add(id);
      localStorage.setItem('eq_discovered_molecules', JSON.stringify(Array.from(this.discoveredMolecules)));
      window.gameManager?.addScore(50);
      return true;
    }
    return false;
  }

  addElement(sym) {
    this.beakerIngredients[sym] = (this.beakerIngredients[sym] || 0) + 1;
    this.updateFlaskDisplay();
    window.soundEngine?.playPop(650);
  }

  render(subMode = 'crafting') {
    if (!this.container) return;

    if (subMode === 'crafting') {
      this.renderCraftingLab();
    } else if (subMode === 'balancer') {
      this.renderEquationBalancer();
    }
  }

  // 1. Crafting Lab (Combine Elements into Molecules)
  renderCraftingLab() {
    // Shelf of popular reactive elements
    const shelfElements = [
      { sym: "H", name: "Hydrogen", num: 1, color: "#38bdf8", emoji: "🚀" },
      { sym: "O", name: "Oxygen", num: 8, color: "#ef4444", emoji: "🫁" },
      { sym: "C", name: "Carbon", num: 6, color: "#94a3b8", emoji: "💎" },
      { sym: "Na", name: "Sodium", num: 11, color: "#eab308", emoji: "🧂" },
      { sym: "Cl", name: "Chlorine", num: 17, color: "#10b981", emoji: "🏊" },
      { sym: "Fe", name: "Iron", num: 26, color: "#ea580c", emoji: "🧲" },
      { sym: "Si", name: "Silicon", num: 14, color: "#06b6d4", emoji: "🤖" },
      { sym: "Ca", name: "Calcium", num: 20, color: "#14b8a6", emoji: "🦴" },
      { sym: "N", name: "Nitrogen", num: 7, color: "#6366f1", emoji: "❄️" },
      { sym: "S", name: "Sulfur", num: 16, color: "#facc15", emoji: "🌋" },
      { sym: "B", name: "Boron", num: 5, color: "#84cc16", emoji: "🧪" },
      { sym: "F", name: "Fluorine", num: 9, color: "#a855f7", emoji: "🦷" }
    ];

    this.container.innerHTML = `
      <div class="max-w-5xl mx-auto space-y-6">
        
        <!-- Header & Sub-Navigation -->
        <div class="flex flex-wrap justify-between items-center gap-3 bg-slate-900 border border-indigo-500/30 rounded-2xl p-4 shadow-xl">
          <div class="flex items-center gap-3">
            <div class="text-3xl animate-bounce">⚗️</div>
            <div>
              <h2 class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-indigo-300 to-pink-300">
                Molecule Kitchen & Equation Lab
              </h2>
              <p class="text-xs text-slate-400">Combine elements in the Reaction Beaker to brew real-world chemical equations!</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button id="btn-sub-crafting" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all bg-indigo-600 text-white shadow">
              🧪 Reaction Beaker
            </button>
            <button id="btn-sub-balancer" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all bg-slate-800 text-slate-300 hover:bg-slate-700">
              ⚖️ Equation Seesaw Puzzle
            </button>
            <div class="bg-indigo-950/80 border border-indigo-500/50 px-3 py-1.5 rounded-xl text-xs font-bold text-indigo-300">
              📖 <span id="cookbook-counter">${this.discoveredMolecules.size} / ${window.MOLECULES_DATABASE.length}</span> Crafted
            </div>
          </div>
        </div>

        <!-- Main Reaction Lab Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          <!-- Element Shelf (Left 5 Cols) -->
          <div class="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl">
            <div class="flex justify-between items-center mb-3">
              <span class="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <span>🧪</span> Chemical Element Shelf
              </span>
              <span class="text-[10px] text-slate-400">Click elements to add to flask!</span>
            </div>

            <div class="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
              ${shelfElements.map(el => `
                <button class="shelf-elem-btn bg-slate-800 hover:bg-indigo-950 border border-slate-700 hover:border-indigo-400 rounded-xl p-2.5 text-center transition-all duration-150 transform hover:scale-105 active:scale-95 group shadow select-none" data-sym="${el.sym}">
                  <div class="text-2xl group-hover:scale-125 transition-transform">${el.emoji}</div>
                  <div class="text-base font-black text-white" style="color: ${el.color}">${el.sym}</div>
                  <div class="text-[10px] font-semibold text-slate-300 truncate">${el.name}</div>
                </button>
              `).join('')}
            </div>

            <!-- Helpful Chemistry Tip -->
            <div class="bg-indigo-950/40 border border-indigo-500/20 rounded-xl p-3 mt-4 text-[11px] text-indigo-200">
              💡 <strong>How it Works:</strong> Real atoms bond when you combine the exact ratios! Try adding <strong>2 Hydrogen (H) + 1 Oxygen (O)</strong> to make water, or <strong>1 Sodium (Na) + 1 Chlorine (Cl)</strong> to brew salt!
            </div>
          </div>

          <!-- The Reaction Beaker & Synthesis Chamber (Right 7 Cols) -->
          <div class="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col items-center">
            
            <!-- Animated Glass Beaker -->
            <div class="relative w-64 h-64 flex flex-col items-center justify-end my-2">
              
              <!-- Glass Neck & Lip -->
              <div class="w-24 h-4 border-2 border-cyan-400/50 rounded-t-lg bg-cyan-500/10 z-10"></div>
              
              <!-- Flask Body -->
              <div id="flask-body" class="relative w-56 h-56 border-4 border-cyan-400/60 rounded-b-3xl rounded-t-xl bg-gradient-to-b from-cyan-950/20 to-slate-950/80 backdrop-blur-sm overflow-hidden flex flex-col justify-end items-center p-3 shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-500">
                
                <!-- Bubbling Liquid Pool -->
                <div id="beaker-liquid" class="w-full rounded-b-2xl bg-gradient-to-t from-cyan-500/60 via-indigo-500/40 to-transparent transition-all duration-500 min-h-[40px] flex items-center justify-center relative overflow-hidden">
                  <div class="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] opacity-30 animate-pulse"></div>
                  <!-- Floating Particle Bubbles -->
                  <div class="flex gap-2 text-sm animate-bounce" style="animation-duration: 1.2s;">
                    <span>🫧</span>
                    <span style="animation-delay: 0.3s;">🫧</span>
                    <span style="animation-delay: 0.6s;">🫧</span>
                  </div>
                </div>

                <!-- Live Tag Indicators Inside Beaker -->
                <div id="flask-tags-container" class="absolute inset-0 p-4 flex flex-wrap gap-1.5 items-center justify-center content-center z-20 pointer-events-none">
                  <div class="text-xs text-slate-400 font-semibold italic">Flask is empty. Add elements!</div>
                </div>
              </div>
            </div>

            <!-- Reaction Control Actions -->
            <div class="flex items-center gap-3 mt-4 w-full justify-center">
              <button id="btn-brew-reaction" class="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black rounded-xl text-sm shadow-lg shadow-emerald-500/30 flex items-center gap-2 transform hover:scale-105 active:scale-95 transition">
                💥 BREW REACTION!
              </button>
              <button id="btn-clear-flask" class="px-4 py-2.5 bg-slate-800 hover:bg-rose-950 hover:text-rose-300 text-slate-300 border border-slate-700 rounded-xl text-xs font-bold transition">
                🧹 Empty Flask
              </button>
            </div>

            <!-- Reaction Result Showcase Container -->
            <div id="reaction-outcome" class="w-full mt-4 min-h-[140px] transition-all"></div>
          </div>

        </div>

        <!-- Master Molecule Cookbook (Progress Tracker & Recipe Hints) -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
          <div class="flex justify-between items-center mb-4">
            <div class="flex items-center gap-2">
              <span class="text-2xl">📖</span>
              <h3 class="text-base font-bold text-amber-300">Master Molecule Cookbook</h3>
            </div>
            <div class="text-xs text-slate-400">
              Discover all 13 molecules to earn the <strong>Grand Chemist Trophy</strong>!
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            ${window.MOLECULES_DATABASE.map(mol => {
              const isDiscovered = this.discoveredMolecules.has(mol.id);
              const recipeText = Object.entries(mol.ingredients).map(([k, v]) => `${v} ${k}`).join(' + ');

              return `
                <div class="cookbook-card rounded-xl p-3 border transition-all ${
                  isDiscovered 
                    ? 'bg-slate-800/90 border-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.15)]' 
                    : 'bg-slate-950/60 border-slate-800 opacity-70 hover:opacity-100'
                }" data-mol-id="${mol.id}">
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="text-2xl">${mol.emoji}</span>
                    <span class="text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      isDiscovered ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40' : 'bg-slate-900 text-slate-500'
                    }">
                      ${isDiscovered ? '✓ Discovered' : '🔒 Locked'}
                    </span>
                  </div>
                  <div class="text-sm font-bold ${isDiscovered ? 'text-white' : 'text-slate-300'}">${mol.name}</div>
                  <div class="text-xs font-mono font-black text-indigo-400 mb-1">${mol.formula}</div>
                  <div class="text-[11px] text-amber-300/90 font-mono mb-2">Recipe: ${recipeText}</div>
                  <button class="btn-autofill-recipe w-full text-[10px] font-bold py-1 px-2 rounded-lg bg-indigo-950 hover:bg-indigo-800 border border-indigo-500/30 text-indigo-200 transition" data-mol-id="${mol.id}">
                    🧪 Quick-Load Recipe
                  </button>
                </div>
              `;
            }).join('')}
          </div>
        </div>

      </div>
    `;

    this.attachCraftingEvents();
  }

  attachCraftingEvents() {
    const shelfButtons = this.container.querySelectorAll('.shelf-elem-btn');
    const clearBtn = this.container.querySelector('#btn-clear-flask');
    const brewBtn = this.container.querySelector('#btn-brew-reaction');
    const autofillButtons = this.container.querySelectorAll('.btn-autofill-recipe');
    const balancerTabBtn = this.container.querySelector('#btn-sub-balancer');

    if (balancerTabBtn) {
      balancerTabBtn.addEventListener('click', () => {
        window.soundEngine?.playPop(520);
        this.render('balancer');
      });
    }

    // Add Element to Flask
    shelfButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const sym = btn.dataset.sym;
        this.beakerIngredients[sym] = (this.beakerIngredients[sym] || 0) + 1;
        window.soundEngine?.playPop(600 + Object.keys(this.beakerIngredients).length * 50);
        this.updateFlaskDisplay();
      });
    });

    // Clear Flask
    clearBtn.addEventListener('click', () => {
      window.soundEngine?.playPop(400);
      this.beakerIngredients = {};
      this.updateFlaskDisplay();
      this.container.querySelector('#reaction-outcome').innerHTML = '';
    });

    // Quick-Load Recipe from Cookbook
    autofillButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const molId = btn.dataset.molId;
        const mol = window.MOLECULES_DATABASE.find(m => m.id === molId);
        if (mol) {
          window.soundEngine?.playSuccess();
          this.beakerIngredients = { ...mol.ingredients };
          this.updateFlaskDisplay();
          this.triggerBrewReaction();
        }
      });
    });

    // Brew Reaction
    brewBtn.addEventListener('click', () => {
      this.triggerBrewReaction();
    });
  }

  updateFlaskDisplay() {
    const tagsContainer = this.container.querySelector('#flask-tags-container');
    const liquid = this.container.querySelector('#beaker-liquid');
    if (!tagsContainer) return;

    const keys = Object.keys(this.beakerIngredients);
    if (keys.length === 0) {
      tagsContainer.innerHTML = '<div class="text-xs text-slate-400 font-semibold italic">Flask is empty. Add elements!</div>';
      liquid.style.height = '40px';
      liquid.className = 'w-full rounded-b-2xl bg-gradient-to-t from-cyan-500/60 via-indigo-500/40 to-transparent transition-all duration-500 min-h-[40px] flex items-center justify-center relative overflow-hidden';
      return;
    }

    // Dynamic liquid height based on atom count
    const totalAtoms = Object.values(this.beakerIngredients).reduce((a, b) => a + b, 0);
    const heightPercent = Math.min(85, 30 + totalAtoms * 10);
    liquid.style.height = `${heightPercent}%`;

    tagsContainer.innerHTML = keys.map(sym => `
      <div class="flex items-center gap-1 bg-slate-900/90 border border-cyan-400/60 px-2.5 py-1 rounded-full shadow-lg animate-float">
        <span class="text-xs font-black text-cyan-300">${sym}</span>
        <span class="text-[10px] font-mono font-bold bg-cyan-950 px-1.5 py-0.2 rounded-full text-white">${this.beakerIngredients[sym]}</span>
        <button class="btn-remove-atom text-slate-400 hover:text-red-400 text-xs ml-0.5 pointer-events-auto" data-sym="${sym}">✕</button>
      </div>
    `).join('');

    // Attach individual atom removal handlers
    tagsContainer.querySelectorAll('.btn-remove-atom').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const sym = btn.dataset.sym;
        if (this.beakerIngredients[sym] > 1) {
          this.beakerIngredients[sym]--;
        } else {
          delete this.beakerIngredients[sym];
        }
        window.soundEngine?.playPop(420);
        this.updateFlaskDisplay();
      });
    });
  }

  triggerBrewReaction() {
    const outcomeBox = this.container.querySelector('#reaction-outcome');
    const flask = this.container.querySelector('#flask-body');
    const liquid = this.container.querySelector('#beaker-liquid');
    if (!outcomeBox) return;

    const currentKeys = Object.keys(this.beakerIngredients);
    if (currentKeys.length === 0) {
      outcomeBox.innerHTML = `
        <div class="bg-amber-950/80 border border-amber-500/50 rounded-xl p-3 text-center text-xs text-amber-200">
          ⚠️ The flask is empty! Click elements on the shelf to mix them first!
        </div>
      `;
      return;
    }

    // Check against MOLECULES_DATABASE
    const matched = window.MOLECULES_DATABASE.find(mol => {
      const molKeys = Object.keys(mol.ingredients);
      if (molKeys.length !== currentKeys.length) return false;
      return molKeys.every(k => this.beakerIngredients[k] === mol.ingredients[k]);
    });

    // Animate Beaker Bubbling
    flask.classList.add('scale-105', 'shadow-[0_0_40px_rgba(236,72,153,0.6)]');
    setTimeout(() => flask.classList.remove('scale-105', 'shadow-[0_0_40px_rgba(236,72,153,0.6)]'), 600);

    if (matched) {
      // SUCCESSFUL CHEMICAL REACTION!
      window.soundEngine?.playSuccess();
      window.confetti?.blast();
      this.markMoleculeDiscovered(matched.id);

      // Change liquid color to match molecule
      liquid.style.background = `radial-gradient(circle, ${matched.color} 0%, rgba(15, 23, 42, 0.9) 100%)`;

      outcomeBox.innerHTML = `
        <div class="bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border-2 border-emerald-400 rounded-2xl p-5 shadow-2xl animate-fadeIn">
          <div class="flex items-center justify-between mb-3 border-b border-emerald-500/30 pb-2">
            <div class="flex items-center gap-2.5">
              <span class="text-4xl animate-bounce">${matched.emoji}</span>
              <div>
                <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Chemical Reaction Complete!</span>
                <h3 class="text-xl font-black text-white">${matched.title} (${matched.formula})</h3>
              </div>
            </div>
            <div class="bg-emerald-500 text-slate-950 font-black text-xs px-3 py-1 rounded-full shadow">
              +50 XP
            </div>
          </div>

          <!-- Balanced Chemical Equation Banner -->
          <div class="bg-slate-950 border border-emerald-500/40 rounded-xl p-3 mb-3 text-center">
            <div class="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-0.5">Balanced Chemical Equation</div>
            <div class="text-base sm:text-lg font-mono font-black text-emerald-300 tracking-wider">
              ${matched.equation}
            </div>
          </div>

          <!-- Description & Fun Fact -->
          <p class="text-xs sm:text-sm text-slate-200 mb-2 leading-relaxed font-medium">
            ${matched.description}
          </p>

          <div class="bg-emerald-950/50 border border-emerald-500/30 rounded-lg p-2.5 text-[11px] text-emerald-200 font-semibold flex items-center gap-2">
            <span>💡</span>
            <span><strong>Did You Know?</strong> ${matched.funFact}</span>
          </div>

          <div class="mt-3 flex justify-end gap-2">
            <button id="btn-read-reaction" class="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs rounded-lg flex items-center gap-1 shadow">
              🔊 Read Reaction Out Loud
            </button>
          </div>
        </div>
      `;

      // Update cookbook counter
      const counterEl = this.container.querySelector('#cookbook-counter');
      if (counterEl) counterEl.textContent = `${this.discoveredMolecules.size} / ${window.MOLECULES_DATABASE.length}`;

      // Refresh cookbook card styles
      const card = this.container.querySelector(`.cookbook-card[data-mol-id="${matched.id}"]`);
      if (card) {
        card.className = 'cookbook-card rounded-xl p-3 border transition-all bg-slate-800/90 border-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.15)]';
        const badge = card.querySelector('span.font-mono');
        if (badge) {
          badge.className = 'text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40';
          badge.textContent = '✓ Discovered';
        }
      }

      // Read aloud speech
      const readBtn = outcomeBox.querySelector('#btn-read-reaction');
      if (readBtn) {
        readBtn.addEventListener('click', () => {
          if (window.soundEngine?.speechEnabled && window.speechSynthesis) {
            const speechText = `Chemical reaction complete! ${matched.equation}. You created ${matched.name}, with formula ${matched.formula}. ${matched.description}`;
            const utt = new SpeechSynthesisUtterance(speechText);
            utt.rate = 0.95;
            utt.pitch = 1.15;
            window.speechSynthesis.speak(utt);
          }
        });
      }

    } else {
      // UNSTABLE MIX / UNKNOWN RECIPE
      window.soundEngine?.playBoop();
      outcomeBox.innerHTML = `
        <div class="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-center animate-fadeIn">
          <div class="text-3xl mb-1">💨</div>
          <h4 class="text-sm font-bold text-slate-300">Puff! Harmless Grey Smoke!</h4>
          <p class="text-xs text-slate-400 mt-1 max-w-md mx-auto">
            These elements don't want to bond in this exact ratio. Check the <strong>Molecule Cookbook</strong> below to see proven chemical recipes, or click <em>"Quick-Load Recipe"</em>!
          </p>
        </div>
      `;
    }
  }

  // 2. Equation Seesaw Balancing Puzzle
  renderEquationBalancer() {
    const balancerPuzzles = [
      {
        title: "Brewing Water (H₂O)",
        reactants: [
          { formula: "H₂", coefficient: 2, userCoeff: 1, atoms: { H: 2 } },
          { formula: "O₂", coefficient: 1, userCoeff: 1, atoms: { O: 2 } }
        ],
        products: [
          { formula: "H₂O", coefficient: 2, userCoeff: 1, atoms: { H: 2, O: 1 } }
        ],
        hint: "We have 2 Oxygen on the left, but only 1 on the right. Try multiplying H₂O by 2, then balance the Hydrogen!"
      },
      {
        title: "Making Table Salt (NaCl)",
        reactants: [
          { formula: "Na", coefficient: 2, userCoeff: 1, atoms: { Na: 1 } },
          { formula: "Cl₂", coefficient: 1, userCoeff: 1, atoms: { Cl: 2 } }
        ],
        products: [
          { formula: "NaCl", coefficient: 2, userCoeff: 1, atoms: { Na: 1, Cl: 1 } }
        ],
        hint: "Two Chlorine atoms in Cl₂ need two Sodium atoms to form two NaCl salt crystals!"
      },
      {
        title: "Rusting Iron (Fe₂O₃)",
        reactants: [
          { formula: "Fe", coefficient: 4, userCoeff: 1, atoms: { Fe: 1 } },
          { formula: "O₂", coefficient: 3, userCoeff: 1, atoms: { O: 2 } }
        ],
        products: [
          { formula: "Fe₂O₃", coefficient: 2, userCoeff: 1, atoms: { Fe: 2, O: 3 } }
        ],
        hint: "Tricky one! We need 4 Iron and 6 Oxygen atoms on both sides of the reaction!"
      }
    ];

    const currentPuzzle = balancerPuzzles[this.balancerIndex % balancerPuzzles.length];

    this.container.innerHTML = `
      <div class="max-w-4xl mx-auto space-y-6">
        
        <!-- Header -->
        <div class="flex justify-between items-center bg-slate-900 border border-teal-500/30 rounded-2xl p-4 shadow-xl">
          <div class="flex items-center gap-3">
            <span class="text-3xl">⚖️</span>
            <div>
              <h2 class="text-xl font-bold text-teal-300">Chemical Equation Seesaw</h2>
              <p class="text-xs text-slate-400">Atoms cannot vanish into thin air! Balance the seesaw so the left side equals the right side.</p>
            </div>
          </div>
          <button id="btn-back-crafting" class="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl text-xs transition">
            🧪 Back to Reaction Beaker
          </button>
        </div>

        <!-- Seesaw Visual Arena -->
        <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl flex flex-col items-center">
          
          <h3 class="text-lg font-black text-amber-300 mb-2">Challenge: ${currentPuzzle.title}</h3>
          <p class="text-xs text-slate-400 mb-6 text-center max-w-lg">
            Use the <strong class="text-teal-300">+</strong> and <strong class="text-teal-300">-</strong> buttons to change the molecule multipliers until the equation seesaw balances flat!
          </p>

          <!-- Interactive Seesaw Mechanism -->
          <div class="relative w-full max-w-2xl h-44 flex flex-col items-center justify-end mb-6">
            
            <!-- Seesaw Beam -->
            <div id="seesaw-beam" class="w-full h-4 bg-gradient-to-r from-indigo-500 via-teal-400 to-indigo-500 rounded-full shadow-lg relative flex justify-between items-center px-8 transition-transform duration-500 origin-center">
              
              <!-- Left Pan (Reactants) -->
              <div class="absolute -top-16 left-6 bg-slate-950 border-2 border-indigo-400 rounded-xl p-3 text-center min-w-[140px] shadow-lg">
                <div class="text-[10px] font-mono text-indigo-400 uppercase font-bold">Reactants (Left)</div>
                <div id="seesaw-left-count" class="text-sm font-black text-white font-mono mt-0.5">...</div>
              </div>

              <!-- Right Pan (Products) -->
              <div class="absolute -top-16 right-6 bg-slate-950 border-2 border-indigo-400 rounded-xl p-3 text-center min-w-[140px] shadow-lg">
                <div class="text-[10px] font-mono text-indigo-400 uppercase font-bold">Products (Right)</div>
                <div id="seesaw-right-count" class="text-sm font-black text-white font-mono mt-0.5">...</div>
              </div>
            </div>

            <!-- Fulcrum Pivot Triangle -->
            <div class="w-0 h-0 border-l-[28px] border-l-transparent border-r-[28px] border-r-transparent border-b-[46px] border-b-slate-700 mt-[-2px]"></div>
            <div class="w-24 h-2 bg-slate-800 rounded mt-1"></div>
          </div>

          <!-- Interactive Equation Controllers -->
          <div class="flex flex-wrap items-center justify-center gap-3 bg-slate-950 border border-slate-800 rounded-2xl p-4 w-full">
            
            <!-- Reactants -->
            ${currentPuzzle.reactants.map((r, idx) => `
              <div class="flex items-center gap-2 bg-slate-900 border border-slate-700 px-3 py-2 rounded-xl">
                <button class="coeff-btn btn-sub-reactant w-7 h-7 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded text-xs" data-idx="${idx}">-</button>
                <span id="coeff-r-${idx}" class="font-mono font-black text-base text-teal-300 w-4 text-center">${r.userCoeff}</span>
                <button class="coeff-btn btn-add-reactant w-7 h-7 bg-teal-600 hover:bg-teal-500 text-slate-950 font-black rounded text-xs shadow" data-idx="${idx}">+</button>
                <span class="font-mono font-bold text-white text-base ml-1">${r.formula}</span>
              </div>
              ${idx < currentPuzzle.reactants.length - 1 ? '<span class="text-xl font-bold text-slate-500">+</span>' : ''}
            `).join('')}

            <!-- Arrow -->
            <span class="text-2xl font-black text-amber-400 mx-2">➔</span>

            <!-- Products -->
            ${currentPuzzle.products.map((p, idx) => `
              <div class="flex items-center gap-2 bg-slate-900 border border-slate-700 px-3 py-2 rounded-xl">
                <button class="coeff-btn btn-sub-product w-7 h-7 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded text-xs" data-idx="${idx}">-</button>
                <span id="coeff-p-${idx}" class="font-mono font-black text-base text-teal-300 w-4 text-center">${p.userCoeff}</span>
                <button class="coeff-btn btn-add-product w-7 h-7 bg-teal-600 hover:bg-teal-500 text-slate-950 font-black rounded text-xs shadow" data-idx="${idx}">+</button>
                <span class="font-mono font-bold text-white text-base ml-1">${p.formula}</span>
              </div>
            `).join('')}
          </div>

          <!-- Status / Celebration Banner -->
          <div id="balancer-status" class="mt-4 text-center min-h-[30px] font-bold text-sm"></div>

          <!-- Hint -->
          <div class="text-[11px] text-slate-400 mt-3 italic text-center">
            💡 <strong>Hint:</strong> ${currentPuzzle.hint}
          </div>
        </div>

      </div>
    `;

    // Hook Back Button
    this.container.querySelector('#btn-back-crafting').addEventListener('click', () => {
      window.soundEngine?.playPop(450);
      this.render('crafting');
    });

    const checkBalance = () => {
      // Calculate total atoms on left
      const leftTotals = {};
      currentPuzzle.reactants.forEach(r => {
        Object.entries(r.atoms).forEach(([sym, count]) => {
          leftTotals[sym] = (leftTotals[sym] || 0) + (count * r.userCoeff);
        });
      });

      // Calculate total atoms on right
      const rightTotals = {};
      currentPuzzle.products.forEach(p => {
        Object.entries(p.atoms).forEach(([sym, count]) => {
          rightTotals[sym] = (rightTotals[sym] || 0) + (count * p.userCoeff);
        });
      });

      // Format displays
      const leftText = Object.entries(leftTotals).map(([s, c]) => `${c} ${s}`).join(', ');
      const rightText = Object.entries(rightTotals).map(([s, c]) => `${c} ${s}`).join(', ');

      const leftCountEl = this.container.querySelector('#seesaw-left-count');
      const rightCountEl = this.container.querySelector('#seesaw-right-count');
      const beam = this.container.querySelector('#seesaw-beam');
      const status = this.container.querySelector('#balancer-status');

      if (leftCountEl) leftCountEl.textContent = leftText;
      if (rightCountEl) rightCountEl.textContent = rightText;

      const totalLeft = Object.values(leftTotals).reduce((a, b) => a + b, 0);
      const totalRight = Object.values(rightTotals).reduce((a, b) => a + b, 0);

      // Tilt beam
      const diff = totalRight - totalLeft;
      const tiltAngle = Math.max(-12, Math.min(12, diff * 3));
      beam.style.transform = `rotate(${tiltAngle}deg)`;

      // Check if perfectly balanced
      const allSyms = new Set([...Object.keys(leftTotals), ...Object.keys(rightTotals)]);
      const isBalanced = Array.from(allSyms).every(s => leftTotals[s] === rightTotals[s]);

      if (isBalanced) {
        beam.style.transform = 'rotate(0deg)';
        beam.className = 'w-full h-4 bg-gradient-to-r from-emerald-500 via-teal-300 to-emerald-500 rounded-full shadow-[0_0_20px_#10b981] relative flex justify-between items-center px-8 transition-transform duration-500 origin-center';
        status.innerHTML = `<span class="text-emerald-400 text-base">🎉 PERFECTLY BALANCED! All atoms accounted for! (+40 XP)</span>`;
        window.soundEngine?.playSuccess();
        window.confetti?.blast();

        setTimeout(() => {
          this.balancerIndex++;
          this.renderEquationBalancer();
        }, 2500);
      } else {
        beam.className = 'w-full h-4 bg-gradient-to-r from-indigo-500 via-teal-400 to-indigo-500 rounded-full shadow-lg relative flex justify-between items-center px-8 transition-transform duration-500 origin-center';
        status.innerHTML = `<span class="text-amber-400 text-xs">⚖️ The seesaw is tilted! Adjust multipliers to match atom counts.</span>`;
      }
    };

    // Reactant button listeners
    this.container.querySelectorAll('.btn-add-reactant').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = btn.dataset.idx;
        if (currentPuzzle.reactants[idx].userCoeff < 6) {
          currentPuzzle.reactants[idx].userCoeff++;
          this.container.querySelector(`#coeff-r-${idx}`).textContent = currentPuzzle.reactants[idx].userCoeff;
          window.soundEngine?.playPop(520);
          checkBalance();
        }
      });
    });

    this.container.querySelectorAll('.btn-sub-reactant').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = btn.dataset.idx;
        if (currentPuzzle.reactants[idx].userCoeff > 1) {
          currentPuzzle.reactants[idx].userCoeff--;
          this.container.querySelector(`#coeff-r-${idx}`).textContent = currentPuzzle.reactants[idx].userCoeff;
          window.soundEngine?.playPop(420);
          checkBalance();
        }
      });
    });

    // Product button listeners
    this.container.querySelectorAll('.btn-add-product').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = btn.dataset.idx;
        if (currentPuzzle.products[idx].userCoeff < 6) {
          currentPuzzle.products[idx].userCoeff++;
          this.container.querySelector(`#coeff-p-${idx}`).textContent = currentPuzzle.products[idx].userCoeff;
          window.soundEngine?.playPop(560);
          checkBalance();
        }
      });
    });

    this.container.querySelectorAll('.btn-sub-product').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = btn.dataset.idx;
        if (currentPuzzle.products[idx].userCoeff > 1) {
          currentPuzzle.products[idx].userCoeff--;
          this.container.querySelector(`#coeff-p-${idx}`).textContent = currentPuzzle.products[idx].userCoeff;
          window.soundEngine?.playPop(420);
          checkBalance();
        }
      });
    });

    // Initial check
    checkBalance();
  }
}

window.MoleculeLabManager = MoleculeLabManager;
