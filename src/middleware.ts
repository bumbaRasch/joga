import { defineMiddleware } from 'astro:middleware';

// Simple language detection middleware
export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  // Remove base path from pathname for language detection
  // Dynamic base path - /joga for production, / for development
  const isProduction = import.meta.env.PROD;
  const basePath = isProduction ? '/joga' : '/';
  const cleanPathname = pathname.startsWith(basePath) && basePath !== '/'
    ? pathname.slice(basePath.length) || '/'
    : pathname;

  // Get browser language from Accept-Language header
  const acceptLanguage = context.request.headers.get('accept-language') || '';
  const savedLang = context.cookies.get('joga-lang')?.value;

  // Language detection logic
  const supportedLocales = ['en', 'de', 'ru', 'tr', 'es'];
  let targetLocale = 'en'; // fallback

  // Check if path already has language prefix
  const pathLocale = cleanPathname.split('/')[1];
  if (supportedLocales.includes(pathLocale)) {
    targetLocale = pathLocale;
  } else if (savedLang && supportedLocales.includes(savedLang)) {
    // Check saved preference
    targetLocale = savedLang;
  } else {
    // Detect from browser language
    const preferredLanguages = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim().toLowerCase())
      .filter(lang => lang.length >= 2);

    for (const lang of preferredLanguages) {
      if (supportedLocales.includes(lang)) {
        targetLocale = lang;
        break;
      }
      const langCode = lang.split('-')[0];
      if (supportedLocales.includes(langCode)) {
        targetLocale = langCode;
        break;
      }
    }
  }

  // Store detected locale in context
  context.locals.detectedLocale = targetLocale;

  const response = await next();
  response.headers.set('X-Detected-Locale', targetLocale);
  return response;
});

