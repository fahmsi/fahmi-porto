const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicProfileDir = path.join(__dirname, '..', 'public', 'images', 'profile');
const sourceAssetsDir = path.join(__dirname, '..', '..', 'source', 'assets');

const origPublicJpg = path.join(publicProfileDir, 'fahmi.jpg');
const backupJpg = path.join(sourceAssetsDir, 'fahmi.jpg');
const targetWebp = path.join(publicProfileDir, 'fahmi-profile-web.webp');
const oldWebp = path.join(publicProfileDir, 'fahmi.webp');

async function processProfileImage() {
  // Ensure source assets directory exists
  if (!fs.existsSync(sourceAssetsDir)) {
    fs.mkdirSync(sourceAssetsDir, { recursive: true });
  }

  // Backup original JPG if it exists in public and is not already in source/assets
  if (fs.existsSync(origPublicJpg)) {
    if (!fs.existsSync(backupJpg)) {
      fs.copyFileSync(origPublicJpg, backupJpg);
      console.log(`✓ Backed up original photo to: ${backupJpg}`);
    }
  }

  // Determine source image to process (prefer source backup)
  const sourceImage = fs.existsSync(backupJpg) ? backupJpg : origPublicJpg;

  if (!fs.existsSync(sourceImage)) {
    console.error("Error: Original profile photo not found anywhere!");
    return;
  }

  try {
    const originalSize = fs.statSync(sourceImage).size;

    // Create optimized profile webp: max 480px width, quality 80, EXIF stripped
    await sharp(sourceImage)
      .resize({ width: 480, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(targetWebp);

    const newSize = fs.statSync(targetWebp).size;
    const reduction = ((1 - newSize / originalSize) * 100).toFixed(1);

    console.log(`✓ Optimized WebP created at: ${targetWebp}`);
    console.log(`  Original Size: ${(originalSize / 1024).toFixed(1)} KB`);
    console.log(`  WebP Size: ${(newSize / 1024).toFixed(1)} KB (${reduction}% reduction)`);
    console.log(`  Metadata stripped: Yes (Privacy protection enabled)`);

    // Clean up public directory
    if (fs.existsSync(origPublicJpg)) {
      fs.unlinkSync(origPublicJpg);
      console.log("✓ Removed original high-res JPG from public directory.");
    }
    if (fs.existsSync(oldWebp)) {
      fs.unlinkSync(oldWebp);
      console.log("✓ Removed old fahmi.webp from public directory.");
    }
  } catch (err) {
    console.error("Error processing profile image:", err.message);
  }
}

processProfileImage();
