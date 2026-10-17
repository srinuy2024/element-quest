// Interactive Animation Scenes for Element Applications
// Engages kids with real-time interactive mini-animations!

class ApplicationSceneManager {
  constructor(container) {
    this.container = container;
  }

  renderScene(app, element) {
    if (!this.container) return;
    this.container.innerHTML = '';

    const sceneDiv = document.createElement('div');
    sceneDiv.className = 'interactive-scene-wrapper';

    const type = app.interactiveType || 'science-lab';

    switch (type) {
      case 'balloon-float':
        this.renderBalloonScene(sceneDiv);
        break;
      case 'neon-glow':
        this.renderNeonScene(sceneDiv);
        break;
      case 'circuit-flow':
        this.renderCircuitScene(sceneDiv);
        break;
      case 'diamond-sparkle':
      case 'pencil-draw':
        this.renderCarbonScene(sceneDiv);
        break;
      case 'magnet-attract':
        this.renderMagnetScene(sceneDiv);
        break;
      case 'helmet-visor':
        this.renderGoldVisorScene(sceneDiv);
        break;
      case 'bone-boost':
        this.renderCalciumScene(sceneDiv);
        break;
      case 'pool-clean':
      case 'tap-purify':
        this.renderPoolScene(sceneDiv);
        break;
      case 'rocket-blast':
        this.renderRocketScene(sceneDiv);
        break;
      case 'battery-charge':
      case 'fast-charge':
        this.renderBatteryScene(sceneDiv);
        break;
      default:
        this.renderLabScannerScene(sceneDiv, element, app);
        break;
    }

    this.container.appendChild(sceneDiv);
  }

  // 1. Balloon Float Scene (Helium)
  renderBalloonScene(parent) {
    parent.innerHTML = `
      <div class="scene-card bg-slate-900 border border-slate-700 rounded-xl p-4 text-center">
        <h4 class="text-amber-400 font-bold mb-1">🎈 Helium Buoyancy Lab</h4>
        <p class="text-xs text-slate-300 mb-3">Helium is lighter than air! Pump balloons and watch them float to the ceiling.</p>
        <div id="balloon-sky" class="relative h-44 bg-gradient-to-b from-sky-900 to-sky-600 rounded-lg overflow-hidden border border-sky-500/40 flex items-end justify-center pb-2">
          <div id="balloon-cluster" class="flex gap-3 items-end transition-all duration-700">
            <div class="balloon-item transform -translate-y-2 hover:scale-110 cursor-pointer animate-bounce" style="animation-duration: 2.5s;">
              <div class="w-12 h-14 rounded-full bg-red-500 shadow-lg relative flex items-center justify-center text-white text-xs font-bold">
                He
                <div class="absolute -bottom-1 w-2 h-2 bg-red-600 rotate-45"></div>
              </div>
              <div class="w-0.5 h-10 bg-white/70 mx-auto"></div>
            </div>
            <div class="balloon-item transform -translate-y-8 hover:scale-110 cursor-pointer animate-bounce" style="animation-duration: 2.1s;">
              <div class="w-12 h-14 rounded-full bg-amber-400 shadow-lg relative flex items-center justify-center text-slate-900 text-xs font-bold">
                He
                <div class="absolute -bottom-1 w-2 h-2 bg-amber-500 rotate-45"></div>
              </div>
              <div class="w-0.5 h-12 bg-white/70 mx-auto"></div>
            </div>
            <div class="balloon-item transform -translate-y-5 hover:scale-110 cursor-pointer animate-bounce" style="animation-duration: 2.8s;">
              <div class="w-12 h-14 rounded-full bg-cyan-400 shadow-lg relative flex items-center justify-center text-slate-900 text-xs font-bold">
                He
                <div class="absolute -bottom-1 w-2 h-2 bg-cyan-500 rotate-45"></div>
              </div>
              <div class="w-0.5 h-10 bg-white/70 mx-auto"></div>
            </div>
          </div>
          <div id="balloon-cloud-1" class="absolute top-2 left-3 text-2xl opacity-70 animate-pulse">☁️</div>
          <div id="balloon-cloud-2" class="absolute top-4 right-4 text-3xl opacity-70 animate-pulse">☁️</div>
        </div>
        <div class="mt-3 flex justify-center gap-2">
          <button id="btn-pump-balloon" class="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-lg text-xs flex items-center gap-1 shadow">
            🎈 Inflate More Balloons!
          </button>
          <button id="btn-release-balloons" class="px-3 py-1.5 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-lg text-xs flex items-center gap-1 shadow">
            🚀 Release to Space!
          </button>
        </div>
      </div>
    `;

    const sky = parent.querySelector('#balloon-sky');
    const cluster = parent.querySelector('#balloon-cluster');
    const pumpBtn = parent.querySelector('#btn-pump-balloon');
    const releaseBtn = parent.querySelector('#btn-release-balloons');

    const colors = ['bg-pink-500', 'bg-emerald-400', 'bg-purple-500', 'bg-orange-400'];

    pumpBtn.addEventListener('click', () => {
      window.soundEngine?.playPop(700 + Math.random() * 300);
      const color = colors[Math.floor(Math.random() * colors.length)];
      const b = document.createElement('div');
      b.className = 'balloon-item transform hover:scale-110 cursor-pointer animate-bounce';
      b.style.animationDuration = `${2 + Math.random()}s`;
      b.innerHTML = `
        <div class="w-12 h-14 rounded-full ${color} shadow-lg relative flex items-center justify-center text-white text-xs font-bold">
          He
          <div class="absolute -bottom-1 w-2 h-2 bg-slate-800 rotate-45"></div>
        </div>
        <div class="w-0.5 h-10 bg-white/70 mx-auto"></div>
      `;
      cluster.appendChild(b);
    });

    releaseBtn.addEventListener('click', () => {
      window.soundEngine?.playSparkle();
      cluster.style.transform = 'translateY(-300px)';
      setTimeout(() => {
        cluster.style.transition = 'none';
        cluster.style.transform = 'translateY(100px)';
        setTimeout(() => {
          cluster.style.transition = 'transform 0.8s ease-out';
          cluster.style.transform = 'translateY(0)';
        }, 50);
      }, 900);
    });
  }

  // 2. Neon Glow Scene (Neon)
  renderNeonScene(parent) {
    parent.innerHTML = `
      <div class="scene-card bg-slate-900 border border-slate-700 rounded-xl p-4 text-center">
        <h4 class="text-rose-400 font-bold mb-1">🏮 Neon Night City Diner</h4>
        <p class="text-xs text-slate-300 mb-3">High voltage electricity makes trapped neon gas glow vibrant red!</p>
        <div class="relative h-44 bg-slate-950 rounded-lg overflow-hidden border border-rose-950 flex flex-col items-center justify-center p-4">
          <div id="neon-sign" class="neon-tube py-3 px-6 rounded-2xl border-2 border-rose-500 text-rose-500 font-black text-2xl tracking-widest transition-all duration-300 select-none shadow-[0_0_20px_rgba(244,63,94,0.6)]">
            ⚡ OPEN 24/7 ⚡
          </div>
          <div id="neon-sub" class="text-rose-400 text-xs font-semibold mt-2 tracking-wider opacity-90">
            POWERED BY NEON GAS
          </div>
          <div id="neon-status" class="text-[11px] text-slate-400 mt-2 font-mono">
            State: Glowing at 2,000 Volts
          </div>
        </div>
        <div class="mt-3 flex justify-center gap-3">
          <button id="btn-toggle-neon" class="px-4 py-1.5 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-lg text-xs shadow flex items-center gap-1.5">
            💡 Flip Power Switch
          </button>
        </div>
      </div>
    `;

    const sign = parent.querySelector('#neon-sign');
    const sub = parent.querySelector('#neon-sub');
    const status = parent.querySelector('#neon-status');
    const btn = parent.querySelector('#btn-toggle-neon');
    let isLit = true;

    btn.addEventListener('click', () => {
      isLit = !isLit;
      window.soundEngine?.playPop(isLit ? 880 : 330);

      if (isLit) {
        // Flicker effect before full glow
        sign.className = 'neon-tube py-3 px-6 rounded-2xl border-2 border-rose-800 text-rose-800 font-black text-2xl tracking-widest select-none';
        setTimeout(() => {
          sign.className = 'neon-tube py-3 px-6 rounded-2xl border-2 border-rose-500 text-rose-500 font-black text-2xl tracking-widest select-none shadow-[0_0_30px_rgba(244,63,94,0.9)]';
          sub.style.opacity = '1';
          status.textContent = 'State: Glowing at 2,000 Volts!';
        }, 120);
      } else {
        sign.className = 'neon-tube py-3 px-6 rounded-2xl border-2 border-slate-700 text-slate-700 font-black text-2xl tracking-widest select-none shadow-none';
        sub.style.opacity = '0.2';
        status.textContent = 'State: Turned Off (Gas Resting)';
      }
    });
  }

  // 3. Copper Circuit Scene
  renderCircuitScene(parent) {
    parent.innerHTML = `
      <div class="scene-card bg-slate-900 border border-slate-700 rounded-xl p-4 text-center">
        <h4 class="text-amber-400 font-bold mb-1">⚡ Copper Electrical Highway</h4>
        <p class="text-xs text-slate-300 mb-3">Copper atoms share electrons effortlessly, making electric current flow!</p>
        <div class="relative h-44 bg-slate-950 rounded-lg border border-amber-900/40 p-4 flex flex-col justify-between items-center overflow-hidden">
          <div class="w-full flex justify-between items-center px-4">
            <div class="flex items-center gap-1.5 bg-amber-950/70 border border-amber-500/40 px-2 py-1 rounded">
              <span class="text-lg">🔋</span>
              <span class="text-[11px] font-bold text-amber-300">9V Battery</span>
            </div>
            <div id="circuit-wire-top" class="flex-1 h-2 bg-amber-600 mx-2 rounded relative overflow-hidden shadow-[0_0_8px_#d97706]">
              <div id="electron-stream" class="absolute inset-0 bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-300 opacity-90 animate-pulse"></div>
            </div>
            <div id="lightbulb" class="w-12 h-12 rounded-full bg-amber-400 border-2 border-yellow-200 flex items-center justify-center text-xl shadow-[0_0_25px_#facc15] transition-all duration-300">
              💡
            </div>
          </div>
          <div class="w-full flex justify-between items-center px-4">
            <div class="text-xs text-amber-200 font-mono">Copper Wire (-)</div>
            <div id="circuit-wire-bottom" class="flex-1 h-2 bg-amber-600 mx-2 rounded"></div>
            <div class="text-xs text-amber-200 font-mono">Return (+)</div>
          </div>
          <div id="circuit-status" class="text-xs font-semibold text-amber-300">
            ⚡ Circuit Closed: 1,000,000,000 Electrons Flowing!
          </div>
        </div>
        <div class="mt-3 flex justify-center">
          <button id="btn-toggle-switch" class="px-4 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs shadow">
            🔌 Open / Close Switch
          </button>
        </div>
      </div>
    `;

    const stream = parent.querySelector('#electron-stream');
    const bulb = parent.querySelector('#lightbulb');
    const status = parent.querySelector('#circuit-status');
    const btn = parent.querySelector('#btn-toggle-switch');
    let isOpen = false;

    btn.addEventListener('click', () => {
      isOpen = !isOpen;
      window.soundEngine?.playPop(isOpen ? 400 : 700);

      if (isOpen) {
        stream.style.display = 'none';
        bulb.className = 'w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center text-xl shadow-none';
        status.textContent = '❌ Circuit Broken: No Electricity Flows!';
        status.className = 'text-xs font-semibold text-slate-400';
      } else {
        stream.style.display = 'block';
        bulb.className = 'w-12 h-12 rounded-full bg-amber-400 border-2 border-yellow-200 flex items-center justify-center text-xl shadow-[0_0_25px_#facc15]';
        status.textContent = '⚡ Circuit Closed: Electrons Flowing!';
        status.className = 'text-xs font-semibold text-amber-300';
      }
    });
  }

  // 4. Carbon Scene: Diamond vs Pencil Graphite
  renderCarbonScene(parent) {
    parent.innerHTML = `
      <div class="scene-card bg-slate-900 border border-slate-700 rounded-xl p-4 text-center">
        <h4 class="text-sky-300 font-bold mb-1">💎 Carbon The Shape-Shifter</h4>
        <p class="text-xs text-slate-300 mb-2">Same carbon atoms, completely different superpowers!</p>
        <div class="flex gap-2 mb-2 justify-center">
          <button id="tab-diamond" class="px-3 py-1 bg-sky-600 text-white rounded-md text-xs font-bold shadow">💎 Diamond Mode</button>
          <button id="tab-graphite" class="px-3 py-1 bg-slate-700 text-slate-200 rounded-md text-xs font-bold">✏️ Pencil Mode</button>
        </div>
        <div id="carbon-display" class="relative h-36 bg-slate-950 rounded-lg border border-slate-800 flex flex-col items-center justify-center p-3">
          <div class="text-5xl animate-pulse">💎</div>
          <div class="text-xs font-bold text-sky-300 mt-2">Unbreakable Crystal Cage</div>
          <div class="text-[11px] text-slate-400">Hardest naturally occurring mineral on Earth!</div>
        </div>
      </div>
    `;

    const dTab = parent.querySelector('#tab-diamond');
    const gTab = parent.querySelector('#tab-graphite');
    const disp = parent.querySelector('#carbon-display');

    dTab.addEventListener('click', () => {
      window.soundEngine?.playSparkle();
      dTab.className = 'px-3 py-1 bg-sky-600 text-white rounded-md text-xs font-bold shadow';
      gTab.className = 'px-3 py-1 bg-slate-700 text-slate-200 rounded-md text-xs font-bold';
      disp.innerHTML = `
        <div class="text-5xl animate-pulse">💎</div>
        <div class="text-xs font-bold text-sky-300 mt-2">Unbreakable Crystal Cage</div>
        <div class="text-[11px] text-slate-400">Hardest naturally occurring mineral on Earth!</div>
      `;
    });

    gTab.addEventListener('click', () => {
      window.soundEngine?.playPop(520);
      gTab.className = 'px-3 py-1 bg-sky-600 text-white rounded-md text-xs font-bold shadow';
      dTab.className = 'px-3 py-1 bg-slate-700 text-slate-200 rounded-md text-xs font-bold';
      disp.innerHTML = `
        <div class="text-5xl animate-bounce">✏️</div>
        <div class="text-xs font-bold text-amber-300 mt-2">Slippery Graphite Sheets</div>
        <div class="text-[11px] text-slate-400">Slides smoothly off onto drawing paper!</div>
      `;
    });
  }

  // 5. Iron Magnet Scene
  renderMagnetScene(parent) {
    parent.innerHTML = `
      <div class="scene-card bg-slate-900 border border-slate-700 rounded-xl p-4 text-center">
        <h4 class="text-red-400 font-bold mb-1">🧲 Iron Super-Magnet</h4>
        <p class="text-xs text-slate-300 mb-2">Iron has magnetic domains that snap together to pull metal objects!</p>
        <div class="relative h-40 bg-slate-950 rounded-lg border border-red-950/60 flex items-center justify-center p-3 overflow-hidden">
          <div id="magnet-icon" class="text-5xl transform -rotate-12 transition-all duration-300">🧲</div>
          <div id="paperclips" class="absolute bottom-3 flex gap-2 transition-all duration-500">
            <span class="text-2xl transform translate-y-0">📎</span>
            <span class="text-2xl transform translate-y-0">🔩</span>
            <span class="text-2xl transform translate-y-0">⚙️</span>
          </div>
        </div>
        <div class="mt-3 flex justify-center">
          <button id="btn-toggle-magnet" class="px-4 py-1.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg text-xs shadow">
            🧲 Turn Electromagnet ON / OFF
          </button>
        </div>
      </div>
    `;

    const clips = parent.querySelector('#paperclips');
    const magnet = parent.querySelector('#magnet-icon');
    const btn = parent.querySelector('#btn-toggle-magnet');
    let active = false;

    btn.addEventListener('click', () => {
      active = !active;
      window.soundEngine?.playPop(active ? 800 : 250);

      if (active) {
        clips.className = 'absolute top-12 flex gap-2 transition-all duration-300 scale-110';
        magnet.className = 'text-5xl transform scale-125 transition-all duration-300 shadow-[0_0_20px_#ef4444]';
      } else {
        clips.className = 'absolute bottom-3 flex gap-2 transition-all duration-500';
        magnet.className = 'text-5xl transform -rotate-12 transition-all duration-300';
      }
    });
  }

  // 6. Gold Astronaut Visor Scene
  renderGoldVisorScene(parent) {
    parent.innerHTML = `
      <div class="scene-card bg-slate-900 border border-slate-700 rounded-xl p-4 text-center">
        <h4 class="text-yellow-400 font-bold mb-1">👨‍🚀 Gold Cosmic Space Visor</h4>
        <p class="text-xs text-slate-300 mb-2">Astronauts wear real gold on their helmet glass to deflect blinding sunbeams!</p>
        <div class="relative h-40 bg-slate-950 rounded-lg border border-yellow-900/40 flex items-center justify-around p-3 overflow-hidden">
          <div class="text-4xl animate-spin" style="animation-duration: 20s;">☀️</div>
          <div id="sun-rays" class="h-1 bg-yellow-400 flex-1 mx-3 shadow-[0_0_10px_#facc15] transition-all duration-300"></div>
          <div id="helmet" class="w-16 h-16 rounded-full bg-slate-800 border-4 border-yellow-400 flex items-center justify-center text-3xl shadow-[0_0_20px_#facc15]">
            👨‍🚀
          </div>
        </div>
        <div class="mt-3 flex justify-center">
          <button id="btn-gold-visor" class="px-4 py-1.5 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold rounded-lg text-xs shadow">
            🛡️ Toggle Gold Mirror Shield
          </button>
        </div>
      </div>
    `;

    const helmet = parent.querySelector('#helmet');
    const rays = parent.querySelector('#sun-rays');
    const btn = parent.querySelector('#btn-gold-visor');
    let shielded = true;

    btn.addEventListener('click', () => {
      shielded = !shielded;
      window.soundEngine?.playPop(shielded ? 900 : 350);

      if (shielded) {
        helmet.className = 'w-16 h-16 rounded-full bg-slate-800 border-4 border-yellow-400 flex items-center justify-center text-3xl shadow-[0_0_25px_#facc15]';
        rays.className = 'h-1 bg-yellow-400 flex-1 mx-3 shadow-[0_0_10px_#facc15]';
      } else {
        helmet.className = 'w-16 h-16 rounded-full bg-slate-800 border-4 border-slate-600 flex items-center justify-center text-3xl shadow-none';
        rays.className = 'h-1 bg-red-500 flex-1 mx-3 shadow-[0_0_10px_#ef4444]';
      }
    });
  }

  // 7. Calcium Bone Booster Scene
  renderCalciumScene(parent) {
    parent.innerHTML = `
      <div class="scene-card bg-slate-900 border border-slate-700 rounded-xl p-4 text-center">
        <h4 class="text-emerald-400 font-bold mb-1">🦴 Calcium Bone Super-Fortress</h4>
        <p class="text-xs text-slate-300 mb-2">99% of your body's calcium builds super-strong teeth and bones!</p>
        <div class="relative h-40 bg-slate-950 rounded-lg border border-emerald-900/40 flex flex-col items-center justify-center p-3">
          <div id="skel-icon" class="text-5xl transform transition-all duration-300">🦴</div>
          <div id="bone-power" class="w-3/4 bg-slate-800 h-3 rounded-full mt-3 overflow-hidden border border-slate-700">
            <div id="bone-bar" class="bg-gradient-to-r from-emerald-400 to-teal-300 h-full w-3/5 transition-all duration-500"></div>
          </div>
          <div id="bone-text" class="text-[11px] text-emerald-300 font-mono mt-1">Bone Strength: 60%</div>
        </div>
        <div class="mt-3 flex justify-center">
          <button id="btn-drink-milk" class="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg text-xs shadow flex items-center gap-1">
            🥛 Drink Fresh Milk & Boost Bones!
          </button>
        </div>
      </div>
    `;

    const skel = parent.querySelector('#skel-icon');
    const bar = parent.querySelector('#bone-bar');
    const text = parent.querySelector('#bone-text');
    const btn = parent.querySelector('#btn-drink-milk');
    let level = 60;

    btn.addEventListener('click', () => {
      level = Math.min(100, level + 20);
      window.soundEngine?.playSuccess();
      bar.style.width = `${level}%`;
      text.textContent = `Bone Strength: ${level}%! Super Tough!`;
      skel.className = 'text-5xl transform scale-125 transition-all duration-300 text-emerald-300';
      setTimeout(() => {
        skel.className = 'text-5xl transform scale-100 transition-all duration-300';
      }, 300);
      if (level === 100) {
        setTimeout(() => { level = 40; }, 2000);
      }
    });
  }

  // 8. Chlorine Swimming Pool Scene
  renderPoolScene(parent) {
    parent.innerHTML = `
      <div class="scene-card bg-slate-900 border border-slate-700 rounded-xl p-4 text-center">
        <h4 class="text-teal-400 font-bold mb-1">🏊 Chlorine Pool Clean Machine</h4>
        <p class="text-xs text-slate-300 mb-2">Chlorine purifies pool water so kids swim safely all summer!</p>
        <div id="pool-box" class="relative h-40 bg-teal-900 rounded-lg border border-teal-500/50 flex flex-col items-center justify-center p-3 transition-all duration-700 overflow-hidden">
          <div id="germs" class="flex gap-4 text-2xl transition-all duration-500">
            <span class="animate-bounce">👾</span>
            <span class="animate-spin" style="animation-duration: 4s;">🦠</span>
            <span class="animate-bounce" style="animation-duration: 1.5s;">👾</span>
          </div>
          <div id="swimmer" class="text-3xl mt-2">🏊‍♂️</div>
        </div>
        <div class="mt-3 flex justify-center">
          <button id="btn-purify-pool" class="px-4 py-1.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-lg text-xs shadow">
            ✨ Add Chlorine & Zap Germs!
          </button>
        </div>
      </div>
    `;

    const pool = parent.querySelector('#pool-box');
    const germs = parent.querySelector('#germs');
    const btn = parent.querySelector('#btn-purify-pool');

    btn.addEventListener('click', () => {
      window.soundEngine?.playSuccess();
      germs.style.opacity = '0';
      germs.style.transform = 'scale(0.1)';
      pool.className = 'relative h-40 bg-cyan-400/80 rounded-lg border border-cyan-300 flex flex-col items-center justify-center p-3 transition-all duration-700 shadow-[0_0_25px_#22d3ee]';
      setTimeout(() => {
        germs.style.opacity = '1';
        germs.style.transform = 'scale(1)';
        pool.className = 'relative h-40 bg-teal-900 rounded-lg border border-teal-500/50 flex flex-col items-center justify-center p-3 transition-all duration-700';
      }, 3500);
    });
  }

  // 9. Rocket Blast Scene
  renderRocketScene(parent) {
    parent.innerHTML = `
      <div class="scene-card bg-slate-900 border border-slate-700 rounded-xl p-4 text-center">
        <h4 class="text-sky-400 font-bold mb-1">🚀 Hydrogen Rocket Launchpad</h4>
        <p class="text-xs text-slate-300 mb-2">Liquid Hydrogen + Oxygen produces the gigantic fireball thrust!</p>
        <div class="relative h-40 bg-slate-950 rounded-lg border border-sky-900/40 flex flex-col items-center justify-center p-3 overflow-hidden">
          <div id="rocket" class="text-5xl transform transition-all duration-700">🚀</div>
          <div id="exhaust" class="text-2xl mt-1 opacity-0 transition-opacity duration-300">🔥💨</div>
        </div>
        <div class="mt-3 flex justify-center">
          <button id="btn-launch-rocket" class="px-4 py-1.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-lg text-xs shadow">
            🔥 Ignite Liquid Hydrogen Engines!
          </button>
        </div>
      </div>
    `;

    const rocket = parent.querySelector('#rocket');
    const exhaust = parent.querySelector('#exhaust');
    const btn = parent.querySelector('#btn-launch-rocket');

    btn.addEventListener('click', () => {
      window.soundEngine?.playSuccess();
      exhaust.style.opacity = '1';
      setTimeout(() => {
        rocket.style.transform = 'translateY(-200px) scale(0.6)';
        setTimeout(() => {
          rocket.style.transition = 'none';
          rocket.style.transform = 'translateY(150px) scale(0.6)';
          exhaust.style.opacity = '0';
          setTimeout(() => {
            rocket.style.transition = 'transform 0.6s ease-out';
            rocket.style.transform = 'translateY(0) scale(1)';
          }, 100);
        }, 800);
      }, 300);
    });
  }

  // 10. Battery Scene
  renderBatteryScene(parent) {
    parent.innerHTML = `
      <div class="scene-card bg-slate-900 border border-slate-700 rounded-xl p-4 text-center">
        <h4 class="text-pink-400 font-bold mb-1">🔋 High-Capacity Battery Cell</h4>
        <p class="text-xs text-slate-300 mb-2">Ions shuttle back and forth to power laptops, tablets, and gaming gear!</p>
        <div class="relative h-40 bg-slate-950 rounded-lg border border-pink-900/40 flex flex-col items-center justify-center p-3">
          <div class="flex items-center gap-2">
            <div class="w-48 h-16 bg-slate-800 border-2 border-pink-500 rounded-xl p-1.5 relative flex items-center">
              <div id="charge-bar" class="h-full bg-gradient-to-r from-pink-500 to-rose-400 rounded-lg transition-all duration-500 w-1/4 shadow-[0_0_15px_#f43f5e]"></div>
              <div class="absolute inset-0 flex items-center justify-center font-bold text-xs text-white drop-shadow">
                <span id="charge-pct">25% Charged</span>
              </div>
            </div>
            <div class="w-3 h-6 bg-pink-500 rounded-r"></div>
          </div>
        </div>
        <div class="mt-3 flex justify-center">
          <button id="btn-charge-cell" class="px-4 py-1.5 bg-pink-500 hover:bg-pink-400 text-white font-bold rounded-lg text-xs shadow flex items-center gap-1">
            ⚡ Quick-Charge Battery!
          </button>
        </div>
      </div>
    `;

    const bar = parent.querySelector('#charge-bar');
    const pct = parent.querySelector('#charge-pct');
    const btn = parent.querySelector('#btn-charge-cell');
    let charge = 25;

    btn.addEventListener('click', () => {
      charge = Math.min(100, charge + 25);
      window.soundEngine?.playPop(500 + charge * 5);
      bar.style.width = `${charge}%`;
      pct.textContent = `${charge}% Charged! ⚡`;
      if (charge === 100) {
        window.soundEngine?.playSuccess();
        setTimeout(() => { charge = 10; }, 2500);
      }
    });
  }

  // 11. Generic High-Tech Lab Scanner Scene
  renderLabScannerScene(parent, element, app) {
    parent.innerHTML = `
      <div class="scene-card bg-slate-900 border border-slate-700 rounded-xl p-4 text-center">
        <h4 class="text-indigo-400 font-bold mb-1">🔬 ${app.title}</h4>
        <p class="text-xs text-slate-300 mb-2">${app.desc}</p>
        <div class="relative h-40 bg-slate-950 rounded-lg border border-indigo-900/40 flex flex-col items-center justify-center p-3 overflow-hidden">
          <div id="scan-target" class="text-5xl transform transition-transform duration-300 hover:scale-125 cursor-pointer">
            ${app.icon || element.character.avatarEmoji || '⚛️'}
          </div>
          <div id="scanner-laser" class="absolute w-full h-0.5 bg-cyan-400 shadow-[0_0_12px_#22d3ee] top-1/2 animate-bounce"></div>
          <div class="text-[11px] text-indigo-300 mt-2 font-mono">Laser Particle Spectrum: Active</div>
        </div>
        <div class="mt-3 flex justify-center">
          <button id="btn-scan-action" class="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg text-xs shadow flex items-center gap-1">
            🔍 Run High-Energy Pulse!
          </button>
        </div>
      </div>
    `;

    const target = parent.querySelector('#scan-target');
    const btn = parent.querySelector('#btn-scan-action');

    btn.addEventListener('click', () => {
      window.soundEngine?.playAtomHum();
      target.style.transform = 'scale(1.4) rotate(15deg)';
      setTimeout(() => {
        target.style.transform = 'scale(1) rotate(0deg)';
      }, 400);
    });
  }
}

window.ApplicationSceneManager = ApplicationSceneManager;
