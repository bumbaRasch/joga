# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Joga is a modern, multilingual AI-powered yoga and wellness website built with Astro v5. The site features a comprehensive internationalization system supporting 5 languages (English, German, Russian, Turkish, Spanish) with automatic language detection and professional translations. It uses a mobile-first approach with TailwindCSS v4 and DaisyUI for styling, incorporating 2025-2026 web trends including AI transparency features and modern animations.

## Development Commands

- **Start development server**: `npm run dev` (starts at localhost:4321)
- **Build production site**: `npm run build` (outputs to `./dist/`)
- **Preview build locally**: `npm run preview`
- **Run Astro CLI commands**: `npm run astro ...`
- **Install dependencies**: `npm install`

## Internationalization Architecture

This is the core architectural feature of the project. The i18n system is comprehensive and type-safe.

### Translation System
- **Translation Engine**: `src/lib/i18n.ts` contains type-safe translation interfaces and utilities
- **Supported Languages**: English (default), German, Russian, Turkish, Spanish
- **Dynamic Translations**: Supports parameter replacement (e.g., `{terms}`, `{privacy}`)
- **Fallback System**: Defaults to English for missing translations

### Language Detection Flow
1. **URL Path Prefix**: Check if path starts with `/de/`, `/ru/`, etc.
2. **Saved Preference**: Check localStorage/cookie for `joga-lang`
3. **Browser Detection**: Parse `Accept-Language` header
4. **Fallback**: Default to English

### URL Structure
- English (default): `https://joga.com/`
- Other languages: `https://joga.com/de/`, `https://joga.com/ru/`, etc.

### Adding New Languages
1. Add translation data to `src/lib/i18n.ts` translations object
2. Update supported locales array in `astro.config.mjs`
3. Create localized page in `src/pages/{locale}/index.astro`
4. Add language info to `getLocaleInfo()` function
5. Update LanguageSwitcher component

## Component Architecture & Patterns

### Translation Pattern in Components
All components use this consistent pattern:
```typescript
import { getTranslation } from '../lib/i18n';

const t = (key: string, values: Record<string, string> = {}) => {
  let translation = getTranslation(Astro, key);
  Object.entries(values).forEach(([placeholder, value]) => {
    translation = translation.replace(`{${placeholder}}`, value);
  });
  return translation;
};

// Usage in template:
<h1>{t('hero.title')}</h1>
<p>{t('cta.termsAgree', { terms: 'Terms of Service', privacy: 'Privacy Policy' })}</p>
```

### Component Structure
1. **Frontmatter**: Imports, translation helpers, component logic
2. **Template**: Astro template with DaisyUI classes and translation keys
3. **Scripts**: Client-side JavaScript (use `define:vars` for server data)
4. **Styles**: Scoped CSS for customizations (rare, prefer Tailwind)

### Key Components
- **Layout.astro**: Main layout with SEO, language switcher, theme support
- **LanguageSwitcher.astro**: Interactive dropdown for language selection
- **Hero.astro**: Main landing section with navigation and CTAs
- **ThemeToggle.astro**: Dark/light mode switching component

## Middleware & Routing

### Language Detection Middleware
`src/middleware.ts` handles:
- Multi-layer language detection (path → cookie → browser → fallback)
- Context storage of detected locale
- Response header injection for debugging

### Page Organization
```
src/pages/
├── index.astro              # English (default)
├── de/index.astro          # German
├── ru/index.astro          # Russian
├── tr/index.astro          # Turkish
├── es/index.astro          # Spanish
├── terms-of-service.astro  # Legal pages
└── privacy-policy.astro
```

## Styling Architecture

### TailwindCSS v4 Integration
- **No separate config**: Uses TailwindCSS v4 defaults via Vite plugin
- **DaisyUI Themes**: Light, dark, cupcake themes configured in `src/assets/app.css`
- **Custom Variables**: Theme-specific colors and effects in CSS variables
- **Performance**: CSS containment, will-change properties, reduced motion support

### Design System
- **Mobile-First**: All responsive design starts with mobile
- **DaisyUI Components**: Use `btn`, `card`, `hero`, `badge`, etc. for consistency
- **Custom Animations**: Float, pulse-glow, glassmorphism effects
- **Theme Support**: Complete dark/light mode with smooth transitions

## Key Configuration Files

### astro.config.mjs
- **TailwindCSS v4**: Configured via `@tailwindcss/vite` plugin
- **I18n Setup**: 5 supported locales, prefix-free default locale
- **Static Output**: Optimized for performance
- **Site Configuration**: URL and metadata

### src/assets/app.css
- **Framework Imports**: `@import "tailwindcss"` and `@plugin "daisyui"`
- **Theme Variables**: CSS variables for light/dark themes
- **Custom Animations**: Modern keyframe animations and transitions
- **Performance**: Accessibility features, reduced motion support

## Development Patterns

### Theme System
- **Automatic Detection**: Respects system preference
- **Manual Toggle**: Theme switcher in navigation and language switcher
- **Persistent Storage**: Saves preference to localStorage
- **Smooth Transitions**: Uses requestAnimationFrame for performance

### Animation Performance
- **Intersection Observer**: Efficient scroll-triggered animations
- **CSS Containment**: Improved rendering performance
- **RequestAnimationFrame**: Smooth theme transitions
- **Reduced Motion**: Respects user accessibility preferences

### SEO Optimization
- **Hreflang Implementation**: Proper alternate language links
- **Localized Meta Tags**: Language-specific titles and descriptions
- **Structured Data**: JSON-LD schema for search engines
- **Performance**: Preconnect headers, lazy loading

## TypeScript Configuration

- **Strict Mode**: Full TypeScript strict mode enabled
- **Astro Integration**: Extends Astro's TypeScript configuration
- **Type Safety**: Comprehensive interfaces for i18n and component props

## Testing Language Features

To test the internationalization system:

1. **Browser Language**: Change browser language and refresh
2. **Direct URLs**: Visit `/de/`, `/ru/`, etc. directly
3. **Language Switcher**: Use dropdown in top-right corner
4. **Response Headers**: Check `X-Detected-Locale` header for debugging

## Common Development Tasks

### Adding New Translatable Content
1. Add key to translation interface in `src/lib/i18n.ts`
2. Add translations for all 5 languages
3. Use `t('key')` in components instead of hardcoded text
4. Test with language switcher

### Creating New Pages
1. Follow existing page structure
2. Use Layout.astro for consistent SEO and theme support
3. Add translation keys for all text content
4. Create localized versions for non-English pages

### Performance Considerations
- Use Intersection Observer for scroll animations
- Implement requestAnimationFrame for theme transitions
- Leverage CSS containment for complex layouts
- Test with browser dev tools performance tab

## Legal Compliance

The site includes comprehensive legal documentation with AI transparency:
- **Terms of Service**: Medical disclaimers, liability protection, AI transparency
- **Privacy Policy**: GDPR/CCPA compliance, data processing, user rights
- **2025-2026 Standards**: AI-powered service disclaimers and transparency requirements