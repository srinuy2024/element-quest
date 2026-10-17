// Main Application Orchestrator for ElementQuest
document.addEventListener('DOMContentLoaded', () => {
  const elements = window.ALL_ELEMENTS || [];
  const categories = window.CATEGORIES || {};

  // DOM Elements
  const tableContainer = document.getElementById('periodic-table');
  const searchInput = document.getElementById('search-input');
  const categoryFilters = document.getElementById('category-filters');
  const stateFilters = document.getElementById('state-filters');
  const modalBackdrop = document.getElementById('element-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalPrevBtn = document.getElementById('modal-prev-btn');
  const modalNextBtn = document.getElementById('modal-next-btn');

  // Sound & Action Buttons
  const btnToggleSound = document.getElementById('btn-toggle-sound');
  const btnToggleSpeech = document.getElementById('btn-toggle-speech');
  const btnToggleFullscreen = document.getElementById('btn-toggle-fullscreen');
  const btnClearSearch = document.getElementById('btn-clear-search');
  const brandLogoBtn = document.getElementById('brand-logo-btn');

  // Mobile Action Sheet Elements
  const actionSheetBackdrop = document.getElementById('element-action-sheet');
  const sheetCloseBtn = document.getElementById('sheet-close-btn');
  const sheetPrevBtn = document.getElementById('sheet-prev-btn');
  const sheetNextBtn = document.getElementById('sheet-next-btn');
  const btnSheetSpeak = document.getElementById('btn-sheet-speak');
  const btnSheetShowcase = document.getElementById('btn-sheet-showcase');
  const btnSheetMolecule = document.getElementById('btn-sheet-molecule');
  const btnSheetThermal = document.getElementById('btn-sheet-thermal');

  // Mobile Bottom Navigation Bar & Games Sheet Elements
  const mobileNavButtons = document.querySelectorAll('.mobile-nav-btn');
  const mobileGamesSheet = document.getElementById('mobile-games-sheet');
  const btnCloseGamesSheet = document.getElementById('btn-close-games-sheet');
  const mobileGamePickButtons = document.querySelectorAll('.mobile-game-pick-btn');

  // Mobile Header More Menu Elements
  const btnMobileMore = document.getElementById('btn-mobile-more');
  const mobileMoreDropdown = document.getElementById('mobile-more-dropdown');
  const btnMobileDiploma = document.getElementById('btn-mobile-diploma');
  const btnMobileHelp = document.getElementById('btn-mobile-help');
  const btnMobileFullscreen = document.getElementById('btn-mobile-fullscreen');

  // Navigation Mode Tabs
  const modeTabs = document.querySelectorAll('.mode-tab-btn');
  const explorerView = document.getElementById('explorer-view');
  const gameModeView = document.getElementById('game-mode-view');

  // View Mode & Zoom Controls (Grid vs Card Deck)
  const viewModeGridBtn = document.getElementById('view-mode-grid');
  const viewModeCardsBtn = document.getElementById('view-mode-cards');
  const gridTableWrapper = document.getElementById('grid-table-wrapper');
  const cardDeckView = document.getElementById('card-deck-view');
  const cardDeckContainer = document.getElementById('card-deck');
  const gridZoomToolbar = document.getElementById('grid-zoom-toolbar');
  const tableZoomContainer = document.getElementById('table-zoom-container');
  const zoomLevelText = document.getElementById('zoom-level-text');
  const btnToggleAutofit = document.getElementById('btn-toggle-autofit');
  const autofitBtnText = document.getElementById('autofit-btn-text');
  const btnZoomIn = document.getElementById('btn-zoom-in');
  const btnZoomOut = document.getElementById('btn-zoom-out');
  const btnZoomReset = document.getElementById('btn-zoom-reset');
  const btnSwitchToCards = document.getElementById('btn-switch-to-cards');
  const mobileOrientationHint = document.getElementById('mobile-orientation-hint');

  // Live Selection Inspector Banner Elements
  const tableQuickBanner = document.getElementById('table-quick-banner');
  const bannerElemAvatar = document.getElementById('banner-elem-avatar');
  const bannerElemNumber = document.getElementById('banner-elem-number');
  const bannerElemSymbol = document.getElementById('banner-elem-symbol');
  const bannerElemName = document.getElementById('banner-elem-name');
  const bannerElemSuperpower = document.getElementById('banner-elem-superpower');
  const btnBannerSpeak = document.getElementById('btn-banner-speak');
  const btnBannerLab = document.getElementById('btn-banner-lab');
  const btnBannerAction = document.getElementById('btn-banner-action');

  let currentElementIndex = 0;
  let activeCategoryFilter = 'all';
  let activeStateFilter = 'all';
  let modalAtomRenderer = null;
  let sceneManager = null;
  let currentZoom = 1.0;
  let isAutoFit = true;
  const BASE_TABLE_WIDTH = 960;
  const BASE_TABLE_HEIGHT = 642;

  // Initialize Game Manager
  const gameManager = new window.GameManager(elements, (elem) => {
    openElementModal(elem.number);
  });
  gameManager.updateScoreDisplay();

  // Fullscreen Toggle
  if (btnToggleFullscreen) {
    btnToggleFullscreen.addEventListener('click', () => {
      window.soundEngine?.playPop(620);
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
      }
    });
  }

  // Initialize Sound Engine state in UI
  if (btnToggleSound) {
    btnToggleSound.textContent = window.soundEngine.muted ? '🔇' : '🔊';
    btnToggleSound.addEventListener('click', () => {
      const isMuted = window.soundEngine.toggleMute();
      btnToggleSound.textContent = isMuted ? '🔇' : '🔊';
    });
  }

  if (btnToggleSpeech) {
    btnToggleSpeech.textContent = window.soundEngine.speechEnabled ? '🗣️' : '🤐';
    btnToggleSpeech.addEventListener('click', () => {
      const isEnabled = window.soundEngine.toggleSpeech();
      btnToggleSpeech.textContent = isEnabled ? '🗣️' : '🤐';
    });
  }

  // Clear Search Input Handler
  if (btnClearSearch && searchInput) {
    btnClearSearch.addEventListener('click', () => {
      searchInput.value = '';
      btnClearSearch.classList.add('hidden');
      applyFilters();
      window.soundEngine?.playPop(450);
    });
  }

  // Responsive Table Scaling Engine (Calculates mathematical scale for 100% viewport fit with ZERO horizontal scroll)
  function applyTableScaling() {
    if (!gridTableWrapper || !tableZoomContainer) return;

    // Dynamically obtain unscaled height of periodic table with safe fallback
    const unscaledHeight = Math.max(642, tableContainer ? (tableContainer.scrollHeight || tableContainer.offsetHeight || 642) : 642);

    if (isAutoFit) {
      gridTableWrapper.classList.remove('scrollable');
      const containerWidth = gridTableWrapper.clientWidth || (window.innerWidth - 32);
      // Mathematical scale to fit exactly 100% of container width without scroll
      const scale = Math.min(1.0, Math.max(0.28, (containerWidth - 8) / BASE_TABLE_WIDTH));
      currentZoom = scale;

      if (scale >= 0.98) {
        // Desktop / large screens: natural layout, centered, zero height restriction
        tableZoomContainer.style.transform = 'none';
        tableZoomContainer.style.transformOrigin = 'top center';
        tableZoomContainer.style.margin = '0 auto';
        gridTableWrapper.style.height = 'auto';
        gridTableWrapper.style.overflowX = 'hidden';
      } else {
        // Scaled mobile/tablet view: scale down cleanly to fit viewport width
        tableZoomContainer.style.transform = `scale(${scale})`;
        tableZoomContainer.style.transformOrigin = 'top left';
        tableZoomContainer.style.margin = '0';
        gridTableWrapper.style.height = `${Math.ceil(unscaledHeight * scale + 20)}px`;
        gridTableWrapper.style.overflowX = 'hidden';
      }

      if (zoomLevelText) zoomLevelText.textContent = `${Math.round(scale * 100)}%`;
      if (autofitBtnText) autofitBtnText.textContent = `Auto-Fit (${Math.round(scale * 100)}%)`;
      if (btnToggleAutofit) {
        btnToggleAutofit.className = 'px-2.5 py-1 bg-indigo-600 text-white rounded-lg text-xs font-bold transition flex items-center gap-1 shadow';
      }
    } else {
      gridTableWrapper.classList.add('scrollable');
      tableZoomContainer.style.transform = `scale(${currentZoom})`;
      tableZoomContainer.style.transformOrigin = 'top left';
      tableZoomContainer.style.margin = '0';
      gridTableWrapper.style.height = 'auto';
      gridTableWrapper.style.minHeight = `${Math.ceil(unscaledHeight * currentZoom + 30)}px`;

      if (zoomLevelText) zoomLevelText.textContent = `${Math.round(currentZoom * 100)}%`;
      if (autofitBtnText) autofitBtnText.textContent = 'Auto-Fit (Off)';
      if (btnToggleAutofit) {
        btnToggleAutofit.className = 'px-2.5 py-1 bg-slate-800 text-slate-300 hover:text-white rounded-lg text-xs font-bold transition flex items-center gap-1 shadow';
      }
    }
  }

  // Toggle Auto-Fit vs Manual Pan/Zoom
  if (btnToggleAutofit) {
    btnToggleAutofit.addEventListener('click', () => {
      window.soundEngine?.playPop(550);
      isAutoFit = !isAutoFit;
      applyTableScaling();
    });
  }

  // Manual Zoom In (Switches to full scrollable mode)
  if (btnZoomIn) {
    btnZoomIn.addEventListener('click', () => {
      isAutoFit = false;
      currentZoom = Math.min(1.8, currentZoom + 0.15);
      applyTableScaling();
      window.soundEngine?.playPop(550);
    });
  }

  // Manual Zoom Out
  if (btnZoomOut) {
    btnZoomOut.addEventListener('click', () => {
      isAutoFit = false;
      currentZoom = Math.max(0.35, currentZoom - 0.15);
      applyTableScaling();
      window.soundEngine?.playPop(450);
    });
  }

  // Reset Zoom to Full Size (100% 1:1)
  if (btnZoomReset) {
    btnZoomReset.addEventListener('click', () => {
      isAutoFit = false;
      currentZoom = 1.0;
      applyTableScaling();
      window.soundEngine?.playPop(500);
    });
  }

  // Real-Time Viewport Resize & Orientation Handlers
  window.addEventListener('resize', () => {
    if (isAutoFit && !gridTableWrapper?.classList.contains('hidden')) {
      applyTableScaling();
    }
  });

  window.addEventListener('orientationchange', () => {
    setTimeout(() => {
      if (isAutoFit && !gridTableWrapper?.classList.contains('hidden')) {
        applyTableScaling();
      }
    }, 200);
  });

  // Live Selection Quick Banner Handler (Enlarged element card above mini-table)
  function showQuickBanner(elem) {
    if (!tableQuickBanner) return;
    if (bannerElemAvatar) bannerElemAvatar.textContent = elem.character.avatarEmoji || '⚛️';
    if (bannerElemNumber) bannerElemNumber.textContent = `#${elem.number}`;
    if (bannerElemSymbol) bannerElemSymbol.textContent = elem.symbol;
    if (bannerElemName) bannerElemName.textContent = elem.name;
    if (bannerElemSuperpower) bannerElemSuperpower.textContent = elem.character.superpower;

    if (btnBannerSpeak) {
      btnBannerSpeak.onclick = (e) => {
        e.stopPropagation();
        window.soundEngine?.playPop(620);
        window.soundEngine?.speakElement(elem);
      };
    }

    if (btnBannerLab) {
      btnBannerLab.onclick = (e) => {
        e.stopPropagation();
        goToMoleculeLab(elem);
      };
    }

    if (btnBannerAction) {
      btnBannerAction.onclick = (e) => {
        e.stopPropagation();
        if (window.innerWidth < 768) {
          openActionSheet(elem.number);
        } else {
          openElementModal(elem.number);
        }
      };
    }

    tableQuickBanner.classList.remove('hidden');
    tableQuickBanner.classList.add('flex');
  }

  // View Mode Switcher (Grid vs Cards)
  function switchViewMode(mode) {
    window.soundEngine?.playPop(520);
    if (mode === 'grid') {
      viewModeGridBtn.className = 'view-toggle-btn px-3 py-1.5 rounded-lg text-xs font-black bg-indigo-600 text-white shadow flex items-center gap-1.5 transition';
      viewModeCardsBtn.className = 'view-toggle-btn px-3 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1.5 transition';
      gridTableWrapper.classList.remove('hidden');
      cardDeckView.classList.add('hidden');
      if (gridZoomToolbar) gridZoomToolbar.classList.remove('hidden');
      // Trigger smooth autofit recalculation
      setTimeout(() => {
        applyTableScaling();
      }, 50);
    } else {
      viewModeCardsBtn.className = 'view-toggle-btn px-3 py-1.5 rounded-lg text-xs font-black bg-indigo-600 text-white shadow flex items-center gap-1.5 transition';
      viewModeGridBtn.className = 'view-toggle-btn px-3 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1.5 transition';
      gridTableWrapper.classList.add('hidden');
      cardDeckView.classList.remove('hidden');
      if (gridZoomToolbar) gridZoomToolbar.classList.add('hidden');
      if (tableQuickBanner) tableQuickBanner.classList.add('hidden');
      if (mobileOrientationHint) mobileOrientationHint.style.display = 'none';
      renderCardDeck();
    }
  }

  if (viewModeGridBtn) viewModeGridBtn.addEventListener('click', () => switchViewMode('grid'));
  if (viewModeCardsBtn) viewModeCardsBtn.addEventListener('click', () => switchViewMode('cards'));
  if (btnSwitchToCards) btnSwitchToCards.addEventListener('click', () => switchViewMode('cards'));

  // Render Periodic Table Grid
  function renderPeriodicTable() {
    if (!tableContainer) return;
    tableContainer.innerHTML = '';

    // Create a 2D map for coordinates
    elements.forEach(elem => {
      const tile = document.createElement('div');
      const catClass = categories[elem.category]?.bgClass || 'cat-transition';
      const isDiscovered = gameManager.discoveredElements.has(elem.number);

      tile.className = `element-tile ${catClass} ${isDiscovered ? 'discovered' : ''}`;
      tile.dataset.number = elem.number;
      tile.dataset.category = elem.category;
      tile.dataset.phase = elem.phase;
      tile.dataset.name = elem.name.toLowerCase();
      tile.dataset.symbol = elem.symbol.toLowerCase();

      // Determine Grid Row & Column
      let row = elem.period;
      let col = elem.group;

      // Handle Lanthanides (57-71) & Actinides (89-103)
      if (elem.number >= 57 && elem.number <= 71) {
        row = 9;
        col = elem.number - 57 + 4; // place in cols 4 to 18
      } else if (elem.number >= 89 && elem.number <= 103) {
        row = 10;
        col = elem.number - 89 + 4; // place in cols 4 to 18
      }

      tile.style.gridRowStart = row;
      tile.style.gridColumnStart = col;

      tile.innerHTML = `
        <div class="flex justify-between items-start leading-none">
          <span class="text-[9px] font-mono opacity-80">${elem.number}</span>
          <span class="text-[11px]" title="${elem.character.title}">${elem.character.avatarEmoji || '⚛️'}</span>
        </div>
        <div class="text-center my-0.5">
          <span class="text-sm font-black tracking-tight leading-none">${elem.symbol}</span>
        </div>
        <div class="text-center leading-none">
          <div class="text-[8.5px] font-semibold truncate leading-tight">${elem.name}</div>
          <div class="text-[7.5px] font-mono opacity-70 truncate leading-tight">${typeof elem.mass === 'number' ? elem.mass.toFixed(1) : elem.mass}</div>
        </div>
      `;

      tile.addEventListener('click', () => {
        window.soundEngine?.playPop(500 + elem.number * 4);
        showQuickBanner(elem);
        if (window.innerWidth < 768) {
          openActionSheet(elem.number);
        } else {
          openElementModal(elem.number);
        }
      });

      tableContainer.appendChild(tile);
    });

    // Add Lanthanide & Actinide placeholder indicators in main table
    const lanthPlaceholder = document.createElement('div');
    lanthPlaceholder.className = 'element-tile cat-lanthanide flex flex-col items-center justify-center text-center p-0.5 cursor-pointer hover:scale-105 transition';
    lanthPlaceholder.style.gridRowStart = 6;
    lanthPlaceholder.style.gridColumnStart = 3;
    lanthPlaceholder.title = 'Click to explore Lanthanide series (57-71)';
    lanthPlaceholder.innerHTML = '<span class="text-[9px] font-mono opacity-80">57-71</span><span class="text-xs font-black">La-Lu</span><span class="text-[7px] opacity-75 truncate">Lanthanides</span>';
    lanthPlaceholder.addEventListener('click', () => {
      window.soundEngine?.playPop(520);
      window.soundEngine?.speak('Lanthanide Rare Earth series, elements 57 through 71.');
      const lanthBtn = document.querySelector('[data-category="lanthanide"]');
      if (lanthBtn) lanthBtn.click();
    });
    tableContainer.appendChild(lanthPlaceholder);

    const actPlaceholder = document.createElement('div');
    actPlaceholder.className = 'element-tile cat-actinide flex flex-col items-center justify-center text-center p-0.5 cursor-pointer hover:scale-105 transition';
    actPlaceholder.style.gridRowStart = 7;
    actPlaceholder.style.gridColumnStart = 3;
    actPlaceholder.title = 'Click to explore Actinide series (89-103)';
    actPlaceholder.innerHTML = '<span class="text-[9px] font-mono opacity-80">89-103</span><span class="text-xs font-black">Ac-Lr</span><span class="text-[7px] opacity-75 truncate">Actinides</span>';
    actPlaceholder.addEventListener('click', () => {
      window.soundEngine?.playPop(520);
      window.soundEngine?.speak('Actinide Radioactive series, elements 89 through 103.');
      const actBtn = document.querySelector('[data-category="actinide"]');
      if (actBtn) actBtn.click();
    });
    tableContainer.appendChild(actPlaceholder);

    // Lanthanides & Actinides series row headers in cols 1-3
    const lanthLabel = document.createElement('div');
    lanthLabel.className = 'flex items-center justify-end pr-2 text-[10px] font-black text-purple-300 uppercase tracking-wider select-none cursor-pointer';
    lanthLabel.style.gridRowStart = 9;
    lanthLabel.style.gridColumn = '1 / span 3';
    lanthLabel.innerHTML = '<span>Lanthanides ➔</span>';
    lanthLabel.addEventListener('click', () => {
      const lanthBtn = document.querySelector('[data-category="lanthanide"]');
      if (lanthBtn) lanthBtn.click();
    });
    tableContainer.appendChild(lanthLabel);

    const actLabel = document.createElement('div');
    actLabel.className = 'flex items-center justify-end pr-2 text-[10px] font-black text-rose-300 uppercase tracking-wider select-none cursor-pointer';
    actLabel.style.gridRowStart = 10;
    actLabel.style.gridColumn = '1 / span 3';
    actLabel.innerHTML = '<span>Actinides ➔</span>';
    actLabel.addEventListener('click', () => {
      const actBtn = document.querySelector('[data-category="actinide"]');
      if (actBtn) actBtn.click();
    });
    tableContainer.appendChild(actLabel);
  }

  // Render Mobile & Kid-Friendly Card Deck View
  function renderCardDeck() {
    if (!cardDeckContainer) return;
    cardDeckContainer.innerHTML = '';

    elements.forEach(elem => {
      const card = document.createElement('div');
      const catClass = categories[elem.category]?.bgClass || 'cat-transition';
      const isDiscovered = gameManager.discoveredElements.has(elem.number);

      card.className = `element-deck-card ${catClass} ${isDiscovered ? 'discovered' : ''}`;
      card.dataset.number = elem.number;
      card.dataset.category = elem.category;
      card.dataset.phase = elem.phase;
      card.dataset.name = elem.name.toLowerCase();
      card.dataset.symbol = elem.symbol.toLowerCase();

      card.innerHTML = `
        <div>
          <div class="flex justify-between items-start leading-none mb-1">
            <span class="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-900/85 border border-slate-700">#${elem.number}</span>
            <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-900/80 border border-slate-700">${elem.phase}</span>
          </div>
          <div class="text-center my-1.5">
            <div class="text-3xl my-0.5 animate-float inline-block">${elem.character.avatarEmoji || '⚛️'}</div>
            <div class="text-2xl font-black tracking-tight leading-none">${elem.symbol}</div>
            <div class="text-xs font-bold text-white truncate mt-0.5">${elem.name}</div>
            <div class="text-[9px] text-amber-300/90 font-medium truncate">${elem.character.title}</div>
          </div>
        </div>

        <!-- Quick Action Buttons on Card -->
        <div class="card-quick-actions">
          <button class="card-action-btn btn-listen" title="Pronounce and Hear Superpower">
            <span>🔊</span>
            <span>Say</span>
          </button>
          <button class="card-action-btn btn-lab" title="Brew in Reaction Lab">
            <span>⚗️</span>
            <span>Lab</span>
          </button>
          <button class="card-action-btn btn-inspect" title="Quick Actions">
            <span>⚡</span>
            <span>Tap</span>
          </button>
        </div>
      `;

      // Main Card Body Click
      card.addEventListener('click', (e) => {
        if (e.target.closest('.card-action-btn')) return;
        window.soundEngine?.playPop(500 + elem.number * 4);
        if (window.innerWidth < 768) {
          openActionSheet(elem.number);
        } else {
          openElementModal(elem.number);
        }
      });

      // Quick Listen Button on Card
      const btnListen = card.querySelector('.btn-listen');
      if (btnListen) {
        btnListen.addEventListener('click', (e) => {
          e.stopPropagation();
          window.soundEngine?.playPop(620);
          window.soundEngine?.speakElement(elem);
        });
      }

      // Quick Lab Button on Card
      const btnLab = card.querySelector('.btn-lab');
      if (btnLab) {
        btnLab.addEventListener('click', (e) => {
          e.stopPropagation();
          goToMoleculeLab(elem);
        });
      }

      // Quick Inspect Button on Card
      const btnInspect = card.querySelector('.btn-inspect');
      if (btnInspect) {
        btnInspect.addEventListener('click', (e) => {
          e.stopPropagation();
          openActionSheet(elem.number);
        });
      }

      cardDeckContainer.appendChild(card);
    });

    applyFilters();
  }

  // Filter Table Tiles and Cards
  function applyFilters() {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    if (btnClearSearch) {
      btnClearSearch.classList.toggle('hidden', query.length === 0);
    }

    const items = document.querySelectorAll('.element-tile[data-number], .element-deck-card[data-number]');

    items.forEach(item => {
      const name = item.dataset.name;
      const symbol = item.dataset.symbol;
      const number = item.dataset.number;
      const category = item.dataset.category;
      const phase = item.dataset.phase;

      const matchesSearch = !query || name.includes(query) || symbol.includes(query) || number === query;
      const matchesCategory = activeCategoryFilter === 'all' || category === activeCategoryFilter;
      const matchesState = activeStateFilter === 'all' || phase === activeStateFilter;

      if (matchesSearch && matchesCategory && matchesState) {
        item.classList.remove('dimmed');
        item.style.display = '';
        if (query && (symbol === query || name === query)) {
          item.classList.add('highlighted');
        } else {
          item.classList.remove('highlighted');
        }
      } else {
        item.classList.add('dimmed');
        if (item.classList.contains('element-deck-card')) {
          item.style.display = 'none';
        }
        item.classList.remove('highlighted');
      }
    });
  }

  // Open Element Detail Modal
  function openElementModal(number) {
    const elem = elements.find(e => e.number === number);
    if (!elem) return;

    currentElementIndex = elements.findIndex(e => e.number === number);
    const isNewDiscovery = gameManager.markElementDiscovered(elem.number);
    if (isNewDiscovery) {
      window.confetti?.blast();
      window.soundEngine?.playSuccess();
    }

    // Refresh tile and card discovery badge
    const tile = tableContainer.querySelector(`.element-tile[data-number="${number}"]`);
    if (tile) tile.classList.add('discovered');
    const deckCard = cardDeckContainer?.querySelector(`.element-deck-card[data-number="${number}"]`);
    if (deckCard) deckCard.classList.add('discovered');

    // Populate Modal Content
    document.getElementById('modal-elem-number').textContent = `#${elem.number}`;
    document.getElementById('modal-elem-symbol').textContent = elem.symbol;
    document.getElementById('modal-elem-name').textContent = elem.name;
    document.getElementById('modal-elem-mass').textContent = typeof elem.mass === 'number' ? elem.mass.toFixed(3) : elem.mass;
    document.getElementById('modal-elem-category').textContent = categories[elem.category]?.label || elem.category;
    document.getElementById('modal-elem-phase').textContent = elem.phase;
    document.getElementById('modal-elem-avatar').textContent = elem.character.avatarEmoji || '⚛️';
    document.getElementById('modal-elem-title').textContent = elem.character.title;
    document.getElementById('modal-elem-superpower').textContent = elem.character.superpower;
    document.getElementById('modal-elem-funfact').textContent = elem.character.funFact;

    // Protons, Neutrons, Electrons
    const protons = elem.number;
    const neutrons = Math.max(0, Math.round(elem.mass - protons));
    const electrons = elem.shells.reduce((a, b) => a + b, 0);
    document.getElementById('modal-protons').textContent = protons;
    document.getElementById('modal-neutrons').textContent = neutrons;
    document.getElementById('modal-electrons').textContent = electrons;
    document.getElementById('modal-shells-info').textContent = elem.shells.join(' - ');

    // Init Bohr Atom Renderer
    const canvas = document.getElementById('modal-atom-canvas');
    if (!modalAtomRenderer) {
      modalAtomRenderer = new window.AtomRenderer(canvas);
    }
    modalAtomRenderer.setElement(elem);

    // Setup Applications Showcase
    const appContainer = document.getElementById('modal-applications-container');
    const sceneContainer = document.getElementById('modal-interactive-scene');
    if (!sceneManager) {
      sceneManager = new window.ApplicationSceneManager(sceneContainer);
    }

    appContainer.innerHTML = '';
    const apps = elem.applications || [];

    if (apps.length > 0) {
      apps.forEach((app, idx) => {
        const btn = document.createElement('button');
        btn.className = `app-tab-btn flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-left transition-all ${
          idx === 0 
            ? 'bg-indigo-600 text-white shadow-md' 
            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
        }`;
        btn.innerHTML = `
          <span class="text-xl">${app.icon || '✨'}</span>
          <div>
            <div class="text-white">${app.title}</div>
            <div class="text-[10px] text-slate-300 font-normal line-clamp-1">${app.desc}</div>
          </div>
        `;

        btn.addEventListener('click', () => {
          window.soundEngine?.playPop(620);
          appContainer.querySelectorAll('.app-tab-btn').forEach(b => {
            b.className = 'app-tab-btn flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-left transition-all bg-slate-800 text-slate-300 hover:bg-slate-700';
          });
          btn.className = 'app-tab-btn flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-left transition-all bg-indigo-600 text-white shadow-md';
          sceneManager.renderScene(app, elem);
        });

        appContainer.appendChild(btn);
      });

      // Render first scene by default
      sceneManager.renderScene(apps[0], elem);
    } else {
      sceneManager.renderScene({
        title: 'Scientific Application',
        desc: `High-tech research and atomic discovery with ${elem.name}!`,
        icon: '🔬',
        interactiveType: 'science-lab'
      }, elem);
    }

    // Direct Lab Jump Hooks inside Modal
    const btnModalMolecule = document.getElementById('btn-modal-to-molecule');
    if (btnModalMolecule) {
      btnModalMolecule.onclick = () => {
        closeModal();
        goToMoleculeLab(elem);
      };
    }

    const btnModalThermal = document.getElementById('btn-modal-to-thermal');
    if (btnModalThermal) {
      btnModalThermal.onclick = () => {
        closeModal();
        goToThermalLab(elem);
      };
    }

    const btnModalFireworks = document.getElementById('btn-modal-to-fireworks');
    if (btnModalFireworks) {
      btnModalFireworks.onclick = () => {
        closeModal();
        goToFireworksLab(elem);
      };
    }

    // Read Aloud hook
    const readBtn = document.getElementById('btn-modal-read-aloud');
    if (readBtn) {
      readBtn.onclick = () => {
        window.soundEngine?.speakElement(elem);
      };
    }

    // Open Modal
    modalBackdrop.classList.add('open');
  }

  function closeModal() {
    modalBackdrop.classList.remove('open');
    if (modalAtomRenderer) {
      modalAtomRenderer.stop();
    }
    window.soundEngine?.stopSpeaking();
  }

  // Direct Lab Navigation Functions
  function goToMoleculeLab(elem) {
    activateMode('molecules');
    setTimeout(() => {
      if (window.moleculeLab) {
        window.moleculeLab.addElement(elem.symbol);
      }
    }, 120);
  }

  function goToThermalLab(elem) {
    activateMode('thermal');
    setTimeout(() => {
      if (window.thermalLab) {
        window.thermalLab.selectElementBySymbol(elem.symbol);
      }
    }, 120);
  }

  function goToFireworksLab(elem) {
    activateMode('fireworks');
    setTimeout(() => {
      if (window.fireworksLab) {
        window.fireworksLab.selectElementBySymbol(elem.symbol);
      }
    }, 120);
  }

  // Open Mobile Element Quick-Action Bottom Sheet
  function openActionSheet(number) {
    const elem = elements.find(e => e.number === number);
    if (!elem) return;

    currentElementIndex = elements.findIndex(e => e.number === number);
    const isNewDiscovery = gameManager.markElementDiscovered(elem.number);
    if (isNewDiscovery) {
      window.confetti?.blast();
      window.soundEngine?.playSuccess();
    }

    // Refresh tile and card discovery badge
    const tile = tableContainer.querySelector(`.element-tile[data-number="${number}"]`);
    if (tile) tile.classList.add('discovered');
    const deckCard = cardDeckContainer?.querySelector(`.element-deck-card[data-number="${number}"]`);
    if (deckCard) deckCard.classList.add('discovered');

    // Populate Sheet Content
    const sheetAvatar = document.getElementById('sheet-elem-avatar');
    const sheetNum = document.getElementById('sheet-elem-number');
    const sheetSym = document.getElementById('sheet-elem-symbol');
    const sheetPhase = document.getElementById('sheet-elem-phase');
    const sheetCat = document.getElementById('sheet-elem-category');
    const sheetName = document.getElementById('sheet-elem-name');
    const sheetTitle = document.getElementById('sheet-elem-title');
    const sheetPower = document.getElementById('sheet-elem-superpower');

    if (sheetAvatar) sheetAvatar.textContent = elem.character.avatarEmoji || '⚛️';
    if (sheetNum) sheetNum.textContent = `#${elem.number}`;
    if (sheetSym) sheetSym.textContent = elem.symbol;
    if (sheetPhase) sheetPhase.textContent = elem.phase;
    if (sheetCat) sheetCat.textContent = categories[elem.category]?.label || elem.category;
    if (sheetName) sheetName.textContent = elem.name;
    if (sheetTitle) sheetTitle.textContent = elem.character.title;
    if (sheetPower) sheetPower.textContent = elem.character.superpower;

    // Wire Action Sheet Buttons
    if (btnSheetSpeak) {
      btnSheetSpeak.onclick = () => {
        window.soundEngine?.playPop(620);
        window.soundEngine?.speakElement(elem);
      };
    }

    if (btnSheetShowcase) {
      btnSheetShowcase.onclick = () => {
        closeActionSheet();
        openElementModal(elem.number);
      };
    }

    if (btnSheetMolecule) {
      btnSheetMolecule.onclick = () => {
        closeActionSheet();
        goToMoleculeLab(elem);
      };
    }

    if (btnSheetThermal) {
      btnSheetThermal.onclick = () => {
        closeActionSheet();
        goToThermalLab(elem);
      };
    }

    // Open Bottom Sheet
    actionSheetBackdrop?.classList.add('open');
  }

  function closeActionSheet() {
    actionSheetBackdrop?.classList.remove('open');
    window.soundEngine?.stopSpeaking();
  }

  // Action Sheet Prev / Next & Close Handlers
  if (sheetCloseBtn) sheetCloseBtn.addEventListener('click', closeActionSheet);
  if (actionSheetBackdrop) {
    actionSheetBackdrop.addEventListener('click', (e) => {
      if (e.target === actionSheetBackdrop) closeActionSheet();
    });
  }

  if (sheetPrevBtn) {
    sheetPrevBtn.addEventListener('click', () => {
      const prevIdx = (currentElementIndex - 1 + elements.length) % elements.length;
      openActionSheet(elements[prevIdx].number);
    });
  }

  if (sheetNextBtn) {
    sheetNextBtn.addEventListener('click', () => {
      const nextIdx = (currentElementIndex + 1) % elements.length;
      openActionSheet(elements[nextIdx].number);
    });
  }

  // Modal Navigation
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  if (modalPrevBtn) {
    modalPrevBtn.addEventListener('click', () => {
      const prevIdx = (currentElementIndex - 1 + elements.length) % elements.length;
      openElementModal(elements[prevIdx].number);
    });
  }

  if (modalNextBtn) {
    modalNextBtn.addEventListener('click', () => {
      const nextIdx = (currentElementIndex + 1) % elements.length;
      openElementModal(elements[nextIdx].number);
    });
  }

  // Keyboard navigation (ESC to close modal, Left/Right arrows to flip)
  window.addEventListener('keydown', (e) => {
    if (modalBackdrop.classList.contains('open')) {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') modalPrevBtn?.click();
      if (e.key === 'ArrowRight') modalNextBtn?.click();
    }
    if (actionSheetBackdrop?.classList.contains('open')) {
      if (e.key === 'Escape') closeActionSheet();
      if (e.key === 'ArrowLeft') sheetPrevBtn?.click();
      if (e.key === 'ArrowRight') sheetNextBtn?.click();
    }
  });

  // Search Input Hook
  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }

  // Category Filter Buttons
  if (categoryFilters) {
    const catKeys = ['all', ...Object.keys(categories)];
    categoryFilters.innerHTML = catKeys.map(k => `
      <button class="cat-filter-btn px-2.5 py-1 rounded-full text-xs font-bold transition-all border ${
        k === 'all' 
          ? 'bg-indigo-600 border-indigo-400 text-white shadow' 
          : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500'
      }" data-cat="${k}">
        ${k === 'all' ? '🌈 All Elements' : categories[k].label}
      </button>
    `).join('');

    categoryFilters.addEventListener('click', (e) => {
      const btn = e.target.closest('.cat-filter-btn');
      if (!btn) return;
      window.soundEngine?.playPop(520);
      activeCategoryFilter = btn.dataset.cat;

      categoryFilters.querySelectorAll('.cat-filter-btn').forEach(b => {
        b.className = 'cat-filter-btn px-2.5 py-1 rounded-full text-xs font-bold transition-all border bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500';
      });
      btn.className = 'cat-filter-btn px-2.5 py-1 rounded-full text-xs font-bold transition-all border bg-indigo-600 border-indigo-400 text-white shadow';

      applyFilters();
    });
  }

  // State of Matter Filter Buttons
  if (stateFilters) {
    stateFilters.addEventListener('click', (e) => {
      const btn = e.target.closest('.state-filter-btn');
      if (!btn) return;
      window.soundEngine?.playPop(500);
      activeStateFilter = btn.dataset.state;

      stateFilters.querySelectorAll('.state-filter-btn').forEach(b => {
        b.className = 'state-filter-btn px-2.5 py-1 rounded-full text-xs font-bold transition-all border bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500';
      });
      btn.className = 'state-filter-btn px-2.5 py-1 rounded-full text-xs font-bold transition-all border bg-sky-600 border-sky-400 text-white shadow';

      applyFilters();
    });
  }

  // Unified Mode Switcher (Syncs Top Tabs and Mobile Bottom Nav)
  function activateMode(mode) {
    window.soundEngine?.playPop(600);

    // Update Top Navigation Tabs
    modeTabs.forEach(t => {
      if (t.dataset.mode === mode) {
        t.className = 'mode-tab-btn px-3 py-2 rounded-xl text-xs font-bold transition-all bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg whitespace-nowrap';
      } else {
        t.className = 'mode-tab-btn px-3 py-2 rounded-xl text-xs font-bold transition-all bg-slate-800 text-slate-300 hover:bg-slate-700 whitespace-nowrap';
      }
    });

    // Update Mobile Bottom Navigation Bar
    mobileNavButtons.forEach(btn => {
      if (btn.dataset.mode === mode) {
        btn.classList.add('active');
        btn.classList.remove('text-slate-400');
        btn.classList.add('text-indigo-400');
      } else if (btn.dataset.mode !== 'games-menu') {
        btn.classList.remove('active');
        btn.classList.add('text-slate-400');
        btn.classList.remove('text-indigo-400');
      }
    });

    // Render Mode Content
    if (mode === 'explorer') {
      explorerView.classList.remove('hidden');
      gameModeView.classList.add('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      explorerView.classList.add('hidden');
      gameModeView.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (mode === 'detective') {
        gameManager.initDetectiveMode(gameModeView);
      } else if (mode === 'realworld') {
        if (!window.realWorldLab) {
          window.realWorldLab = new window.RealWorldLabManager(gameModeView, (elem) => openElementModal(elem.number));
        } else {
          window.realWorldLab.container = gameModeView;
        }
        window.realWorldLab.render();
      } else if (mode === 'thermal') {
        if (!window.thermalLab) {
          window.thermalLab = new window.ThermalLabManager(gameModeView);
        } else {
          window.thermalLab.container = gameModeView;
        }
        window.thermalLab.render();
      } else if (mode === 'molecules') {
        if (!window.moleculeLab) {
          window.moleculeLab = new window.MoleculeLabManager(gameModeView);
        } else {
          window.moleculeLab.container = gameModeView;
        }
        window.moleculeLab.render('crafting');
      } else if (mode === 'fireworks') {
        if (!window.fireworksLab) {
          window.fireworksLab = new window.FireworksLabManager(gameModeView);
        } else {
          window.fireworksLab.container = gameModeView;
        }
        window.fireworksLab.render();
      } else if (mode === 'match') {
        gameManager.initMatchRushMode(gameModeView);
      } else if (mode === 'builder') {
        gameManager.initAtomBuilderMode(gameModeView);
      }
    }
  }

  // Top Tabs Event Listeners
  modeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      activateMode(tab.dataset.mode);
    });
  });

  // Mobile Bottom Navigation Event Listeners
  mobileNavButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.mode;
      if (mode === 'games-menu') {
        mobileGamesSheet?.classList.toggle('open');
        window.soundEngine?.playPop(500);
      } else {
        mobileGamesSheet?.classList.remove('open');
        activateMode(mode);
      }
    });
  });

  // Mobile Games Popup Sheet Listeners
  if (btnCloseGamesSheet) {
    btnCloseGamesSheet.addEventListener('click', () => {
      mobileGamesSheet?.classList.remove('open');
      window.soundEngine?.playPop(400);
    });
  }

  if (mobileGamesSheet) {
    mobileGamesSheet.addEventListener('click', (e) => {
      if (e.target === mobileGamesSheet) {
        mobileGamesSheet.classList.remove('open');
      }
    });
  }

  mobileGamePickButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.mode;
      mobileGamesSheet?.classList.remove('open');
      activateMode(mode);
    });
  });

  // Mobile Header More Dropdown Actions
  if (btnMobileMore && mobileMoreDropdown) {
    btnMobileMore.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMoreDropdown.classList.toggle('hidden');
      window.soundEngine?.playPop(500);
    });
    document.addEventListener('click', () => {
      mobileMoreDropdown.classList.add('hidden');
    });
  }

  if (btnMobileDiploma) {
    btnMobileDiploma.addEventListener('click', () => {
      mobileMoreDropdown?.classList.add('hidden');
      window.soundEngine?.playSuccess();
      window.diplomaManager?.open();
    });
  }

  if (btnMobileHelp) {
    btnMobileHelp.addEventListener('click', () => {
      mobileMoreDropdown?.classList.add('hidden');
      window.soundEngine?.playPop(520);
      window.mascotGuide?.openHelpModal();
    });
  }

  if (btnMobileFullscreen) {
    btnMobileFullscreen.addEventListener('click', () => {
      mobileMoreDropdown?.classList.add('hidden');
      btnToggleFullscreen?.click();
    });
  }

  if (brandLogoBtn) {
    brandLogoBtn.addEventListener('click', () => {
      activateMode('explorer');
    });
  }

  window.gameManager = gameManager;

  // Header Help & Diploma Actions
  const btnHelp = document.getElementById('btn-help-guide');
  if (btnHelp) {
    btnHelp.addEventListener('click', () => {
      window.soundEngine?.playPop(520);
      window.mascotGuide?.openHelpModal();
    });
  }

  const btnDiploma = document.getElementById('btn-open-diploma');
  if (btnDiploma) {
    btnDiploma.addEventListener('click', () => {
      window.soundEngine?.playSuccess();
      window.diplomaManager?.open();
    });
  }

  // Initialize Dr. Atom Mascot Assistant
  if (window.mascotGuide) {
    window.mascotGuide.init();
  }

  // Register PWA Service Worker for Offline Android Play
  if ('serviceWorker' in navigator && (location.protocol === 'http:' || location.protocol === 'https:')) {
    navigator.serviceWorker.register('./sw.js').catch(err => {
      console.log('SW registration note:', err.message);
    });
  }

  // Initial Table Render
  renderPeriodicTable();

  // Automatic Mobile/Desktop View Adaptation
  const isMobileScreen = window.innerWidth < 768;
  if (isMobileScreen) {
    switchViewMode('cards');
  } else {
    switchViewMode('grid');
    setTimeout(applyTableScaling, 100);
  }
});
