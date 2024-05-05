import { IMAGE_SIZE } from '@/src/shared/constants/image-size';
import { Button } from '@/src/shared/ui/button';

import { CopyButtonProps } from './types';

export const CopyButton = ({ image }: CopyButtonProps) => {
  const copyImageToClipboard = () => {
    if (!image) {
      return;
    }

    const canvas = document.createElement('canvas');
    canvas.width = IMAGE_SIZE;
    canvas.height = IMAGE_SIZE;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    ctx.drawImage(image, 0, 0);
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
  };

  return (
    <Button
      disabled={!image}
      onClick={copyImageToClipboard}
      styleType="primary"
    >
      Копировать
    </Button>
  );
};
