import { ThemeSwitcher } from '@/src/features/theme-switcher';

import styles from './styles.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Котики 🐱</h1>
      <div className={styles['theme-switcher-wrapper']}>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
