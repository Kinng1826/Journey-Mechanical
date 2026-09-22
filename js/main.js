(function () {
  "use strict";

  function safe(fn) {
    try {
      fn();
    } catch (err) {
      if (window.console && console.error) console.error(err);
    }
  }

  safe(function () {
    var header = document.querySelector(".site-header");
    var onScroll = function () {
      if (!header) return;
      if (window.scrollY > 12) header.classList.add("is-scrolled");
      else header.classList.remove("is-scrolled");
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  });

  safe(function () {
    var navToggle = document.querySelector(".nav-toggle");
    var mobileNav = document.querySelector(".mobile-nav");
    var mobileNavClose = document.querySelector(".mobile-nav-close");
    function openNav() {
      if (!mobileNav) return;
      mobileNav.classList.add("is-open");
      document.body.classList.add("nav-open");
    }
    function closeNav() {
      if (!mobileNav) return;
      mobileNav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
    }
    if (navToggle) navToggle.addEventListener("click", openNav);
    if (mobileNavClose) mobileNavClose.addEventListener("click", closeNav);
    if (mobileNav) {
      mobileNav.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", closeNav);
      });
    }
  });

  safe(function () {
    var revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && revealEls.length) {
      var revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -60px 0px" }
      );
      revealEls.forEach(function (el) {
        revealObserver.observe(el);
      });
    } else {
      revealEls.forEach(function (el) {
        el.classList.add("is-visible");
      });
    }
  });

  safe(function () {
    var journey = document.querySelector(".journey");
    if (journey && "IntersectionObserver" in window) {
      var steps = journey.querySelectorAll(".journey-step");
      var track = journey.querySelector(".journey-track-fill");
      var journeyObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              var idx = Array.prototype.indexOf.call(steps, entry.target);
              entry.target.classList.add("is-visible");
              if (track) {
                var pct = ((idx + 1) / steps.length) * 88;
                track.style.width = pct + "%";
              }
              journeyObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      steps.forEach(function (el) {
        journeyObserver.observe(el);
      });
    }
  });

  safe(function () {
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var layers = document.querySelectorAll("[data-parallax]");
    if (reduceMotion || !layers.length) return;
    var ticking = false;
    function update() {
      layers.forEach(function (el) {
        var speed = parseFloat(el.getAttribute("data-parallax")) || 0.15;
        var rect = el.getBoundingClientRect();
        var offset = (rect.top - window.innerHeight / 2) * speed;
        el.style.transform = "translate3d(0," + offset.toFixed(1) + "px,0)";
      });
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }
    document.addEventListener("scroll", onScroll, { passive: true });
    update();
  });

  safe(function () {
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });

  safe(function () {
    var form = document.getElementById("quote-form");
    if (form) {
      form.addEventListener("submit", function (e) {
        var honeypot = form.querySelector('input[name="_honey"]');
        if (honeypot && honeypot.value) {
          e.preventDefault();
        }
      });
    }
  });

  safe(function () {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (e) {
        var id = link.getAttribute("href");
        if (id.length < 2) return;
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  });
})();
