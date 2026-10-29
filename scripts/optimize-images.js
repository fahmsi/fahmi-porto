/**
 * Image Optimization Script for Maritimate Brand Identity Assets
 * 
 * Creates WebP variants:
 * - Gallery: max 1600px wide, quality 88
 * - Thumbnail: max 480px wide, quality 78
 * 
 * Preserves original PNG source files.
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SOURCE_DIR = path.join(__dirname, '..', 'public', 'images', 'brand-identity-maritimate');
const GALLERY_DIR = path.join(SOURCE_DIR, 'gallery');
const THUMB_DIR = path.join(SOURCE_DIR, 'thumbs');

const GALLERY_MAX_WIDTH = 1600;
const GALLERY_QUALITY = 88;
const THUMB_MAX_WIDTH = 480;
const THUMB_QUALITY = 78;

async function optimizeImages() {
  // Create output directories
  if (!fs.existsSync(GALLERY_DIR)) fs.mkdirSync(GALLERY_DIR, { recursive: true });
  if (!fs.existsSync(THUMB_DIR)) fs.mkdirSync(THUMB_DIR, { recursive: true });

  const files = fs.readdirSync(SOURCE_DIR).filter(f => 
    f.toLowerCase().endsWith('.png') || f.toLowerCase().endsWith('.jpg')
  );

  console.log(`Found ${files.length} source images to optimize.\n`);

  let totalOriginal = 0;
  let totalGallery = 0;
  let totalThumb = 0;

  for (const file of files) {
    const inputPath = path.join(SOURCE_DIR, file);
    const baseName = path.parse(file).name;
    // Normalize: lowercase, spaces to hyphens
    const normalizedName = baseName.toLowerCase().replace(/\s+/g, '-');
    
    const galleryOut = path.join(GALLERY_DIR, `${normalizedName}.webp`);
    const thumbOut = path.join(THUMB_DIR, `${normalizedName}.webp`);

    const originalSize = fs.statSync(inputPath).size;
    totalOriginal += originalSize;

    try {
      // Gallery variant
      await sharp(inputPath)
        .resize({ width: GALLERY_MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: GALLERY_QUALITY })
        .toFile(galleryOut);

      const gallerySize = fs.statSync(galleryOut).size;
      totalGallery += gallerySize;

      // Thumbnail variant
      await sharp(inputPath)
        .resize({ width: THUMB_MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: THUMB_QUALITY })
        .toFile(thumbOut);

      const thumbSize = fs.statSync(thumbOut).size;
      totalThumb += thumbSize;

      const reduction = ((1 - gallerySize / originalSize) * 100).toFixed(1);
      console.log(`✓ ${file}`);
      console.log(`  Original: ${(originalSize / 1024 / 1024).toFixed(1)}MB → Gallery: ${(gallerySize / 1024).toFixed(0)}KB (${reduction}% smaller) → Thumb: ${(thumbSize / 1024).toFixed(0)}KB`);
    } catch (err) {
      console.error(`✗ Failed: ${file} — ${err.message}`);
    }
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`Total original: ${(totalOriginal / 1024 / 1024).toFixed(1)}MB`);
  console.log(`Total gallery:  ${(totalGallery / 1024 / 1024).toFixed(1)}MB`);
  console.log(`Total thumbs:   ${(totalThumb / 1024 / 1024).toFixed(1)}MB`);
  console.log(`Gallery reduction: ${((1 - totalGallery / totalOriginal) * 100).toFixed(1)}%`);
  console.log(`Combined reduction: ${((1 - (totalGallery + totalThumb) / totalOriginal) * 100).toFixed(1)}%`);
}

optimizeImages().catch(console.error);
