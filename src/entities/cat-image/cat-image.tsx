'use client';

import Image from 'next/image';
import { useState } from 'react';

import styles from './styles.module.css';
import { CatImageProps } from './types';
import { CatLoader } from './ui/loader';

export const CatImage = ({ alt, src }: CatImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={styles.container}>
      {isLoading && <CatLoader />}
      <Image
        fill
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        style={{ visibility: isLoading ? 'hidden' : 'visible' }}
      />
    </div>
  );
};
