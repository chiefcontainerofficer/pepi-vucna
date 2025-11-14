const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images/transport');
const outputDir = imagesDir; // Save WebP files in the same directory

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function applyStyleFilter(inputPath, outputPath) {
  try {
    // Target dimensions for consistent carousel display (4:3 aspect ratio)
    const targetWidth = 1920;
    const targetHeight = 1440;
    
    // Get image metadata for logging
    const metadata = await sharp(inputPath).metadata();
    
    // Apply comprehensive style filter and resize to show whole image
    await sharp(inputPath)
      .normalize() // Normalize the image to use full dynamic range
      .gamma(1.1) // Slight gamma adjustment for consistent exposure
      .modulate({
        brightness: 1.05,  // Slightly brighten for consistency
        saturation: 0.95,  // Slightly desaturate for a more professional look
        hue: 0             // Keep hue consistent
      })
      .resize(targetWidth, targetHeight, {
        fit: 'contain', // Show whole image without cropping
        background: { r: 0, g: 0, b: 0, alpha: 1 } // Black background to match site
      })
      .sharpen({ sigma: 0.5, m1: 1, m2: 2, x1: 2, y2: 10, y3: 20 }) // Subtle sharpening
      .toColorspace('srgb') // Ensure consistent color space
      .webp({ 
        quality: 85,      // Good quality/size balance
        effort: 6         // Higher effort for better compression
      })
      .toFile(outputPath);
    
    console.log(`✓ Processed: ${path.basename(inputPath)} (${metadata.width}x${metadata.height} -> ${targetWidth}x${targetHeight})`);
    return true;
  } catch (error) {
    console.error(`✗ Error processing ${inputPath}:`, error.message);
    return false;
  }
}

async function processAllImages() {
  const files = fs.readdirSync(imagesDir);
  const webpFiles = files.filter(file => 
    file.toLowerCase().endsWith('.webp')
  );

  if (webpFiles.length === 0) {
    console.log('No WebP files found in', imagesDir);
    return;
  }

  console.log(`Found ${webpFiles.length} WebP file(s) to process...\n`);

  let successCount = 0;
  let failCount = 0;

  for (const file of webpFiles) {
    const inputPath = path.join(imagesDir, file);
    // Create temporary output path, then replace original
    const tempPath = path.join(outputDir, file.replace(/\.webp$/i, '.temp.webp'));
    const outputPath = path.join(outputDir, file);

    const success = await applyStyleFilter(inputPath, tempPath);
    if (success) {
      // Replace original with processed version
      fs.renameSync(tempPath, outputPath);
      successCount++;
    } else {
      failCount++;
      // Clean up temp file if it exists
      if (fs.existsSync(tempPath)) {
        fs.unlinkSync(tempPath);
      }
    }
  }

  console.log(`\n✓ Processing complete!`);
  console.log(`  Success: ${successCount}`);
  console.log(`  Failed: ${failCount}`);
}

// Run the conversion
processAllImages().catch(console.error);

