# Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, JavaScript, and Bootstrap.

## Features

- **Responsive Design**: Works on all devices (desktop, tablet, mobile)
- **Dynamic Content**: Data loaded from JSON files using fetch API
- **Smooth Animations**: AOS (Animate On Scroll) library for scroll animations
- **Modern UI**: Clean, professional design with Bootstrap and custom CSS
- **Contact Form**: Functional contact form with EmailJS integration (bonus)
- **Social Links**: GitHub, LinkedIn, and email links

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom styling with CSS variables, Flexbox, Grid
- **JavaScript (ES6+)**: Modern JavaScript with modules
- **Bootstrap 5**: Responsive grid and components
- **Font Awesome**: Icons
- **AOS**: Scroll animations
- **EmailJS**: Contact form email service

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Custom styles
├── js/
│   ├── main.js       # Main entry point
│   ├── services/
│   │   ├── apiService.js    # Fetch API calls
│   │   └── emailService.js  # EmailJS integration
│   └── utils/
│       ├── render.js        # DOM rendering
│       └── navigation.js    # UI interactions
├── data/
│   ├── profile.json  # Profile data
│   └── projects.json # Projects data
└── README.md
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/ilija-dobrinov/portfolio.git
   ```

2. Open `index.html` in your browser

3. To enable EmailJS:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create an email service and template
   - Update `js/services/emailService.js` with your credentials

## Customization

### Update Profile Data
Edit `data/profile.json` with your information:
- Name, title, bio
- Skills list
- Social links (GitHub, LinkedIn)
- Location and availability

### Update Projects
Edit `data/projects.json` to add your projects:
- Title, description
- Technologies used
- Image URL
- GitHub and live demo links

## Live Demo

[View Live Portfolio](https://ilija-dobrinov.github.io/portfolio/)

## License

MIT License
