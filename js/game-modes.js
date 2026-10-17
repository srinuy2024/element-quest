// Game Modes: Detective Quiz, Match Rush, and Atom Synthesizer

class GameManager {
  constructor(elements, onSelectElement) {
    this.elements = elements;
    this.onSelectElement = onSelectElement;
    
    // State
    this.activeMode = 'explorer'; // 'explorer' | 'detective' | 'match' | 'builder'
    this.score = parseInt(localStorage.getItem('eq_score') || '0', 10);
    this.streak = 0;
    this.discoveredElements = new Set(JSON.parse(localStorage.getItem('eq_discovered') || '[]'));

    // Detective Quiz State
    this.currentQuestion = null;
    this.detectiveQuestions = this.generateDetectiveQuestions();
    this.questionIndex = 0;
    this.revealedClues = 0;

    // Match Rush State
    this.matchItems = [];
    this.selectedMatchItem = null;
    this.selectedMatchElement = null;
    this.matchScore = 0;

    // Atom Builder State
    this.builderProtons = 1;
    this.builderNeutrons = 0;
    this.builderElectrons = 1;
  }

  markElementDiscovered(number) {
    if (!this.discoveredElements.has(number)) {
      this.discoveredElements.add(number);
      localStorage.setItem('eq_discovered', JSON.stringify(Array.from(this.discoveredElements)));
      this.addScore(25);
      return true;
    }
    return false;
  }

  addScore(points) {
    this.score += points;
    localStorage.setItem('eq_score', this.score);
    this.updateScoreDisplay();
  }

  updateScoreDisplay() {
    const el = document.getElementById('header-score');
    if (el) el.textContent = this.score;
    const discoveredCount = document.getElementById('discovered-count');
    if (discoveredCount) discoveredCount.textContent = this.discoveredElements.size;
  }

  // Generate engaging riddles based on elements with rich applications
  generateDetectiveQuestions() {
    const questions = [
      {
        targetNumber: 2,
        riddle: "I am lighter than air and I fill party balloons. If you breathe a tiny bit of me, your voice turns hilarious and squeaky! Who am I?",
        clue1: "I am a Noble Gas found in Group 18.",
        clue2: "I was discovered on the Sun during a solar eclipse before Earth!",
        clue3: "My atomic number is 2 and my symbol is He."
      },
      {
        targetNumber: 6,
        riddle: "I am the master of disguise! Deep underground I become the hardest glittering Diamond, but in your school backpack I am the soft Graphite in pencils! Who am I?",
        clue1: "I am the building block of all living things.",
        clue2: "I can bond with almost any element to form organic molecules.",
        clue3: "My atomic number is 6 and my symbol is C."
      },
      {
        targetNumber: 10,
        riddle: "When electricity zaps through my glass tube at night, I illuminate city streets and retro diners in fiery reddish-orange glow! Who am I?",
        clue1: "I am a colorful Noble Gas.",
        clue2: "My name comes from the Greek word for 'new'.",
        clue3: "My atomic number is 10 and my symbol is Ne."
      },
      {
        targetNumber: 20,
        riddle: "I make your bones and teeth rock-solid so you can run and play! You can find lots of me in a cold glass of milk. Who am I?",
        clue1: "I am an Alkaline Earth metal.",
        clue2: "Over 99% of me in your body lives in your skeleton.",
        clue3: "My atomic number is 20 and my symbol is Ca."
      },
      {
        targetNumber: 26,
        riddle: "I build giant city skyscrapers, magnetic compass needles, and I carry oxygen through your blood cells to keep you energised! Who am I?",
        clue1: "I am a Transition Metal with strong magnetic powers.",
        clue2: "The center of planet Earth is a giant spinning ball of me!",
        clue3: "My atomic number is 26 and my symbol is Fe."
      },
      {
        targetNumber: 79,
        riddle: "I never ever rust or tarnish! Ancient pharaohs made treasure crowns with me, and astronauts coat their space helmet visors with me to block blinding sun rays. Who am I?",
        clue1: "I am a radiant yellow Transition Metal.",
        clue2: "A single ounce of me can be hammered thinner than paper.",
        clue3: "My atomic number is 79 and my symbol is Au."
      },
      {
        targetNumber: 29,
        riddle: "I carry electric currents inside wall wires and phone chargers. Rain and sea air turned my skin mint-green on the Statue of Liberty! Who am I?",
        clue1: "I am a reddish-gold Transition Metal.",
        clue2: "Melting me with zinc creates musical brass trumpets.",
        clue3: "My atomic number is 29 and my symbol is Cu."
      },
      {
        targetNumber: 17,
        riddle: "I guard public swimming pools by destroying invisible bacteria and germs to keep the water sparkling blue! Who am I?",
        clue1: "I am a yellowish-green Halogen gas.",
        clue2: "I team up with Sodium to create delicious table salt.",
        clue3: "My atomic number is 17 and my symbol is Cl."
      },
      {
        targetNumber: 14,
        riddle: "You can walk on me as beach sand, and my microchips power your smartphone, Nintendo, and space rockets! Who am I?",
        clue1: "I am a shiny grey Metalloid.",
        clue2: "A famous tech valley in California is named after me.",
        clue3: "My atomic number is 14 and my symbol is Si."
      },
      {
        targetNumber: 80,
        riddle: "I am the only metal on Earth that is a heavy liquid at room temperature! Heavy iron cannonballs can float right on top of me like rubber ducks. Who am I?",
        clue1: "I am named after the fleet-footed Roman messenger god.",
        clue2: "Vintage thermometers used me to measure body temperatures.",
        clue3: "My atomic number is 80 and my symbol is Hg."
      },
      {
        targetNumber: 19,
        riddle: "Athletes love me because I prevent painful muscle cramps! You can get lots of me by eating a sweet ripe yellow banana. Who am I?",
        clue1: "I am an Alkali Metal that burns with lilac purple flames.",
        clue2: "My chemical symbol comes from the Latin word Kalium.",
        clue3: "My atomic number is 19 and my symbol is K."
      },
      {
        targetNumber: 8,
        riddle: "You take me inside your lungs with every breath! Without me, campfires can't burn and animals can't live. Who am I?",
        clue1: "I make up 21% of Earth's atmosphere.",
        clue2: "Fish absorb me through their gills from ocean water.",
        clue3: "My atomic number is 8 and my symbol is O."
      }
    ];

    // Shuffle questions
    return questions.sort(() => Math.random() - 0.5);
  }

  // Render Detective Mode View
  initDetectiveMode(container) {
    this.revealedClues = 0;
    this.currentQuestion = this.detectiveQuestions[this.questionIndex % this.detectiveQuestions.length];
    const targetElem = this.elements.find(e => e.number === this.currentQuestion.targetNumber);

    // Generate 3 random wrong options
    const options = [targetElem];
    while (options.length < 4) {
      const rand = this.elements[Math.floor(Math.random() * 30)]; // pick from familiar ones
      if (!options.find(o => o.number === rand.number)) {
        options.push(rand);
      }
    }
    options.sort(() => Math.random() - 0.5);

    container.innerHTML = `
      <div class="max-w-3xl mx-auto bg-slate-900 border-2 border-indigo-500/50 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center gap-2">
            <span class="text-3xl">🕵️‍♂️</span>
            <div>
              <h2 class="text-xl font-bold text-indigo-300">Element Detective Case #${this.questionIndex + 1}</h2>
              <p class="text-xs text-slate-400">Read the mystery clues and track down the matching chemical element!</p>
            </div>
          </div>
          <div class="bg-indigo-950 border border-indigo-500 px-3 py-1 rounded-full text-indigo-300 font-bold text-xs">
            🔥 Streak: <span id="detective-streak">${this.streak}</span>
          </div>
        </div>

        <!-- Riddle Box -->
        <div class="bg-slate-950 border border-indigo-500/30 rounded-xl p-5 mb-5 shadow-inner">
          <p class="text-lg md:text-xl font-semibold text-amber-200 text-center leading-relaxed">
            "${this.currentQuestion.riddle}"
          </p>
        </div>

        <!-- Clue System -->
        <div class="mb-5">
          <div class="flex justify-between items-center mb-2">
            <span class="text-xs font-bold text-slate-300 uppercase tracking-wider">Detective Clues</span>
            <button id="btn-unlock-clue" class="text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3 py-1 rounded-lg shadow transition">
              💡 Need a Hint? (${3 - this.revealedClues} Left)
            </button>
          </div>
          <div id="clues-container" class="space-y-1.5 min-h-[40px]">
            <p class="text-xs text-slate-500 italic">Click 'Need a Hint' if you're stuck!</p>
          </div>
        </div>

        <!-- Multiple Choice Options -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          ${options.map(opt => `
            <button class="detective-opt-btn bg-slate-800 hover:bg-indigo-600 border border-slate-700 hover:border-indigo-400 rounded-xl p-4 text-center transition-all duration-200 group transform hover:-translate-y-1" data-number="${opt.number}">
              <div class="text-3xl mb-1 group-hover:scale-125 transition-transform">${opt.character.avatarEmoji || '⚛️'}</div>
              <div class="text-xs font-mono text-indigo-400 group-hover:text-white">#${opt.number}</div>
              <div class="text-xl font-black text-white">${opt.symbol}</div>
              <div class="text-xs font-semibold text-slate-300 group-hover:text-white truncate">${opt.name}</div>
            </button>
          `).join('')}
        </div>

        <div id="detective-feedback" class="text-center font-bold text-sm min-h-[24px]"></div>
      </div>
    `;

    // Hook events
    const hintBtn = container.querySelector('#btn-unlock-clue');
    const cluesBox = container.querySelector('#clues-container');
    const feedback = container.querySelector('#detective-feedback');

    hintBtn.addEventListener('click', () => {
      this.revealedClues++;
      window.soundEngine?.playPop(450);

      const clueTexts = [
        `🔍 Clue 1: ${this.currentQuestion.clue1}`,
        `🔍 Clue 2: ${this.currentQuestion.clue2}`,
        `🔍 Clue 3: ${this.currentQuestion.clue3}`
      ];

      cluesBox.innerHTML = clueTexts.slice(0, this.revealedClues).map(c => `
        <div class="text-xs font-medium text-indigo-300 bg-indigo-950/80 border border-indigo-500/40 px-3 py-1.5 rounded-lg animate-fadeIn">
          ${c}
        </div>
      `).join('');

      if (this.revealedClues >= 3) {
        hintBtn.disabled = true;
        hintBtn.className = 'text-xs bg-slate-800 text-slate-500 font-bold px-3 py-1 rounded-lg cursor-not-allowed';
      }
    });

    const optButtons = container.querySelectorAll('.detective-opt-btn');
    optButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedNum = parseInt(btn.dataset.number, 10);
        if (selectedNum === this.currentQuestion.targetNumber) {
          // Correct!
          window.soundEngine?.playSuccess();
          window.confetti?.blast();
          this.streak++;
          this.addScore(50 + (3 - this.revealedClues) * 10);
          this.markElementDiscovered(selectedNum);

          feedback.innerHTML = `<span class="text-emerald-400">🎉 Correct! You solved the case! It is ${targetElem.name} (${targetElem.symbol})!</span>`;
          btn.className = 'detective-opt-btn bg-emerald-600 border-2 border-emerald-300 rounded-xl p-4 text-center scale-105 transition-all text-white';

          setTimeout(() => {
            this.questionIndex++;
            this.initDetectiveMode(container);
          }, 1800);
        } else {
          // Wrong
          window.soundEngine?.playBoop();
          this.streak = 0;
          const streakEl = container.querySelector('#detective-streak');
          if (streakEl) streakEl.textContent = '0';

          feedback.innerHTML = `<span class="text-rose-400">❌ Oops, not quite! Try reading the clues or pick another element!</span>`;
          btn.className = 'detective-opt-btn bg-rose-950 border border-rose-600 rounded-xl p-4 text-center opacity-60 transition-all';
          btn.disabled = true;
        }
      });
    });
  }

  // Application Match Rush Mini-Game
  initMatchRushMode(container) {
    const candidateElements = [
      { num: 2, item: "🎈 Floating Party Balloon", reason: "Helium is lighter than air!" },
      { num: 10, item: "🏮 Red Glowing Diner Sign", reason: "Neon gas glows red with electricity!" },
      { num: 20, item: "🥛 Bone-Strengthening Milk", reason: "Calcium builds strong bones and teeth!" },
      { num: 29, item: "🔌 Wall Charging Cables", reason: "Copper conducts electrical juice effortlessly!" },
      { num: 6, item: "💎 Sparkling Diamond Ring", reason: "Carbon forms unbreakable crystal diamond cages!" },
      { num: 79, item: "👨‍🚀 Gold Astronaut Helmet", reason: "Gold shields astronauts from blinding sun rays!" },
      { num: 17, item: "🏊 Crystal Clean Swimming Pool", reason: "Chlorine kills pool germs!" },
      { num: 19, item: "🍌 Sweet Ripe Yellow Banana", reason: "Potassium stops athlete muscle cramps!" }
    ];

    // Pick 4 pairs
    const currentRound = candidateElements.sort(() => Math.random() - 0.5).slice(0, 4);
    const itemCards = [...currentRound].sort(() => Math.random() - 0.5);
    const elementCards = [...currentRound].map(r => this.elements.find(e => e.number === r.num)).sort(() => Math.random() - 0.5);

    let selectedItem = null;
    let selectedElement = null;
    let matchesMade = 0;

    container.innerHTML = `
      <div class="max-w-3xl mx-auto bg-slate-900 border-2 border-amber-500/50 rounded-2xl p-6 shadow-2xl">
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center gap-2">
            <span class="text-3xl">⚡</span>
            <div>
              <h2 class="text-xl font-bold text-amber-300">Application Match Rush</h2>
              <p class="text-xs text-slate-400">Connect the everyday object on the left to its matching chemical element on the right!</p>
            </div>
          </div>
          <div class="bg-amber-950 border border-amber-500 px-3 py-1 rounded-full text-amber-300 font-bold text-xs">
            Matches: <span id="match-counter">0 / 4</span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
          <!-- Items Column -->
          <div>
            <h3 class="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">1. Everyday Object</h3>
            <div id="match-items-col" class="space-y-3">
              ${itemCards.map(item => `
                <div class="match-item-card bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 rounded-xl p-3 cursor-pointer transition-all flex items-center gap-3 select-none" data-num="${item.num}">
                  <span class="text-2xl">${item.item.slice(0, 2)}</span>
                  <span class="text-sm font-bold text-white">${item.item.slice(2)}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Elements Column -->
          <div>
            <h3 class="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">2. Chemical Element</h3>
            <div id="match-elems-col" class="space-y-3">
              ${elementCards.map(elem => `
                <div class="match-elem-card bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 rounded-xl p-3 cursor-pointer transition-all flex items-center justify-between select-none" data-num="${elem.number}">
                  <div class="flex items-center gap-2">
                    <span class="text-2xl">${elem.character.avatarEmoji || '⚛️'}</span>
                    <div>
                      <div class="text-sm font-black text-white">${elem.name}</div>
                      <div class="text-[10px] text-slate-400">${elem.character.title}</div>
                    </div>
                  </div>
                  <div class="text-lg font-mono font-bold text-sky-400 bg-sky-950/80 px-2.5 py-0.5 rounded border border-sky-500/40">
                    ${elem.symbol}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <div id="match-feedback" class="text-center font-bold text-sm min-h-[24px]"></div>
      </div>
    `;

    const itemElements = container.querySelectorAll('.match-item-card');
    const elemElements = container.querySelectorAll('.match-elem-card');
    const feedback = container.querySelector('#match-feedback');
    const counter = container.querySelector('#match-counter');

    const checkMatch = () => {
      if (!selectedItem || !selectedElement) return;

      const itemNum = parseInt(selectedItem.dataset.num, 10);
      const elemNum = parseInt(selectedElement.dataset.num, 10);

      if (itemNum === elemNum) {
        // Matched!
        window.soundEngine?.playSuccess();
        matchesMade++;
        this.addScore(30);
        this.markElementDiscovered(itemNum);
        counter.textContent = `${matchesMade} / 4`;

        selectedItem.className = 'match-item-card bg-emerald-950/80 border-2 border-emerald-400 rounded-xl p-3 opacity-60 pointer-events-none flex items-center gap-3 line-through text-emerald-300';
        selectedElement.className = 'match-elem-card bg-emerald-950/80 border-2 border-emerald-400 rounded-xl p-3 opacity-60 pointer-events-none flex items-center justify-between text-emerald-300';

        feedback.innerHTML = `<span class="text-emerald-400">✨ Great Match! That element powers that application!</span>`;

        selectedItem = null;
        selectedElement = null;

        if (matchesMade === 4) {
          window.confetti?.blast();
          window.soundEngine?.playVictory();
          feedback.innerHTML = `<span class="text-amber-400 text-base">🏆 Round Clear! High-five, Element Master!</span>`;
          setTimeout(() => {
            this.initMatchRushMode(container);
          }, 2200);
        }
      } else {
        // Mismatch
        window.soundEngine?.playBoop();
        feedback.innerHTML = `<span class="text-rose-400">❌ Not quite a match! Try pairing with another element.</span>`;
        selectedItem.className = 'match-item-card bg-slate-800 border-2 border-slate-700 rounded-xl p-3 cursor-pointer flex items-center gap-3';
        selectedElement.className = 'match-elem-card bg-slate-800 border-2 border-slate-700 rounded-xl p-3 cursor-pointer flex items-center justify-between';
        selectedItem = null;
        selectedElement = null;
      }
    };

    itemElements.forEach(card => {
      card.addEventListener('click', () => {
        window.soundEngine?.playPop(520);
        itemElements.forEach(c => c.classList.remove('border-amber-400', 'bg-amber-950/40'));
        card.classList.add('border-amber-400', 'bg-amber-950/40');
        selectedItem = card;
        checkMatch();
      });
    });

    elemElements.forEach(card => {
      card.addEventListener('click', () => {
        window.soundEngine?.playPop(650);
        elemElements.forEach(c => c.classList.remove('border-sky-400', 'bg-sky-950/40'));
        card.classList.add('border-sky-400', 'bg-sky-950/40');
        selectedElement = card;
        checkMatch();
      });
    });
  }

  // Atom Synthesizer (Build-an-Atom)
  initAtomBuilderMode(container) {
    container.innerHTML = `
      <div class="max-w-4xl mx-auto bg-slate-900 border-2 border-cyan-500/50 rounded-2xl p-6 shadow-2xl">
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center gap-2">
            <span class="text-3xl">⚛️</span>
            <div>
              <h2 class="text-xl font-bold text-cyan-300">Atom Synthesizer Lab</h2>
              <p class="text-xs text-slate-400">Add protons, neutrons, and electrons to create any element on the Periodic Table!</p>
            </div>
          </div>
          <div id="synthesized-status" class="bg-cyan-950 border border-cyan-500 px-4 py-1.5 rounded-full text-cyan-300 font-bold text-sm">
            Current Element: Hydrogen (H)
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <!-- Canvas Simulator -->
          <div class="bg-slate-950 rounded-xl p-2 border border-slate-800 flex flex-col items-center">
            <canvas id="builder-canvas" class="w-full h-72 rounded-lg"></canvas>
            <div class="text-[11px] text-slate-400 mt-2 font-mono">
              Protons determine the Element Identity!
            </div>
          </div>

          <!-- Controls -->
          <div class="space-y-4">
            <!-- Protons Controller -->
            <div class="bg-slate-800/80 border border-red-500/40 rounded-xl p-3 flex justify-between items-center">
              <div>
                <div class="text-sm font-bold text-red-400 flex items-center gap-1.5">
                  <span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span> Protons (+)
                </div>
                <div class="text-[11px] text-slate-400">Defines the Atomic Number</div>
              </div>
              <div class="flex items-center gap-3">
                <button id="btn-sub-p" class="w-8 h-8 rounded-lg bg-red-950 hover:bg-red-800 text-red-300 font-black border border-red-500">-</button>
                <span id="count-p" class="font-mono font-bold text-lg text-white w-6 text-center">1</span>
                <button id="btn-add-p" class="w-8 h-8 rounded-lg bg-red-600 hover:bg-red-500 text-white font-black shadow">+</button>
              </div>
            </div>

            <!-- Neutrons Controller -->
            <div class="bg-slate-800/80 border border-blue-500/40 rounded-xl p-3 flex justify-between items-center">
              <div>
                <div class="text-sm font-bold text-blue-400 flex items-center gap-1.5">
                  <span class="w-3 h-3 rounded-full bg-blue-500 inline-block"></span> Neutrons (0)
                </div>
                <div class="text-[11px] text-slate-400">Glues the nucleus together</div>
              </div>
              <div class="flex items-center gap-3">
                <button id="btn-sub-n" class="w-8 h-8 rounded-lg bg-blue-950 hover:bg-blue-800 text-blue-300 font-black border border-blue-500">-</button>
                <span id="count-n" class="font-mono font-bold text-lg text-white w-6 text-center">0</span>
                <button id="btn-add-n" class="w-8 h-8 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-black shadow">+</button>
              </div>
            </div>

            <!-- Electrons Controller -->
            <div class="bg-slate-800/80 border border-amber-500/40 rounded-xl p-3 flex justify-between items-center">
              <div>
                <div class="text-sm font-bold text-amber-400 flex items-center gap-1.5">
                  <span class="w-3 h-3 rounded-full bg-amber-400 inline-block"></span> Electrons (-)
                </div>
                <div class="text-[11px] text-slate-400">Orbit in outer shells</div>
              </div>
              <div class="flex items-center gap-3">
                <button id="btn-sub-e" class="w-8 h-8 rounded-lg bg-amber-950 hover:bg-amber-800 text-amber-300 font-black border border-amber-500">-</button>
                <span id="count-e" class="font-mono font-bold text-lg text-white w-6 text-center">1</span>
                <button id="btn-add-e" class="w-8 h-8 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black shadow">+</button>
              </div>
            </div>

            <!-- Element Card Summary -->
            <div id="synthesized-card" class="bg-slate-950 border border-cyan-500/50 rounded-xl p-3 flex items-center gap-4">
              <div id="synthesized-emoji" class="text-4xl">🚀</div>
              <div class="flex-1">
                <div class="text-xs text-cyan-400 font-mono font-bold" id="synthesized-num">Atomic #1</div>
                <div class="text-lg font-black text-white" id="synthesized-name">Hydrogen (H)</div>
                <div class="text-xs text-slate-300 line-clamp-1" id="synthesized-desc">The lightest element in the whole universe!</div>
              </div>
              <button id="btn-view-details" class="px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg text-xs shadow">
                🔍 Inspect!
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    const canvas = container.querySelector('#builder-canvas');
    const renderer = new window.AtomRenderer(canvas);
    let targetElem = this.elements.find(e => e.number === this.builderProtons) || this.elements[0];
    renderer.setElement(targetElem);

    const updateView = () => {
      targetElem = this.elements.find(e => e.number === this.builderProtons) || this.elements[0];
      renderer.setElement({
        ...targetElem,
        shells: [Math.min(this.builderElectrons, 2), Math.max(0, this.builderElectrons - 2)]
      });

      container.querySelector('#count-p').textContent = this.builderProtons;
      container.querySelector('#count-n').textContent = this.builderNeutrons;
      container.querySelector('#count-e').textContent = this.builderElectrons;

      container.querySelector('#synthesized-status').textContent = `Current Element: ${targetElem.name} (${targetElem.symbol})`;
      container.querySelector('#synthesized-num').textContent = `Atomic #${targetElem.number}`;
      container.querySelector('#synthesized-name').textContent = `${targetElem.name} (${targetElem.symbol})`;
      container.querySelector('#synthesized-desc').textContent = targetElem.character.superpower;
      container.querySelector('#synthesized-emoji').textContent = targetElem.character.avatarEmoji || '⚛️';
    };

    container.querySelector('#btn-add-p').addEventListener('click', () => {
      if (this.builderProtons < 30) {
        this.builderProtons++;
        this.builderElectrons = this.builderProtons; // balance
        this.builderNeutrons = Math.max(0, Math.round(this.elements[this.builderProtons - 1].mass - this.builderProtons));
        window.soundEngine?.playPop(600 + this.builderProtons * 10);
        this.markElementDiscovered(this.builderProtons);
        updateView();
      }
    });

    container.querySelector('#btn-sub-p').addEventListener('click', () => {
      if (this.builderProtons > 1) {
        this.builderProtons--;
        this.builderElectrons = this.builderProtons;
        this.builderNeutrons = Math.max(0, Math.round(this.elements[this.builderProtons - 1].mass - this.builderProtons));
        window.soundEngine?.playPop(450);
        updateView();
      }
    });

    container.querySelector('#btn-add-n').addEventListener('click', () => {
      this.builderNeutrons++;
      window.soundEngine?.playPop(520);
      updateView();
    });

    container.querySelector('#btn-sub-n').addEventListener('click', () => {
      if (this.builderNeutrons > 0) {
        this.builderNeutrons--;
        window.soundEngine?.playPop(400);
        updateView();
      }
    });

    container.querySelector('#btn-add-e').addEventListener('click', () => {
      this.builderElectrons++;
      window.soundEngine?.playPop(700);
      updateView();
    });

    container.querySelector('#btn-sub-e').addEventListener('click', () => {
      if (this.builderElectrons > 0) {
        this.builderElectrons--;
        window.soundEngine?.playPop(420);
        updateView();
      }
    });

    container.querySelector('#btn-view-details').addEventListener('click', () => {
      this.onSelectElement(targetElem);
    });
  }
}

window.GameManager = GameManager;
