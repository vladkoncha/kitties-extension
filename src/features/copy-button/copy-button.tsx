import { Button } from '@/src/shared/ui/button';
import copyImage from '@/src/shared/utils/copy-image';

import { CopyButtonProps } from './types';

export const CopyButton = ({ imageContainerRef }: CopyButtonProps) => {
  return (
    <Button
      onClick={() =>
        imageContainerRef.current && copyImage(imageContainerRef.current)
      }
      styleType="primary"
    >
      Копировать
    </Button>
  );
};
