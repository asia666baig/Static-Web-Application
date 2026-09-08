/* =========================================
   TechNova - Static Website
   ========================================= */


/* ---------- Variables ---------- */

:root {
    --primary: #2563eb;
    --primary-dark: #1d4ed8;
    --dark: #0f172a;
    --text: #334155;
    --muted: #64748b;
    --light: #f8fafc;
    --white: #ffffff;
    --border: #e2e8f0;

    --max-width: 1100px;
}


/* ---------- Reset ---------- */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


/* ---------- Base ---------- */

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    color: var(--text);
    background: var(--white);
    line-height: 1.6;
}

a {
    text-decoration: none;
}


/* ---------- Header ---------- */

.header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.95);
    border-bottom: 1px solid var(--border);
}

.navbar {
    max-width: var(--max-width);
    margin: auto;
    min-height: 70px;
    padding: 0 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    color: var(--dark);
    font-size: 24px;
    font-weight: 800;
}

.nav-links {
    display: flex;
    gap: 28px;
}

.nav-links a {
    color: var(--text);
    font-size: 15px;
    font-weight: 600;

    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: var(--primary);
}


/* ---------- Hero ---------- */

.hero {
    min-height: 600px;

    display: flex;
    align-items: center;

    background:
        linear-gradient(
            135deg,
            #eff6ff,
            #ffffff
        );
}

.hero-content {
    width: 100%;
    max-width: var(--max-width);
    margin: auto;
    padding: 80px 20px;
}

.hero-tag {
    color: var(--primary);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 20px;
}

.hero h1 {
    max-width: 750px;
    color: var(--dark);
    font-size: clamp(42px, 7vw, 76px);
    line-height: 1.05;
    margin-bottom: 25px;
}

.hero h1 span {
    color: var(--primary);
}

.hero-description {
    max-width: 600px;
    color: var(--muted);
    font-size: 18px;
    margin-bottom: 30px;
}


/* ---------- Button ---------- */

.btn {
    display: inline-block;

    border: none;
    border-radius: 7px;

    padding: 13px 24px;

    background: var(--primary);
    color: var(--white);

    font-size: 15px;
    font-weight: 700;

    cursor: pointer;

    transition:
        background 0.3s ease,
        transform 0.3s ease,
        box-shadow 0.3s ease;
}

.btn:hover {
    background: var(--primary-dark);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.25);
}


/* ---------- Common Section ---------- */

.section {
    max-width: var(--max-width);
    margin: auto;
    padding: 100px 20px;
}

.section-heading {
    text-align: center;
    margin-bottom: 50px;
}

.section-heading p,
.section-label {
    color: var(--primary);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 10px;
}

.section-heading h2 {
    color: var(--dark);
    font-size: 38px;
}


/* ---------- Services ---------- */

.services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

.service-card {
    padding: 30px;

    border: 1px solid var(--border);
    border-radius: 10px;

    background: var(--white);

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
}

.service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(15, 23, 42, 0.1);
}

.icon {
    width: 45px;
    height: 45px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 20px;

    border-radius: 8px;

    background: #dbeafe;
    color: var(--primary);

    font-weight: 800;
}

.service-card h3 {
    color: var(--dark);
    margin-bottom: 10px;
}

.service-card p {
    color: var(--muted);
}


/* ---------- About ---------- */

.about {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;

    background: var(--light);
}

.about h2 {
    color: var(--dark);
    font-size: 40px;
    line-height: 1.2;
}

.about p {
    color: var(--muted);
    margin-bottom: 15px;
}


/* ---------- Contact ---------- */

.contact {
    text-align: center;
}


/* ---------- Footer ---------- */

.footer {
    padding: 25px;
    text-align: center;

    background: var(--dark);
    color: #cbd5e1;

    font-size: 14px;
}


/* =========================================
   Responsive Design
   ========================================= */


/* Tablet */

@media (max-width: 768px) {

    .navbar {
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        padding: 15px 20px;
    }

    .nav-links {
        gap: 18px;
        flex-wrap: wrap;
        justify-content: center;
    }

    .hero {
        min-height: 500px;
    }

    .services-grid {
        grid-template-columns: 1fr;
    }

    .about {
        grid-template-columns: 1fr;
        gap: 30px;
    }
}


/* Mobile */

@media (max-width: 480px) {

    .nav-links {
        gap: 12px;
    }

    .nav-links a {
        font-size: 13px;
    }

    .hero-content {
        padding: 60px 20px;
    }

    .hero-description {
        font-size: 16px;
    }

    .section {
        padding: 70px 20px;
    }

    .section-heading h2,
    .about h2 {
        font-size: 30px;
    }

    .service-card {
        padding: 25px;
    }
}