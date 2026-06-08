const sharp = require('sharp');

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="1200" height="630" fill="#ffffff"/>
  
  <!-- Soft purple gradient accents -->
  <defs>
    <radialGradient id="grad1" cx="0%" cy="100%" r="100%">
      <stop offset="0%" stop-color="#8B5CF6" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="grad2" cx="100%" cy="0%" r="100%">
      <stop offset="0%" stop-color="#6D5DFC" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="grad3" cx="50%" cy="0%" r="80%">
      <stop offset="0%" stop-color="#9333EA" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#grad1)"/>
  <rect width="1200" height="630" fill="url(#grad2)"/>
  <rect width="1200" height="630" fill="url(#grad3)"/>

  <!-- Top Left: SIVA HARISH S -->
  <text x="80" y="100" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="24" fill="#6D5DFC" letter-spacing="4">SIVA HARISH S</text>

  <!-- Main heading -->
  <text x="80" y="240" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="96" fill="#111827" letter-spacing="-3">Backend Developer</text>
  <text x="80" y="340" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="96" fill="#111827" letter-spacing="-3">Flutter Developer</text>

  <!-- Subheading -->
  <text x="80" y="420" font-family="system-ui, -apple-system, sans-serif" font-weight="500" font-size="32" fill="#4B5563">Building Scalable APIs, Payment Systems</text>
  <text x="80" y="465" font-family="system-ui, -apple-system, sans-serif" font-weight="500" font-size="32" fill="#4B5563">&amp; Real-Time Applications</text>

  <!-- Bottom tech stack -->
  <text x="80" y="550" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="24" fill="#6B7280" letter-spacing="1">Node.js • Flutter • MySQL • Firebase • AWS S3</text>

  <!-- Bottom right: SH monogram -->
  <rect x="1040" y="470" width="80" height="80" rx="20" fill="#6D5DFC"/>
  <text x="1080" y="522" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="36" fill="#ffffff" text-anchor="middle" letter-spacing="-1">SH</text>
</svg>
`;

sharp(Buffer.from(svg))
  .png()
  .toFile('public/og-image.png')
  .then(() => {
    console.log('Successfully generated public/og-image.png');
  })
  .catch(err => {
    console.error('Error generating image:', err);
  });
