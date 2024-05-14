import html2canvas from 'html2canvas';

import { IMAGE_SIZE } from '../constants/image-size';

export default async function copyImage(imageElement: HTMLDivElement) {
  const canvas = await html2canvas(imageElement, {
    useCORS: true,
    windowWidth: IMAGE_SIZE,
    scale: 2,
  });

  canvas.toBlob((blob) => {
    if (blob) {
      navigator.clipboard
        .write([new ClipboardItem({ 'image/png': blob })])
        .then(() => {
          console.log('Image copied to clipboard');
        })
        .catch((error) => {
          console.error('Error copying image:', error);
        });
    }
  }, 'image/png');
}
