// Fireworks Flame Color Chemist Lab
// Kids learn how excited metal electrons produce brilliant colors in night festival fireworks!

class FireworksLabManager {
  constructor(container) {
    this.container = container;
    this.activeElement = null;
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.animId = null;

    this.fireworkElements = [
      { sym: "Sr", name: "Strontium", color: "#ef4444", flame: "Crimson Red", desc: "Classic hot red festival starbursts!" },
      { sym: "Ba", name: "Barium", color: "#22c55e", flame: "Emerald Green", desc: "Apple-green sparks used in celebrations!" },
      { sym: "Cu", name: "Copper", color: "#06b6d4", flame: "Turquoise Blue", desc: "Hardest color to make in pyrotechnics!" },
      { sym: "Na", name: "Sodium", color: "#eab308", flame: "Golden Yellow", desc: "Intense daylight-bright golden sparks!" },
      { sym: "K", name: "Potassium", color: "#c084fc", flame: "Lilac Violet", desc: "Soft pastel purple sky flowers!" },
      { sym: "Mg", name: "Magnesium", color: "#f8fafc", flame: "Blinding White", desc: "Super-bright flashbulbs and sparklers!" },
      { sym: "Ca", name: "Calcium", color: "#f97316", flame: "Coral Orange", desc: "Warm sunset orange Roman candles!" }
    ];
    this.activeElement = this.fireworkElements[0];
  }

  render() {
    if (!this.container) return;

    const fireworkElements = this.fireworkElements;

    this.container.innerHTML = `
      <div class="max-w-4xl mx-auto space-y-5">
        
        <!-- Header -->
        <div class="flex justify-between items-center bg-slate-900 border border-pink-500/30 rounded-2xl p-4 shadow-xl">
          <div class="flex items-center gap-3">
            <span class="text-3xl animate-pulse">🎆</span>
            <div>
              <h2 class="text-xl font-bold text-pink-300">Festival Fireworks Color Chemist</h2>
              <p class="text-xs text-slate-400">Discover how chemistry lights up the midnight sky with rainbow sparks!</p>
            </div>
          </div>
          <div class="bg-pink-950/80 border border-pink-500/50 px-3 py-1.5 rounded-xl text-xs font-bold text-pink-300">
            🔥 Flame Test Chemistry
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          <!-- Element Selection (4 Cols) -->
          <div class="md:col-span-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-3">
            <span class="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              1. Choose Metal Salt
            </span>

            <div class="space-y-2">
              ${fireworkElements.map((el, idx) => `
                <button class="firework-elem-btn w-full p-2.5 rounded-xl border text-left transition-all flex items-center justify-between select-none ${
                  idx === 0 
                    ? 'bg-slate-800 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]' 
                    : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                }" data-sym="${el.sym}">
                  <div class="flex items-center gap-2.5">
                    <span class="w-3.5 h-3.5 rounded-full inline-block shadow-md" style="background-color: ${el.color}"></span>
                    <div>
                      <div class="text-xs font-bold text-white">${el.name} (${el.sym})</div>
                      <div class="text-[10px] text-slate-400">${el.flame}</div>
                    </div>
                  </div>
                  <span class="text-base">✨</span>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Firework Launch Stage (8 Cols) -->
          <div class="md:col-span-8 bg-slate-950 border border-slate-800 rounded-2xl p-4 flex flex-col items-center justify-between relative overflow-hidden shadow-2xl">
            
            <!-- Night Sky Canvas -->
            <div class="relative w-full h-80 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950 rounded-xl overflow-hidden border border-slate-800 flex flex-col justify-between p-3">
              <canvas id="firework-canvas" class="absolute inset-0 w-full h-full pointer-events-none"></canvas>
              
              <!-- Stars in Sky -->
              <div class="absolute inset-0 opacity-40 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none"></div>

              <!-- Top Info Badge -->
              <div class="relative z-10 flex justify-between items-center">
                <span id="fw-flame-label" class="text-xs font-bold font-mono px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-red-400">
                  Color: Crimson Red (Strontium)
                </span>
                <span class="text-[11px] text-slate-400 font-mono">Launch Ready 🚀</span>
              </div>

              <!-- Launch Platform at Bottom -->
              <div class="relative z-10 flex justify-center items-end pb-2">
                <div id="rocket-pad" class="flex flex-col items-center cursor-pointer group">
                  <div id="fw-rocket" class="text-3xl transform transition-transform duration-300 group-hover:-translate-y-2">🚀</div>
                  <div class="w-12 h-2 bg-slate-700 rounded-full mt-1"></div>
                </div>
              </div>
            </div>

            <!-- Big Launch Button -->
            <div class="w-full mt-4 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <div id="fw-science-fact" class="text-xs text-slate-300 font-medium max-w-sm">
                When Strontium atoms get super-hot, their electrons jump energy orbits and emit pure red photons!
              </div>

              <button id="btn-ignite-firework" class="px-6 py-2.5 bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 hover:scale-105 active:scale-95 text-white font-black rounded-xl text-sm shadow-lg shadow-pink-500/30 flex items-center gap-2 transition whitespace-nowrap">
                🎆 LAUNCH FIREWORK!
              </button>
            </div>

          </div>

        </div>

      </div>
    `;

    this.initCanvas();
    this.attachEvents(fireworkElements);
  }

  initCanvas() {
    this.canvas = this.container.querySelector('#firework-canvas');
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width || 500;
    this.canvas.height = rect.height || 320;
  }

  attachEvents(elements) {
    const buttons = this.container.querySelectorAll('.firework-elem-btn');
    const launchBtn = this.container.querySelector('#btn-ignite-firework');
    const label = this.container.querySelector('#fw-flame-label');
    const fact = this.container.querySelector('#fw-science-fact');
    const rocket = this.container.querySelector('#fw-rocket');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const sym = btn.dataset.sym;
        this.activeElement = elements.find(e => e.sym === sym);

        buttons.forEach(b => {
          b.className = 'firework-elem-btn w-full p-2.5 rounded-xl border text-left transition-all flex items-center justify-between select-none bg-slate-950 border-slate-800 hover:border-slate-700';
        });
        btn.className = `firework-elem-btn w-full p-2.5 rounded-xl border text-left transition-all flex items-center justify-between select-none bg-slate-800 shadow-md`;
        btn.style.borderColor = this.activeElement.color;

        label.textContent = `Color: ${this.activeElement.flame} (${this.activeElement.name})`;
        label.style.color = this.activeElement.color;

        fact.textContent = `When ${this.activeElement.name} atoms get super-hot in fireworks, their electrons jump energy orbits to emit ${this.activeElement.flame.toLowerCase()} light!`;

        window.soundEngine?.playPop(700);
      });
    });

    launchBtn.addEventListener('click', () => {
      this.launchFirework(rocket);
    });
  }

  launchFirework(rocket) {
    window.soundEngine?.playAtomHum();

    // Rocket shoot up animation
    rocket.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    rocket.style.transform = 'translateY(-220px) scale(0.6)';

    setTimeout(() => {
      // Boom!
      rocket.style.transition = 'none';
      rocket.style.transform = 'translateY(0) scale(1)';

      window.soundEngine?.playSuccess();
      this.createExplosion(this.canvas.width / 2, 70, this.activeElement.color);
    }, 600);
  }

  createExplosion(x, y, color) {
    const count = 120;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.2;
      const speed = 2 + Math.random() * 5.5;

      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color,
        size: 2.5 + Math.random() * 2.5,
        alpha: 1,
        decay: 0.012 + Math.random() * 0.012
      });
    }

    if (!this.animId) {
      this.animateParticles();
    }
  }

  animateParticles() {
    if (!this.ctx || this.particles.length === 0) {
      if (this.animId) {
        cancelAnimationFrame(this.animId);
        this.animId = null;
      }
      if (this.ctx) this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      return;
    }

    // Trailing sky fade effect
    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.2)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.04; // gentle gravity
      p.vx *= 0.985;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.shadowColor = p.color;
      this.ctx.shadowBlur = 8;
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fill();
      this.ctx.shadowBlur = 0;
    }

    this.animId = requestAnimationFrame(() => this.animateParticles());
  }

  selectElementBySymbol(sym) {
    const match = this.fireworkElements.find(e => e.sym.toLowerCase() === sym.toLowerCase());
    if (match) {
      this.activeElement = match;
      this.render();
    }
  }
}

window.FireworksLabManager = FireworksLabManager;
