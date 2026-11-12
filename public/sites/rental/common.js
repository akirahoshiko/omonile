/* Haven Stays: shared helpers for every page (header, contact details, cards, forms, availability). */
window.HSU = (function (HS) {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var usd = function (n) { return "$" + n.toLocaleString("en-US"); };
  var src = function (k) { return "img/" + k + ".jpg"; };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var digits = function (s) { return s.replace(/[^\d+]/g, ""); };
  var byId = function (id) { return HS.P.filter(function (p) { return p.id == id; })[0]; };
  var bySlug = function (s) { return HS.P.filter(function (p) { return p.s == s; })[0]; };

  var ic = {
    g: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0113 0M16 4.5a3.5 3.5 0 010 7M18 14a6 6 0 013.5 6"/></svg>',
    b: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18V7M3 13h18v5M21 13a3 3 0 00-3-3h-7v3M7 11.5a1.5 1.5 0 100-.01"/></svg>',
    ba: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h18v2a5 5 0 01-5 5H8a5 5 0 01-5-5zM6 12V5a2 2 0 014 0M7 19l-1 2M17 19l1 2"/></svg>',
    ok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6-7-11a7 7 0 0114 0c0 5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>'
  };
  var heart = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7.5-4.6-9.3-9.2C1.5 7.6 3.6 4.5 6.9 4.5c2 0 3.4 1.1 5.1 3 1.7-1.9 3.1-3 5.1-3 3.3 0 5.4 3.1 4.2 6.3C19.5 15.4 12 20 12 20z"/></svg>';
  var stars = function (n) { return "★★★★★".slice(0, n) + "☆☆☆☆☆".slice(0, 5 - n); };

  // Link to a property page, carrying any dates/guests already chosen
  function stayUrl(p, q) {
    var u = "stay.html?s=" + p.s;
    if (q && q.ci && q.co) u += "&in=" + q.ci + "&out=" + q.co;
    if (q && q.g > 1) u += "&g=" + q.g;
    return u;
  }

  function card(p, saved, q) {
    return '<article class="card"><div class="ph"><img loading="lazy" decoding="async" src="' + src(p.im[0]) + '" alt="' + esc(HS.AL[p.im[0]]) + '"><span class="badge">' + HS.TL[p.t] + '</span>' +
      '<button class="heart" type="button" data-h="' + p.id + '" aria-pressed="' + !!(saved && saved[p.id]) + '" aria-label="Save ' + esc(p.n) + '">' + heart + '</button></div>' +
      '<div class="cbody"><span class="loc">' + esc(p.a) + '</span><div class="nrow"><h3>' + esc(p.n) + '</h3><span class="rt" aria-label="Rated ' + p.r + ' out of 5"><i aria-hidden="true">★</i> ' + p.r + '</span></div>' +
      '<div class="facts"><span>' + ic.g + p.g + ' guests</span><span>' + ic.b + p.b + ' bedroom' + (p.b > 1 ? "s" : "") + '</span><span>' + ic.ba + p.ba + ' bath' + (p.ba > 1 ? "s" : "") + '</span></div></div>' +
      '<div class="pr"><span class="price"><b>' + usd(p.p) + '</b> <span>/ night</span></span><a class="view" href="' + stayUrl(p, q) + '" aria-label="View ' + esc(p.n) + '">View <span aria-hidden="true">&rarr;</span></a></div></article>';
  }

  /* Availability: booked nights for each home. Can be fed from an iCal calendar. */
  var iso = function (d) { return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); };
  var parse = function (s) { var a = s.split("-"); return new Date(+a[0], a[1] - 1, +a[2]); };
  var addDays = function (d, n) { var x = new Date(d); x.setDate(x.getDate() + n); return x; };
  var today = function () { var t = new Date(); t.setHours(0, 0, 0, 0); return t; };
  function booked(p) {
    var seed = p.id * 9301 + 49297, rnd = function () { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    var set = {}, d = addDays(today(), 3 + Math.floor(rnd() * 5));
    while (d < addDays(today(), 200)) {
      var len = 2 + Math.floor(rnd() * 5);
      for (var i = 0; i < len; i++) set[iso(addDays(d, i))] = 1;
      d = addDays(d, len + 4 + Math.floor(rnd() * 12));
    }
    return set;
  }
  // Nights between two ISO dates (0 if missing, -1 if out <= in)
  function nights(ci, co) { if (!ci || !co) return 0; var n = Math.round((parse(co) - parse(ci)) / 864e5); return n > 0 ? n : -1; }
  // First booked night inside [ci, co), or ""
  function clash(p, ci, co, set) { set = set || booked(p); for (var d = parse(ci); d < parse(co); d = addDays(d, 1)) if (set[iso(d)]) return iso(d); return ""; }

  // Fill phone, email, WhatsApp and brand from data.js
  function fillSite() {
    var S = HS.SITE;
    $$("[data-c]").forEach(function (e) { e.textContent = S[e.dataset.c]; });
    $$("[data-tel]").forEach(function (e) { e.href = "tel:" + digits(S.phone); });
    $$("[data-wa]").forEach(function (e) { e.href = "https://wa.me/" + digits(S.whatsapp).replace("+", ""); });
    $$("[data-mail]").forEach(function (e) { e.href = "mailto:" + S.email; });
  }

  // Floating header, active section and mobile menu
  function header(ids) {
    var hdr = $("#hdr"), bg = $("#burger"), mn = $("#mnav");
    var secs = (ids || []).map(function (s) { return document.getElementById(s); }).filter(Boolean);
    function sc() {
      hdr.classList.toggle("small", scrollY > 30);
      if (!secs.length) return;
      var c = ""; secs.forEach(function (s) { if (s.getBoundingClientRect().top < 180) c = s.id; });
      $$("[data-s]").forEach(function (a) { if (a.dataset.s == c) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current"); a.classList.toggle("on", a.dataset.s == c); });
    }
    addEventListener("scroll", sc, { passive: true }); sc();
    function menu(o) { bg.setAttribute("aria-expanded", o); bg.setAttribute("aria-label", o ? "Close menu" : "Open menu"); mn.classList.toggle("open", o); }
    bg.onclick = function () { menu(bg.getAttribute("aria-expanded") != "true"); };
    $$("a", mn).forEach(function (a) { a.onclick = function () { menu(false); }; });
    document.addEventListener("keydown", function (e) { if (e.key == "Escape" && mn.classList.contains("open")) { menu(false); bg.focus(); } });
  }

  function reveal() {
    var rv = $$(".reveal");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }); }, { threshold: .1 });
      rv.forEach(function (r) { io.observe(r); });
    } else rv.forEach(function (r) { r.classList.add("in"); });
  }

  /* Forms: validated in the browser, sent through Formspree (SITE.form) */
  var okSvg = '<svg width="60" height="60" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="30" fill="#5A311F"/><path d="M19 33l9 9 17-19" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  function setErr(i, msg) { var e = document.getElementById(i.id + "e"); if (e) e.textContent = msg || ""; i.setAttribute("aria-invalid", msg ? "true" : "false"); if (e) i.setAttribute("aria-describedby", e.id); }
  function check(f) {
    var bad = null;
    $$("[required]", f).forEach(function (i) {
      var v = i.value.trim(), m = "";
      if (!v) m = "This field is required.";
      else if (i.type == "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) m = "Please enter a valid email address.";
      setErr(i, m); if (m && !bad) bad = i;
    });
    if (bad) bad.focus();
    return !bad;
  }
  // extra(): returns more fields to send, or a string error to block sending
  function wire(f, kind, title, txt, extra) {
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      if (f._busy || !check(f)) return;
      var more = extra ? extra() : {};
      if (typeof more == "string") { var pe = $(".fail", f); if (pe) pe.remove(); var m = document.createElement("p"); m.className = "er fail"; m.setAttribute("role", "alert"); m.textContent = more; $("button[type=submit]", f).insertAdjacentElement("afterend", m); return; }
      var name = $("input[autocomplete=name]", f).value.trim();
      var data = { _subject: HS.SITE.brand + ": " + kind + " from " + name, Form: kind, _gotcha: ($("[name=_gotcha]", f) || {}).value || "" };
      $$("input[id],select[id],textarea[id]", f).forEach(function (i) {
        var l = f.querySelector('label[for="' + i.id + '"]'), k = l ? l.textContent.replace("(optional)", "").trim() : i.id;
        data[k] = i.type == "checkbox" ? (i.checked ? "Yes" : "No") : i.value.trim();
      });
      for (var k in more) data[k] = more[k];
      var b = $("button[type=submit]", f), label = b.textContent, old = $(".fail", f);
      if (old) old.remove();
      f._busy = 1; b.disabled = true; b.textContent = "Sending…";
      fetch(HS.SITE.form, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) })
        .then(function (r) {
          if (!r.ok) throw new Error(r.status);
          f.innerHTML = '<div class="ok" role="status" tabindex="-1">' + okSvg + '<h3>' + title + '</h3><p>' + txt + '</p></div>';
          $(".ok", f).focus();
        })
        .catch(function () {
          b.disabled = false; b.textContent = label;
          var p = document.createElement("p"); p.className = "er fail"; p.setAttribute("role", "alert");
          p.textContent = "Sorry, that didn't send. Please try again, or email us directly.";
          b.insertAdjacentElement("afterend", p);
        })
        .then(function () { f._busy = 0; });
    });
  }

  return {
    $: $, $$: $$, usd: usd, src: src, esc: esc, ic: ic, heart: heart, stars: stars,
    byId: byId, bySlug: bySlug, card: card, stayUrl: stayUrl,
    iso: iso, parse: parse, addDays: addDays, today: today, booked: booked, nights: nights, clash: clash,
    fillSite: fillSite, header: header, reveal: reveal, wire: wire
  };
})(window.HS);
