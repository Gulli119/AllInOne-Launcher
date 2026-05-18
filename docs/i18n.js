(function () {
  const STORAGE_KEY = 'aio-lang';
  const DEFAULT_LANG = 'en';

  const T = {
    en: {},
    it: {}
  };

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
  T.en['footer.copy'] = '© 2026 ALL IN ONE UI. High-Performance Media Launcher. v0.1.1-alpha';
  T.it['footer.copy'] = 'Â© 2026 ALL IN ONE UI. High-Performance Media Launcher. v0.1.1-alpha';
  T.en['home.title'] = 'ALL IN ONE UI — Controller-first hub for games, emulators & streaming';
  T.it['home.title'] = 'ALL IN ONE UI — Hub controller-first per giochi, emulatori e streaming';
  T.en['home.hero.badge'] = 'Open Alpha · free · no account';
  T.it['home.hero.badge'] = 'Open Alpha · gratis · nessun account';
  T.en['home.hero.h1'] = 'The controller-first hub for your games, emulators &amp; <span class="bg-gradient-to-r from-[#00e5ff] via-[#f50057] to-[#ffc400] text-transparent bg-clip-text">streaming sites</span>';
  T.it['home.hero.h1'] = 'L\'hub controller-first per giochi, emulatori &amp; <span class="bg-gradient-to-r from-[#00e5ff] via-[#f50057] to-[#ffc400] text-transparent bg-clip-text">siti di streaming</span>';
  T.en['home.hero.sub'] = 'One Big-Picture-style interface for everything you play and watch — including a controller-driven web browser. No keyboard. No mouse. No exceptions.';
  T.it['home.hero.sub'] = 'Un\'unica interfaccia stile Big Picture per tutto ciò che giochi e guardi — incluso un browser web guidato dal controller. Niente tastiera. Niente mouse. Nessuna eccezione.';
  T.en['home.hero.cta1'] = '<span class="material-symbols-outlined">download</span> Download for Windows 10/11';
  T.it['home.hero.cta1'] = '<span class="material-symbols-outlined">download</span> Scarica per Windows 10/11';
  T.en['home.hero.cta2'] = 'See all features';
  T.it['home.hero.cta2'] = 'Tutte le caratteristiche';
  T.en['home.hero.note'] = 'Windows 10/11 · 64-bit · ~25 MB · per-user installer, no admin';
  T.it['home.hero.note'] = 'Windows 10/11 · 64-bit · ~25 MB · installer per-utente, no admin';
  T.en['home.demo.t'] = 'See it in action';
  T.it['home.demo.t'] = 'Guardalo in azione';
  T.en['home.demo.d'] = 'The standout moment: browsing Netflix and typing a search — entirely with a controller, using the built-in virtual keyboard.';
  T.it['home.demo.d'] = 'Il momento clou: navigare Netflix e digitare una ricerca — interamente col controller, con la tastiera virtuale integrata.';
  T.en['home.demo.ph'] = 'Demo clip coming soon — controller browser + virtual keyboard.';
  T.it['home.demo.ph'] = 'Demo in arrivo — browser col controller + tastiera virtuale.';
  T.en['home.f1.t'] = 'One unified library';
  T.it['home.f1.t'] = 'Una libreria unificata';
  T.en['home.f1.d'] = 'Games, emulators, desktop apps and streaming — one grid for everything. Emulator presets baked in (RetroArch, Dolphin, PCSX2, RPCS3, yuzu, and more).';
  T.it['home.f1.d'] = 'Giochi, emulatori, app desktop e streaming — un\'unica griglia per tutto. Preset emulatori inclusi (RetroArch, Dolphin, PCSX2, RPCS3, yuzu e altri).';
  T.en['home.f2.t'] = 'Browse Netflix with a controller';
  T.it['home.f2.t'] = 'Naviga Netflix col controller';
  T.en['home.f2.d'] = 'Streaming sites open fullscreen in your own browser profile (logins just work). The gamepad moves the cursor; a built-in virtual keyboard handles search. No extension, no proxy.';
  T.it['home.f2.d'] = 'I siti di streaming si aprono a schermo intero nel tuo profilo browser (i login funzionano già). Il gamepad muove il cursore; una tastiera virtuale integrata gestisce la ricerca. Nessuna estensione, nessun proxy.';
  T.en['home.f3.t'] = 'Never reach for a keyboard';
  T.it['home.f3.t'] = 'Mai più toccare una tastiera';
  T.en['home.f3.d'] = 'Every screen is fully gamepad-navigable (XInput). A configurable kill-combo force-closes a frozen game system-wide — the #1 couch frustration, solved.';
  T.it['home.f3.d'] = 'Ogni schermata è navigabile col gamepad (XInput). Una kill-combo configurabile chiude forzatamente un gioco bloccato a livello di sistema — la frustrazione #1 da divano, risolta.';
  T.en['home.once.t'] = 'Set up your rig once, then never touch a mouse again';
  T.it['home.once.t'] = 'Configura la postazione una volta, poi non toccare mai più il mouse';
  T.en['home.once.d'] = 'Honest about the alpha: you build your library manually (no auto-scan yet), and streaming uses your own accounts. You curate the hub once — after that it\'s pure couch.';
  T.it['home.once.d'] = 'Onesti sull\'alpha: la libreria si costruisce a mano (niente auto-scan ancora) e lo streaming usa i tuoi account. Configuri l\'hub una volta — dopo è puro divano.';
  T.en['home.priv1.t'] = 'Fully local, zero telemetry';
  T.it['home.priv1.t'] = 'Totalmente locale, zero telemetria';
  T.en['home.priv1.d'] = 'Nothing is tracked or sent anywhere. Your library and settings stay on your machine.';
  T.it['home.priv1.d'] = 'Niente viene tracciato o inviato. Libreria e impostazioni restano sul tuo PC.';
  T.en['home.priv2.t'] = 'Lightweight by design';
  T.it['home.priv2.t'] = 'Leggero per design';
  T.en['home.priv2.d'] = 'Rust/Tauri shell, not Electron — small footprint, fast, low RAM. Feels near-native.';
  T.it['home.priv2.d'] = 'Shell Rust/Tauri, non Electron — footprint ridotto, veloce, poca RAM. Sembra nativo.';
  T.en['home.priv3.t'] = 'Themed &amp; yours';
  T.it['home.priv3.t'] = 'A tuo stile';
  T.en['home.priv3.d'] = 'Multiple themes, accent picker, custom background, JSON theme import, 60–160% UI scale for TV distance.';
  T.it['home.priv3.d'] = 'Temi multipli, selettore accento, sfondo personalizzato, import tema JSON, scala UI 60–160% per la distanza TV.';
  T.en['home.alpha.tag'] = 'Open Alpha — built in the open';
  T.it['home.alpha.tag'] = 'Open Alpha — sviluppato in pubblico';
  T.en['home.alpha.t'] = 'Early alpha. Shaped by the couch-gaming community.';
  T.it['home.alpha.t'] = 'Alpha precoce. Plasmata dalla community del couch-gaming.';
  T.en['home.alpha.d'] = 'This is early software, developed actively. Features land fast, rough edges exist. You\'re not a user here — you\'re a co-builder. Report bugs, request features, steer the roadmap.';
  T.it['home.alpha.d'] = 'Software in fase iniziale, sviluppato attivamente. Le feature arrivano in fretta, ci sono spigoli. Qui non sei un utente — sei un co-creatore. Segnala bug, chiedi feature, guida la roadmap.';
  T.en['home.alpha.fb'] = '<span class="material-symbols-outlined">rate_review</span> Send feedback';
  T.it['home.alpha.fb'] = '<span class="material-symbols-outlined">rate_review</span> Invia feedback';
  T.en['home.alpha.gh'] = '<span class="material-symbols-outlined">bug_report</span> Report a bug on GitHub';
  T.it['home.alpha.gh'] = '<span class="material-symbols-outlined">bug_report</span> Segnala un bug su GitHub';
  T.en['home.cta.t'] = 'Your whole couch PC — one stick';
  T.it['home.cta.t'] = 'Tutto il tuo PC da salotto — una leva';
  T.en['home.cta.d'] = 'Games, emulators, streaming. No keyboard. No mouse. Free, open alpha.';
  T.it['home.cta.d'] = 'Giochi, emulatori, streaming. Niente tastiera. Niente mouse. Alpha gratuita e aperta.';
  T.en['home.cta.btn'] = '<span class="material-symbols-outlined">download</span> Download for Windows 10/11';
  T.it['home.cta.btn'] = '<span class="material-symbols-outlined">download</span> Scarica per Windows 10/11';
  T.en['feat.title'] = 'Features - ALL IN ONE UI';
  T.it['feat.title'] = 'Caratteristiche - ALL IN ONE UI';
  T.en['feat.h1'] = 'Features &amp; Technical Specs';
  T.it['feat.h1'] = 'Caratteristiche &amp; Specifiche Tecniche';
  T.en['feat.sub'] = 'Explore the foundations of a launcher designed for absolute comfort.  No compromise between performance and comfort.';
  T.it['feat.sub'] = 'Esplora le fondamenta di un launcher progettato per la comodità assolute.  Nessun compromesso tra performance e comfort.';
  T.en['feat.s1.t'] = 'Power Under the Hood';
  T.it['feat.s1.t'] = 'Potenza Sotto il Cofano';
  T.en['feat.s1.c1.t'] = 'Low Latency Engine';
  T.it['feat.s1.c1.t'] = 'Low Latency Engine';
  T.en['feat.s1.c1.d'] = 'Optimized architecture to minimize lag input. Smooth navigation even on mid-range hardware.';
  T.it['feat.s1.c1.d'] = 'Architettura ottimizzata per ridurre al minimo l\'input di lag. Navigazione fluida anche su hardware di fascia media.';
  T.en['feat.s1.c2.t'] = 'Native Controller Support (XInput)';
  T.it['feat.s1.c2.t'] = 'Supporto Nativo Controller (XInput)';
  T.en['feat.s1.c2.d'] = 'Deep integration for Xbox pad (XInput). Full navigation of the interface. Includes special and configurable key combinations for additional functions.';
  T.it['feat.s1.c2.d'] = 'Integrazione profonda per pad Xbox (XInput). Navigazione totale dell\'interfaccia. Include combinazioni tasti speciali e configuarabili per funzioni aggiuntive.';
  T.en['feat.s1.c3.t'] = 'Lightweight Telemetry';
  T.it['feat.s1.c3.t'] = 'Telemetria Leggera';
  T.en['feat.s1.c3.d'] = 'Reduced resource consumption in the background to ensure all CPU/GPU power is dedicated to your games.';
  T.it['feat.s1.c3.d'] = 'Consumo risorse ridotto all\'osso in background per garantire che tutta la potenza della CPU/GPU sia dedicata ai tuoi giochi.';
  T.en['feat.s2.t'] = 'Open Ecosystem';
  T.it['feat.s2.t'] = 'Ecosistema Aperto';
  T.en['feat.s2.h'] = 'Your Library, Unified';
  T.it['feat.s2.h'] = 'La Tua Libreria, Unificata';
  T.en['feat.s2.li1.t'] = '1-Click Launch';
  T.it['feat.s2.li1.t'] = 'Lancio 1-Click';
  T.en['feat.s2.li1.d'] = 'Launch PC games, mods or emulated ROMs with a single input with no extra steps.';
  T.it['feat.s2.li1.d'] = 'Avvia giochi per PC, mod o Rom emulate con un singolo ingresso senza passaggi aggiuntivi.';
  T.en['feat.s2.li2.t'] = 'Emulation Integration';
  T.it['feat.s2.li2.t'] = 'Integrazione Emulazione';
  T.en['feat.s2.li2.d'] = 'Transparent support for the major emulators (working to expand support). Command-line arguments are handled internally.';
  T.it['feat.s2.li2.d'] = 'Supporto trasparente per i principali emulatori (lavorando per espandere il supporto). Gli argomenti della riga di comando vengono gestiti internamente.';
  T.en['feat.s2.li3.t'] = 'Mod Management';
  T.it['feat.s2.li3.t'] = 'Gestione Mod';
  T.en['feat.s2.li3.d'] = 'Built-in support for third-party launchers like r2modman. You can launch specific mod profiles by passing the correct signals/arguments to the profile.';
  T.it['feat.s2.li3.d'] = 'Supporto integrato per launcher di terze parti come r2modman. Possibilità di lanciare profili mod specifici passando i corretti segnali/argomenti al profilo.';
  T.en['feat.s3.t'] = 'Advanced Media Center';
  T.it['feat.s3.t'] = 'Media Center Avanzato';
  T.en['feat.s3.h'] = 'Beyond Gaming';
  T.it['feat.s3.h'] = 'Oltre il Gaming';
  T.en['feat.s3.d'] = 'A complete Home Theater experience. Organize your local library of movies and TV series and launch your favorite streaming services from the same interface.';
  T.it['feat.s3.d'] = 'Un\'esperienza Home Theater completa. Organizza la tua libreria locale di film e serie TV e lancia i tuoi servizi di streaming preferiti dalla stessa interfaccia.';
  T.en['feat.s3.b1.t'] = 'Local Library';
  T.it['feat.s3.b1.t'] = 'Libreria Locale';
  T.en['feat.s3.b1.d'] = 'Automatic scraping of covers, plots and cast for your local video files.';
  T.it['feat.s3.b1.d'] = 'Scraping automatico di cover, trame e cast per i tuoi file video locali.';
  T.en['feat.s3.b2.t'] = 'Streaming';
  T.it['feat.s3.b2.t'] = 'Streaming';
  T.en['feat.s3.b2.d'] = 'No visual disturbance during playback. Absolute convenience and total control via gamepad.';
  T.it['feat.s3.b2.d'] = 'Nessun disturbo visivo durante la riproduzione. Comodità assoluta e controllo totale tramite gamepad.';
  T.en['feat.s4.t'] = 'Status: Public Alpha';
  T.it['feat.s4.t'] = 'Stato: Alpha Pubblica';
  T.en['feat.s4.d'] = 'ALL IN ONE UI is currently in early development (v0.1.1-alpha). The core architecture is stable, but your contribution is essential. Please report any issues or bugs.';
  T.it['feat.s4.d'] = 'L\'interfaccia utente ALL IN ONE è attualmente in fase di sviluppo iniziale (v0.1.1-alpha). L\'architettura di base è stabile, ma il tuo contributo è essenziale. Segnala eventuali problemi o bug.';
  T.en['feat.s4.bug'] = 'Report Bug';
  T.it['feat.s4.bug'] = 'Report Bug';
  T.en['feat.s4.discord'] = 'Discord Community';
  T.it['feat.s4.discord'] = 'Discord Community';
  T.en['feat.fb.t'] = 'Help Us Improve';
  T.it['feat.fb.t'] = 'Aiutaci a Migliorare';
  T.en['feat.fb.intro'] = 'Early alpha: your feedback steers the roadmap. 30 seconds, no sign-up.';
  T.it['feat.fb.intro'] = 'Alpha precoce: il tuo feedback guida la roadmap. 30 secondi, niente registrazione.';
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
  T.en['dl.title'] = 'Download ALL IN ONE UI';
  T.it['dl.title'] = 'Download ALL IN ONE UI';
  T.en['dl.h1'] = 'Download ALL IN ONE UI Alpha';
  T.it['dl.h1'] = 'Scarica ALL IN ONE UI Alpha';
  T.en['dl.sub'] = 'Turn your PC into a high-performance game station and home theater. The ultimate experience right from your couch. Public alpha version v0.1.1.';
  T.it['dl.sub'] = 'Trasforma il tuo PC in una game station e home theater ad alte prestazioni. L\'esperienza definitiva direttamente dal tuo divano. Versione Alpha pubblica v0.1.1.';
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
