# Portfolio React App

This is a React adaptation of the portfolio website with modularized components and easy-to-update configuration.

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
│   │   ├── Navbar.js           # Navigation component
│   │   └── Footer.js           # Footer component (uses navigation config)
│   ├── pages/
│   │   ├── Home.js             # Home page with hero and stats
│   │   ├── About.js            # About page with qualifications and activities
│   │   ├── Projects.js         # Projects page with project cards
│   │   └── Game.js             # Interactive 2048 sliding tile game
│   ├── styles/
│   │   ├── index.css           # Main portfolio styles (from original)
│   │   ├── Navbar.css          # Navbar component styles
│   │   ├── Footer.css          # Footer component styles
│   │   ├── Home.css            # Home page styles
│   │   ├── About.css           # About page styles
│   │   └── Projects.css        # Projects page styles
│   ├── App.js                  # Main app with routing
│   ├── App.css                 # App layout styles
│   └── index.js                # React entry point
└── package.json
```

## How to Customize

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
    label: 'GitHub',
    showInFooter: true 
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

Each page is a standalone component:
- `src/pages/Home.js` - Home page with hero and stats
- `src/pages/About.js` - About page with qualifications and activities
- `src/pages/Projects.js` - Projects page with project cards
- `src/pages/Resume.js` - Resume page with experience and skills

Edit the arrays inside each component to modify content.

### Add a New Page

1. Create a new file in `src/pages/` (e.g., `Blog.js`)
2. Create a component and export it
3. Add the route in `src/App.js`:
   ```javascript
   <Route path="/blog" element={<Blog />} />
   ```
4. Add the navigation item in `src/config/navigationConfig.js`:
   ```javascript
   { path: '/blog', label: 'Blog', id: 'blog' },
   ```

### Styling

All styling is centralized in `src/styles/`:
- `index.css` contains the main portfolio styles (copied from the original)
- Component-specific CSS files provide enhancements for each component

To modify styles, edit the corresponding CSS file.

## Running the App

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Key Features

- **Modular Components**: Easy to update navigation, footer, and content
- **Reusable Configuration**: Change site info, navigation, and social links in one file
- **React Router**: Clean multi-page navigation
- **Responsive Design**: All pages are responsive (inherited from original portfolio)
- **Portfolio Images**: All assets are organized in `public/images/`

## Technologies Used

- React 19.2.5
- React Router DOM 6.x
- Font Awesome for icons
- CSS3 for styling

## Adapted from Original Portfolio

This React app was adapted from the original static portfolio website with the following improvements:
- Component-based architecture for better maintainability
- Centralized configuration for easy updates
- React Router for seamless page navigation
- State management for interactive features
- Modular CSS for better organization
