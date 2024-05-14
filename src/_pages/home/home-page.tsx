import { CatWidget } from '@/src/widgets/cat-widget';

import styles from './styles.module.css';

export const HomePage = () => {
  return (
    <div className={styles['page-container']}>
      <CatWidget />
    </div>
  );
};
