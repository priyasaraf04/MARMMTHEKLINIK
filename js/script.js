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


/* ================= MOBILE MENU ================= */
// 
// const menuBtn = document.getElementById("menuBtn");
// const mainNav = document.getElementById("mainNav");
// 
// menuBtn.addEventListener("click", () => {
    // mainNav.classList.toggle("open");
// });
// 
// 
// /* Close menu after clicking a link */
// 
// const navLinks = document.querySelectorAll("#mainNav a");
// 
// navLinks.forEach(link => {
    // link.addEventListener("click", () => {
        // mainNav.classList.remove("open");
    // });
// });


/* ================= SCROLL ANIMATION ================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {
    revealObserver.observe(element);
});
/* ================= TESTIMONIAL VIDEOS ================= */
/* ================= TESTIMONIAL VIDEOS ================= */

document.addEventListener("DOMContentLoaded", function () {

  const videoGrid = document.getElementById("videoGrid");

  // Testimonials page par hi ye code chalega
  if (!videoGrid) return;


  const testimonials = [
    {
      youtubeUrl: "https://youtu.be/CZQ0BoMkDN0",
      title: "Hair Transplant Experience",
      patient: "MARMM Patient"
    },

    {
      youtubeUrl: "https://youtu.be/AOQ475mG5yk",
      title: "Hair Transplant Experience",
      patient: "MARMM Patient"
    },

    {
      youtubeUrl: "https://youtu.be/23hoesjUAwA",
      title: "Hair Restoration Journey",
      patient: "MARMM Patient"
    },

    {
      youtubeUrl: "https://youtu.be/VLo2-aYsGZc",
      title: "Hair Transplant Journey",
      patient: "MARMM Patient"
    },

    {
      youtubeUrl: "https://youtu.be/Ys-U7RghNQo",
      title: "Hair Restoration Experience",
      patient: "MARMM Patient"
    },

    {
      youtubeUrl: "https://youtu.be/BLm1ntRC_aU",
      title: "My MARMM Journey",
      patient: "MARMM Patient"
    }
  ];


  /* ================= GET YOUTUBE ID ================= */

  function getYouTubeID(url) {

    const match = url.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([^?&/]+)/
    );

    return match ? match[1] : null;
  }


  /* ================= CREATE CARDS ================= */

  testimonials.forEach(function (video) {

    const videoId = getYouTubeID(video.youtubeUrl);

    if (!videoId) return;


    const card = document.createElement("div");

    card.className = "video-card";


    card.innerHTML = `
      
      <div class="video-thumbnail">

        <img
          src="https://img.youtube.com/vi/${videoId}/hqdefault.jpg"
          alt="${video.title}"
        >

        <div class="thumbnail-overlay"></div>

        <div class="play-button"></div>

      </div>


      <div class="video-info">

        <h3>${video.title}</h3>

        <p class="patient-name">
          ${video.patient}
        </p>

        <p class="patient-label">
          Patient Testimonial
        </p>

      </div>

    `;


    /* ================= OPEN VIDEO ================= */

    card.addEventListener("click", function () {

      const modal = document.getElementById("videoModal");
      const frame = document.getElementById("youtubeFrame");

      if (!modal || !frame) return;


      frame.src =
        "https://www.youtube.com/embed/" +
        videoId +
        "?autoplay=1&rel=0";


      modal.classList.add("show");

      document.body.style.overflow = "hidden";

    });


    videoGrid.appendChild(card);

  });


  /* ================= CLOSE VIDEO ================= */

  const closeModal =
    document.getElementById("closeModal");

  const modalOverlay =
    document.getElementById("modalOverlay");


  function closeTestimonialVideo() {

    const modal =
      document.getElementById("videoModal");

    const frame =
      document.getElementById("youtubeFrame");


    if (frame) {
      frame.src = "";
    }


    if (modal) {
      modal.classList.remove("show");
    }


    document.body.style.overflow = "";

  }


  if (closeModal) {

    closeModal.addEventListener(
      "click",
      closeTestimonialVideo
    );

  }


  if (modalOverlay) {

    modalOverlay.addEventListener(
      "click",
      closeTestimonialVideo
    );

  }


  /* ================= ESC KEY ================= */

  document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
      closeTestimonialVideo();
    }

  });

});

/* =========================================================
   MARMM THE KLINIK
   SKIN TREATMENTS
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileServicesBtn =
    document.getElementById("mobileServicesBtn");

const mobileSubmenu =
    document.getElementById("mobileSubmenu");

const serviceArrow =
    document.getElementById("serviceArrow");


/* =========================================================
   OPEN / CLOSE MOBILE MENU
========================================================= */

if (mobileMenuBtn && mobileMenu) {

    mobileMenuBtn.addEventListener(
        "click",
        function () {

            mobileMenu.classList.toggle(
                "active"
            );

        }
    );

}


/* =========================================================
   MOBILE SERVICES DROPDOWN
========================================================= */

if (
    mobileServicesBtn &&
    mobileSubmenu
) {

    mobileServicesBtn.addEventListener(
        "click",
        function () {

            mobileSubmenu.classList.toggle(
                "open"
            );


            if (
                mobileSubmenu.classList.contains(
                    "open"
                )
            ) {

                serviceArrow.textContent =
                    "⌃";

            }

            else {

                serviceArrow.textContent =
                    "⌄";

            }

        }
    );

}



/* =========================================================
   TREATMENT INFORMATION
========================================================= */

const treatmentData = {


    /* =====================================================
       HYDRA FACIAL
    ===================================================== */
    hydra: {
    label: "DEEP CLEANSING & SKIN HYDRATION",
    title: "Hydra Facial",

    image: "assets/videos/images/hydra.jpg",

    description:
        "Hydra Facial is a non-invasive skin treatment designed to deeply cleanse, exfoliate and hydrate the skin. It helps remove surface impurities and supports smoother, fresher and more radiant-looking skin. The treatment can be personalised according to your skin type and individual concerns.",

    steps: [
        "Cleansing – The skin is gently cleansed to remove makeup, oil and surface impurities.",
        "Exfoliation – Dead surface skin cells are gently removed to reveal fresher-looking skin.",
        "Extraction – Pores are cleansed to help remove excess oil and impurities.",
        "Hydration – Hydrating solutions and nourishing ingredients are applied to replenish the skin.",
        "Protection – The skin is finished with suitable skincare products to leave it feeling fresh and refreshed."
    ],

    benefits: [
        "Deeply cleanses the skin",
        "Helps remove surface impurities and excess oil",
        "Supports smoother-looking skin texture",
        "Provides hydration and nourishment",
        "Helps improve the appearance of dull-looking skin",
        "Enhances natural-looking skin radiance",
        "Non-invasive treatment with minimal downtime"
    ],

    results:
        "After treatment, the skin may appear cleaner, smoother, hydrated and more refreshed. Results can vary depending on individual skin condition and skincare routine.",

    consultation:
        "Our experts assess your skin type and concerns before selecting the most suitable Hydra Facial approach for you."
},



    /* =====================================================
       CARBON LASER
    ===================================================== */
    carbon: {
    label: "LASER FACIAL & SKIN REJUVENATION",
    title: "Carbon Laser Facial",

    image: "assets/videos/images/carbon.jpg",

    description:
        "Carbon Laser Facial is an advanced skin-rejuvenation treatment that combines a carbon-based facial application with laser technology. It is designed to help improve the appearance of pores, excess oil, uneven skin tone and dull-looking skin while supporting a smoother and more refreshed complexion.",

    steps: [
        "Skin Preparation – The skin is cleansed thoroughly to remove makeup, oil and surface impurities.",
        "Carbon Application – A thin layer of carbon-based solution is applied evenly over the treatment area.",
        "Carbon Activation – The carbon solution interacts with the laser energy and helps target surface impurities and excess oil.",
        "Laser Treatment – Controlled laser energy is used over the treated area to support skin resurfacing and rejuvenation.",
        "Finishing Care – The skin is cleansed and suitable soothing or protective skincare is applied."
    ],

    benefits: [
        "Helps improve the appearance of enlarged pores",
        "Supports smoother-looking skin texture",
        "Helps manage the appearance of excess oil",
        "Helps improve uneven-looking skin tone",
        "Refreshes dull-looking skin",
        "Supports a clearer and more radiant-looking complexion",
        "Non-surgical treatment with minimal downtime"
    ],

    results:
        "The skin may appear fresher, smoother and more refined after treatment. The number of sessions and results vary depending on individual skin condition and treatment goals.",

    consultation:
        "Our doctor evaluates your skin type, concerns and treatment goals before recommending the appropriate Carbon Laser Facial protocol."
},
    /* =====================================================
       CHEMICAL PEEL
    ===================================================== */
    peel: {
    label: "SKIN RESURFACING & RENEWAL",
    title: "Chemical Peeling",

    image: "assets/videos/images/peel.jpg",

    description:
        "Chemical peeling is a professionally supervised skin-resurfacing treatment that uses selected exfoliating agents to remove damaged or dead surface skin cells. It helps reveal fresher-looking skin and may improve the appearance of uneven skin tone, dullness, pigmentation and certain acne marks.",

    treatmentAreas: [
        "Face",
        "Neck, when clinically appropriate",
        "Areas with uneven-looking skin tone",
        "Areas with dull or rough-looking skin texture"
    ],

    benefits: [
        "Removes dead surface skin cells",
        "Helps improve uneven-looking skin tone",
        "Supports smoother-looking skin texture",
        "Helps improve the appearance of dull skin",
        "May help reduce the appearance of certain acne marks",
        "Supports fresher and more radiant-looking skin",
        "Treatment can be selected according to individual skin needs"
    ],

    results:
        "Depending on the type of peel and individual skin response, the skin may gradually appear smoother, fresher and more even-looking. Recovery and results vary according to the peel selected and individual skin condition.",

    consultation:
        "Chemical peels are selected according to skin type, concerns and treatment goals. Our doctor evaluates your skin and recommends the appropriate peel and treatment protocol."
},


    /* =====================================================
       SKIN BRIGHTENING
    ===================================================== */
    brightening: {
    label: "SKIN BRIGHTENING & RADIANCE",
    title: "Skin Brightening & Fairness",

    image: "assets/videos/images/fairness.jpg",

    description:
        "Our personalised skin-brightening treatment is designed to improve the appearance of dullness, tanning and uneven-looking skin tone while supporting your skin's natural radiance. The treatment approach is selected according to individual skin condition, concerns and aesthetic goals.",

    treatmentAreas: [
        "Face",
        "Neck, when clinically appropriate",
        "Areas affected by tanning",
        "Areas with uneven-looking skin tone"
    ],

    benefits: [
        "Helps improve the appearance of uneven skin tone",
        "Supports a brighter and more radiant-looking complexion",
        "Helps improve the appearance of tanning",
        "Refreshes dull-looking skin",
        "Supports smoother and healthier-looking skin",
        "Personalised according to individual skin concerns",
        "Designed to enhance the skin's natural-looking radiance"
    ],

    results:
        "With an appropriate treatment plan and skincare routine, the skin may appear brighter, fresher and more even-looking. Results vary depending on individual skin condition and treatment response.",

    consultation:
        "Every skin type is different. Our doctor evaluates your skin condition, pigmentation, tanning and overall concerns before recommending a personalised skin-brightening treatment plan."
}, 

    /* =====================================================
       LASER HAIR REDUCTION
    ===================================================== */
    /* =====================================================
   LASER HAIR REDUCTION
===================================================== */

lhr: {

    label:
        "HAIR REDUCTION & SKIN REJUVENATION",

    title:
        "Hair Reduction & Skin Rejuvenation",

    image:
        "assets/videos/images/laser hair redu.jpg",

    description:
        "Advanced Diode Laser Technology for Smoother, Hair-Free Skin. Experience advanced hair reduction with our Diode Laser technology, designed to target unwanted hair at the follicle and provide effective, long-term hair reduction with a comfortable treatment experience. Along with hair reduction, laser-based skin treatments can help improve the appearance of uneven skin tone, tanning, and rough skin texture, leaving your skin looking smoother, clearer, and more refreshed.",

    benefits: [

        "Advanced Diode Laser Technology for effective hair reduction",

        "Helps reduce unwanted facial and body hair",

        "Suitable for multiple treatment areas",

        "Helps achieve smoother-looking skin",

        "Can help improve the appearance of tanning and uneven skin tone",

        "Helps improve skin texture and overall appearance",

        "Quick treatment sessions with minimal downtime",

        "Designed for a more comfortable treatment experience",

        "Smooth Skin. Reduced Hair. Greater Confidence."

    ]

},



    /* =====================================================
       BOTOX
    ===================================================== */
    botox: {
    label: "WRINKLE REDUCTION & FACIAL REJUVENATION",
    title: "Botox Treatment for Wrinkle Reduction",

    image: "assets/videos/images/botox.jpg",

    description:
        "Smooth, Refreshed & Youthful-Looking Skin. Botox treatment is a popular non-surgical aesthetic procedure used to temporarily reduce the appearance of dynamic facial wrinkles and fine lines caused by repeated muscle movements. Botulinum toxin works by temporarily relaxing targeted muscles, helping soften the appearance of wrinkles while maintaining a natural-looking facial expression when appropriately administered.",

    treatmentAreas: [
        "Forehead lines",
        "Frown lines between the eyebrows",
        "Crow’s feet around the eyes",
        "Bunny lines on the nose",
        "Lip lines, when clinically appropriate",
        "Chin lines and dimpling",
        "Neck bands, in selected cases"
    ],

    benefits: [
        "Helps reduce the appearance of fine lines and wrinkles",
        "Creates a smoother-looking complexion",
        "Gives the face a more refreshed and youthful appearance",
        "Non-surgical treatment with minimal downtime",
        "Quick procedure with a personalized treatment plan",
        "Can provide natural-looking results when performed by a qualified medical professional"
    ],

    results:
        "Some improvement may become noticeable within a few days, with results generally developing over approximately 1–2 weeks. The effects are temporary, and the duration varies depending on the treatment area, dosage, individual muscle activity, and other factors.",

    consultation:
        "Every face is different. Our doctor evaluates your facial structure, muscle movement, skin condition, and aesthetic goals before creating a personalized Botox treatment plan. Get expert guidance and discover whether Botox is suitable for your aesthetic goals.",

    location:
        "Marmm Cosmetic Centre, Indore"
},



    /* =====================================================
       ANTI AGEING
    ===================================================== */
    antiageing: {
    label: "ANTI-AGEING & SKIN REJUVENATION",
    title: "Anti-Ageing Treatment",
    image: "assets/videos/images/glutathione.jpg",
    description:
      "Advanced Anti-Ageing Treatment designed to support a brighter, smoother and more youthful-looking appearance. The treatment focuses on improving the overall appearance of dullness, uneven skin tone and signs of ageing while supporting skin rejuvenation and a fresh, radiant look.",
    benefits: [
      "✨ Helps improve the appearance of fine lines and wrinkles",
      "🌿 Supports smoother and healthier-looking skin",
      "💧 Helps improve skin hydration and freshness",
      "🌟 Supports a brighter and more radiant complexion",
      "🧴 Helps improve the appearance of uneven skin tone",
      "⏳ Supports overall skin rejuvenation",
      "💫 Helps refresh dull-looking skin",
      "✨ Promotes a smoother, youthful-looking appearance"
    ],
    consultation:
      "Treatment suitability and the recommended protocol depend on your individual skin condition, concerns and treatment goals. Our doctor will assess your skin and recommend the most suitable anti-ageing treatment for you."
},
    /* =====================================================
      fillers
    ===================================================== */
fillers: {
    label: "FACIAL VOLUME & CONTOURING",
    title: "Derma Fillers",

    image: "assets/videos/images/dermal-fillers.jpg",

    description:
        "Natural Volume, Youthful Contours & Facial Rejuvenation. Dermal fillers are smooth gels injected beneath the skin to restore lost volume, refine facial contours, and soften the appearance of static wrinkles. Treatment is tailored to your unique facial features and aesthetic goals.",

    treatmentAreas: [
        "Lips – Definition, subtle volume, and hydration",
        "Cheeks & Midface – Restores youthful-looking volume and enhances contours",
        "Under-Eye / Tear Troughs – Helps reduce the appearance of hollows",
        "Nasolabial Folds & Marionette Lines – Helps soften smile and laugh lines",
        "Jawline & Chin – Defines facial structure and helps balance the profile"
    ],

    benefits: [
        "Instant, visible results with no surgical downtime",
        "Restores natural-looking facial volume",
        "Helps improve facial contours and definition",
        "Custom-tailored to your unique facial anatomy",
        "Non-surgical facial rejuvenation",
        "Designed to create natural-looking results"
    ],

    consultation:
        "Every face is different. Our doctor evaluates your facial structure, skin condition, and aesthetic goals before recommending the most suitable filler treatment and treatment areas."
},
}
/* =========================================================
   POPUP ELEMENTS
========================================================= */

const modal =
    document.getElementById(
        "treatmentModal"
    );

const modalOverlay =
    document.getElementById(
        "modalOverlay"
    );

const modalClose =
    document.getElementById(
        "modalClose"
    );

const modalImage =
    document.getElementById(
        "modalImage"
    );

const modalLabel =
    document.getElementById(
        "modalLabel"
    );

const modalTitle =
    document.getElementById(
        "modalTitle"
    );

const modalDescription =
    document.getElementById(
        "modalDescription"
    );
const modalSteps =
    document.getElementById(
        "modalSteps"
    );
const modalBenefits =
    document.getElementById(
        "modalBenefits"
    );



/* =========================================================
   OPEN POPUP
========================================================= */

function openTreatmentModal(
    treatmentKey
) {

    const treatment =
        treatmentData[
            treatmentKey
        ];


    if (
        !treatment ||
        !modal
    ) {

        return;

    }


    /* IMAGE */

    modalImage.src =
        treatment.image;

    modalImage.alt =
        treatment.title;


    /* LABEL */

    modalLabel.textContent =
        treatment.label;


    /* TITLE */

    modalTitle.textContent =
        treatment.title;


    /* DESCRIPTION */

    modalDescription.textContent =
        treatment.description;

    /* TREATMENT STEPS */

if (modalSteps) {

    modalSteps.innerHTML = "";

    if (treatment.steps && treatment.steps.length) {

        treatment.steps.forEach(
            function (step) {

                const li =
                    document.createElement("li");

                li.textContent = step;

                modalSteps.appendChild(li);

            }
        );

    }

}
    /* BENEFITS */

    modalBenefits.innerHTML =
        "";


    treatment.benefits.forEach(
        function (benefit) {

            const li =
                document.createElement(
                    "li"
                );

            li.textContent =
                benefit;

            modalBenefits.appendChild(
                li
            );

        }
    );


    /* SHOW MODAL */

    modal.classList.add(
        "active"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );

}



/* =========================================================
   CLOSE POPUP
========================================================= */

function closeTreatmentModal() {

    if (!modal) {
        return;
    }


    modal.classList.remove(
        "active"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );

}



/* =========================================================
   VIEW DETAILS BUTTONS
========================================================= */

const viewButtons =
    document.querySelectorAll(
        ".view-details-btn"
    );


viewButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const treatmentKey =
                    button.getAttribute(
                        "data-treatment"
                    );


                openTreatmentModal(
                    treatmentKey
                );

            }
        );

    }
);



/* =========================================================
   X CLOSE BUTTON
========================================================= */

if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeTreatmentModal
    );

}



/* =========================================================
   CLOSE WHEN CLICKING DARK BACKGROUND
========================================================= */

if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeTreatmentModal
    );

}



/* =========================================================
   ESC KEY CLOSE
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            modal &&
            modal.classList.contains(
                "active"
            )
        ) {

            closeTreatmentModal();

        }

    }
);



/* =========================================================
   CLOSE MOBILE MENU AFTER LINK CLICK
========================================================= */

const mobileLinks =
    document.querySelectorAll(
        ".mobile-menu a"
    );


mobileLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                if (mobileMenu) {

                    mobileMenu.classList.remove(
                        "active"
                    );

                }

            }
        );

    }
);



/* =========================================================
   IMAGE FALLBACK
========================================================= */

const allImages =
    document.querySelectorAll(
        "img"
    );


allImages.forEach(
    function (image) {

        image.addEventListener(
            "error",
            function () {

                if (
                    !this.dataset.fallback &&
                    !this.src.includes(
                        "skin def.jpg"
                    )
                ) {

                    this.dataset.fallback =
                        "true";


                    this.src =
                        "assets/videos/images/skin def.jpg";

                }

            }
        );

    }
);
