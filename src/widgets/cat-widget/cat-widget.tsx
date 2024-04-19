import { useEffect, useState } from 'react';

import { CatImage } from '@/src/entities/cat-image';
import { CopyButton } from '@/src/features/copy-button';
import { SaveButton } from '@/src/features/save-button';
import { Button } from '@/src/shared/ui/button';

import styles from './styles.module.css';

export const CatWidget = () => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [imageSrc, setImageSrc] = useState('');

  const fetchCatImage = async () => {
    const response = await fetch('https://cataas.com/cat?width=720&height=720');
    setImageSrc(URL.createObjectURL(await response.blob()));
  };

  const onNextCatButtonClick = () => {
    fetchCatImage();
  };

  useEffect(() => {
    if (!imageSrc) {
      fetchCatImage();
    }
  }, [imageSrc]);

  return (
    <section className={styles.section}>
      <CatImage alt="" src={imageSrc} setImage={setImage} />
      <div className={styles['buttons-container']}>
        <div className={styles['copy-save-buttons']}>
          <CopyButton image={image} />
          <SaveButton image={image} />
        </div>
        <Button styleType="primary" onClick={onNextCatButtonClick}>
          Новый котик
        </Button>
      </div>
    </section>
  );
};
