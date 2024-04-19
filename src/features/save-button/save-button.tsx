import { IMAGE_SIZE } from '@/src/shared/constants/image-size';
import { Button } from '@/src/shared/ui/button';

import { SaveButtonProps } from './types';

export const SaveButton = ({ image }: SaveButtonProps) => {
  const saveImage = () => {
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
    const dataURL = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'cat.jpg';
    link.click();
  };

  return (
    <Button disabled={!image} onClick={saveImage} styleType="secondary">
      Скачать
    </Button>
  );
};
