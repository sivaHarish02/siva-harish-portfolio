const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "public");

// Primary Favicon SVG (White bg, Purple border, Rounded)
const faviconSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect x="32" y="32" width="448" height="448" rx="128" fill="#ffffff" stroke="#6D5DFC" stroke-width="48" />
  <text x="256" y="345" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="240" fill="#6D5DFC" text-anchor="middle" letter-spacing="-10">SH</text>
</svg>
`;

// App Icon SVG - Apple (Square for iOS to round)
const appleIconSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8B5CF6" />
      <stop offset="100%" stop-color="#6D5DFC" />
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="512" height="512" rx="0" fill="url(#grad)" />
  <text x="256" y="355" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="260" fill="#ffffff" text-anchor="middle" letter-spacing="-12">SH</text>
</svg>
`;

// App Icon SVG - Android (Rounded)
const androidIconSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8B5CF6" />
      <stop offset="100%" stop-color="#6D5DFC" />
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="512" height="512" rx="128" fill="url(#grad)" />
  <text x="256" y="355" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="260" fill="#ffffff" text-anchor="middle" letter-spacing="-12">SH</text>
</svg>
`;

async function generateIcons() {
  console.log("Generating icons...");

  // Favicon sizes (using faviconSvg)
  await sharp(Buffer.from(faviconSvg))
    .resize(16, 16)
    .png()
    .toFile(path.join(publicDir, "favicon-16x16.png"));
    
  await sharp(Buffer.from(faviconSvg))
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, "favicon-32x32.png"));

  // Create favicon.ico by just using the 32x32 png
  // Browsers support PNG inside .ico, but we can also just save the raw PNG bytes 
  // as favicon.ico which works in all modern browsers
  await sharp(Buffer.from(faviconSvg))
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, "favicon.ico"));

  // Apple Touch Icon
  await sharp(Buffer.from(appleIconSvg))
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, "apple-touch-icon.png"));

  // Android Chrome Icons
  await sharp(Buffer.from(androidIconSvg))
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, "android-chrome-192x192.png"));

  await sharp(Buffer.from(androidIconSvg))
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, "android-chrome-512x512.png"));

  console.log("Done!");
}

generateIcons().catch(console.error);
