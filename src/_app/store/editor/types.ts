import { ReactNode } from 'react';

export type TextSize = 'S' | 'M' | 'L' | 'XL';

export interface Color {
  label: string;
  hex: `#${string}`;
}

export interface EditorProviderProps {
  children: ReactNode;
}
