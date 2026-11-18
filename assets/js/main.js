// Menu, Calendly loader and contact form. No dependencies.
(function () {
  "use strict";

  // ---------- mobile menu ----------
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("open", open);
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  // ---------- Calendly: only loaded after a click (no cookies before that) ----------
  var calendlyPromise = null;
  function loadCalendly() {
    if (window.Calendly) return Promise.resolve();
    if (calendlyPromise) return calendlyPromise;
    calendlyPromise = new Promise(function (resolve, reject) {
      var css = document.createElement("link");
      css.rel = "stylesheet";
      css.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(css);
      var s = document.createElement("script");
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      s.onload = function () { resolve(); };
      s.onerror = function () { calendlyPromise = null; reject(); };
      document.head.appendChild(s);
    });
    return calendlyPromise;
  }
  document.addEventListener("click", function (e) {
    var link = e.target.closest && e.target.closest("a[data-calendly]");
    if (!link || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    loadCalendly()
      .then(function () { window.Calendly.initPopupWidget({ url: link.href }); })
      .catch(function () { window.open(link.href, "_blank", "noopener"); });
  });

  // ---------- contact form ----------
  var form = document.querySelector(".contact-form");
  if (form) {
    var status = form.querySelector(".form-status");
    var d = form.dataset;
    var say = function (msg, kind) {
      status.textContent = msg;
      status.className = "form-status" + (kind ? " is-" + kind : "");
    };
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var data = new FormData(form);
      if (data.get("_gotcha")) return; // spam bot

      if (d.endpoint) {
        say(d.msgSending);
        fetch(d.endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } })
          .then(function (r) {
            if (!r.ok) throw new Error(String(r.status));
            form.reset();
            say(d.msgSuccess, "ok");
          })
          .catch(function () { say(d.msgError, "error"); });
        return;
      }

      // No endpoint: open a pre-filled email
      var lines = [
        String(data.get("message") || ""),
        "",
        "--",
        d.lName + ": " + (data.get("name") || ""),
        d.lEmail + ": " + (data.get("email") || ""),
      ];
      if (data.get("phone")) lines.push(d.lPhone + ": " + data.get("phone"));
      if (data.get("business")) lines.push(d.lBusiness + ": " + data.get("business"));
      say(d.msgMail, "ok");
      window.location.href = "mailto:" + d.mailto +
        "?subject=" + encodeURIComponent(d.subject) +
        "&body=" + encodeURIComponent(lines.join("\n"));
    });
  }
})();
