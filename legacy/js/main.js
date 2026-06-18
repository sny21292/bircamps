/* ============================================================
   BIR CAMPS — interactions
   ============================================================ */
(function () {
  "use strict";

  /* ---- year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- nav frost on scroll + progress bar ---- */
  var nav = document.getElementById("nav");
  var progress = document.querySelector(".scroll-progress span");

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (nav) nav.classList.toggle("scrolled", y > 40);

    if (progress) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- mobile menu ---- */
  var burger = document.getElementById("burger");
  var menu = document.getElementById("mobileMenu");
  function toggleMenu(force) {
    var open = typeof force === "boolean" ? force : !menu.classList.contains("open");
    menu.classList.toggle("open", open);
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
  }
  if (burger && menu) {
    burger.addEventListener("click", function () { toggleMenu(); });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { toggleMenu(false); });
    });
  }

  /* ---- reveal on scroll ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- count-up stats ---- */
  var counters = document.querySelectorAll(".stat__num[data-count]");
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var dur = 1400, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target).toLocaleString("en-IN");
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window && counters.length) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { animateCount(entry.target); co.unobserve(entry.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { co.observe(el); });
  }

  /* ---- subtle hero parallax ---- */
  var sun = document.querySelector(".hero__sun");
  var ridges = document.querySelectorAll(".ridge");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduce) {
    window.addEventListener("scroll", function () {
      var y = window.scrollY || 0;
      if (y > window.innerHeight) return;
      if (sun) sun.style.transform = "translateY(" + y * 0.25 + "px)";
      ridges.forEach(function (r, i) {
        r.style.transform = "translateY(" + y * (0.04 * (i + 1)) + "px)";
      });
    }, { passive: true });
  }

  /* ---- paraglider follows the mouse (floaty kite) ---- */
  var hero = document.getElementById("hero");
  var glider = document.querySelector(".glider");
  var finePointer = window.matchMedia("(pointer: fine)").matches;

  if (glider && hero && finePointer && !reduce) {
    glider.classList.add("glider--interactive");

    var gx = window.innerWidth * 0.32, gy = window.innerHeight * 0.3; // current pos
    var tx = gx, ty = gy;                                            // target pos
    var lastX = gx;
    var active = false, idleStart = performance.now();

    hero.addEventListener("pointermove", function (e) {
      tx = e.clientX; ty = e.clientY; active = true;
    });
    hero.addEventListener("pointerleave", function () {
      active = false; idleStart = performance.now();
    });

    function frame(now) {
      // when the cursor is away, drift in a slow, lazy figure-eight
      if (!active) {
        var t = (now - idleStart) / 1000;
        tx = window.innerWidth * (0.5 + 0.34 * Math.sin(t * 0.45));
        ty = window.innerHeight * (0.30 + 0.13 * Math.sin(t * 0.9));
      }
      // ease toward the target — the lag is what makes it feel like it's gliding
      gx += (tx - gx) * 0.055;
      gy += (ty - gy) * 0.055;

      var vel = gx - lastX; lastX = gx;
      var tilt = Math.max(-20, Math.min(20, vel * 0.9));   // bank into the turn
      var bob = Math.sin(now / 900) * 4;                    // gentle vertical sway
      // sink with the scroll, as if coming in to land
      var descent = Math.min(window.scrollY || 0, window.innerHeight) * 0.5;
      var w = glider.offsetWidth, h = glider.offsetHeight;

      glider.style.transform =
        "translate(" + (gx - w / 2) + "px," + (gy - h * 0.5 + bob + descent) + "px) rotate(" + tilt + "deg)";
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
})();
