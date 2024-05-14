'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

import styles from './styles.module.css';
import { CatImageProps } from './types';
import { CatLoader } from './ui/loader';

export const CatImage = ({ alt, src }: CatImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef<HTMLImageElement>(null);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={styles.container}>
      {isLoading && <CatLoader />}
      {src && (
        <Image
          fill
          crossOrigin="anonymous"
          ref={ref}
          src={src}
          alt={alt}
          onLoad={handleImageLoad}
          style={{ visibility: isLoading ? 'hidden' : 'visible' }}
        />
      )}
    </div>
  );
};
