# InvoCraft Website - Angular Application

Professional invoice and quote management platform built with Angular 17.

🌐 **Live Demo**: [https://hajnel.github.io/invocraft-website/](https://hajnel.github.io/invocraft-website/)

## Features Discovered from arch-invoice-maker

### ✨ Core Features
- **Professional Invoice Management** - Advanced invoice creation, editing, templates, and PDF export
- **Quote Management System** - Quote creation, approval workflow, and conversion to invoices
- **Client Portal** - Dedicated portal for clients to view invoices and track payments
- **Payment Tracking** - Comprehensive payment monitoring with South African bank integration
- **Advanced Analytics** - Real-time dashboards with business insights and visual timelines
- **Security & Authentication** - Firebase auth with protected routes and user management

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI (`npm install -g @angular/cli`)
- Git

## Local Development

1. Clone the repository:
```powershell
git clone https://github.com/HAJNEL/invocraft-website.git
cd invocraft-website
```

2. Install dependencies:
```powershell
npm install
```

3. Start the development server:
```powershell
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

## Project Structure

```
src/
├── app/
│   ├── components/           # All Angular components
│   │   ├── navbar/
│   │   ├── hero/
│   │   ├── features/
│   │   ├── how-it-works/
│   │   ├── stats/
│   │   ├── pricing/
│   │   ├── testimonials/
│   │   ├── faq/
│   │   ├── cta/
│   │   ├── footer/
│   │   └── scroll-to-top/
│   ├── directives/           # Custom directives
│   │   ├── animate-on-scroll.directive.ts
│   │   └── count-up.directive.ts
│   ├── app.component.*       # Root component
│   ├── app.module.ts         # Root module
│   └── app-routing.module.ts # Routing configuration
├── assets/                   # Static assets
├── styles.scss              # Global styles
└── index.html               # Main HTML file
```

## Features

### 🎨 Design & UX
- Modern, responsive design
- Smooth scroll animations
- Intersection Observer animations
- Counter animations for statistics
- Hover effects with 3D tilt
- Mobile-friendly navigation
- Gradient backgrounds with floating orbs

### 🚀 Performance
- Lazy loading
- Optimized bundle size
- Smooth 60fps animations
- Efficient change detection

### ♿ Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation support
- Focus management

## Available Scripts

- `npm start` - Run development server
- `npm run build` - Build for production
- `npm run build:prod` - Build for production with GitHub Pages base href
- `npm run watch` - Build and watch for changes
- `npm test` - Run unit tests
- `npm run lint` - Lint the code

## Build for Production

```powershell
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Initial Setup

1. **Create GitHub Repository**:
```powershell
# Create a new repository on GitHub named "invocraft-website"
# Then push your code:
git add .
git commit -m "Initial commit: InvoCraft Angular website"
git branch -M main
git remote add origin https://github.com/HAJNEL/invocraft-website.git
git push -u origin main
```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy on every push to main

3. **Verify Deployment**:
   - Go to the **Actions** tab in your repository
   - You should see the "Deploy to GitHub Pages" workflow running
   - Once complete, your site will be live at: `https://hajnel.github.io/invocraft-website/`

### Manual Deployment

If you prefer manual deployment:

```powershell
# Build the production version
npm run build:prod

# The output will be in dist/invocraft-website/
# You can deploy this folder to any static hosting service
```

### Update Base Href for Different Deployment

If you're deploying to a custom domain or different path, update the base href in `package.json`:

```json
"build:prod": "ng build --configuration production --base-href /your-path/"
```

## Technology Stack

- **Framework**: Angular 17
- **Language**: TypeScript
- **Styling**: SCSS
- **Animations**: Angular Animations + CSS
- **Icons**: SVG
- **Fonts**: Google Fonts (Inter)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - All rights reserved

## Contact

For questions or support, please contact the InvoCraft team.
