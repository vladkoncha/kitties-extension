'use client';

import { useRef, useState } from 'react';

import { useTheme } from '@/src/_app/theme-context';
import { ImageTextForm } from '@/src/features/image-text-form';
import { ThemeSwitcher } from '@/src/features/theme-switcher';
import { IconButton } from '@/src/shared/ui/icon-button';
import { FormDark } from '@/src/shared/ui/icons/form-dark';
import { FormLight } from '@/src/shared/ui/icons/form-light';

import styles from './styles.module.css';
import { FormContainer } from './ui/form-container/form-container';

export const Header = () => {
  const theme = useTheme();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const openButtonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <header className={styles.header}>
      <IconButton
        ref={openButtonRef}
        icon={theme.style === 'light' ? FormLight : FormDark}
        onClick={() => setIsFormOpen(!isFormOpen)}
      />
      <h1 className={styles.title}>Котики 🐱</h1>
      <ThemeSwitcher />

      <FormContainer
        isFormOpen={isFormOpen}
        setIsFormOpen={setIsFormOpen}
        openButtonRef={openButtonRef}
      >
        <ImageTextForm />
      </FormContainer>
    </header>
  );
};
