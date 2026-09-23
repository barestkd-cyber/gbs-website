// Derives web-ready logo assets from the owner-approved GBS logo.
// Only removes the white background and trims; the artwork itself is untouched.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const SRC = 'brand-source/gbs-logo-original.png';
mkdirSync('public/brand', { recursive: true });

const { data, info } = await sharp(SRC).raw().toBuffer({ resolveWithObject: true });
const { width, height } = info;
const out = Buffer.alloc(width * height * 4);
const colors = {};
for (let i = 0, j = 0; i < data.length; i += 3, j += 4) {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  const d = Math.max(255 - r, 255 - g, 255 - b);
  const a = Math.max(0, Math.min(1, (d - 10) / 40));
  out[j] = r; out[j + 1] = g; out[j + 2] = b; out[j + 3] = Math.round(a * 255);
  if (a === 1) { const k = `${r >> 3},${g >> 3},${b >> 3}`; colors[k] = (colors[k] || 0) + 1; }
}
const top = Object.entries(colors).sort((x, y) => y[1] - x[1]).slice(0, 8)
  .map(([k, n]) => '#' + k.split(',').map(v => ((+v << 3) + 4).toString(16).padStart(2, '0')).join('') + ' ' + n);
console.log('dominant colors:', top.join(' | '));

const full = sharp(out, { raw: { width, height, channels: 4 } });
const trimmed = await full.clone().png().toBuffer().then(b => sharp(b).trim({ threshold: 1 }).png().toBuffer({ resolveWithObject: true }));
console.log('trimmed full logo', trimmed.info.width, trimmed.info.height, trimmed.info.trimOffsetLeft, trimmed.info.trimOffsetTop);
await sharp(trimmed.data).resize({ width: 640 }).png({ compressionLevel: 9 }).toFile('public/brand/gbs-logo.png');
await sharp(trimmed.data).resize({ width: 640 }).webp({ quality: 90 }).toFile('public/brand/gbs-logo.webp');

// Bear-"G" mark for favicon/app icons: a straight crop of the approved artwork.
const markRaw = await full.clone().extract({ left: 160, top: 340, width: 372, height: 440 }).png().toBuffer();
const mark = await sharp(markRaw).trim({ threshold: 1 }).png().toBuffer();
await sharp(mark).png().toFile('brand-source/gbs-mark-check.png');
const square = async (size, pad, bg) => {
  const inner = Math.round(size * (1 - pad * 2));
  const m = await sharp(mark).resize({ width: inner, height: inner, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background: bg } }).composite([{ input: m, gravity: 'center' }]).png({ compressionLevel: 9 });
};
const clear = { r: 0, g: 0, b: 0, alpha: 0 };
const cream = { r: 250, g: 247, b: 241, alpha: 1 };
await (await square(512, 0.04, clear)).toFile('public/brand/gbs-mark.png');
await (await square(32, 0.02, clear)).toFile('public/favicon-32.png');
await (await square(180, 0.1, cream)).toFile('public/apple-touch-icon.png');
await (await square(192, 0.1, cream)).toFile('public/icon-192.png');
await (await square(512, 0.1, cream)).toFile('public/icon-512.png');

// OpenGraph share image: approved logo centered on the site background.
const ogLogo = await sharp(trimmed.data).resize({ width: 760 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: cream } })
  .composite([{ input: ogLogo, gravity: 'center' }]).png({ compressionLevel: 9 }).toFile('public/og-image.png');
