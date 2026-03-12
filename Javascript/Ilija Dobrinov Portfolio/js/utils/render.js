// Render Utility - Handles DOM manipulation and rendering

/**
 * Render profile data to the DOM
 * @param {Object} profile - Profile data object
 */
export function renderProfile(profile) {
  // Hero section
  const heroName = document.getElementById('heroName');
  const heroTitle = document.getElementById('heroTitle');
  const heroBio = document.getElementById('heroBio');
  
  if (heroName) heroName.textContent = profile.name;
  if (heroTitle) heroTitle.textContent = profile.title;
  if (heroBio) heroBio.textContent = profile.shortBio;
  
  // About section
  const aboutBio = document.getElementById('aboutBio');
  const aboutLocation = document.getElementById('aboutLocation');
  const aboutAvailability = document.getElementById('aboutAvailability');
  
  if (aboutBio) aboutBio.textContent = profile.bio;
  if (aboutLocation) aboutLocation.textContent = profile.location;
  if (aboutAvailability) aboutAvailability.textContent = profile.availability;
  
  // Contact section
  const contactEmail = document.getElementById('contactEmail');
  const contactLocation = document.getElementById('contactLocation');
  
  if (contactEmail) contactEmail.textContent = profile.email;
  if (contactLocation) contactLocation.textContent = profile.location;
  
  // Footer
  const footerName = document.getElementById('footerName');
  if (footerName) footerName.textContent = profile.name;
  
  // Social links
  renderSocialLinks(profile);
}

/**
 * Render social links in multiple locations
 * @param {Object} profile - Profile data with social links
 */
function renderSocialLinks(profile) {
  const socialContainer = document.getElementById('heroSocial');
  const contactSocial = document.getElementById('contactSocial');
  const footerSocial = document.getElementById('footerSocial');
  
  const socialLinks = [
    { icon: 'fab fa-github', url: profile.github, label: 'GitHub' },
    { icon: 'fab fa-linkedin', url: profile.linkedin, label: 'LinkedIn' },
    { icon: 'fas fa-envelope', url: `mailto:${profile.email}`, label: 'Email' }
  ];
  
  const socialHTML = socialLinks.map(link => `
    <a href="${link.url}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="${link.label}">
      <i class="${link.icon}"></i>
    </a>
  `).join('');
  
  if (socialContainer) socialContainer.innerHTML = socialHTML;
  if (contactSocial) contactSocial.innerHTML = socialHTML;
  if (footerSocial) footerSocial.innerHTML = socialHTML;
}

/**
 * Render skills to the DOM
 * @param {Array} skills - Array of skill strings
 */
export function renderSkills(skills) {
  const skillsGrid = document.getElementById('skillsGrid');
  
  if (!skillsGrid || !skills) return;
  
  // Skill icons mapping (Font Awesome icons)
  const skillIcons = {
    'JavaScript': 'fab fa-js',
    'HTML5': 'fab fa-html5',
    'CSS3': 'fab fa-css3-alt',
    'React': 'fab fa-react',
    'TypeScript': 'fab fa-typescript',
    'Git': 'fab fa-git-alt',
    'REST APIs': 'fas fa-api',
    'Responsive Design': 'fas fa-mobile-alt',
    'SASS/SCSS': 'fab fa-sass',
    'Webpack': 'fab fa-webpack',
    'Node.js': 'fab fa-node-js',
    'MongoDB': 'fas fa-database',
    'Express': 'fab fa-express',
    'React': 'fab fa-react'
  };
  
  const skillsHTML = skills.map(skill => {
    const icon = skillIcons[skill] || 'fas fa-code';
    return `
      <div class="skill-card" data-aos="fade-up">
        <div class="skill-icon">
          <i class="${icon}"></i>
        </div>
        <h4 class="skill-name">${skill}</h4>
      </div>
    `;
  }).join('');
  
  skillsGrid.innerHTML = skillsHTML;
}

/**
 * Render projects to the DOM
 * @param {Array} projects - Array of project objects
 */
export function renderProjects(projects) {
  const projectsGrid = document.getElementById('projectsGrid');
  
  if (!projectsGrid || !projects) return;
  
  const projectsHTML = projects.map(project => `
    <div class="project-card" data-aos="fade-up">
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
        <div class="project-overlay">
          <div class="project-links">
            <a href="${project.github}" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="View Code">
              <i class="fab fa-github"></i>
            </a>
            ${project.live ? `
              <a href="${project.live}" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                <i class="fas fa-external-link-alt"></i>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
  
  projectsGrid.innerHTML = projectsHTML;
}

/**
 * Create a DOM element with attributes and children
 * @param {string} tag - HTML tag name
 * @param {Object} attrs - Attributes object
 * @param {Array|string} children - Child elements
 * @returns {HTMLElement} Created element
 */
export function createElement(tag, attrs = {}, children = []) {
  const element = document.createElement(tag);
  
  Object.entries(attrs).forEach(([key, value]) => {
    if (key === 'className') {
      element.className = value;
    } else if (key === 'style' && typeof value === 'object') {
      Object.assign(element.style, value);
    } else if (key.startsWith('on')) {
      element.addEventListener(key.slice(2).toLowerCase(), value);
    } else {
      element.setAttribute(key, value);
    }
  });
  
  const childArray = Array.isArray(children) ? children : [children];
  childArray.forEach(child => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else if (child instanceof HTMLElement) {
      element.appendChild(child);
    }
  });
  
  return element;
}

/**
 * Clear a section's content
 * @param {string} selector - CSS selector
 */
export function clearSection(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.innerHTML = '';
  }
}
