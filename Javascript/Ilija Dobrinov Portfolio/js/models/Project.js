// Project Model - Represents a project entity

export class Project {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.tech = data.tech || [];
    this.image = data.image;
    this.github = data.github;
    this.live = data.live;
    this.featured = data.featured || false;
  }

  /**
   * Get technology badges HTML
   * @returns {string} HTML string of tech badges
   */
  getTechBadges() {
    return this.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('');
  }

  /**
   * Check if project has a live demo
   * @returns {boolean}
   */
  hasLiveDemo() {
    return !!this.live;
  }

  /**
   * Convert project to HTML card
   * @returns {string} HTML string
   */
  toHtmlCard() {
    return `
      <div class="project-card" data-aos="fade-up">
        <div class="project-image">
          <img src="${this.image}" alt="${this.title}" loading="lazy">
          <div class="project-overlay">
            <div class="project-links">
              <a href="${this.github}" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="View Code">
                <i class="fab fa-github"></i>
              </a>
              ${this.hasLiveDemo() ? `
                <a href="${this.live}" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                  <i class="fas fa-external-link-alt"></i>
                </a>
              ` : ''}
            </div>
          </div>
        </div>
        <div class="project-content">
          <h3 class="project-title">${this.title}</h3>
          <p class="project-description">${this.description}</p>
          <div class="project-tech">
            ${this.getTechBadges()}
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Create Project instance from raw JSON
   * @param {Object} data - Raw project data
   * @returns {Project} Project instance
   */
  static fromJSON(data) {
    return new Project(data);
  }

  /**
   * Create array of Project instances from raw JSON
   * @param {Array} dataArray - Array of raw project data
   * @returns {Array<Project>} Array of Project instances
   */
  static fromJSONArray(dataArray) {
    return dataArray.map(data => Project.fromJSON(data));
  }
}
