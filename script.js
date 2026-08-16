(function(){
  "use strict";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- i18n ---------- */
  var i18n = {
    en: {
      heroRole: "Aspiring Tech Sales · Bridging Product, People & Code",
      ctaEmail: "Email me", ctaLinkedin: "LinkedIn", ctaPortfolio: "Web Tools Portfolio ↗", ctaResume: "Résumé (PDF)",
      aboutP1: "Eight years on the sales floor of three of Switzerland's best-known luxury houses — Bucherer, Swatch and Coop City — reading a customer's intent in the first ten seconds, translating technical detail (movements, materials, provenance) into a story that closes the sale, in German, English, Chinese and Spanish.",
      aboutP2: "Outside working hours I taught myself to ship real software. Since 2025 I've solo-built and deployed a portfolio of 12+ live web tools — using AI coding agents as my engineering partner — handling everything from product decisions to SEO, analytics and monetization myself. This page is one of them.",
      whyHeading: "Why Tech Sales",
      whyCard1Title: "Customer-facing DNA", whyCard1Body: "Years of reading people face-to-face, handling objections, and closing — the muscle every SaaS demo call also needs.",
      whyCard2Title: "Multilingual, DE/EN/ZH/ES", whyCard2Body: "Native-level Chinese, fluent German and English, conversational Spanish — able to sell and support across markets without a translator.",
      whyCard3Title: "Self-taught builder", whyCard3Body: "No CS degree, no bootcamp — just 12+ shipped tools, real users, real GA4 data. I understand the product, not just the pitch.",
      whyCard4Title: "Owns the whole funnel", whyCard4Body: "Every tool I ship, I also position, SEO-optimize, and monetize myself — I think in outcomes, not just tasks.",
      expHeading: "Experience",
      present: "present",
      exp1Role: "Luxury Sales Advisor & Product Manager",
      exp1B1: "Main point of contact for demanding national & international clients buying luxury watches and jewelry.",
      exp1B2: "Worked daily across four languages (Mandarin / German / English / Spanish) to serve an international clientele.",
      exp1B3: "Owned visual merchandising, stock management and the department's main till.",
      exp2Role: "Sales Advisor · International Client Specialist",
      exp2B1: "Advised demanding national and international clients on watches and jewelry through personalized consultations.",
      exp2B2: "Managed tour-operator relationships and international group bookings.",
      exp2B3: "Helped shape daily boutique operations and team spirit.",
      exp3Role: "Sales Advisor & Customer Service, Watch & Jewelry",
      exp3B1: "Customer-oriented consulting and proactive service across watches and jewelry.",
      exp3B2: "Trained new team members on brand standards and product knowledge.",
      exp4Role: "Independent Web Tools Portfolio · Solo Builder",
      exp4B1: "Solo-shipped 12+ live tools (calculators, planners, a resume builder, a Hugo blog) using AI coding agents as a build partner.",
      exp4B2: "Owns the full stack of a real micro-business: SEO, GA4 analytics, AdSense monetization, GDPR-compliant cookie consent, trilingual UX.",
      exp4B3: "This very page — animated, zero-framework, hand-built in a single session — is a live work sample, not a mockup.",
      skillsHeading: "Skills",
      skillGroup1: "Sales & Client Relations", skillGroup2: "Languages", skillGroup3: "Tech & Tools",
      proofHeading: "Proof of Work — live, not slides",
      proof1: "Trilingual zodiac calculator, custom SVG wheel.",
      proof2: "Free tool for splitting people into fair groups.",
      proof3: "Real CHF market-price data for luxury watches.",
      contactHeading: "./get_in_touch.sh",
      contactBody: "Open to Tech Sales / SDR / Account Executive conversations — Swiss & DACH region or remote.",
      footer: "Built solo with Claude Code — no template, no agency."
    },
    de: {
      heroRole: "Angehender Tech Sales · Verbindet Produkt, Menschen & Code",
      ctaEmail: "E-Mail schreiben", ctaLinkedin: "LinkedIn", ctaPortfolio: "Web-Tools-Portfolio ↗", ctaResume: "Lebenslauf (PDF)",
      aboutP1: "Acht Jahre im Verkauf bei drei der bekanntesten Schweizer Luxushäuser — Bucherer, Swatch und Coop City — erkenne die Absicht einer Kundin in den ersten zehn Sekunden, übersetze technische Details (Uhrwerke, Materialien, Herkunft) in eine Geschichte, die zum Kauf führt — auf Deutsch, Englisch, Chinesisch und Spanisch.",
      aboutP2: "Neben der Arbeit habe ich mir das Programmieren selbst beigebracht. Seit 2025 habe ich im Alleingang ein Portfolio von 12+ live geschalteten Web-Tools gebaut und veröffentlicht — mit KI-Coding-Agenten als technischem Partner — von Produktentscheidungen über SEO bis Monetarisierung, alles selbst. Diese Seite ist eines davon.",
      whyHeading: "Warum Tech Sales",
      whyCard1Title: "Kundenkontakt im Blut", whyCard1Body: "Jahrelange Erfahrung im direkten Gespräch, im Umgang mit Einwänden und beim Abschluss — genau das, was auch jeder SaaS-Demo-Call braucht.",
      whyCard2Title: "Mehrsprachig DE/EN/ZH/ES", whyCard2Body: "Chinesisch auf Muttersprachniveau, fliessend Deutsch und Englisch, Spanisch im Gespräch — Verkauf und Support über Märkte hinweg, ohne Übersetzer.",
      whyCard3Title: "Autodidaktischer Entwickler", whyCard3Body: "Kein Informatikstudium, kein Bootcamp — nur 12+ live Tools, echte Nutzer, echte GA4-Daten. Ich verstehe das Produkt, nicht nur den Pitch.",
      whyCard4Title: "Denkt den ganzen Funnel mit", whyCard4Body: "Jedes Tool, das ich baue, positioniere, SEO-optimiere und monetarisiere ich auch selbst — ich denke in Ergebnissen, nicht nur in Aufgaben.",
      expHeading: "Werdegang",
      present: "heute",
      exp1Role: "Verkaufsberaterin Luxusuhren/Schmuck & Product Manager",
      exp1B1: "Hauptansprechpartnerin für anspruchsvolle nationale & internationale Kund:innen beim Kauf von Luxusuhren und Schmuck.",
      exp1B2: "Täglicher Einsatz von vier Sprachen (Mandarin/Deutsch/Englisch/Spanisch) zur Betreuung internationaler Kundschaft.",
      exp1B3: "Verantwortlich für Visual Merchandising, Warenbewirtschaftung und die Hauptkasse der Abteilung.",
      exp2Role: "Verkaufsberaterin · Spezialistin Internationale Kunden",
      exp2B1: "Beratung anspruchsvoller nationaler sowie internationaler Kund:innen in Uhren und Schmuck durch persönliche Beratung.",
      exp2B2: "Betreuung der Tour Operator und internationalen Kundengruppen.",
      exp2B3: "Positive Mitgestaltung des täglichen Boutique-Betriebs und Förderung des Teamspirits.",
      exp3Role: "Verkaufsberaterin & Kundenbetreuerin, Uhren & Schmuck",
      exp3B1: "Kundenorientierte Beratung und proaktive Betreuung im Bereich Uhren und Schmuck.",
      exp3B2: "Einarbeitung neuer Teammitglieder in Markenstandards und Produktwissen.",
      exp4Role: "Unabhängiges Web-Tools-Portfolio · Alleinentwickler",
      exp4B1: "Im Alleingang 12+ live Tools gebaut (Rechner, Planer, ein Lebenslauf-Generator, ein Hugo-Blog) — mit KI-Coding-Agenten als Baupartner.",
      exp4B2: "Verantwortet den kompletten Stack eines echten Kleinstunternehmens: SEO, GA4-Analytics, AdSense-Monetarisierung, DSGVO-konforme Cookie-Zustimmung, dreisprachige UX.",
      exp4B3: "Genau diese Seite — animiert, ohne Framework, in einer Session von Hand gebaut — ist eine echte Arbeitsprobe, kein Mockup.",
      skillsHeading: "Fähigkeiten",
      skillGroup1: "Verkauf & Kundenbeziehungen", skillGroup2: "Sprachen", skillGroup3: "Technik & Tools",
      proofHeading: "Arbeitsproben — live, keine Folien",
      proof1: "Dreisprachiger Tierkreis-Rechner mit eigenem SVG-Rad.",
      proof2: "Kostenloses Tool zum fairen Aufteilen von Gruppen.",
      proof3: "Echte CHF-Marktpreisdaten für Luxusuhren.",
      contactHeading: "./kontakt_aufnehmen.sh",
      contactBody: "Offen für Gespräche zu Tech Sales / SDR / Account Executive — Schweiz & DACH-Raum oder remote.",
      footer: "Im Alleingang mit Claude Code gebaut — keine Vorlage, keine Agentur."
    }
  };

  var STORAGE_KEY = "tscLang";
  function applyLang(lang){
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var key = el.getAttribute("data-i18n");
      var dict = i18n[lang] || i18n.en;
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll(".lang-btn").forEach(function(btn){
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
    var typeTarget = document.getElementById("typeTarget");
    if (typeTarget) startTypewriter(typeTarget, typeTarget.getAttribute("data-" + lang) || typeTarget.getAttribute("data-en"));
  }
  document.querySelectorAll(".lang-btn").forEach(function(btn){
    btn.addEventListener("click", function(){
      var lang = btn.getAttribute("data-lang");
      localStorage.setItem(STORAGE_KEY, lang);
      applyLang(lang);
    });
  });

  /* ---------- typewriter ---------- */
  var typeTimer = null;
  function startTypewriter(el, text){
    clearTimeout(typeTimer);
    if (reduceMotion){ el.textContent = text; return; }
    el.textContent = "";
    var i = 0;
    (function step(){
      el.textContent = text.slice(0, i);
      i++;
      if (i <= text.length) typeTimer = setTimeout(step, 18);
    })();
  }

  /* ---------- scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting){
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add("in-view"); });
  }

  /* ---------- terminal clock ---------- */
  var clockEl = document.getElementById("clock");
  function tickClock(){
    if (!clockEl) return;
    var now = new Date();
    var hh = String(now.getHours()).padStart(2, "0");
    var mm = String(now.getMinutes()).padStart(2, "0");
    var ss = String(now.getSeconds()).padStart(2, "0");
    clockEl.textContent = hh + ":" + mm + ":" + ss;
  }
  tickClock();
  setInterval(tickClock, 1000);

  /* ---------- particle network background ---------- */
  var bgCanvas = document.getElementById("bgCanvas");
  var bgCtx = bgCanvas.getContext("2d");
  var particles = [];
  var mouse = { x: null, y: null };

  function resizeBg(){
    bgCanvas.width = window.innerWidth;
    bgCanvas.height = document.documentElement.scrollHeight;
  }
  function initParticles(){
    var count = Math.min(70, Math.floor((window.innerWidth * window.innerHeight) / 22000));
    particles = [];
    for (var i = 0; i < count; i++){
      particles.push({
        x: Math.random() * bgCanvas.width,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25
      });
    }
  }
  function drawBg(){
    bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
    var viewTop = window.scrollY;
    var viewBottom = viewTop + window.innerHeight;
    bgCtx.strokeStyle = "rgba(92, 242, 176, 0.14)";
    bgCtx.fillStyle = "rgba(92, 242, 176, 0.55)";

    for (var i = 0; i < particles.length; i++){
      var p = particles[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > bgCanvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;
      var drawY = p.y + viewTop;
      if (drawY < viewTop - 50 || drawY > viewBottom + 50) continue;
      bgCtx.beginPath();
      bgCtx.arc(p.x, drawY, 1.6, 0, Math.PI * 2);
      bgCtx.fill();
      for (var j = i + 1; j < particles.length; j++){
        var q = particles[j];
        var dx = p.x - q.x, dy = p.y - q.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130){
          bgCtx.globalAlpha = 1 - dist / 130;
          bgCtx.beginPath();
          bgCtx.moveTo(p.x, drawY);
          bgCtx.lineTo(q.x, q.y + viewTop);
          bgCtx.stroke();
          bgCtx.globalAlpha = 1;
        }
      }
    }
    requestAnimationFrame(drawBg);
  }

  if (!reduceMotion){
    function reinitBg(){ resizeBg(); initParticles(); }
    reinitBg();
    drawBg();
    window.addEventListener("resize", reinitBg);
    window.addEventListener("load", reinitBg);
    // Layout can still settle (fonts, viewport handoff) after this script runs —
    // re-measure once more shortly after so the canvas isn't stuck at a 0×0 or stale size.
    setTimeout(reinitBg, 300);
  }

  /* ---------- matrix rain easter egg ---------- */
  var matrixCanvas = document.getElementById("matrixCanvas");
  var matrixCtx = matrixCanvas.getContext("2d");
  var matrixBtn = document.getElementById("matrixToggle");
  var matrixOn = false;
  var matrixDrops = [];
  var matrixChars = "01アイウエオカキクケコJKサシスセソ";

  function resizeMatrix(){
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
    var cols = Math.floor(matrixCanvas.width / 16);
    matrixDrops = new Array(cols).fill(0);
  }
  function drawMatrix(){
    if (!matrixOn) return;
    matrixCtx.fillStyle = "rgba(10, 14, 20, 0.12)";
    matrixCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    matrixCtx.fillStyle = "#5CF2B0";
    matrixCtx.font = "14px monospace";
    for (var i = 0; i < matrixDrops.length; i++){
      var ch = matrixChars[Math.floor(Math.random() * matrixChars.length)];
      matrixCtx.fillText(ch, i * 16, matrixDrops[i] * 16);
      if (matrixDrops[i] * 16 > matrixCanvas.height && Math.random() > 0.975) matrixDrops[i] = 0;
      matrixDrops[i]++;
    }
    requestAnimationFrame(drawMatrix);
  }
  if (matrixBtn){
    matrixBtn.addEventListener("click", function(){
      matrixOn = !matrixOn;
      matrixBtn.setAttribute("aria-pressed", String(matrixOn));
      matrixCanvas.classList.toggle("on", matrixOn);
      if (matrixOn){ resizeMatrix(); drawMatrix(); }
    });
    window.addEventListener("resize", function(){ if (matrixOn) resizeMatrix(); });
  }

  /* ---------- init ---------- */
  var savedLang = localStorage.getItem(STORAGE_KEY) || "en";
  applyLang(savedLang);
})();
