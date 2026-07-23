/* ===========================
   WINDOW WORX - Main JavaScript
   Lightweight, no dependencies
   =========================== */

document.addEventListener('DOMContentLoaded', function() {

  // ----- Mobile Menu Toggle -----
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('open');
      menuToggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
    });

    // Close menu on link click
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuToggle.textContent = '☰';
      });
    });
  }

  // ----- Header Scroll Effect -----
  const header = document.querySelector('.header');
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });

  // ----- FAQ Accordion -----
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', function() {
      const isActive = item.classList.contains('active');

      // Close all
      faqItems.forEach(i => i.classList.remove('active'));

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // ----- Hero Parallax Effect -----
  const heroBg = document.querySelector('.hero-full .hero-bg');
  
  if (heroBg) {
    window.addEventListener('scroll', function() {
      const scrollPos = window.pageYOffset;
      // Subtle parallax shift: move at 35% of scroll speed
      heroBg.style.transform = 'translateY(' + (scrollPos * 0.35) + 'px)';
    });
  }

  // ----- Back to Top Button -----
  const backToTop = document.querySelector('.back-to-top');

  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ----- Smooth Scroll for Anchor Links -----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ----- Lightbox for Gallery (simple) -----
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      const img = this.querySelector('img');
      if (!img) return;

      const src = img.getAttribute('src');

      // Create lightbox
      const lightbox = document.createElement('div');
      lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        cursor: pointer;
        padding: 2rem;
      `;
      // Create elements safely (no innerHTML) to prevent XSS from manipulated src
      const imgEl = document.createElement('img');
      imgEl.src = src;
      imgEl.alt = '';
      imgEl.style.cssText = 'max-width: 100%; max-height: 90vh; border-radius: 8px; box-shadow: 0 8px 40px rgba(0,0,0,0.5);';

      const closeBtn = document.createElement('button');
      closeBtn.textContent = '✕';
      closeBtn.style.cssText = 'position: absolute; top: 1rem; right: 1.5rem; background: none; border: none; color: white; font-size: 2.5rem; cursor: pointer; opacity: 0.7;';

      lightbox.appendChild(imgEl);
      lightbox.appendChild(closeBtn);

      lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target.tagName === 'BUTTON') {
          document.body.removeChild(lightbox);
        }
      });

      document.body.appendChild(lightbox);
    });
  });

  // ----- Form Handling (Netlify compatible) -----
  const forms = document.querySelectorAll('form[data-netlify="true"]');

  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      // Netlify forms handle submission natively
      // We just add a loading state
      const submitBtn = this.querySelector('[type="submit"]');
      if (submitBtn) {
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Re-enable after 3 seconds (fallback)
        setTimeout(() => {
          submitBtn.textContent = 'Send Free Estimate Request';
          submitBtn.disabled = false;
        }, 3000);
      }
    });
  });

  // ----- Animate on Scroll (simple) -----
  const animateElements = document.querySelectorAll('.service-card, .testimonial-card, .process-step, .city-item, .value-item, .pricing-card, .blog-card');

  function checkVisibility() {
    animateElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 50) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  }

  // Set initial state
  animateElements.forEach(el => {
    if (!el.style.transform) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    }
  });

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('load', checkVisibility);
  checkVisibility(); // Initial check

  // ----- Contact Form - Auto-fill city from ZIP -----
  const zipInput = document.querySelector('input[name="zip"]');
  const cityInput = document.querySelector('input[name="city"]');

  if (zipInput && cityInput) {
    zipInput.addEventListener('blur', function() {
      const zip = this.value.trim();
      // Iowa ZIP code mapping (simplified)
      const cities = {
        '50263': 'Waukee',
        '50266': 'West Des Moines',
        '50361': 'West Des Moines',
        '50325': 'Clive',
        '50322': 'Urbandale',
        '50323': 'Urbandale',
        '50324': 'Windsor Heights',
        '50309': 'Des Moines',
        '50310': 'Des Moines',
        '50311': 'Des Moines',
        '50312': 'Des Moines',
        '50313': 'Des Moines',
        '50314': 'Des Moines',
        '50315': 'Des Moines',
        '50316': 'Des Moines',
        '50317': 'Des Moines',
        '50320': 'Des Moines',
        '50321': 'Des Moines',
        '50131': 'Johnston',
        '50111': 'Grimes',
        '50021': 'Ankeny',
        '50023': 'Ankeny',
        '50211': 'Norwalk',
        '50047': 'Carlisle',
        '50201': 'Nevada',
        '50009': 'Altoona',
        '50010': 'Ames',
        '50014': 'Ames',
        '50035': 'Bondurant',
        '50046': 'Cambridge',
        '50056': 'Colo',
        '50075': 'Ellsworth',
        '50078': 'Gilbert',
        '50102': 'Huxley',
        '50107': 'Grand Junction',
        '50109': 'Granger',
        '50115': 'Gowrie',
        '50122': 'Hubbard',
        '50123': 'Iowa Falls',
        '50127': 'Kellogg',
        '50128': 'Kelley',
        '50130': 'Laurel',
        '50132': 'Liscomb',
        '50134': 'Maxwell',
        '50135': 'Melbourne',
        '50138': 'Mingo',
        '50139': 'Mitchellville',
        '50141': 'McCallsburg',
        '50142': 'Minburn',
        '50143': 'Montezuma',
        '50144': 'Moravia',
        '50145': 'Moulton',
        '50146': 'Murray',
        '50147': 'New Providence',
        '50148': 'New Virginia',
        '50149': 'Newton',
        '50150': 'North Liberty',
        '50151': 'Oskaloosa',
        '50152': 'Otley',
        '50153': 'Otho',
        '50154': 'Oxford',
        '50155': 'Panora',
        '50156': 'Pella',
        '50157': 'Perry',
        '50158': 'Pilot Mound',
        '50160': 'Polk City',
        '50161': 'Pomeroy',
        '50162': 'Popejoy',
        '50163': 'Prairie City',
        '50164': 'Prole',
        '50165': 'Radcliffe',
        '50166': 'Randall',
        '50167': 'Rippey',
        '50168': 'Riverdale',
        '50169': 'Roland',
        '50170': 'Runnells',
        '50171': 'Rutland',
        '50003': 'Adel',
        '50261': 'Van Meter',
        '50001': 'Ackworth',
        '50002': 'Adair',
        '50005': 'Alleman',
        '50006': 'Allerton',
        '50007': 'Altoona',
        '50008': 'Ames',
        '50213': 'Osceola',
        '50216': 'Dallas Center',
        '50208': 'De Soto',
        '50237': 'Pleasant Hill',
        '50246': 'Grand Junction',
        '50247': 'Hampton',
        '50248': 'Hubbard',
        '50249': 'Huxley',
        '50250': 'Iowa Falls',
        '50251': 'Kellogg',
        '50252': 'Kelley',
        '50254': 'Laurel',
        '50255': 'Liscomb',
        '50256': 'Lohrville',
        '50257': 'Lovilia',
        '50258': 'Lynnville',
        '50259': 'Malcolm',
        '50260': 'Marshalltown',
        '50262': 'Maxwell',
        '50264': 'Melbourne',
        '50265': 'West Des Moines',
        '50268': 'Milo',
        '50269': 'Minburn',
        '50271': 'Montezuma',
        '50272': 'Moravia',
        '50273': 'Moulton',
        '50274': 'Murray',
        '50275': 'New Providence',
        '50276': 'New Virginia',
        '50277': 'Newton',
        '50278': 'North Liberty',
        '50071': 'Dows',
        '50072': 'Earlham',
        '50073': 'Elkhart',
        '50074': 'Ellston',
        '50076': 'Exira',
        '50077': 'Farrar',
        '50101': 'Garden City',
        '50103': 'Gilman',
        '50104': 'Glenwood',
        '50105': 'Grand River',
        '50106': 'Grimes',
        '50108': 'Hancock',
        '50110': 'Harlan',
        '50112': 'Grinnell',
        '50116': 'Guernsey',
        '50117': 'Guthrie Center',
        '50118': 'Hamlin',
        '50119': 'Hartford',
        '50120': 'Hartwick',
        '50124': 'Huxley',
        '50125': 'Indianola',
        '50126': 'Iowa Falls',
        '50129': 'Journalism',
        '50133': 'Lacona',
        '50136': 'Lamoni',
        '50137': 'Lanesboro',
        '50140': 'Leon',
        '50172': 'Merrill',
        '50173': 'Meservey',
        '50174': 'Middletown',
        '50175': 'Miles',
        '50176': 'Milford',
        '50177': 'Millersburg',
        '50178': 'Milo',
        '50179': 'Milton',
        '50180': 'Minburn',
        '50181': 'Minden',
        '50182': 'Mineola',
        '50183': 'Mingo',
        '50184': 'Missouri Valley',
        '50185': 'Mitchell',
        '50186': 'Mitchellville',
        '50187': 'Modale',
        '50188': 'Mondamin',
        '50189': 'Monmouth',
        '50190': 'Monroe',
        '50191': 'Montezuma',
        '50192': 'Montgomery',
        '50193': 'Monticello',
        '50194': 'Montour',
        '50195': 'Montrose',
        '50206': 'New Hampton',
        '50207': 'New Hartford',
        '50210': 'New London',
        '50212': 'Ogden',
        '50214': 'Otho',
        '50217': 'Paton',
        '50218': 'Patterson',
        '50219': 'Pella',
        '50220': 'Perry',
        '50222': 'Peru',
        '50223': 'Polk City',
        '50225': 'Pleasant Hill',
        '50226': 'Polk City',
        '50227': 'Popejoy',
        '50228': 'Prairie City',
        '50229': 'Prole',
        '50230': 'Radcliffe',
        '50231': 'Randall',
        '50232': 'Rippey',
        '50233': 'Riverdale',
        '50234': 'Roland',
        '50235': 'Runnells',
        '50236': 'Rutland',
        '50238': 'Searsboro',
        '50239': 'Sheldahl',
        '50240': 'Slater',
        '50241': 'South English',
        '50242': 'Sperry',
        '50243': 'Story City',
        '50244': 'Stratford',
        '50245': 'Sully',
        '50012': 'Ames',
        '50013': 'Ames',
      };

      if (cities[zip]) {
        cityInput.value = cities[zip];
      }
    });
  }

});
