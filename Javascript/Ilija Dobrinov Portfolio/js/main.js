// Main JavaScript Entry Point
import { fetchProfile, fetchProjects } from './services/apiService.js';
import { renderProfile, renderProjects, renderSkills } from './utils/render.js';
import { initNavigation, initBackToTop } from './utils/navigation.js';
import { initContactForm } from './services/emailService.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', async () => {
  
  // Initialize AOS (Animate On Scroll) - loaded via CDN
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });
  }

  // Initialize navigation and UI
  initNavigation();
  initBackToTop();

  // Set current year in footer
  const currentYear = document.getElementById('currentYear');
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  try {
    // Fetch profile data
    const profile = await fetchProfile();
    renderProfile(profile);
    renderSkills(profile.skills);
    
    // Fetch projects data
    const projects = await fetchProjects();
    renderProjects(projects);
    
    // Initialize contact form
    initContactForm();
    
    console.log('Portfolio loaded successfully!');
  } catch (error) {
    console.error('Error loading portfolio data:', error);
    
    // Show fallback content on error
    const heroName = document.getElementById('heroName');
    const heroTitle = document.getElementById('heroTitle');
    const heroBio = document.getElementById('heroBio');
    const aboutBio = document.getElementById('aboutBio');
    const aboutLocation = document.getElementById('aboutLocation');
    const aboutAvailability = document.getElementById('aboutAvailability');
    const contactEmail = document.getElementById('contactEmail');
    const contactLocation = document.getElementById('contactLocation');
    
    if (heroName) heroName.textContent = 'Ilija Dobrinov';
    if (heroTitle) heroTitle.textContent = 'Frontend Developer';
    if (heroBio) heroBio.textContent = 'Passionate about building clean, user-friendly web experiences.';
    if (aboutBio) aboutBio.textContent = 'Unable to load profile data. Please try again later.';
    if (aboutLocation) aboutLocation.textContent = 'Skopje, North Macedonia';
    if (aboutAvailability) aboutAvailability.textContent = 'Open to opportunities';
    if (contactEmail) contactEmail.textContent = 'ilija.dobrinov@example.com';
    if (contactLocation) contactLocation.textContent = 'Skopje, North Macedonia';
    
    // Render default skills
    renderSkills(['JavaScript', 'HTML5', 'CSS3', 'React', 'Git']);
    
    // Initialize contact form even on error
    initContactForm();
  }
});
