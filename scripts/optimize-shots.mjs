// Converts raw screenshots in brand-source/shots into web-ready images in public/work.
// Usage: node scripts/optimize-shots.mjs  (re-run after adding new *-desktop.png / *-mobile.png files)
import sharp from 'sharp';
import { readdirSync, mkdirSync } from 'node:fs';

const SRC = 'brand-source/shots';
const OUT = 'public/work';
mkdirSync(OUT, { recursive: true });

for (const file of readdirSync(SRC).filter((f) => f.endsWith('.png'))) {
  const base = file.replace(/\.png$/, '');
  if (base.endsWith('-desktop')) {
    // Crop to the first screen (16:10) so cards line up.
    const img = sharp(`${SRC}/${file}`);
    const { width } = await img.metadata();
    const crop = img.extract({ left: 0, top: 0, width, height: Math.round(width * 10 / 16) });
    await crop.clone().resize({ width: 1200 }).webp({ quality: 78 }).toFile(`${OUT}/${base}.webp`);
    await crop.clone().resize({ width: 640 }).webp({ quality: 78 }).toFile(`${OUT}/${base}-640.webp`);
  } else if (base.endsWith('-mobile')) {
    await sharp(`${SRC}/${file}`).resize({ width: 360 }).webp({ quality: 80 }).toFile(`${OUT}/${base}.webp`);
  }
  console.log('ok', base);
}
