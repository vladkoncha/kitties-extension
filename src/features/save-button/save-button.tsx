import { Button } from '@/src/shared/ui/button';
import saveImage from '@/src/shared/utils/save-image';

import { SaveButtonProps } from './types';

export const SaveButton = ({ imageContainerRef }: SaveButtonProps) => {
  return (
    <Button
      onClick={() =>
        imageContainerRef.current && saveImage(imageContainerRef.current)
      }
      styleType="secondary"
    >
      Скачать
    </Button>
  );
};
