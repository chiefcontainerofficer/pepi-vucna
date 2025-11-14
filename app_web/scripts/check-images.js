const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images/transport');

async function checkImageDimensions() {
  const files = fs.readdirSync(imagesDir);
  const webpFiles = files.filter(file => file.toLowerCase().endsWith('.webp'));

  console.log('Image dimensions:\n');
  console.log('Filename'.padEnd(20), 'Width'.padEnd(10), 'Height'.padEnd(10), 'Aspect Ratio');
  console.log('-'.repeat(60));

  const imageInfo = [];

  for (const file of webpFiles) {
    const filePath = path.join(imagesDir, file);
    try {
      const metadata = await sharp(filePath).metadata();
      const aspectRatio = (metadata.width / metadata.height).toFixed(2);
      imageInfo.push({
        file,
        width: metadata.width,
        height: metadata.height,
        aspectRatio: parseFloat(aspectRatio),
        size: metadata.size
      });
      console.log(
        file.padEnd(20),
        String(metadata.width).padEnd(10),
        String(metadata.height).padEnd(10),
        aspectRatio
      );
    } catch (error) {
      console.error(`Error reading ${file}:`, error.message);
    }
  }

  console.log('\n--- Summary ---');
  const widths = imageInfo.map(img => img.width);
  const heights = imageInfo.map(img => img.height);
  const aspectRatios = imageInfo.map(img => img.aspectRatio);
  
  console.log(`Total images: ${imageInfo.length}`);
  console.log(`Width range: ${Math.min(...widths)} - ${Math.max(...widths)}`);
  console.log(`Height range: ${Math.min(...heights)} - ${Math.max(...heights)}`);
  console.log(`Aspect ratio range: ${Math.min(...aspectRatios).toFixed(2)} - ${Math.max(...aspectRatios).toFixed(2)}`);
  
  // Group by aspect ratio
  const aspectGroups = {};
  imageInfo.forEach(img => {
    const key = img.aspectRatio.toFixed(2);
    if (!aspectGroups[key]) aspectGroups[key] = [];
    aspectGroups[key].push(img.file);
  });
  
  console.log('\n--- Aspect Ratio Groups ---');
  Object.keys(aspectGroups).sort().forEach(ratio => {
    console.log(`${ratio}: ${aspectGroups[ratio].length} image(s) - ${aspectGroups[ratio].join(', ')}`);
  });

  return imageInfo;
}

checkImageDimensions().catch(console.error);

