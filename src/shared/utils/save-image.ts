import html2canvas from 'html2canvas';

const downloadImage = (blob: string, fileName: string) => {
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.src = blob;

  img.onload = () => {
    const fakeLink = document.createElement('a');
    fakeLink.download = fileName;
    fakeLink.href = img.src;
    fakeLink.click();
    fakeLink.remove();
  };
};

export default async function saveImage(imageElement: HTMLDivElement) {
  const canvas = await html2canvas(imageElement, {
    useCORS: true,
  });

  const image = canvas.toDataURL('image/jpeg', 1.0);

  downloadImage(image, 'cat.jpg');
}
