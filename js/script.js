/* Marmm The Klinik — script.js
   Handles: mobile nav menu, tabs, booking form, floating buttons */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 1. MOBILE NAV MENU ---------- */
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');

  if (burger && navLinks) {
    burger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    //    burger.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        // burger.classList.remove('active');
      });
    });
  }

  // document.addEventListener("DOMContentLoaded", function () {

  // /* Mobile Nav Toggle */
  // const burger = document.getElementById("burger");
  // const navLinks = document.getElementById("navLinks");

  // if (burger && navLinks) {
    // burger.addEventListener("click", function () {
      // navLinks.classList.toggle("open");
    // });

    // navLinks.querySelectorAll("a").forEach(function (link) {
      // link.addEventListener("click", function () {
        // navLinks.classList.remove("open");
      // });
    // });
  // }

  /* ---------- 2. TABS ---------- */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const target = btn.getAttribute('data-tab');

      tabButtons.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      tabPanels.forEach(function (p) {
        p.classList.remove('active');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const panel = document.querySelector('.tab-panel[data-panel="' + target + '"]');
      if (panel) panel.classList.add('active');
    });
  });

  /* ---------- 3. BOOKING FORM -> WHATSAPP ---------- */
  const consultForm = document.getElementById('consultForm');
  const formError = document.getElementById('formError');
  const formSuccess = document.getElementById('formSuccess');

  // IMPORTANT: change this number if the clinic's WhatsApp number ever changes.
  const CLINIC_WHATSAPP_NUMBER = '919826988855';

  if (consultForm) {
    consultForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('fName').value.trim();
      const phone = document.getElementById('fPhone').value.trim();
      const service = document.getElementById('fService').value;
      const date = document.getElementById('fDate').value;
      const message = document.getElementById('fMsg').value.trim();

      formError.classList.remove('show');
      formSuccess.classList.remove('show');

      // Basic validation
      if (!name || !phone || !service) {
        formError.textContent = 'Please fill in your name, phone number, and select a service.';
        formError.classList.add('show');
        return;
      }

      const phoneDigitsOnly = phone.replace(/\D/g, '');
      if (phoneDigitsOnly.length < 10) {
        formError.textContent = 'Please enter a valid phone number (at least 10 digits).';
        formError.classList.add('show');
        return;
      }

      // Build the WhatsApp message
      let text = 'Hello Marmm The Klinik, I would like to book a consultation.\n\n';
      text += 'Name: ' + name + '\n';
      text += 'Phone: ' + phone + '\n';
      text += 'Service: ' + service + '\n';
      if (date) text += 'Preferred Date: ' + date + '\n';
      if (message) text += 'Message: ' + message;

      const url = 'https://wa.me/' + CLINIC_WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text);

      formSuccess.textContent = 'Opening WhatsApp with your details...';
      formSuccess.classList.add('show');

      window.open(url, '_blank');
      consultForm.reset();
    });
  }

  /* ---------- 4. BACK TO TOP BUTTON ---------- */
  const backToTop = document.getElementById('backToTop');

  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
function goToAchievements() {
    window.location.href = "achievements.html";
    document.getElementById("heroVideo").play();
}


  /* Mute / Unmute Hero Background Video */
  const heroVideo = document.getElementById("heroVideo");
  const muteToggle = document.getElementById("muteToggle");

  if (heroVideo && muteToggle) {
    muteToggle.addEventListener("click", function () {
      heroVideo.muted = !heroVideo.muted;
      muteToggle.textContent = heroVideo.muted ? "🔇 Unmute" : "🔊 Mute";
    });
  }
/* ======================================
   ABOUT PAGE
====================================== */

document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".why-card, .room-card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold:0.2

    });

    cards.forEach(card => {

        observer.observe(card);

    });

});

// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ==============================
// Scroll Animation
// ==============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".service-content,.card").forEach(item=>{

    observer.observe(item);

});

document.addEventListener("DOMContentLoaded", () => {

    const sliders = document.querySelectorAll(".achievement-slider");

    sliders.forEach((slider) => {

        const slides = slider.querySelector(".slides");
        const images = slider.querySelectorAll(".slides img");
        const prevBtn = slider.querySelector(".slider-btn.prev");
        const nextBtn = slider.querySelector(".slider-btn.next");
        const dotsContainer = slider.querySelector(".slider-dots");

        if (!slides || images.length === 0) return;

        let currentIndex = 0;

        /* ---------- DOTS ---------- */

        images.forEach((image, index) => {

            const dot = document.createElement("span");

            dot.classList.add("slider-dot");

            if (index === 0) {
                dot.classList.add("active");
            }

            dot.addEventListener("click", () => {
                currentIndex = index;
                showSlide();
            });

            dotsContainer.appendChild(dot);
        });

        const dots = dotsContainer.querySelectorAll(".slider-dot");


        /* ---------- SHOW SLIDE ---------- */

        function showSlide() {

            slides.style.transform =
                `translateX(-${currentIndex * 100}%)`;

            dots.forEach((dot, index) => {

                dot.classList.toggle(
                    "active",
                    index === currentIndex
                );

            });
        }


        /* ---------- NEXT ---------- */

        if (nextBtn) {

            nextBtn.addEventListener("click", (e) => {

                e.preventDefault();

                currentIndex++;

                if (currentIndex >= images.length) {
                    currentIndex = 0;
                }

                showSlide();

            });

        }


        /* ---------- PREVIOUS ---------- */

        if (prevBtn) {

            prevBtn.addEventListener("click", (e) => {

                e.preventDefault();

                currentIndex--;

                if (currentIndex < 0) {
                    currentIndex = images.length - 1;
                }

                showSlide();

            });

        }


        /* ---------- MOBILE SWIPE ---------- */

        let startX = 0;
        let endX = 0;

        slider.addEventListener("touchstart", (e) => {

            startX = e.touches[0].clientX;

        }, { passive: true });


        slider.addEventListener("touchend", (e) => {

            endX = e.changedTouches[0].clientX;

            const difference = startX - endX;

            if (Math.abs(difference) < 50) return;


            if (difference > 0) {

                // Swipe left → next
                currentIndex++;

                if (currentIndex >= images.length) {
                    currentIndex = 0;
                }

            } else {

                // Swipe right → previous
                currentIndex--;

                if (currentIndex < 0) {
                    currentIndex = images.length - 1;
                }

            }

            showSlide();

        }, { passive: true });


        /* First slide */

        showSlide();

    });

});

/* =====================================================
   INTERNATIONAL TRAINING SLIDERS
===================================================== */

document.querySelectorAll(".training-slider").forEach((slider) => {

    const track = slider.querySelector(".slider-track");

    const images = slider.querySelectorAll(".slider-track img");

    const prevButton = slider.querySelector(".prev");

    const nextButton = slider.querySelector(".next");

    const dotsContainer = slider.querySelector(".slider-dots");


    let currentIndex = 0;

    let autoSlide;


    /* =========================
       CREATE DOTS
    ========================= */

    images.forEach((image, index) => {

        const dot = document.createElement("button");

        dot.type = "button";

        dot.classList.add("slider-dot");

        dot.setAttribute(
            "aria-label",
            `Go to image ${index + 1}`
        );


        if (index === 0) {

            dot.classList.add("active");

        }


        dot.addEventListener("click", () => {

            currentIndex = index;

            updateSlider();

            restartAutoSlide();

        });


        dotsContainer.appendChild(dot);

    });


    const dots =
        dotsContainer.querySelectorAll(".slider-dot");


    /* =========================
       UPDATE SLIDER
    ========================= */

    function updateSlider() {

        track.style.transform =
            `translateX(-${currentIndex * 100}%)`;


        dots.forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentIndex
            );

        });

    }


    /* =========================
       NEXT
    ========================= */

    function nextSlide() {

        currentIndex++;

        if (currentIndex >= images.length) {

            currentIndex = 0;

        }

        updateSlider();

    }


    /* =========================
       PREVIOUS
    ========================= */

    function previousSlide() {

        currentIndex--;

        if (currentIndex < 0) {

            currentIndex = images.length - 1;

        }

        updateSlider();

    }


    /* =========================
       BUTTONS
    ========================= */

    nextButton.addEventListener(
        "click",
        () => {

            nextSlide();

            restartAutoSlide();

        }
    );


    prevButton.addEventListener(
        "click",
        () => {

            previousSlide();

            restartAutoSlide();

        }
    );


    /* =========================
       AUTO SLIDE
       4.5 SECONDS
    ========================= */

    function startAutoSlide() {

        autoSlide = setInterval(
            nextSlide,
            4500
        );

    }


    function restartAutoSlide() {

        clearInterval(autoSlide);

        startAutoSlide();

    }


    /* =========================
       PAUSE ON HOVER
    ========================= */

    slider.addEventListener(
        "mouseenter",
        () => {

            clearInterval(autoSlide);

        }
    );


    slider.addEventListener(
        "mouseleave",
        () => {

            startAutoSlide();

        }
    );


    /* =========================
       INITIALIZE
    ========================= */

    updateSlider();

    startAutoSlide();

});

document.addEventListener("DOMContentLoaded", function () {

    const backButton = document.getElementById("backButton");

    if (backButton) {
        backButton.addEventListener("click", function () {

            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = "index.html";
            }

        });
    }

});





function openOffer(id) {


    const modal = document.getElementById(id);


    if (modal) {


        modal.classList.add("active");


        document.body.classList.add("modal-open");


    }


}




function closeOffer(id) {


    const modal = document.getElementById(id);


    if (modal) {


        modal.classList.remove("active");


        document.body.classList.remove("modal-open");


    }


}




/* Close popup with ESC */


document.addEventListener("keydown", function(event) {


    if (event.key === "Escape") {


        document.querySelectorAll(".offer-modal.active")
            .forEach(function(modal) {


                modal.classList.remove("active");


            });


        document.body.classList.remove("modal-open");


    }


});

/* =========================================================
   FACIAL TREATMENT DETAILS POPUP
   ========================================================= */

const facialDetails = {

    hydra: {
        category: "SKIN CARE",
        title: "Hydra Facial",
        image: "assets/videos/images/hydra.jpg",

        description:
            "A deep cleansing and hydration treatment designed to refresh the skin, remove impurities and leave it looking smooth, fresh and radiant.",

        details: [
            "<strong>Focus:</strong> Deep cleansing & hydration",
            "<strong>Best for:</strong> Dull, dry and dehydrated skin",
            "<strong>Benefits:</strong> Cleanses pores and improves skin radiance",
            "<strong>Goal:</strong> Fresh, smooth and hydrated-looking skin"
        ]
    },


    carbon: {
        category: "LASER FACIAL",
        title: "Carbon Laser Facial",
        image: "assets/videos/images/carbon.jpg",

        description:
            "An advanced laser facial treatment designed to improve the appearance of pores, pigmentation, acne marks and uneven skin tone.",

        details: [
            "<strong>Focus:</strong> Pores, pigmentation & skin tone",
            "<strong>Best for:</strong> Uneven tone and congested-looking skin",
            "<strong>Technology:</strong> Carbon laser treatment",
            "<strong>Goal:</strong> Smoother and more even-looking skin"
        ]
    },


    peeling: {
        category: "SKIN RESURFACING",
        title: "Peeling Treatments",
        image: "assets/videos/images/peel.jpg",

        description:
            "A chemical peel treatment that helps remove dead surface cells, reduce the appearance of pigmentation and reveal smoother-looking skin.",

        details: [
            "<strong>Focus:</strong> Skin renewal & resurfacing",
            "<strong>Best for:</strong> Dullness and uneven skin texture",
            "<strong>Action:</strong> Removes dead surface skin cells",
            "<strong>Goal:</strong> Smoother and refreshed-looking skin"
        ]
    },


    fairness: {
        category: "SKIN BRIGHTENING",
        title: "Fairness Treatment",
        image: "assets/videos/images/fairness.jpg",

        description:
            "A personalised skin-brightening treatment designed around individual skin needs to improve the appearance of skin tone and enhance natural radiance.",

        details: [
            "<strong>Focus:</strong> Skin tone & radiance",
            "<strong>Best for:</strong> Dull or uneven-looking skin",
            "<strong>Approach:</strong> Personalised treatment planning",
            "<strong>Goal:</strong> Brighter and more radiant-looking skin"
        ]
    }

};


/* =========================================================
   CREATE POPUP
   ========================================================= */

function createFacialPopup() {

    if (document.getElementById("facialDetailsPopup")) {
        return;
    }

    const popup = document.createElement("div");

    popup.id = "facialDetailsPopup";

    popup.innerHTML = `

        <div class="facial-popup-overlay">

            <div class="facial-popup-box">

                <button
                    class="facial-popup-close"
                    onclick="closeFacialPopup()"
                    aria-label="Close">
                    ×
                </button>


                <!-- IMAGE -->

                <div class="facial-popup-image">

                    <img
                        id="facialPopupImage"
                        src=""
                        alt="">

                </div>


                <!-- CONTENT -->

                <div class="facial-popup-content">

                    <span
                        id="facialPopupCategory"
                        class="facial-popup-category">
                    </span>


                    <h2 id="facialPopupTitle"></h2>


                    <p id="facialPopupDescription"></p>


                    <ul
                        id="facialPopupDetails"
                        class="facial-popup-list">
                    </ul>


                    <a
                        href="appointment.html"
                        class="facial-popup-book">

                        Book a Consultation
                        <span>→</span>

                    </a>

                </div>

            </div>

        </div>

     `;

    document.body.appendChild(popup);


    /* CLOSE WHEN CLICKING OUTSIDE */

    const overlay =
        popup.querySelector(".facial-popup-overlay");

    overlay.addEventListener("click", function (event) {

        if (event.target === overlay) {
            closeFacialPopup();
        }

    });


    /* ESCAPE KEY */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            closeFacialPopup();
        }

    });

}


/* =========================================================
   OPEN POPUP
   ========================================================= */

function openFacial(type) {

    const facial = facialDetails[type];

    if (!facial) {
        return;
    }


    /* Create popup first */

    createFacialPopup();


    /* Fill content */

    document.getElementById("facialPopupImage").src =
        facial.image;

    document.getElementById("facialPopupImage").alt =
        facial.title;


    document.getElementById("facialPopupCategory")
        .textContent =
        facial.category;


    document.getElementById("facialPopupTitle")
        .textContent =
        facial.title;


    document.getElementById("facialPopupDescription")
        .textContent =
        facial.description;


    document.getElementById("facialPopupDetails")
        .innerHTML =
        facial.details
            .map(item => `<li>${item}</li>`)
            .join("");


    /* Show popup */

    document.getElementById("facialDetailsPopup")
        .classList.add("active");


    /* Prevent background scrolling */

    document.body.style.overflow = "hidden";

}


/* =========================================================
   CLOSE POPUP
   ========================================================= */

function closeFacialPopup() {

    const popup =
        document.getElementById("facialDetailsPopup");

    if (!popup) {
        return;
    }


    popup.classList.remove("active");


    document.body.style.overflow = "";

}


document.addEventListener("DOMContentLoaded", function () {

  const menuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  const treatmentToggle =
    document.getElementById("treatmentToggle");

  const mobileSubmenu =
    document.getElementById("mobileSubmenu");


  /* =========================
     MOBILE MENU OPEN / CLOSE
  ========================= */

  if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", function (e) {

      e.stopPropagation();

      mobileMenu.classList.toggle("open");

      menuBtn.classList.toggle("active");

      if (mobileMenu.classList.contains("open")) {
        menuBtn.setAttribute("aria-label", "Close menu");
      } else {
        menuBtn.setAttribute("aria-label", "Open menu");
      }

    });

  }


  /* =========================
     TREATMENTS SUBMENU
  ========================= */

  if (treatmentToggle && mobileSubmenu) {

    treatmentToggle.addEventListener("click", function (e) {

      e.preventDefault();

      mobileSubmenu.classList.toggle("open");

      treatmentToggle.classList.toggle("open");

    });

  }


  /* =========================
     CLOSE MENU AFTER LINK CLICK
  ========================= */

  const mobileLinks =
    document.querySelectorAll(
      ".mobile-menu a:not(.mobile-appointment)"
    );

  mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      mobileMenu.classList.remove("open");
      menuBtn.classList.remove("active");

    });

  });


  /* =========================
     OUTSIDE CLICK
  ========================= */

  document.addEventListener("click", function (e) {

    if (
      mobileMenu &&
      menuBtn &&
      !mobileMenu.contains(e.target) &&
      !menuBtn.contains(e.target)
    ) {

      mobileMenu.classList.remove("open");
      menuBtn.classList.remove("active");

    }

  });

});
