<div align="center">
  <h1>🧘‍♀️ Joga</h1>
  <p><strong>AI-Powered Yoga & Wellness Platform</strong></p>

  <p>
    <a href="#-features">✨ Features</a> •
    <a href="#-tech-stack">🛠️ Tech Stack</a> •
    <a href="#-demo">🚀 Live Demo</a> •
    <a href="#-installation">⚙️ Installation</a> •
    <a href="#-contributing">🤝 Contributing</a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white" alt="Astro v5" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS v4" />
    <img src="https://img.shields.io/badge/DaisyUI-5.5.5-FFD700?style=for-the-badge&logo=daisyui&logoColor=black" alt="DaisyUI" />
    <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  </p>
</div>

## 📋 About

**Joga** is a modern, multilingual AI-powered yoga and wellness platform built with cutting-edge web technologies. It provides personalized yoga sessions, live classes, meditation guides, and nutrition advice - all tailored to your individual needs.

Perfect for yoga enthusiasts, fitness professionals, and anyone looking to transform their physical and mental well-being through intelligent wellness solutions.

---

## ✨ Features

### 🤖 AI-Powered Personalization
- **Smart Recommendations**: Get customized yoga routines based on your goals, fitness level, and preferences
- **Progress Tracking**: Advanced analytics with detailed progress monitoring
- **Adaptive Learning**: Our AI learns from your practice and evolves with you

### 🌍 Global Accessibility
- **5 Languages**: English, German, Russian, Turkish, Spanish
- **Auto-Language Detection**: Intelligent language detection based on browser preferences
- **Responsive Design**: Optimized for all devices - mobile, tablet, and desktop

### 🧘‍♀️ Comprehensive Wellness Suite
- **Live Classes**: Real-time sessions with world-class instructors
- **Guided Meditation**: Hundreds of meditation sessions for stress relief and mindfulness
- **Nutrition Plans**: Personalized meal plans and dietary advice
- **Community Support**: Connect with fellow yoga enthusiasts worldwide

### 💻 Modern Tech Features
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Offline Support**: Downloadable content for practice anywhere
- **Progress Analytics**: Detailed insights into your wellness journey
- **Interactive UI**: Beautiful, intuitive interface with smooth animations

---

## 🛠️ Tech Stack

- **Framework**: [Astro v5.15.8](https://astro.build/) - Modern static site generator with island architecture
- **Styling**: [Tailwind CSS v4.1.17](https://tailwindcss.com/) + [DaisyUI v5.5.5](https://daisyui.com/) - Component library
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe development with strict mode
- **Internationalization**: Built-in Astro i18n with 5-language support and automatic detection
- **Build Tool**: Vite with TailwindCSS v4 plugin integration
- **Deployment**: Static site generation optimized for global CDNs
- **Icons**: Custom SVG assets and scalable icon system
- **Animations**: CSS keyframes, glassmorphism effects, and smooth transitions

---

## 🚀 Live Demo

Experience Joga in action:
- **Live Site**: [https://bumbarasch.github.io/joga](https://bumbarasch.github.io/joga) (GitHub Pages)
- **Development Preview**: Running on `localhost:4321`
- **Deployment Guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions

### Screenshots

<div align="center">
  <img src="https://via.placeholder.com/800x400/FFC107/000000?text=Joga+Platform+Preview" alt="Joga Platform Preview" width="800">
</div>

---

## 📱 Responsive Design

Joga looks stunning on all devices:

- 📱 **Mobile**: Optimized touch interface and gestures
- 💻 **Desktop**: Full-featured experience with enhanced navigation
- 📟 **Tablet**: Adaptive layout for comfortable viewing

---

## ⚙️ Installation

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Quick Start

```bash
# Clone the repository
git clone https://github.com/bumbarasch/joga.git
cd joga

# Install dependencies
npm install

# Start development server
npm run dev
# Open http://localhost:4321

# Build for production
npm run build
# Outputs to ./dist/

# Preview production build
npm run preview
```

**Development Server**: `npm run dev` starts at `localhost:4321` with hot reload
**Build Output**: Static files generated in `./dist/` for optimal performance

### 🚀 Quick Deploy to GitHub Pages

This project is pre-configured for GitHub Pages deployment:

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Deploy Joga platform"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository **Settings** → **Pages**
   - Set **Source** to **GitHub Actions**

3. **Your site will be live at**: `https://bumbarasch.github.io/joga`

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

### Environment Setup

1. **Clone and Install**:
   ```bash
   git clone https://github.com/yourusername/joga.git
   cd joga
   npm install
   ```

2. **Development**:
   ```bash
   npm run dev
   # Open http://localhost:4321
   # Features hot reload, TypeScript compilation, and i18n debugging
   ```

3. **Production Build**:
   ```bash
   npm run build
   # Static site generation with optimized assets
   # Outputs to ./dist/
   ```

4. **Astro CLI Commands**:
   ```bash
   npm run astro add    # Add integrations
   npm run astro check  # Type checking
   ```

---

## 🏗️ Project Structure

```
joga/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── src/
│   ├── components/              # Reusable Astro components
│   │   ├── Hero.astro          # Main hero section with navigation
│   │   ├── Features.astro      # AI-powered features showcase
│   │   ├── Classes.astro       # Live classes & scheduling
│   │   ├── Pricing.astro       # Pricing plans with toggle
│   │   ├── Testimonials.astro  # User testimonials and social proof
│   │   ├── CTA.astro           # Call-to-action sections
│   │   ├── Welcome.astro       # Welcome/Onboarding component
│   │   ├── VideoModal.astro    # Video playback modal
│   │   ├── ThemeToggle.astro   # Dark/light mode switcher
│   │   └── LanguageSwitcher.astro # Language selection dropdown
│   ├── layouts/                 # Page layout templates
│   │   └── Layout.astro        # Main layout with SEO & theme support
│   ├── lib/                     # Utilities & core functionality
│   │   └── i18n.ts             # Comprehensive i18n system with TypeScript
│   ├── pages/                   # Route pages (file-based routing)
│   │   ├── index.astro         # English (default locale)
│   │   ├── de/index.astro      # German localized page
│   │   ├── ru/index.astro      # Russian localized page
│   │   ├── tr/index.astro      # Turkish localized page
│   │   ├── es/index.astro      # Spanish localized page
│   │   ├── sign-up.astro       # Sign-up pages (all locales)
│   │   ├── dashboard.astro     # User dashboard (all locales)
│   │   ├── careers.astro       # Careers page
│   │   ├── press-kit.astro     # Press resources
│   │   ├── terms-of-service.astro # Legal documentation
│   │   └── privacy-policy.astro   # Privacy policy
│   ├── assets/                  # Static assets & styles
│   │   ├── app.css             # TailwindCSS v4 + DaisyUI configuration
│   │   ├── astro.svg           # Custom SVG assets
│   │   └── background.svg      # Background graphics
│   └── middleware.ts            # Language detection & routing middleware
├── public/                      # Public static files
├── astro.config.mjs            # Astro v5 configuration with i18n and GitHub Pages
├── DEPLOYMENT.md               # Detailed GitHub Pages deployment guide
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration (strict mode)
└── README.md                   # This documentation
```

---

## 🌍 Internationalization

Joga supports seamless multilingual experiences:

| Language | Code | Status |
|----------|------|--------|
| English | `en` | ✅ Complete |
| Deutsch | `de` | ✅ Complete |
| Русский | `ru` | ✅ Complete |
| Türkçe | `tr` | ✅ Complete |
| Español | `es` | ✅ Complete |

### Adding New Languages

1. **Update Translation Engine**: Add new language data to `src/lib/i18n.ts` translation interface and object
2. **Configure Astro**: Add language code to `locales` array in `astro.config.mjs`
3. **Create Localized Pages**: Add new page in `src/pages/{locale}/index.astro` following existing patterns
4. **Update Language Switcher**: Add language info to `getLocaleInfo()` function
5. **Test Implementation**: Verify routing and translation functionality

### Translation System Architecture

The project uses a comprehensive type-safe translation system:

```typescript
// Translation interface ensures type safety
export interface Translation {
  hero: { title: string; subtitle: string; /* ... */ };
  nav: { home: string; features: string; /* ... */ };
  // Complete coverage of all UI text
};

// Dynamic parameter replacement
t('cta.termsAgree', { terms: 'Terms', privacy: 'Privacy' })
// Results in: "I agree to the Terms and Privacy"
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use **TypeScript** for type safety
- Follow **Astro** conventions
- Maintain **consistent formatting** with Prettier
- Write **semantic HTML** and **accessible** markup

---

## 📊 Performance & Optimization

### Core Features
- ⚡ **Static Site Generation**: Astro v5 builds static files for optimal performance
- 📱 **Mobile-First Design**: Progressive enhancement with responsive breakpoints
- 🎯 **SEO Optimized**: Built-in hreflang, structured data, and meta tags
- ♿ **WCAG 2.1 Compliant**: Semantic HTML and accessibility best practices
- 🌐 **CDN Ready**: Optimized assets for global content delivery

### Performance Optimizations
- **TailwindCSS v4**: Modern CSS engine with purging and optimization
- **DaisyUI Themes**: Component-based styling with minimal CSS footprint
- **Intersection Observer**: Efficient scroll-triggered animations
- **CSS Containment**: Improved rendering performance
- **RequestAnimationFrame**: Smooth theme transitions
- **Reduced Motion**: Respects user accessibility preferences

### Core Web Vitals (Targets)
- **Lighthouse Score**: 95+ ✅
- **Performance**: 95+ ✅
- **Accessibility**: 100+ ✅
- **Best Practices**: 95+ ✅
- **SEO**: 100+ ✅

---

## 🔧 Configuration

### Key Configuration Files

#### `astro.config.mjs`
```javascript
export default defineConfig({
    vite: {
        plugins: [tailwindcss()], // TailwindCSS v4 integration
    },
    i18n: {
        defaultLocale: "en",
        locales: ["en", "de", "ru", "tr", "es"],
        routing: { prefixDefaultLocale: false },
    },
    output: "static", // Optimal for performance
    site: "https://joga.com",
});
```

#### `src/assets/app.css`
```css
@import "tailwindcss";
@plugin "daisyui" {
  themes: light --default, dark --prefersdark, cupcake;
}
/* Custom glassmorphism effects and theme variables */
```

### Environment Variables

Create a `.env` file for local development:

```env
# Analytics (optional)
ANALYTICS_ID=your_analytics_id

# Custom settings
SITE_URL=https://your-domain.com
```

### Customization Options

- 🎨 **Themes**: Modify DaisyUI themes and CSS variables in `app.css`
- 📝 **Content**: Update translations in `src/lib/i18n.ts` with type safety
- 🎯 **Components**: Enable/disable features in Layout.astro
- 🔧 **SEO**: Update metadata and hreflang in astro.config.mjs
- 🌍 **Languages**: Add new locales following the i18n pattern
- 📱 **Responsive**: Adjust breakpoints using Tailwind utilities

---

## 🚀 Deployment

### GitHub Pages (Recommended)

This project is pre-configured for automatic deployment to GitHub Pages using GitHub Actions.

**Quick Deploy**:
1. Push code to `main` branch
2. Enable GitHub Pages in repository settings
3. Set Source to "GitHub Actions"
4. Site will be live at `https://bumbarasch.github.io/joga`

**Features**:
- ✅ Automatic deployment on code changes
- ✅ Optimized static builds
- ✅ Global CDN distribution
- ✅ Custom domain support
- ✅ HTTPS by default

**Configuration Files**:
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `astro.config.mjs` - GitHub Pages configuration

For detailed instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

### Alternative Deployment Options

- **Netlify**: Drag and drop `./dist` folder
- **Vercel**: Connect GitHub repository
- **Cloudflare Pages**: Static site hosting
- **AWS S3 + CloudFront**: Enterprise scaling

---

## 📚 Development Reference

### Translation System Usage

```typescript
// Translation helper function in components
import { getTranslation } from '../lib/i18n';

const t = (key: string, values: Record<string, string> = {}) => {
  let translation = getTranslation(Astro, key);
  // Replace dynamic values
  Object.entries(values).forEach(([placeholder, value]) => {
    translation = translation.replace(`{${placeholder}}`, value);
  });
  return translation;
};
```

### Component Development Pattern

```astro
---
// src/components/Example.astro
import { getTranslation } from '../lib/i18n';

const t = (key: string, values = {}) => {
  let translation = getTranslation(Astro, key);
  Object.entries(values).forEach(([placeholder, value]) => {
    translation = translation.replace(`{${placeholder}}`, value);
  });
  return translation;
};
---

<section class="hero bg-base-200">
  <h1 class="text-4xl font-bold">{t('hero.title')}</h1>
  <p>{t('hero.subtitle', { user: 'John' })}</p>
</section>
```

### Language Detection Flow

1. **URL Path**: Check `/de/`, `/ru/`, etc. prefixes
2. **Storage**: Check localStorage for `joga-lang` preference
3. **Browser**: Parse `Accept-Language` header
4. **Fallback**: Default to English

### Theme System Implementation

```javascript
// Theme switching with smooth transitions
const toggleTheme = () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  requestAnimationFrame(() => {
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
};
```

---

## 🐛 Troubleshooting & Debugging

### Common Issues & Solutions

**Development server not starting?**
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
# Check for port conflicts: lsof -i :4321
```

**Build fails with TypeScript errors?**
```bash
# Check TypeScript configuration
npm run astro check
# Verify type safety in src/lib/i18n.ts
npm list astro @types/node
```

**Language switching not working?**
- Check browser console for i18n errors
- Verify `src/middleware.ts` language detection logic
- Ensure translation keys exist in `src/lib/i18n.ts`
- Check `X-Detected-Locale` response header for debugging

**Theme toggle not persistent?**
- Verify localStorage is enabled in browser
- Check `ThemeToggle.astro` event handlers
- Ensure theme preference is saved correctly

**Styling issues with DaisyUI?**
```bash
# Verify TailwindCSS v4 integration
npm run build
# Check src/assets/app.css DaisyUI plugin configuration
```

### GitHub Pages Deployment Issues

**Deployment workflow fails?**
- Check Actions tab for detailed error logs
- Ensure `package-lock.json` is committed (required by Astro action)
- Verify `npm run build` works locally
- Check that `main` branch is the deployment target

**Site shows 404 after deployment?**
- Verify GitHub Pages is enabled in repository settings
- Check that Source is set to "GitHub Actions"
- Ensure workflow completed successfully
- Wait a few minutes for DNS propagation

**Internal links broken on GitHub Pages?**
- Verify `base` path in `astro.config.mjs` matches repository name
- Check that internal navigation uses relative paths
- Ensure language switching respects base path configuration

**Build succeeds but site doesn't update?**
- Check if deployment workflow is triggered on push
- Verify workflow completed without errors
- Clear browser cache and hard refresh
- Check deployment history in Actions tab

### Development Debugging Tips

1. **Language Detection**: Check `X-Detected-Locale` header in browser dev tools
2. **Build Process**: Use `npm run build -- --verbose` for detailed output
3. **Type Safety**: Run `npm run astro check` for TypeScript validation
4. **Performance**: Use Lighthouse to verify Core Web Vitals targets

### Getting Help

- 📖 **Documentation**: Check [Astro Docs](https://docs.astro.build/)
- 🐛 **Issues**: [Report bugs](https://github.com/yourusername/joga/issues)
- 💬 **Community**: [Discussions](https://github.com/yourusername/joga/discussions)
- 🎯 **Astro Discord**: [Join the community](https://astro.build/chat)

---

## 🙏 Acknowledgments

### Technologies & Frameworks
- [Astro v5](https://astro.build/) - Modern static site generator
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- [DaisyUI](https://daisyui.com/) - Component library for Tailwind CSS
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript

### Inspiration
- The global yoga and wellness community
- Modern web development best practices
- Open source contributors worldwide

---

## 📞 Contact & Community

### Project Information
- **Version**: 0.0.1
- **Framework**: Astro v5.15.8
- **License**: MIT
- **Languages**: 5 (English, German, Russian, Turkish, Spanish)

### Connect With Us
- **Website**: [https://joga.com](https://joga.com)
- **Documentation**: [GitHub Wiki](https://github.com/yourusername/joga/wiki)
- **Issues**: [Report bugs](https://github.com/yourusername/joga/issues)
- **Discussions**: [Community forum](https://github.com/yourusername/joga/discussions)
- **Updates**: Follow releases on GitHub

### Social Media
- **X/Twitter**: [@joga_platform](https://twitter.com/joga_platform)
- **LinkedIn**: [Joga Platform](https://linkedin.com/company/joga)
- **YouTube**: [Joga Channel](https://youtube.com/@joga)

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Joga Platform Dimitri Pisarev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

<div align="center">
  <p>
    <strong>🌟 If you like this project, please give it a star! 🌟</strong>
  </p>

  <p>
    Made with ❤️ using modern web technologies
  </p>

  <p>
    <a href="#top">⬆️ Back to top</a>
  </p>
</div>