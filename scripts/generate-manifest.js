import fs from 'fs';
import path from 'path';

const isProduction = process.env.NODE_ENV === 'production' || process.env.CI;

const manifest = {
  name: "Joga - AI-Powered Yoga & Wellness",
  short_name: "Joga",
  description: "Transform your mind and body with personalized AI-driven yoga programs",
  icons: [
    {
      src: `${isProduction ? '/joga' : ''}/android-chrome-192x192.png`,
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: `${isProduction ? '/joga' : ''}/android-chrome-512x512.png`,
      sizes: "512x512",
      type: "image/png"
    }
  ],
  theme_color: "#2563eb",
  background_color: "#ffffff",
  display: "standalone",
  orientation: "portrait",
  scope: `${isProduction ? '/joga' : '/'}`,
  start_url: `${isProduction ? '/joga' : '/'}`
};

// Write manifest to public directory
const manifestPath = path.join(process.cwd(), 'public/site.webmanifest');
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

console.log(`✅ Generated webmanifest for ${isProduction ? 'production' : 'development'}`);