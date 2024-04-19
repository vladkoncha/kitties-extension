'use client';

import { useEffect, useState } from 'react';

import { HomePage } from '@/src/_pages/home';

import styles from './page.module.css';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null; // return this null to avoid hydration errors
  }

  return (
    <main className={styles.main}>
      <HomePage />
    </main>
  );
}
