/* =========================================================
   Ford Mustang — scripts
   1) Άνοιγμα/κλείσιμο μενού σε μικρές οθόνες
   2) Απλό lightbox για τη σελίδα «Πολυμέσα»
   ========================================================= */

(function () {
  "use strict";

  /* ---------- Μενού ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("mainnav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      var isOpen = nav.classList.contains("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  /* ---------- Lightbox ---------- */
  var links = document.querySelectorAll(".lightbox-link");
  var box = document.getElementById("lightbox");
  var caption = document.getElementById("lightbox-caption");

  if (links.length && box) {
    var bigImage = document.createElement("img");
    bigImage.alt = "";

    function closeBox() {
      box.classList.remove("open");
    }

    function openBox(link) {
      bigImage.src = link.getAttribute("href");
      bigImage.alt = link.getAttribute("data-caption") || "";
      if (!box.querySelector("img")) {
        box.insertBefore(bigImage, caption);
      }
      caption.textContent = link.getAttribute("data-caption") || "";
      box.classList.add("open");
    }

    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function (event) {
        event.preventDefault();
        openBox(this);
      });
    }

    box.addEventListener("click", function (event) {
      if (event.target === box || event.target.className === "lightbox-close") {
        closeBox();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeBox();
      }
    });
  }
})();
