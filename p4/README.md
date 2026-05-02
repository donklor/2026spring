# Portfolio React App

This is a React adaptation of the portfolio website with modularized components and easy-to-update configuration.

## Overview

This React application is a complete conversion of the original static portfolio website, featuring:
- **Modular Components**: Navbar and Footer components that can be updated once and automatically reflect across all pages
- **React Router**: Clean client-side routing between pages
- **Responsive Design**: Fully responsive layout inherited from the original portfolio
- **Interactive Features**: Mobile menu toggle, scroll animations, and hover effects
- **Easy Customization**: Configuration file for quick updates to navigation, social links, and portfolio information

## Project Structure

```
p4/
├── public/
│   ├── images/                 # Portfolio images
│   ├── index.html              # Main HTML file
│   └── ...
├── src/
│   ├── config/
│   │   └── navigationConfig.js # Easy-to-customize navigation and portfolio info
│   ├── components/
│   │   ├── Navbar.js           # Navigation component with mobile menu
│   │   └── Footer.js           # Footer component with social links
│   ├── pages/
│   │   ├── Home.js             # Home page with hero and stats
│   │   ├── About.js            # About page with qualifications and activities
│   │   ├── Projects.js         # Projects page with project cards
│   │   └── Resume.js           # Resume page with experience and skills
│   ├── styles/
│   │   ├── index.css           # Main portfolio styles (from original)
│   │   ├── Navbar.css          # Navbar component styles
│   │   ├── Footer.css          # Footer component styles
│   │   ├── Home.css            # Home page styles
│   │   ├── About.css           # About page styles
│   │   ├── Projects.css        # Projects page styles
│   │   └── Resume.css          # Resume page styles
│   ├── App.js                  # Main app with routing
│   ├── App.css                 # App layout styles
│   └── index.js                # React entry point
├── PORTFOLIO_STRUCTURE.md      # Detailed documentation
└── package.json
```

## Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### Production Build
```bash
npm run build
```

## Customization

### Update Navigation Menu
Edit `src/config/navigationConfig.js`:

```javascript
export const navigationItems = [
  { path: '/', label: 'Home', id: 'home' },
  { path: '/about', label: 'About', id: 'about' },
  // Add more pages here
];
```

### Update Social Links
Edit `src/config/navigationConfig.js`:

```javascript
export const socialLinks = [
  {
    icon: 'fab fa-github',
    url: 'https://github.com/your-username',
    label: 'GitHub'
  },
  // Add or modify links here
];
```

### Update Portfolio Information
Edit `src/config/navigationConfig.js`:

```javascript
export const portfolioInfo = {
  title: 'MyPortfolio',
  tagline: 'Your tagline here',
  description: 'Your description here',
  githubRepo: 'https://github.com/your-username/portfolio',
  copyYear: 2026,
};
```

### Update Page Content
Each page is a standalone component with easily modifiable content arrays. Edit the data structures inside each page component to change content.

### Add a New Page
1. Create a new file in `src/pages/` (e.g., `Blog.js`)
2. Create a component and export it
3. Add the route in `src/App.js`
4. Add the navigation item in `src/config/navigationConfig.js`

## Key Features

- **Component-Based Architecture**: Easy maintenance and updates
- **Responsive Design**: Works on all devices
- **Interactive Elements**: Mobile menu, scroll animations, hover effects
- **SEO-Friendly**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized React build

## Technologies Used

- React 19.2.5
- React Router DOM 7.x
- Font Awesome 6.x
- CSS3 with responsive design

## Adapted From

This React app was adapted from the original static portfolio website located in the `portfolio` folder, converting all HTML pages and JavaScript functionality into modular React components while preserving the original design and functionality.
