// Profile Model - Represents a user profile entity

export class Profile {
  constructor(data) {
    this.name = data.name;
    this.title = data.title;
    this.bio = data.bio;
    this.shortBio = data.shortBio || data.bio?.substring(0, 100) + '...';
    this.skills = data.skills || [];
    this.email = data.email;
    this.github = data.github;
    this.linkedin = data.linkedin;
    this.location = data.location;
    this.availability = data.availability;
  }

  /**
   * Get initials from name
   * @returns {string} Initials
   */
  getInitials() {
    return this.name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }

  /**
   * Get skills as HTML list
   * @returns {string} HTML string
   */
  getSkillList() {
    return this.skills.map(skill => `<li>${skill}</li>`).join('');
  }

  /**
   * Get social links as HTML
   * @returns {string} HTML string
   */
  getSocialLinks() {
    const links = [
      { icon: 'fab fa-github', url: this.github, label: 'GitHub' },
      { icon: 'fab fa-linkedin', url: this.linkedin, label: 'LinkedIn' },
      { icon: 'fas fa-envelope', url: `mailto:${this.email}`, label: 'Email' }
    ];
    
    return links.map(link => `
      <a href="${link.url}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="${link.label}">
        <i class="${link.icon}"></i>
      </a>
    `).join('');
  }

  /**
   * Check if profile has required fields
   * @returns {boolean}
   */
  isValid() {
    return !!(this.name && this.title && this.email);
  }

  /**
   * Create Profile instance from raw JSON
   * @param {Object} data - Raw profile data
   * @returns {Profile} Profile instance
   */
  static fromJSON(data) {
    return new Profile(data);
  }
}
