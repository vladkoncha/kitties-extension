import { CatWidget } from '@/src/widgets/cat-widget';
import { ImageTextForm } from '@/src/widgets/image-text-form';

import styles from './styles.module.css';

export const HomePage = () => {
  return (
    <div className={styles['page-container']}>
      <CatWidget />
      {/* <ImageTextForm /> */}
    </div>
  );
};
