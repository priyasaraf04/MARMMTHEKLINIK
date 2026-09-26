/* =========================================================
   MARMM THE KLINIK
   BEFORE & AFTER GALLERY
========================================================= */


/* =========================================================
   GLOBAL
========================================================= */

.gallery-header,
.gallery-header *,
.before-after-gallery,
.before-after-gallery *,
.gallery-bottom-section,
.gallery-bottom-section *,
.gallery-footer,
.gallery-footer * {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: "Manrope", sans-serif;
    background: #ffffff;
    color: #0b2345;
}


/* =========================================================
   HEADER
========================================================= */

.gallery-header {
    width: 100%;
    background: #ffffff;
    border-bottom: 1px solid #eeeeee;
    position: relative;
    z-index: 1000;
}

.gallery-header-inner {
    width: min(1250px, 92%);
    min-height: 82px;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}


/* Logo */

.gallery-logo {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    line-height: 1;
}

.gallery-logo span {
    color: #0b2345;
    font-family: "Fraunces", serif;
    font-size: 27px;
    font-weight: 700;
    letter-spacing: 1px;
}

.gallery-logo small {
    color: #f5a900;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: 3px;
    margin-top: 6px;
}


/* Navigation */

.gallery-nav {
    display: flex;
    align-items: center;
    gap: 25px;
}

.gallery-nav a {
    color: #26364c;
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
    transition: 0.3s ease;
}

.gallery-nav a:hover,
.gallery-nav a.active {
    color: #f5a900;
}

.gallery-nav .nav-appointment {
    background: linear-gradient(
        135deg,
        #f5a900,
        #ffbd24
    );

    color: #0b2345;

    padding: 12px 18px;

    border-radius: 6px;

    font-weight: 800;
}

.gallery-nav .nav-appointment:hover {
    color: #0b2345;
    transform: translateY(-2px);
}


/* Mobile button */

.gallery-menu-btn {
    display: none;

    width: 42px;
    height: 42px;

    border: none;
    background: transparent;

    cursor: pointer;

    padding: 8px;
}

.gallery-menu-btn span {
    display: block;

    width: 25px;
    height: 2px;

    background: #0b2345;

    margin: 5px auto;

    transition: 0.3s ease;
}


/* Mobile Menu */

.gallery-mobile-menu {
    display: none;

    position: absolute;

    top: 82px;
    left: 0;

    width: 100%;

    background: #ffffff;

    border-top: 1px solid #eeeeee;

    box-shadow: 0 15px 30px rgba(0,0,0,0.08);

    padding: 15px 25px 25px;
}

.gallery-mobile-menu.active {
    display: flex;
    flex-direction: column;
}

.gallery-mobile-menu a {
    color: #0b2345;
    text-decoration: none;

    padding: 14px 0;

    border-bottom: 1px solid #eeeeee;

    font-size: 14px;
    font-weight: 700;
}

.gallery-mobile-menu a:last-child {
    color: #f5a900;
}


/* =========================================================
   HERO
========================================================= */

.gallery-hero {
    position: relative;

    min-height: 360px;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;

    background:
        linear-gradient(
            rgba(255,255,255,0.88),
            rgba(255,255,255,0.94)
        ),
        url("../assets/videos/images/gallery/gallery-bg.jpg")
        center / cover no-repeat;
}

.gallery-hero-content {
    width: min(850px, 90%);
}

.gallery-eyebrow {
    display: inline-block;

    color: #f5a900;

    font-size: 13px;
    font-weight: 800;

    letter-spacing: 3px;

    margin-bottom: 14px;
}

.gallery-hero h1 {
    margin: 0;

    color: #0b2345;

    font-family: "Fraunces", serif;

    font-size: clamp(42px, 6vw, 68px);

    line-height: 1.08;
}

.gallery-hero p {
    max-width: 650px;

    margin: 18px auto 0;

    color: #667085;

    font-size: 16px;
    line-height: 1.7;
}

.gallery-hero-line {
    width: 70px;
    height: 3px;

    background: #f5a900;

    margin: 25px auto 0;
}


/* =========================================================
   GALLERY SECTION
========================================================= */

.before-after-gallery {
    padding: 90px 0 100px;

    background: #ffffff;
}

.gallery-container {
    width: min(1400px, 94%);
    margin: auto;
}


/* Heading */

.gallery-section-heading {
    text-align: center;

    max-width: 750px;

    margin: 0 auto 50px;
}

.gallery-section-heading span {
    color: #f5a900;

    font-size: 12px;

    font-weight: 800;

    letter-spacing: 2.5px;
}

.gallery-section-heading h2 {
    margin: 10px 0 13px;

    color: #0b2345;

    font-family: "Fraunces", serif;

    font-size: 40px;

    line-height: 1.2;
}

.gallery-section-heading p {
    margin: 0;

    color: #687386;

    font-size: 15px;

    line-height: 1.7;
}


/* =========================================================
   GRID
========================================================= */

.gallery-grid {
    display: grid;

    grid-template-columns:
        repeat(4, minmax(0, 1fr));

    gap: 28px;
}


/* =========================================================
   RESULT CARD
========================================================= */

.result-card {
    background: #ffffff;

    border: 1px solid #e8ebef;

    border-radius: 14px;

    overflow: hidden;

    box-shadow:
        0 8px 30px rgba(11, 35, 69, 0.07);

    transition:
        transform 0.35s ease,
        box-shadow 0.35s ease;
}

.result-card:hover {
    transform: translateY(-6px);

    box-shadow:
        0 18px 40px rgba(11, 35, 69, 0.13);
}


/* Image */

.result-image {
    position: relative;

    width: 100%;

    aspect-ratio: 1.45 / 1;

    overflow: hidden;

    cursor: pointer;

    background: #eef1f4;
}

.result-image img {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;

    transition: transform 0.5s ease;
}

.result-card:hover .result-image img {
    transform: scale(1.035);
}


/* Before / After labels */

.before-label,
.after-label {
    position: absolute;

    bottom: 12px;

    padding: 6px 12px;

    border-radius: 5px;

    font-size: 10px;

    font-weight: 800;

    letter-spacing: 0.5px;

    z-index: 3;
}

.before-label {
    left: 12px;

    background: rgba(20, 20, 20, 0.78);

    color: #ffffff;
}

.after-label {
    right: 12px;

    background: #f5a900;

    color: #0b2345;
}


/* Center divider */

.result-image::after {
    content: "";

    position: absolute;

    top: 0;
    bottom: 0;

    left: 50%;

    width: 2px;

    background: rgba(255,255,255,0.9);

    transform: translateX(-50%);

    z-index: 2;

    box-shadow:
        0 0 4px rgba(0,0,0,0.2);
}


/* Expand */

.image-view-btn {
    position: absolute;

    top: 12px;
    right: 12px;

    width: 34px;
    height: 34px;

    border: none;

    border-radius: 50%;

    background: rgba(255,255,255,0.92);

    color: #0b2345;

    display: flex;

    align-items: center;

    justify-content: center;

    cursor: pointer;

    z-index: 5;

    opacity: 0;

    transform: translateY(-5px);

    transition: 0.3s ease;
}

.result-card:hover .image-view-btn {
    opacity: 1;

    transform: translateY(0);
}

.image-view-btn:hover {
    background: #f5a900;
}


/* =========================================================
   CARD CONTENT
========================================================= */

.result-content {
    position: relative;

    padding: 19px 52px 20px 18px;

    min-height: 105px;
}

.result-content h3 {
    margin: 0 0 7px;

    color: #0b2345;

    font-family: "Fraunces", serif;

    font-size: 20px;

    line-height: 1.2;
}

.result-content p {
    margin: 0;

    color: #687386;

    font-size: 12.5px;

    line-height: 1.55;
}


/* Arrow */

.result-arrow {
    position: absolute;

    right: 16px;
    bottom: 18px;

    width: 36px;
    height: 36px;

    border-radius: 50%;

    border: 1px solid #f5a900;

    background: #ffffff;

    color: #0b2345;

    display: flex;

    align-items: center;
    justify-content: center;

    cursor: pointer;

    transition: 0.3s ease;
}

.result-arrow:hover {
    background: #f5a900;

    transform: translateX(3px);
}


/* =========================================================
   BOTTOM TRANSFORMATION SECTION
========================================================= */

.gallery-bottom-section {
    padding: 0 0 90px;

    background: #ffffff;
}

.gallery-bottom-inner {
    width: min(1400px, 94%);

    margin: auto;

    display: grid;

    grid-template-columns:
        0.85fr 1.75fr;

    overflow: hidden;

    border-radius: 28px;

    background: #f8f9fb;

    box-shadow:
        0 12px 40px rgba(11,35,69,0.06);
}


/* Left */

.gallery-bottom-intro {
    padding: 45px 45px;

    background:
        linear-gradient(
            135deg,
            #fff1c9,
            #f5c75e
        );
}

.gallery-bottom-intro span {
    color: #0b2345;

    font-size: 11px;

    font-weight: 800;

    letter-spacing: 1.8px;
}

.gallery-bottom-intro h2 {
    margin: 12px 0 12px;

    color: #0b2345;

    font-family: "Fraunces", serif;

    font-size: 34px;

    line-height: 1.08;
}

.gallery-bottom-intro p {
    max-width: 360px;

    margin: 0;

    color: #3c4654;

    font-size: 13px;

    line-height: 1.6;
}


/* Right */

.gallery-bottom-details {
    padding: 35px 40px;

    display: flex;

    align-items: center;

    gap: 28px;
}


/* Stats */

.gallery-stat {
    display: flex;

    align-items: center;

    gap: 12px;

    min-width: 125px;
}

.gallery-stat i {
    color: #f5a900;

    font-size: 25px;
}

.gallery-stat strong {
    display: block;

    color: #0b2345;

    font-size: 14px;

    font-weight: 800;
}

.gallery-stat span {
    display: block;

    color: #697386;

    margin-top: 3px;

    font-size: 10px;
}


/* Buttons */

.gallery-cta-buttons {
    margin-left: auto;

    display: flex;

    flex-direction: column;

    align-items: flex-end;

    gap: 10px;
}

.gallery-book-btn {
    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 12px;

    padding: 14px 22px;

    border-radius: 7px;

    background:
        linear-gradient(
            135deg,
            #f5a900,
            #ffbd24
        );

    color: #0b2345;

    text-decoration: none;

    font-size: 12px;

    font-weight: 800;

    white-space: nowrap;

    transition: 0.3s ease;
}

.gallery-book-btn:hover {
    transform: translateY(-2px);

    box-shadow:
        0 8px 20px rgba(245,169,0,0.25);
}

.gallery-book-btn span,
.gallery-know-btn span {
    font-size: 17px;
}

.gallery-know-btn {
    color: #0b2345;

    text-decoration: none;

    font-size: 11px;

    font-weight: 700;

    border-bottom: 1px solid #f5a900;

    padding-bottom: 3px;
}


/* =========================================================
   LIGHTBOX
========================================================= */

.gallery-lightbox {
    position: fixed;

    inset: 0;

    background: rgba(5, 15, 28, 0.92);

    display: flex;

    align-items: center;
    justify-content: center;

    padding: 30px;

    opacity: 0;

    visibility: hidden;

    transition: 0.3s ease;

    z-index: 9999;
}

.gallery-lightbox.active {
    opacity: 1;

    visibility: visible;
}

.lightbox-content {
    width: min(1000px, 95vw);

    max-height: 90vh;

    display: flex;

    align-items: center;
    justify-content: center;
}

.lightbox-content img {
    max-width: 100%;

    max-height: 85vh;

    object-fit: contain;

    border-radius: 8px;

    box-shadow:
        0 20px 70px rgba(0,0,0,0.35);
}

.lightbox-close {
    position: absolute;

    top: 25px;
    right: 30px;

    width: 45px;
    height: 45px;

    border: none;

    border-radius: 50%;

    background: #f5a900;

    color: #0b2345;

    cursor: pointer;

    font-size: 18px;

    z-index: 10;
}


/* =========================================================
   FOOTER
========================================================= */

.gallery-footer {
    background: #0b2345;

    color: #ffffff;

    padding-top: 65px;
}

.gallery-footer-inner {
    width: min(1200px, 92%);

    margin: auto;

    display: grid;

    grid-template-columns:
        1.5fr 1fr 1fr;

    gap: 60px;

    padding-bottom: 50px;
}

.gallery-footer-brand h3 {
    margin: 0;

    font-family: "Fraunces", serif;

    font-size: 32px;

    letter-spacing: 1px;
}

.gallery-footer-brand > span {
    display: block;

    color: #f5a900;

    font-size: 9px;

    font-weight: 800;

    letter-spacing: 3px;

    margin-top: 4px;
}

.gallery-footer-brand p {
    max-width: 360px;

    color: #c7d0dc;

    font-size: 13px;

    line-height: 1.7;

    margin-top: 18px;
}

.gallery-footer-links {
    display: flex;

    flex-direction: column;

    gap: 11px;
}

.gallery-footer-links h4 {
    color: #ffffff;

    font-size: 15px;

    margin: 0 0 8px;
}

.gallery-footer-links a {
    color: #bfcbd9;

    text-decoration: none;

    font-size: 12px;

    transition: 0.3s ease;
}

.gallery-footer-links a:hover {
    color: #f5a900;
}

.gallery-footer-bottom {
    border-top: 1px solid rgba(255,255,255,0.12);

    text-align: center;

    padding: 20px;

    color: #9eabba;

    font-size: 11px;
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 1150px) {

    .gallery-nav {
        gap: 15px;
    }

    .gallery-nav a {
        font-size: 11px;
    }

    .gallery-grid {
        grid-template-columns:
            repeat(3, minmax(0, 1fr));
    }

    .gallery-bottom-details {
        flex-wrap: wrap;
    }

}


/* =========================================================
   MOBILE NAV
========================================================= */

@media (max-width: 900px) {

    .gallery-nav {
        display: none;
    }

    .gallery-menu-btn {
        display: block;
    }

    .gallery-header-inner {
        min-height: 72px;
    }

    .gallery-mobile-menu {
        top: 72px;
    }


    .gallery-grid {
        grid-template-columns:
            repeat(2, minmax(0, 1fr));

        gap: 18px;
    }


    .gallery-bottom-inner {
        grid-template-columns: 1fr;
    }

    .gallery-bottom-details {
        padding: 30px;
    }

}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 600px) {

    .gallery-hero {
        min-height: 300px;
    }

    .gallery-hero h1 {
        font-size: 39px;
    }

    .gallery-hero p {
        font-size: 13px;
    }


    .before-after-gallery {
        padding: 60px 0 70px;
    }

    .gallery-section-heading {
        margin-bottom: 35px;
    }

    .gallery-section-heading h2 {
        font-size: 30px;
    }


    .gallery-grid {
        grid-template-columns: 1fr;

        width: 94%;

        margin: auto;
    }


    .result-content {
        min-height: 95px;
    }


    .image-view-btn {
        opacity: 1;

        transform: none;
    }


    .gallery-bottom-section {
        padding-bottom: 60px;
    }

    .gallery-bottom-intro {
        padding: 35px 25px;
    }

    .gallery-bottom-intro h2 {
        font-size: 30px;
    }

    .gallery-bottom-details {
        display: grid;

        grid-template-columns: 1fr 1fr;

        gap: 22px;

        padding: 28px 22px;
    }

    .gallery-stat {
        min-width: 0;
    }

    .gallery-cta-buttons {
        grid-column: 1 / -1;

        align-items: stretch;

        margin-left: 0;

        margin-top: 8px;
    }

    .gallery-book-btn {
        width: 100%;
    }


    .gallery-footer-inner {
        grid-template-columns: 1fr;

        gap: 35px;

        padding-bottom: 40px;
    }

}


/* =========================================================
   EXTRA SMALL
========================================================= */

@media (max-width: 380px) {

    .gallery-bottom-details {
        grid-template-columns: 1fr;
    }

    .gallery-stat {
        padding-bottom: 8px;
    }

    .gallery-cta-buttons {
        grid-column: auto;
    }

}