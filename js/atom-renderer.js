// Interactive Bohr Atom Model Simulator with Canvas Animation
// Renders nucleus with protons and neutrons, and orbiting glowing electrons

class AtomRenderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.element = null;
    this.animationId = null;
    this.time = 0;
    this.isPaused = false;
    this.speed = 1.0;
    this.nucleusParticles = [];
    this.hoveredShell = null;

    this.initCanvas();
    window.addEventListener('resize', () => this.resize());
  }

  initCanvas() {
    this.resize();
  }

  resize() {
    if (!this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = (rect.width || 360) * dpr;
    this.canvas.height = (rect.height || 360) * dpr;
    this.ctx.scale(dpr, dpr);
    this.width = rect.width || 360;
    this.height = rect.height || 360;
  }

  setElement(elem) {
    this.element = elem;
    this.time = 0;
    this.generateNucleusParticles();
    if (!this.animationId) {
      this.animate();
    }
  }

  generateNucleusParticles() {
    if (!this.element) return;
    this.nucleusParticles = [];
    const protons = this.element.number;
    const neutrons = Math.max(0, Math.round(this.element.mass - protons));
    
    // Cap visual particles in nucleus for readability and performance (up to 32 balls)
    const displayProtons = Math.min(protons, 18);
    const displayNeutrons = Math.min(neutrons, 18);
    const total = displayProtons + displayNeutrons;

    for (let i = 0; i < total; i++) {
      const isProton = i < displayProtons;
      const angle = (i / total) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
      const distance = (Math.sqrt(Math.random()) * 16) + (total > 15 ? 4 : 0);
      this.nucleusParticles.push({
        isProton,
        baseX: Math.cos(angle) * distance,
        baseY: Math.sin(angle) * distance,
        r: 4.5,
        phase: Math.random() * Math.PI * 2,
        jitterSpeed: 1 + Math.random() * 2
      });
    }
  }

  start() {
    if (!this.animationId) {
      this.animate();
    }
  }

  stop() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());
    if (this.isPaused) return;

    this.time += 0.015 * this.speed;
    this.render();
  }

  render() {
    if (!this.ctx || !this.element) return;

    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    const cx = w / 2;
    const cy = h / 2;

    ctx.clearRect(0, 0, w, h);

    // Deep cosmic background ambient glow
    const bgGrad = ctx.createRadialGradient(cx, cy, 20, cx, cy, Math.max(w, h) / 1.6);
    bgGrad.addColorStop(0, 'rgba(56, 189, 248, 0.08)');
    bgGrad.addColorStop(0.5, 'rgba(99, 102, 241, 0.03)');
    bgGrad.addColorStop(1, 'rgba(15, 23, 42, 0)');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    const shells = this.element.shells || [1];
    const numShells = shells.length;
    const maxRadius = Math.min(cx, cy) - 28;
    const minRadius = 40;
    const radiusStep = (maxRadius - minRadius) / Math.max(numShells, 1);

    // 1. Draw Orbital Rings
    shells.forEach((electronCount, shellIdx) => {
      const radius = minRadius + (shellIdx * radiusStep) + 10;
      
      // Orbit Ring Path
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = (this.hoveredShell === shellIdx) 
        ? 'rgba(56, 189, 248, 0.7)' 
        : 'rgba(255, 255, 255, 0.16)';
      ctx.lineWidth = (this.hoveredShell === shellIdx) ? 2 : 1.2;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Shell letter indicator (K, L, M, N, O, P, Q)
      const shellLetters = ['K', 'L', 'M', 'N', 'O', 'P', 'Q'];
      const letter = shellLetters[shellIdx] || `S${shellIdx + 1}`;
      ctx.fillStyle = 'rgba(148, 163, 184, 0.7)';
      ctx.font = '10px sans-serif';
      ctx.fillText(letter, cx + radius - 6, cy - 5);

      // 2. Draw Orbiting Electrons
      const shellSpeed = (1 / (shellIdx + 1)) * 1.5;
      for (let e = 0; e < electronCount; e++) {
        const baseAngle = (e / electronCount) * Math.PI * 2;
        const currentAngle = baseAngle + (this.time * shellSpeed);
        const ex = cx + Math.cos(currentAngle) * radius;
        const ey = cy + Math.sin(currentAngle) * radius;

        // Electron trail/shimmer
        ctx.beginPath();
        ctx.arc(ex, ey, 7, 0, Math.PI * 2);
        const glowGrad = ctx.createRadialGradient(ex, ey, 1, ex, ey, 7);
        glowGrad.addColorStop(0, '#fef08a');
        glowGrad.addColorStop(0.5, 'rgba(234, 179, 8, 0.4)');
        glowGrad.addColorStop(1, 'rgba(234, 179, 8, 0)');
        ctx.fillStyle = glowGrad;
        ctx.fill();

        // Electron core
        ctx.beginPath();
        ctx.arc(ex, ey, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = '#fde047';
        ctx.shadowColor = '#eab308';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    });

    // 3. Draw Pulsing Nucleus Halo
    const pulse = Math.sin(this.time * 3) * 2;
    const nucleusRadius = 26 + pulse;
    const nucGrad = ctx.createRadialGradient(cx, cy, 2, cx, cy, nucleusRadius + 6);
    nucGrad.addColorStop(0, 'rgba(239, 68, 68, 0.4)');
    nucGrad.addColorStop(0.6, 'rgba(59, 130, 246, 0.2)');
    nucGrad.addColorStop(1, 'rgba(239, 68, 68, 0)');
    ctx.beginPath();
    ctx.arc(cx, cy, nucleusRadius + 6, 0, Math.PI * 2);
    ctx.fillStyle = nucGrad;
    ctx.fill();

    // 4. Draw Nucleus Protons and Neutrons particles
    this.nucleusParticles.forEach(p => {
      const jitterX = Math.sin(this.time * p.jitterSpeed + p.phase) * 1.2;
      const jitterY = Math.cos(this.time * p.jitterSpeed + p.phase) * 1.2;
      const px = cx + p.baseX + jitterX;
      const py = cy + p.baseY + jitterY;

      ctx.beginPath();
      ctx.arc(px, py, p.r, 0, Math.PI * 2);
      
      if (p.isProton) {
        // Proton (Red gradient with + sign)
        const pGrad = ctx.createRadialGradient(px - 1, py - 1, 1, px, py, p.r);
        pGrad.addColorStop(0, '#f87171');
        pGrad.addColorStop(1, '#dc2626');
        ctx.fillStyle = pGrad;
      } else {
        // Neutron (Blue gradient)
        const nGrad = ctx.createRadialGradient(px - 1, py - 1, 1, px, py, p.r);
        nGrad.addColorStop(0, '#60a5fa');
        nGrad.addColorStop(1, '#2563eb');
        ctx.fillStyle = nGrad;
      }
      ctx.fill();
    });

    // 5. Nucleus Center Badge
    ctx.beginPath();
    ctx.arc(cx, cy, 14, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 1.5;
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.element.symbol, cx, cy);
  }
}

window.AtomRenderer = AtomRenderer;
