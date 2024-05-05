import { observer } from 'mobx-react-lite';
import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

import { useCats } from '@/src/_app/store/cats';
import { CatImage } from '@/src/entities/cat-image';
import { CatLoader } from '@/src/entities/cat-image/ui/loader';
import { CopyButton } from '@/src/features/copy-button';
import { SaveButton } from '@/src/features/save-button';
import { Button } from '@/src/shared/ui/button';

import styles from './styles.module.css';

export const CatWidget = observer(() => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [imageSrc, setImageSrc] = useState('');
  const catsStore = useCats();
  const selectedRef = useRef<HTMLLIElement | null>(null);
  const catsUrlsList = catsStore?.getCatsUrls();

  const fetchCatImage = async () => {
    const response = await fetch('https://cataas.com/cat?width=720&height=720');
    setImageSrc(URL.createObjectURL(await response.blob()));
  };

  const onNextCatButtonClick = () => {
    flushSync(() => {
      catsStore?.nextCat();
    });
    selectedRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  const onPrevCatButtonClick = () => {
    flushSync(() => {
      catsStore?.prevCat();
    });
    selectedRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  useEffect(() => {
    if (!imageSrc) {
      fetchCatImage();
    }
  }, [imageSrc]);

  return (
    <section className={styles.section}>
      {!catsUrlsList?.length ? (
        <CatLoader />
      ) : (
        <ul className={styles['cats-list']}>
          {catsUrlsList.map((url, index) => (
            <li
              key={url}
              className={styles['cats-list-item']}
              ref={catsStore?.getCatIndex() === index ? selectedRef : null}
            >
              <CatImage
                alt=""
                src={url}
                setImage={
                  catsStore?.getCatIndex() === index ? setImage : () => {}
                }
              />
            </li>
          ))}
        </ul>
      )}

      <div className={styles['buttons-container']}>
        <div className={styles['copy-save-buttons']}>
          {/* <CopyButton image={image} /> */}
          {/* <SaveButton image={image} /> */}
        </div>
        <div>
          <Button
            disabled={catsStore?.getCatIndex() === 0}
            styleType="secondary"
            onClick={onPrevCatButtonClick}
          >
            Пред. котик
          </Button>
          <Button styleType="primary" onClick={onNextCatButtonClick}>
            Новый котик
          </Button>
        </div>
      </div>
    </section>
  );
});
