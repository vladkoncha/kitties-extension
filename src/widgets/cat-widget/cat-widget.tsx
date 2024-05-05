import { observer } from 'mobx-react-lite';
import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';

import { useCats } from '@/src/_app/store/cats';
import { CatImage } from '@/src/entities/cat-image';
import { CatLoader } from '@/src/entities/cat-image/ui/loader';
import { CopyButton } from '@/src/features/copy-button';
import { SaveButton } from '@/src/features/save-button';
import { Button } from '@/src/shared/ui/button';
import { ArrowLeft } from '@/src/shared/ui/icons/arrow-left';
import { ArrowRight } from '@/src/shared/ui/icons/arrow-right';

import styles from './styles.module.css';

export const CatWidget = observer(() => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const catsStore = useCats();
  const currentCatRef = useRef<HTMLLIElement | null>(null);
  const catsUrlsList = catsStore?.getCatsUrls();

  const scrollToCurrentCat = () =>
    currentCatRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });

  const onNextCatButtonClick = () => {
    flushSync(() => {
      catsStore?.nextCat();
    });
    scrollToCurrentCat();
  };

  const onPrevCatButtonClick = () => {
    flushSync(() => {
      catsStore?.prevCat();
    });
    scrollToCurrentCat();
  };

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
              ref={catsStore?.getCatIndex() === index ? currentCatRef : null}
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
        <div className={styles['arrows-container']}>
          <Button
            style={{ width: '5rem', height: '3rem' }}
            disabled={catsStore?.getCatIndex() === 0}
            styleType="secondary"
            onClick={onPrevCatButtonClick}
          >
            <ArrowLeft />
          </Button>
          <Button
            style={{ width: '5rem', height: '3rem' }}
            styleType="primary"
            onClick={onNextCatButtonClick}
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
});
