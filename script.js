// Navbar functionality
function initNavbar() {
  const navToggle = document.getElementById('navToggle');
  const navMenuMobile = document.getElementById('navMenuMobile');
  const navLinks = document.querySelectorAll('.nav-link, .nav-link-mobile');

  if (navToggle && navMenuMobile) {
    navToggle.addEventListener('click', () => {
      navMenuMobile.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenuMobile.classList.remove('active');
      if (navToggle) navToggle.classList.remove('active');
    });
  });

  // Smooth scroll for anchor links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}

// Generate stars
function generateStars(container, count = 50) {
  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.width = `${Math.random() * 3 + 1}px`;
    star.style.height = star.style.width;
    star.style.opacity = Math.random() * 0.8 + 0.2;
    star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
    container.appendChild(star);
  }
}

// Generate comets
function generateComets(container, count = 3) {
  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const comet = document.createElement('div');
    comet.className = 'comet';
    const direction = i % 2 === 0 ? 'left-to-right' : 'right-to-left';
    comet.setAttribute('data-direction', direction);
    comet.style.top = `${Math.random() * 80 + 10}%`;
    comet.style.left = direction === 'left-to-right' ? '0' : 'auto';
    comet.style.right = direction === 'right-to-left' ? '0' : 'auto';
    const duration = 15 + Math.random() * 10;
    const delay = i * 8 + Math.random() * 5;
    comet.style.animation = `comet-${direction} ${duration}s linear infinite`;
    comet.style.animationDelay = `${delay}s`;
    container.appendChild(comet);
  }
}

// Generate satellites
function generateSatellites(container, count = 9) {
  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const satellite = document.createElement('div');
    satellite.className = 'satellite';
    satellite.style.left = `${Math.random() * 100}%`;
    satellite.style.top = `${Math.random() * 100}%`;
    const duration = 12 + Math.random() * 8;
    const delay = Math.random() * 5;
    satellite.style.animation = `float-satellite ${duration}s ease-in-out infinite`;
    satellite.style.animationDelay = `${delay}s`;
    container.appendChild(satellite);
  }
}

// Planet data
const planets = [
  {
    id: 'about',
    name: 'About Me',
    distance: 220,
    angle: 0,
    size: 50,
    color: 'rgba(59, 130, 246, 1)',
    glow: 'rgba(59, 130, 246, 0.5)',
    planetType: 'earth'
  },
  {
    id: 'skills',
    name: 'Skills',
    distance: 220,
    angle: 60,
    size: 45,
    color: 'rgba(168, 85, 247, 1)',
    glow: 'rgba(168, 85, 247, 0.5)',
    planetType: 'gas'
  },
  {
    id: 'projects',
    name: 'Projects',
    distance: 220,
    angle: 120,
    size: 65,
    color: 'rgba(251, 146, 60, 1)',
    glow: 'rgba(251, 146, 60, 0.5)',
    planetType: 'ringed'
  },
  {
    id: 'experience',
    name: 'Experience',
    distance: 220,
    angle: 180,
    size: 55,
    color: 'rgba(239, 68, 68, 1)',
    glow: 'rgba(239, 68, 68, 0.5)',
    planetType: 'rocky'
  },
  {
    id: 'comments',
    name: 'Comments',
    distance: 220,
    angle: 240,
    size: 48,
    color: 'rgba(34, 211, 238, 1)',
    glow: 'rgba(34, 211, 238, 0.5)',
    planetType: 'ice'
  },
  {
    id: 'contact',
    name: 'Contact',
    distance: 220,
    angle: 300,
    size: 52,
    color: 'rgba(34, 197, 94, 1)',
    glow: 'rgba(34, 197, 94, 0.5)',
    planetType: 'earth'
  }
];

// Create sun rays
function createSunRays() {
  const sunRays = document.querySelector('.sun-rays');
  if (!sunRays) return;
  
  sunRays.innerHTML = '';
  for (let i = 0; i < 12; i++) {
    const ray = document.createElement('div');
    ray.className = 'sun-ray';
    ray.style.transform = `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-60px)`;
    sunRays.appendChild(ray);
  }
}

// Create planets
function createPlanets() {
  const container = document.getElementById('planetsContainer');
  if (!container) return;

  container.innerHTML = '';
  planets.forEach(planet => {
    const wrapper = document.createElement('div');
    wrapper.className = 'planet-wrapper';
    wrapper.setAttribute('data-planet-id', planet.id);

    const link = document.createElement('a');
    link.href = `#${planet.id}`;
    link.className = 'planet-link';

    const planetEl = document.createElement('div');
    planetEl.className = `planet planet-${planet.planetType}`;
    planetEl.style.width = `${planet.size}px`;
    planetEl.style.height = `${planet.size}px`;
    planetEl.style.background = planet.color;
    planetEl.style.boxShadow = `0 0 20px ${planet.glow}`;

    const glow = document.createElement('div');
    glow.className = 'planet-glow';
    glow.style.background = planet.color;

    const surface = document.createElement('div');
    surface.className = 'planet-surface';

    const hoverIndicator = document.createElement('div');
    hoverIndicator.className = 'planet-hover-indicator';

    const name = document.createElement('div');
    name.className = 'planet-name';
    name.innerHTML = `<span>${planet.name}</span>`;

    planetEl.appendChild(glow);
    planetEl.appendChild(surface);
    planetEl.appendChild(hoverIndicator);
    link.appendChild(planetEl);
    link.appendChild(name);
    wrapper.appendChild(link);
    container.appendChild(wrapper);
  });
}

// Animate planets
let planetAnimationId = null;
let planetRotation = {};

function initPlanetRotation() {
  planets.forEach(planet => {
    planetRotation[planet.id] = planet.angle;
  });
}

function animatePlanets() {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  planets.forEach(planet => {
    planetRotation[planet.id] = (planetRotation[planet.id] + 0.1) % 360;
    const wrapper = document.querySelector(`[data-planet-id="${planet.id}"]`);
    if (!wrapper) return;

    const radian = (planetRotation[planet.id] * Math.PI) / 180;
    const x = Math.cos(radian) * planet.distance;
    const y = Math.sin(radian) * planet.distance;

    wrapper.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
  });

  planetAnimationId = requestAnimationFrame(animatePlanets);
}

// Handle planet hover
function setupPlanetHover() {
  planets.forEach(planet => {
    const wrapper = document.querySelector(`[data-planet-id="${planet.id}"]`);
    if (!wrapper) return;

    let expandedPlanet = null;

    wrapper.addEventListener('mouseenter', () => {
      expandedPlanet = planet.id;
      wrapper.classList.add('expanded');
    });

    wrapper.addEventListener('mouseleave', () => {
      expandedPlanet = null;
      wrapper.classList.remove('expanded');
    });
  });
}

// Comments functionality
function initComments() {
  const commentForm = document.getElementById('commentForm');
  const commentsContainer = document.getElementById('commentsContainer');
  const commentsCount = document.getElementById('commentsCount');

  // Load comments from localStorage
  function loadComments() {
    const savedComments = localStorage.getItem('website-comments');
    const comments = savedComments ? JSON.parse(savedComments) : [];
    displayComments(comments);
    return comments;
  }

  // Display comments
  function displayComments(comments) {
    if (commentsCount) {
      commentsCount.textContent = comments.length;
    }

    if (comments.length === 0) {
      commentsContainer.innerHTML = `
        <div class="no-comments">
          <p>No comments yet. Be the first to leave a comment!</p>
        </div>
      `;
      return;
    }

    commentsContainer.innerHTML = comments.map(comment => `
      <div class="comment-card">
        <div class="comment-header">
          <div class="comment-avatar">
            <div class="comment-avatar-circle">
              <span>${comment.name.charAt(0).toUpperCase()}</span>
            </div>
            <div>
              <h4 class="comment-author">${escapeHtml(comment.name)}</h4>
              <p class="comment-date">${escapeHtml(comment.date)}</p>
            </div>
          </div>
        </div>
        <p class="comment-message">${escapeHtml(comment.message)}</p>
      </div>
    `).join('');
  }

  // Save comments to localStorage
  function saveComments(comments) {
    localStorage.setItem('website-comments', JSON.stringify(comments));
  }

  // Escape HTML to prevent XSS
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Handle form submission
  if (commentForm) {
    commentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(commentForm);
      const name = formData.get('name').trim();
      const message = formData.get('message').trim();

      if (!name || !message) {
        alert('Please fill in all fields');
        return;
      }

      const comments = loadComments();
      const newComment = {
        id: Date.now().toString(),
        name: name,
        message: message,
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      comments.unshift(newComment);
      saveComments(comments);
      displayComments(comments);
      commentForm.reset();
      alert('Thank you for your comment!');
    });
  }

  // Initial load
  loadComments();
}

// Contact form functionality
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
      };

      try {
        const response = await fetch('https://formspree.io/f/xldawloe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          alert("Thank you for your message! I'll get back to you soon.");
          contactForm.reset();
        } else {
          alert("Something went wrong. Please try again later.");
        }
      } catch (error) {
        console.error('Error sending message:', error);
        alert("Failed to send message. Please try again.");
      }
    });
  }
}

// Initialize all sections with stars, comets, and satellites
function initSectionEffects() {
  const sections = [
    { id: 'about', starsCount: 30, cometsCount: 2, satellitesCount: 7 },
    { id: 'skills', starsCount: 30, cometsCount: 2, satellitesCount: 7 },
    { id: 'experience', starsCount: 30, cometsCount: 2, satellitesCount: 7 },
    { id: 'projects', starsCount: 30, cometsCount: 2, satellitesCount: 7 },
    { id: 'comments', starsCount: 30, cometsCount: 2, satellitesCount: 7 },
    { id: 'contact', starsCount: 30, cometsCount: 2, satellitesCount: 7 }
  ];

  sections.forEach(section => {
    const starsContainer = document.getElementById(`stars${section.id.charAt(0).toUpperCase() + section.id.slice(1)}`);
    const cometsContainer = document.getElementById(`comets${section.id.charAt(0).toUpperCase() + section.id.slice(1)}`);
    const satellitesContainer = document.getElementById(`satellites${section.id.charAt(0).toUpperCase() + section.id.slice(1)}`);

    if (starsContainer) {
      generateStars(starsContainer, section.starsCount);
    }
    if (cometsContainer) {
      generateComets(cometsContainer, section.cometsCount);
    }
    if (satellitesContainer) {
      generateSatellites(satellitesContainer, section.satellitesCount);
    }
  });
}

// Handle window resize
function handleResize() {
  // Regenerate stars on resize if needed
  const starsContainer = document.getElementById('starsContainer');
  if (starsContainer) {
    generateStars(starsContainer, 50);
  }
  initSectionEffects();
}

// Initialize everything
function init() {
  initNavbar();
  createSunRays();
  createPlanets();
  initPlanetRotation();
  animatePlanets();
  setupPlanetHover();
  initComments();
  initContactForm();
  
  // Generate stars, comets, and satellites for hero
  const starsContainer = document.getElementById('starsContainer');
  const cometsContainer = document.getElementById('cometsContainer');
  const satellitesContainer = document.getElementById('satellitesContainer');
  
  if (starsContainer) generateStars(starsContainer, 50);
  if (cometsContainer) generateComets(cometsContainer, 3);
  if (satellitesContainer) generateSatellites(satellitesContainer, 9);
  
  // Initialize section effects
  initSectionEffects();
  
  // Handle resize
  window.addEventListener('resize', handleResize);
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
