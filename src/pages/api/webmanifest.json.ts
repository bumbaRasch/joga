// Dynamic Web Manifest API route
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ url }) => {
  // Determine base path based on environment
  const isProduction = import.meta.env.PROD;
  const basePath = isProduction ? '/joga' : '';

  const manifest = {
    name: "Joga - AI-Powered Yoga & Wellness",
    short_name: "Joga",
    description: "Transform your mind and body with personalized AI-driven yoga programs",
    icons: [
      {
        src: `${basePath}/android-chrome-192x192.png`,
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: `${basePath}/android-chrome-512x512.png`,
        sizes: "512x512",
        type: "image/png"
      }
    ],
    theme_color: "#2563eb",
    background_color: "#ffffff",
    display: "standalone",
    orientation: "portrait",
    scope: `${basePath}/`,
    start_url: `${basePath}/`
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
};