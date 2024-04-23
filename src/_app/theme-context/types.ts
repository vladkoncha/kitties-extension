import { ReactNode } from 'react';

export interface ThemeProviderProps {
  children: ReactNode;
}

export type Theme = 'light' | 'dark';
