import { CatImage } from '@/src/entities/cat-image';

import styles from './styles.module.css';

export const CatWidget = () => {
  return (
    <section className={styles.section}>
      <CatImage alt="" src="https://cataas.com/cat?width=720&height=720" />
      <button>Скопировать котика</button>
      <button>Скачать котика</button>
      <button>Следующий котик</button>
    </section>
  );
};
