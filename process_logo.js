const Jimp = require('jimp');

async function processLogo() {
  const image = await Jimp.read('public/logo2.png');
  
  // Replace white background with transparent
  // We scan the image and replace pixels that are close to white with transparent
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    const red = this.bitmap.data[idx + 0];
    const green = this.bitmap.data[idx + 1];
    const blue = this.bitmap.data[idx + 2];
    const alpha = this.bitmap.data[idx + 3];

    // If it's mostly white
    if (red > 240 && green > 240 && blue > 240) {
      this.bitmap.data[idx + 3] = 0; // Set alpha to 0 (transparent)
    }
  });

  // Autocrop the transparent border
  // Autocrop removes borders of the same color as the top-left pixel
  // Since we made it transparent, it will trim the transparent borders
  image.autocrop();

  await image.writeAsync('public/logo2.png');
  console.log('Processed logo successfully.');
}

processLogo().catch(console.error);
