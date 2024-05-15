import html2canvas from 'html2canvas';

export default async function copyImage(imageElement: HTMLDivElement) {
  const canvas = await html2canvas(imageElement, {
    useCORS: true,
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
