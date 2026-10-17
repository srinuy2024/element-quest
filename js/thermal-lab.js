// Thermal Cryo-Burner: Heat & Chill Phase Change Simulator
// Kids drag the temperature slider to watch atoms melt, freeze, and vaporize!

class ThermalLabManager {
  constructor(container) {
    this.container = container;
    this.currentTemp = 25; // in Celsius
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.animId = null;

    this.elements = [
      { sym: "Ga", name: "Gallium", melt: 30, boil: 2204, icon: "🥄", fact: "Melts into a liquid puddle in the palm of your warm hand!" },
      { sym: "Hg", name: "Mercury", melt: -39, boil: 357, icon: "🌡️", fact: "The only liquid metal at room temperature; freezes into a hard solid brick in arctic cold!" },
      { sym: "H2O", name: "Water / Ice", melt: 0, boil: 100, icon: "💧", fact: "Expands when it freezes into ice crystals, which is why ice cubes float!" },
      { sym: "N", name: "Nitrogen", melt: -210, boil: -196, icon: "❄️", fact: "Liquid nitrogen freezes soft flowers so solid you can smash them with a hammer!" },
      { sym: "Au", name: "Gold", melt: 1064, boil: 2970, icon: "👑", fact: "Gleams with a molten red-orange glow when melted in an alchemist's crucible!" },
      { sym: "Fe", name: "Iron", melt: 1538, boil: 2862, icon: "🧲", fact: "Blacksmiths heat iron white-hot so it bends like clay under a heavy hammer!" },
      { sym: "W", name: "Tungsten", melt: 3422, boil: 5555, icon: "💡", fact: "Highest melting point of any metal on Earth—survives rocket engine flame nozzles!" },
      { sym: "C", name: "Carbon", melt: 3642, boil: 3642, icon: "💎", fact: "Carbon never melts into liquid! It sublimates directly from solid diamond into gas!" }
    ];

    this.activeElement = this.elements[0];
  }

  render() {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="max-w-4xl mx-auto space-y-5">
        
        <!-- Header -->
        <div class="flex justify-between items-center bg-slate-900 border border-amber-500/30 rounded-2xl p-4 shadow-xl">
          <div class="flex items-center gap-3">
            <span class="text-3xl animate-pulse">🌡️</span>
            <div>
              <h2 class="text-xl font-bold text-amber-300">Thermal Cryo-Burner (States of Matter)</h2>
              <p class="text-xs text-slate-400">Heat and chill elements from Absolute Zero (-273°C) to Cosmic Furnaces (+3,500°C)!</p>
            </div>
          </div>
          <div id="thermal-phase-badge" class="px-3.5 py-1.5 rounded-full text-xs font-black tracking-wide border shadow">
            ...
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
          
          <!-- Element Shelf (4 cols) -->
          <div class="md:col-span-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-2.5">
            <span class="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              1. Pick an Element
            </span>

            <div class="space-y-1.5">
              ${this.elements.map((el, idx) => `
                <button class="thermal-elem-btn w-full p-2.5 rounded-xl border text-left transition-all flex items-center justify-between select-none ${
                  idx === 0 
                    ? 'bg-amber-950/60 border-amber-500 shadow text-white' 
                    : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-300'
                }" data-sym="${el.sym}">
                  <div class="flex items-center gap-2.5">
                    <span class="text-xl">${el.icon}</span>
                    <div>
                      <div class="text-xs font-bold">${el.name}</div>
                      <div class="text-[10px] text-slate-400">Melts: ${el.melt}°C</div>
                    </div>
                  </div>
                  <span class="text-xs font-mono font-bold text-amber-400">${el.sym}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Chamber & Particle Simulation (8 cols) -->
          <div class="md:col-span-8 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-4">
            
            <!-- Particle Simulator Box -->
            <div class="relative w-full h-64 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden flex flex-col justify-between p-3">
              <canvas id="thermal-particle-canvas" class="absolute inset-0 w-full h-full"></canvas>
              
              <div class="relative z-10 flex justify-between items-center pointer-events-none">
                <span class="text-[11px] font-mono font-bold text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
                  Atom Particle Motion: <span id="particle-state-name" class="text-amber-300 font-bold">...</span>
                </span>
                <span id="thermal-temp-display" class="text-sm font-mono font-black text-amber-400 bg-amber-950/80 border border-amber-500/50 px-3 py-1 rounded-full shadow">
                  ${this.currentTemp}°C
                </span>
              </div>

              <!-- Melting / Boiling markers -->
              <div class="relative z-10 flex justify-between items-end text-[10px] font-mono text-slate-400 pointer-events-none pb-1">
                <span id="thermal-melt-label">Melting Point: ${this.activeElement.melt}°C</span>
                <span id="thermal-boil-label">Boiling Point: ${this.activeElement.boil}°C</span>
              </div>
            </div>

            <!-- Temperature Slider -->
            <div class="space-y-2">
              <div class="flex justify-between text-xs font-bold text-slate-300">
                <span>🥶 -273°C (Absolute Zero)</span>
                <span class="text-amber-400 font-black">Drag to Heat or Chill!</span>
                <span>🔥 +3,500°C (Volcanic)</span>
              </div>
              <input 
                id="thermal-slider" 
                type="range" 
                min="-273" 
                max="3500" 
                value="${this.currentTemp}" 
                class="w-full h-3 bg-gradient-to-r from-sky-500 via-amber-400 to-red-600 rounded-lg appearance-none cursor-pointer"
              >
            </div>

            <!-- Quick Preset Temperature Buttons -->
            <div class="flex flex-wrap gap-1.5 items-center justify-center pt-1">
              <button class="preset-temp-btn px-2.5 py-1 bg-sky-950 hover:bg-sky-800 border border-sky-500/40 rounded-lg text-[11px] font-bold text-sky-200" data-temp="-200">
                ❄️ Liquid Nitrogen (-200°C)
              </button>
              <button class="preset-temp-btn px-2.5 py-1 bg-cyan-950 hover:bg-cyan-800 border border-cyan-500/40 rounded-lg text-[11px] font-bold text-cyan-200" data-temp="0">
                🧊 Ice Freezer (0°C)
              </button>
              <button class="preset-temp-btn px-2.5 py-1 bg-emerald-950 hover:bg-emerald-800 border border-emerald-500/40 rounded-lg text-[11px] font-bold text-emerald-200" data-temp="25">
                🏡 Room Temp (25°C)
              </button>
              <button class="preset-temp-btn px-2.5 py-1 bg-amber-950 hover:bg-amber-800 border border-amber-500/40 rounded-lg text-[11px] font-bold text-amber-200" data-temp="100">
                ☕ Boiling Kettle (100°C)
              </button>
              <button class="preset-temp-btn px-2.5 py-1 bg-red-950 hover:bg-red-800 border border-red-500/40 rounded-lg text-[11px] font-bold text-red-200" data-temp="1500">
                🌋 Magma Furnace (1,500°C)
              </button>
            </div>

            <!-- Fun Fact Speech Box -->
            <div id="thermal-fact-box" class="bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-amber-200 flex items-start gap-2">
              <span class="text-base">💡</span>
              <span id="thermal-fact-text" class="leading-relaxed">${this.activeElement.fact}</span>
            </div>

          </div>

        </div>

      </div>
    `;

    this.initCanvas();
    this.createParticles();
    this.attachEvents();
    this.updateState();
  }

  initCanvas() {
    this.canvas = this.container.querySelector('#thermal-particle-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width || 480;
    this.canvas.height = rect.height || 250;
  }

  createParticles() {
    this.particles = [];
    const count = 48;
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: (i % 8) * 26 + 130,
        y: Math.floor(i / 8) * 26 + 70,
        baseX: (i % 8) * 26 + 130,
        baseY: Math.floor(i / 8) * 26 + 70,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        r: 6
      });
    }

    if (!this.animId) {
      this.animate();
    }
  }

  updateState() {
    const badge = this.container.querySelector('#thermal-phase-badge');
    const stateName = this.container.querySelector('#particle-state-name');
    const tempDisp = this.container.querySelector('#thermal-temp-display');

    if (tempDisp) tempDisp.textContent = `${this.currentTemp}°C`;

    let state = 'SOLID';
    if (this.currentTemp >= this.activeElement.boil) {
      state = 'GAS';
    } else if (this.currentTemp >= this.activeElement.melt) {
      state = 'LIQUID';
    }

    if (badge) {
      if (state === 'SOLID') {
        badge.className = 'px-3.5 py-1.5 rounded-full text-xs font-black tracking-wide border bg-sky-950 border-sky-400 text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.3)]';
        badge.textContent = '🪨 SOLID (Frozen Rigid Lattice)';
        if (stateName) stateName.textContent = 'Solid: Jiggling in Place';
      } else if (state === 'LIQUID') {
        badge.className = 'px-3.5 py-1.5 rounded-full text-xs font-black tracking-wide border bg-amber-950 border-amber-400 text-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.3)]';
        badge.textContent = '💧 LIQUID (Flowing Droplets)';
        if (stateName) stateName.textContent = 'Liquid: Sliding & Flowing';
      } else {
        badge.className = 'px-3.5 py-1.5 rounded-full text-xs font-black tracking-wide border bg-rose-950 border-rose-400 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.3)]';
        badge.textContent = '💨 GAS (High-Energy Vapor!)';
        if (stateName) stateName.textContent = 'Gas: Rapid Flying Particles!';
      }
    }
  }

  animate() {
    this.animId = requestAnimationFrame(() => this.animate());
    if (!this.ctx || !this.canvas) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    let state = 'SOLID';
    if (this.currentTemp >= this.activeElement.boil) state = 'GAS';
    else if (this.currentTemp >= this.activeElement.melt) state = 'LIQUID';

    const cw = this.canvas.width;
    const ch = this.canvas.height;

    this.particles.forEach((p, idx) => {
      if (state === 'SOLID') {
        // Jiggle around crystal lattice home position
        const jitter = Math.max(0.2, (this.currentTemp + 273) / 800);
        p.x = p.baseX + (Math.sin(Date.now() * 0.015 + idx) * jitter);
        p.y = p.baseY + (Math.cos(Date.now() * 0.015 + idx) * jitter);
      } else if (state === 'LIQUID') {
        // Flowing gently around container bottom
        p.x += p.vx * 1.5;
        p.y += p.vy * 1.5;
        p.vy += 0.08; // gravity pool at bottom

        if (p.x < 15 || p.x > cw - 15) p.vx *= -1;
        if (p.y < ch * 0.45) p.vy += 0.2;
        if (p.y > ch - 15) { p.y = ch - 15; p.vy *= -0.7; }
      } else {
        // GAS: Rapid bouncy particles bouncing everywhere
        const gasSpeed = Math.min(6, 2 + (this.currentTemp - this.activeElement.boil) / 500);
        p.x += p.vx * gasSpeed;
        p.y += p.vy * gasSpeed;

        if (p.x < 10 || p.x > cw - 10) p.vx *= -1;
        if (p.y < 10 || p.y > ch - 10) p.vy *= -1;
      }

      // Render Particle Orb
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      
      const grad = this.ctx.createRadialGradient(p.x - 2, p.y - 2, 1, p.x, p.y, p.r);
      if (state === 'SOLID') {
        grad.addColorStop(0, '#7dd3fc');
        grad.addColorStop(1, '#0284c7');
      } else if (state === 'LIQUID') {
        grad.addColorStop(0, '#fde047');
        grad.addColorStop(1, '#d97706');
      } else {
        grad.addColorStop(0, '#fda4af');
        grad.addColorStop(1, '#e11d48');
      }
      this.ctx.fillStyle = grad;
      this.ctx.fill();
    });
  }

  attachEvents() {
    const slider = this.container.querySelector('#thermal-slider');
    const elemButtons = this.container.querySelectorAll('.thermal-elem-btn');
    const presetButtons = this.container.querySelectorAll('.preset-temp-btn');
    const meltLabel = this.container.querySelector('#thermal-melt-label');
    const boilLabel = this.container.querySelector('#thermal-boil-label');
    const factText = this.container.querySelector('#thermal-fact-text');

    slider?.addEventListener('input', (e) => {
      this.currentTemp = parseInt(e.target.value, 10);
      this.updateState();
    });

    presetButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.currentTemp = parseInt(btn.dataset.temp, 10);
        if (slider) slider.value = this.currentTemp;
        window.soundEngine?.playPop(550);
        this.updateState();
      });
    });

    elemButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const sym = btn.dataset.sym;
        this.activeElement = this.elements.find(e => e.sym === sym);

        elemButtons.forEach(b => {
          b.className = 'thermal-elem-btn w-full p-2.5 rounded-xl border text-left transition-all flex items-center justify-between select-none bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-300';
        });
        btn.className = 'thermal-elem-btn w-full p-2.5 rounded-xl border text-left transition-all flex items-center justify-between select-none bg-amber-950/60 border-amber-500 shadow text-white';

        if (meltLabel) meltLabel.textContent = `Melting Point: ${this.activeElement.melt}°C`;
        if (boilLabel) boilLabel.textContent = `Boiling Point: ${this.activeElement.boil}°C`;
        if (factText) factText.textContent = this.activeElement.fact;

        window.soundEngine?.playPop(700);
        this.updateState();
      });
    });
  }

  selectElementBySymbol(sym) {
    const match = this.elements.find(e => e.sym.toLowerCase() === sym.toLowerCase());
    if (match) {
      this.activeElement = match;
      this.render();
    }
  }
}

window.ThermalLabManager = ThermalLabManager;
