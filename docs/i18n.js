(function () {
  const STORAGE_KEY = 'aio-lang';
  const DEFAULT_LANG = 'en';

  const T = {
    en: {},
    it: {}
  };

  // Shared
  T.en['nav.home'] = 'Home';
  T.it['nav.home'] = 'Home';
  T.en['nav.features'] = 'Features';
  T.it['nav.features'] = 'Caratteristiche';
  T.en['nav.themes'] = 'Themes';
  T.it['nav.themes'] = 'Temi';
  T.en['nav.download'] = 'Download';
  T.it['nav.download'] = 'Download';
  T.en['nav.cta'] = 'Download Alpha';
  T.it['nav.cta'] = 'Download Alpha';
  T.en['footer.copy'] = '© 2024 ALL IN ONE UI. High-Performance Media Launcher. v0.8.2-alpha';
  T.it['footer.copy'] = '© 2024 ALL IN ONE UI. High-Performance Media Launcher. v0.8.2-alpha';

  // index.html
  T.en['home.title'] = 'ALL IN ONE UI - High-Performance Media Launcher';
  T.it['home.title'] = 'ALL IN ONE UI - High-Performance Media Launcher';
  T.en['home.hero.h1'] = 'ALL IN ONE UI: <span class="bg-gradient-to-r from-[#00e5ff] via-[#f50057] to-[#ffc400] text-transparent bg-clip-text">Cinematic Launcher System</span>';
  T.it['home.hero.h1'] = 'ALL IN ONE UI: <span class="bg-gradient-to-r from-[#00e5ff] via-[#f50057] to-[#ffc400] text-transparent bg-clip-text">Cinematic Launcher System</span>';
  T.en['home.hero.sub'] = 'All-in-one launcher for games, emulators, apps, streaming and local media.';
  T.it['home.hero.sub'] = 'Launcher unico per giochi, emulatori, app, streaming e media locali.';
  T.en['home.hero.cta1'] = 'Get the Free Alpha';
  T.it['home.hero.cta1'] = 'Scarica Alpha Gratis';
  T.en['home.hero.cta2'] = 'See the Features';
  T.it['home.hero.cta2'] = 'Guarda le Caratteristiche';
  T.en['home.card1.t'] = 'Home (Recent)';
  T.it['home.card1.t'] = 'Home (Recenti)';
  T.en['home.card1.d'] = 'Quickly access your recently used games and apps to jump back into the action.';
  T.it['home.card1.d'] = 'Accedi rapidamente ai tuoi giochi e app usati di recente per tornare subito all\'azione.';
  T.en['home.card2.t'] = 'Games (Filtered Library)';
  T.it['home.card2.t'] = 'Giochi (Libreria con filtri)';
  T.en['home.card2.d'] = 'Organize and filter your large library of PC games, emulators and apps in one clean interface.';
  T.it['home.card2.d'] = 'Organizza e filtra la tua vasta libreria di giochi per PC, emulatori e app in un\'unica interfaccia pulita.';
  T.en['home.card3.t'] = 'Streaming (Hero, Services, Library)';
  T.it['home.card3.t'] = 'Streaming (Hero, Servizi, Libreria)';
  T.en['home.card3.d'] = 'Explore streaming services and your local media library with a cinematic experience.';
  T.it['home.card3.d'] = 'Esplora i servizi di streaming e la tua libreria multimediale locale con un\'esperienza cinematografica.';
  T.en['home.set.t'] = 'Advanced Settings';
  T.it['home.set.t'] = 'Impostazioni Avanzate';
  T.en['home.set.d'] = 'Configure every aspect of your experience. Customize controls, visual appearance and integration options to perfectly tailor ALL IN ONE UI to your setup.';
  T.it['home.set.d'] = 'Configura ogni aspetto della tua esperienza. Personalizza i controlli, l\'aspetto visivo e le opzioni di integrazione per adattare perfettamente ALL IN ONE UI al tuo setup.';
  T.en['home.set.li1'] = 'Theme Customization';
  T.it['home.set.li1'] = 'Personalizzazione Tema';
  T.en['home.set.li2'] = 'Library Management';
  T.it['home.set.li2'] = 'Gestione Librerie';
  T.en['home.set.li3'] = 'Controller Options';
  T.it['home.set.li3'] = 'Opzioni Controller';
  T.en['home.cta.t'] = 'Ready to revolutionize your living room?';
  T.it['home.cta.t'] = 'Pronto a rivoluzionare il tuo salotto?';
  T.en['home.cta.d'] = 'Join the beta testers and turn your PC into a top-tier console.';
  T.it['home.cta.d'] = 'Unisciti ai beta tester e trasforma il tuo PC in una console di fascia altissima.';
  T.en['home.cta.btn'] = 'Download the Alpha Today';
  T.it['home.cta.btn'] = 'Scarica l\'Alpha Oggi';

  // caratteristiche.html
  T.en['feat.title'] = 'Features - ALL IN ONE UI';
  T.it['feat.title'] = 'Caratteristiche - ALL IN ONE UI';
  T.en['feat.h1'] = 'Features &amp; Technical Specs';
  T.it['feat.h1'] = 'Caratteristiche &amp; Specifiche Tecniche';
  T.en['feat.sub'] = 'Explore the foundations of a launcher built for absolute performance. No compromise between cinematic aesthetics and instant responsiveness.';
  T.it['feat.sub'] = 'Esplora le fondamenta di un launcher progettato per le prestazioni assolute. Nessun compromesso tra estetica cinematografica e reattività istantanea.';
  T.en['feat.s1.t'] = 'Power Under the Hood';
  T.it['feat.s1.t'] = 'Potenza Sotto il Cofano';
  T.en['feat.s1.c1.t'] = 'Low Latency Engine';
  T.it['feat.s1.c1.t'] = 'Low Latency Engine';
  T.en['feat.s1.c1.d'] = 'Optimized architecture to minimize input lag. Smooth 60fps navigation even on mid-range hardware.';
  T.it['feat.s1.c1.d'] = 'Architettura ottimizzata per ridurre al minimo l\'input lag. Navigazione fluida a 60fps costanti anche su hardware di fascia media.';
  T.en['feat.s1.c2.t'] = 'Native Controller Support (XInput)';
  T.it['feat.s1.c2.t'] = 'Supporto Nativo Controller (XInput)';
  T.en['feat.s1.c2.d'] = 'Deep integration for Xbox pads (XInput). Full UI navigation. Includes the Kill-combo (Back+Start) to instantly close any game and return to the launcher.';
  T.it['feat.s1.c2.d'] = 'Integrazione profonda per pad Xbox (XInput). Navigazione totale dell\'interfaccia. Include la Kill-combo (Back+Start) per terminare istantaneamente qualsiasi gioco e tornare al launcher.';
  T.en['feat.s1.c3.t'] = 'Lightweight Telemetry';
  T.it['feat.s1.c3.t'] = 'Telemetria Leggera';
  T.en['feat.s1.c3.d'] = 'Bare-minimum background resource usage to ensure all CPU/GPU power is dedicated to your games.';
  T.it['feat.s1.c3.d'] = 'Consumo di risorse ridotto all\'osso in background per garantire che tutta la potenza della CPU/GPU sia dedicata ai tuoi giochi.';
  T.en['feat.s2.t'] = 'Open Ecosystem';
  T.it['feat.s2.t'] = 'Ecosistema Aperto';
  T.en['feat.s2.h'] = 'Your Library, Unified';
  T.it['feat.s2.h'] = 'La Tua Libreria, Unificata';
  T.en['feat.s2.li1.t'] = '1-Click Launch';
  T.it['feat.s2.li1.t'] = 'Lancio 1-Click';
  T.en['feat.s2.li1.d'] = 'Launch PC games, complex mods or emulated ROMs with a single input, with no extra steps.';
  T.it['feat.s2.li1.d'] = 'Avvia giochi PC, mod complesse o rom emulate con un singolo input, senza passaggi intermedi.';
  T.en['feat.s2.li2.t'] = 'Emulation Integration';
  T.it['feat.s2.li2.t'] = 'Integrazione Emulazione';
  T.en['feat.s2.li2.d'] = 'Transparent support for the major emulators (RetroArch, RPCS3, Yuzu). Command-line arguments are handled internally.';
  T.it['feat.s2.li2.d'] = 'Supporto trasparente per i principali emulatori (RetroArch, RPCS3, Yuzu). Gli argomenti di riga di comando sono gestiti internamente.';
  T.en['feat.s2.li3.t'] = 'Mod Management';
  T.it['feat.s2.li3.t'] = 'Gestione Mod';
  T.en['feat.s2.li3.d'] = 'Built-in support for third-party launchers like r2modman. You can launch specific mod profiles by passing the correct signals/arguments to the profile.';
  T.it['feat.s2.li3.d'] = 'Supporto integrato per launcher di terze parti come r2modman. Possibilità di lanciare profili mod specifici passando i corretti segnali/argomenti al profilo.';
  T.en['feat.s3.t'] = 'Advanced Media Center';
  T.it['feat.s3.t'] = 'Media Center Avanzato';
  T.en['feat.s3.h'] = 'Beyond Gaming';
  T.it['feat.s3.h'] = 'Oltre il Gaming';
  T.en['feat.s3.d'] = 'A complete Home Theater experience. Organize your local library of movies and TV shows with automatically downloaded metadata, and launch your favorite streaming services from the same interface.';
  T.it['feat.s3.d'] = 'Un\'esperienza Home Theater completa. Organizza la tua libreria locale di film e serie TV con metadati scaricati automaticamente, e lancia i tuoi servizi di streaming preferiti dalla stessa interfaccia.';
  T.en['feat.s3.b1.t'] = 'Local Library';
  T.it['feat.s3.b1.t'] = 'Libreria Locale';
  T.en['feat.s3.b1.d'] = 'Automatic scraping of covers, plots and cast for your local video files.';
  T.it['feat.s3.b1.d'] = 'Scraping automatico di cover, trame e cast per i tuoi file video locali.';
  T.en['feat.s3.b2.t'] = 'Streaming';
  T.it['feat.s3.b2.t'] = 'Streaming';
  T.en['feat.s3.b2.d'] = 'Direct integration via Chromium browser in app/fullscreen (kiosk) mode for Netflix, Prime, YouTube. No visual distractions during playback.';
  T.it['feat.s3.b2.d'] = 'Integrazione diretta tramite browser Chromium in modalità app/fullscreen (kiosk) per Netflix, Prime, YouTube. Nessun disturbo visivo durante la riproduzione.';
  T.en['feat.s4.t'] = 'Status: Public Alpha';
  T.it['feat.s4.t'] = 'Stato: Alpha Pubblica';
  T.en['feat.s4.d'] = 'ALL IN ONE UI is currently in early development (v0.8.2-alpha). The core architecture (XInput, Chromium integration, argument parsing) is stable, but your contribution is essential. Please report any issues with the Kill-combo or with launching r2modman profiles.';
  T.it['feat.s4.d'] = 'ALL IN ONE UI è attualmente nelle prime fasi di sviluppo (v0.8.2-alpha). L\'architettura core (XInput, integrazione Chromium, parsing argomenti) è stabile, ma il tuo contributo è fondamentale. Segnala eventuali problemi con la Kill-combo o con l\'avvio di profili r2modman.';
  T.en['feat.s4.bug'] = 'Report Bug';
  T.it['feat.s4.bug'] = 'Report Bug';
  T.en['feat.s4.discord'] = 'Discord Community';
  T.it['feat.s4.discord'] = 'Discord Community';
  T.en['feat.fb.t'] = 'Help Us Improve';
  T.it['feat.fb.t'] = 'Aiutaci a Migliorare';
  T.en['feat.fb.lbl1'] = 'Rate your experience';
  T.it['feat.fb.lbl1'] = 'Valuta la tua esperienza';
  T.en['feat.fb.lbl2'] = 'Your suggestions';
  T.it['feat.fb.lbl2'] = 'I tuoi suggerimenti';
  T.en['feat.fb.ph'] = 'What can we improve?';
  T.it['feat.fb.ph'] = 'Cosa possiamo migliorare?';
  T.en['feat.fb.send'] = 'Send Feedback';
  T.it['feat.fb.send'] = 'Invia Feedback';
  T.en['feat.fb.err.star'] = 'Please select at least one star.';
  T.it['feat.fb.err.star'] = 'Seleziona almeno una stella.';
  T.en['feat.fb.sending'] = 'Sending...';
  T.it['feat.fb.sending'] = 'Invio...';
  T.en['feat.fb.ok'] = 'Thanks! Feedback submitted.';
  T.it['feat.fb.ok'] = 'Grazie! Feedback inviato.';
  T.en['feat.fb.err.send'] = 'Submission error. Please try again.';
  T.it['feat.fb.err.send'] = 'Errore invio. Riprova.';

  // temi.html
  T.en['themes.title'] = 'ALL IN ONE UI - Themes &amp; Customization';
  T.it['themes.title'] = 'ALL IN ONE UI - Temi &amp; Personalizzazione';
  T.en['themes.h1'] = 'Your Launcher, <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-secondary-container to-tertiary">Your Style</span>';
  T.it['themes.h1'] = 'Il Tuo Launcher, <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-secondary-container to-tertiary">Il Tuo Stile</span>';
  T.en['themes.sub'] = 'Shaping the visual experience has never been easier. Choose from preset styles, customize the details or build a unique interface that reflects your setup.';
  T.it['themes.sub'] = 'Plasmare l\'esperienza visiva non è mai stato così semplice. Scegli tra stili predefiniti, personalizza i dettagli o crea un\'interfaccia unica che rispecchia il tuo setup.';
  T.en['themes.gallery'] = 'Theme Gallery';
  T.it['themes.gallery'] = 'Galleria Temi';
  T.en['themes.c1.tag'] = 'Minimal';
  T.it['themes.c1.tag'] = 'Minimal';
  T.en['themes.c1.t'] = 'Dark Minimal';
  T.it['themes.c1.t'] = 'Dark Minimal';
  T.en['themes.c1.d'] = 'Clean interface, deep dark tones, maximum focus on your media content.';
  T.it['themes.c1.d'] = 'Interfaccia pulita, toni scuri profondi, massima concentrazione sui tuoi contenuti multimediali.';
  T.en['themes.c2.tag'] = 'Neon';
  T.it['themes.c2.tag'] = 'Neon';
  T.en['themes.c2.t'] = 'Cyber Neon';
  T.it['themes.c2.t'] = 'Cyber Neon';
  T.en['themes.c2.d'] = 'Bright colors, high contrast and futuristic vibes for a setup that won\'t go unnoticed.';
  T.it['themes.c2.d'] = 'Colori accesi, contrasti elevati e vibrazioni futuristiche per un setup che non passa inosservato.';
  T.en['themes.c3.tag'] = 'Retro';
  T.it['themes.c3.tag'] = 'Retro';
  T.en['themes.c3.t'] = 'Retro Arcade';
  T.it['themes.c3.t'] = 'Retro Arcade';
  T.en['themes.c3.d'] = 'Pure nostalgia. Vibrant neon colors, optional pixel fonts and a subtle scanline effect for retro-gaming purists.';
  T.it['themes.c3.d'] = 'Nostalgia pura. Colori vibranti al neon, font pixelati opzionali e un sottile effetto scanline per i puristi del retro-gaming.';
  T.en['themes.adv.t'] = 'Advanced Customization';
  T.it['themes.adv.t'] = 'Personalizzazione Avanzata';
  T.en['themes.adv.d'] = 'Take customization to the next level and make your launcher truly unique.';
  T.it['themes.adv.d'] = 'Porta la personalizzazione al livello successivo e rendi unico il tuo launcher.';
  T.en['themes.adv.li1'] = 'Accent ColorPicker: pick the perfect color for the interface details.';
  T.it['themes.adv.li1'] = 'Accento ColorPicker: Seleziona il colore perfetto per i dettagli dell\'interfaccia.';
  T.en['themes.adv.li2'] = 'Custom Image Background: choose your favorite image as the background.';
  T.it['themes.adv.li2'] = 'Sfondo Immagine Personalizzato: Scegli la tua immagine preferita come sfondo.';
  T.en['themes.adv.li3'] = 'JSON Import: import full themes by defining design tokens via JSON files.';
  T.it['themes.adv.li3'] = 'Import JSON: Importa temi completi definendo i token di design tramite file JSON.';

  // download.html
  T.en['dl.title'] = 'Download ALL IN ONE UI';
  T.it['dl.title'] = 'Download ALL IN ONE UI';
  T.en['dl.h1'] = 'Download ALL IN ONE UI Alpha';
  T.it['dl.h1'] = 'Scarica ALL IN ONE UI Alpha';
  T.en['dl.sub'] = 'Turn your PC into a high-performance media hub. The ultimate experience for gaming and home theater. Public Alpha version v0.8.2.';
  T.it['dl.sub'] = 'Trasforma il tuo PC in un hub multimediale ad alte prestazioni. L\'esperienza definitiva per il gaming e l\'home theater. Versione Alpha pubblica v0.8.2.';
  T.en['dl.btn'] = 'Download for Windows 10/11';
  T.it['dl.btn'] = 'Download per Windows 10/11';
  T.en['dl.size'] = '(64-bit, 128MB)';
  T.it['dl.size'] = '(64-bit, 128MB)';
  T.en['dl.notes'] = 'Release Notes';
  T.it['dl.notes'] = 'Note di Rilascio';
  T.en['dl.warn'] = 'This is an Alpha version. You may encounter instability.';
  T.it['dl.warn'] = 'Questa è una versione Alpha. Potresti incontrare instabilità.';
  T.en['dl.req.t'] = 'System Requirements';
  T.it['dl.req.t'] = 'Requisiti di Sistema';
  T.en['dl.req.min'] = 'Minimum';
  T.it['dl.req.min'] = 'Minimi';
  T.en['dl.req.rec'] = 'Recommended';
  T.it['dl.req.rec'] = 'Consigliati';
  T.en['dl.req.os'] = 'OS';
  T.it['dl.req.os'] = 'OS';
  T.en['dl.req.cpu'] = 'CPU';
  T.it['dl.req.cpu'] = 'CPU';
  T.en['dl.req.ram'] = 'RAM';
  T.it['dl.req.ram'] = 'RAM';
  T.en['dl.req.gpu'] = 'GPU';
  T.it['dl.req.gpu'] = 'GPU';
  T.en['dl.req.space'] = 'Space';
  T.it['dl.req.space'] = 'Spazio';
  T.en['dl.req.min.space'] = '500 MB (SSD recommended)';
  T.it['dl.req.min.space'] = '500 MB (SSD consigliato)';
  T.en['dl.req.rec.space'] = '1 GB on NVMe SSD';
  T.it['dl.req.rec.space'] = '1 GB su NVMe SSD';
  T.en['dl.guide.t'] = 'Quick Guide';
  T.it['dl.guide.t'] = 'Guida Rapida';
  T.en['dl.guide.s1.t'] = 'Installation &amp; Persistence';
  T.it['dl.guide.s1.t'] = 'Installazione e Persistenza';
  T.en['dl.guide.s1.d'] = 'Run the downloaded installer. The program will be installed in <code>%APPDATA%\\AllInOneUI</code> to ensure optimal permissions and data persistence with no admin rights required.';
  T.it['dl.guide.s1.d'] = 'Esegui l\'installer scaricato. Il programma verrà installato in <code>%APPDATA%\\AllInOneUI</code> per garantire permessi ottimali e la persistenza dei dati senza necessità di permessi di amministratore.';
  T.en['dl.guide.s2.t'] = 'Auto-Start';
  T.it['dl.guide.s2.t'] = 'Avvio Automatico';
  T.en['dl.guide.s2.d'] = 'For an optimal experience, enable auto-start at PC boot by going to <em>Settings &gt; System</em>. The UI will launch in kiosk mode.';
  T.it['dl.guide.s2.d'] = 'Per un\'esperienza ottimale, abilita l\'avvio automatico all\'accensione del PC navigando in <em>Impostazioni &gt; Sistema</em>. L\'interfaccia si avvierà in modalità kiosk.';
  T.en['dl.guide.s3.t'] = 'Troubleshooting';
  T.it['dl.guide.s3.t'] = 'Risoluzione Problemi';
  T.en['dl.guide.s3.d'] = 'If you run into issues, check the log files in <code>%APPDATA%\\AllInOneUI\\logs</code> or refer to the troubleshooting section in the GitHub repository for common solutions.';
  T.it['dl.guide.s3.d'] = 'In caso di problemi, verifica i file di log in <code>%APPDATA%\\AllInOneUI\\logs</code> o consulta la sezione di troubleshooting nella repository GitHub per soluzioni comuni.';
  T.en['dl.comm.t'] = 'Community';
  T.it['dl.comm.t'] = 'Community';
  T.en['dl.comm.d'] = 'The Alpha is constantly evolving. Join us to report bugs, request new features or share your custom themes.';
  T.it['dl.comm.d'] = 'L\'Alpha è costantemente in evoluzione. Unisciti a noi per segnalare bug, richiedere nuove feature o condividere i tuoi temi personalizzati.';
  T.en['dl.comm.discord.t'] = 'Discord Server';
  T.it['dl.comm.discord.t'] = 'Server Discord';
  T.en['dl.comm.discord.d'] = 'Support and discussion';
  T.it['dl.comm.discord.d'] = 'Supporto e discussione';
  T.en['dl.comm.gh.t'] = 'GitHub Repository';
  T.it['dl.comm.gh.t'] = 'GitHub Repository';
  T.en['dl.comm.gh.d'] = 'Source code and issue tracker';
  T.it['dl.comm.gh.d'] = 'Codice sorgente e issue tracker';

  // Lang toggle button labels
  T.en['lang.tooltip'] = 'Cambia in Italiano';
  T.it['lang.tooltip'] = 'Switch to English';

  function getLang() {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      return v === 'it' || v === 'en' ? v : DEFAULT_LANG;
    } catch (e) {
      return DEFAULT_LANG;
    }
  }

  function setLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    apply(lang);
  }

  function apply(lang) {
    const dict = T[lang] || T[DEFAULT_LANG];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] != null) el.setAttribute('placeholder', dict[key]);
    });
    const titleKey = document.documentElement.getAttribute('data-i18n-title');
    if (titleKey && dict[titleKey] != null) {
      document.title = dict[titleKey].replace(/&amp;/g, '&');
    }
    const btn = document.getElementById('lang-toggle');
    if (btn) {
      const labelEl = btn.querySelector('[data-lang-label]');
      if (labelEl) labelEl.textContent = lang === 'it' ? 'EN' : 'IT';
      const tip = dict['lang.tooltip'] || '';
      btn.setAttribute('aria-label', tip);
      btn.setAttribute('title', tip);
    }
    document.dispatchEvent(new CustomEvent('aio-langchange', { detail: { lang: lang } }));
  }

  function init() {
    apply(getLang());
    const btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        setLang(getLang() === 'it' ? 'en' : 'it');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.AIO_I18N = {
    t: function (key) {
      const lang = getLang();
      return (T[lang] && T[lang][key]) || (T[DEFAULT_LANG] && T[DEFAULT_LANG][key]) || key;
    },
    getLang: getLang,
    setLang: setLang
  };
})();
