import { ReactNode } from 'react';

export type TextSize = 'S' | 'M' | 'L' | 'XL';

export type Color = 'white' | 'black' | 'orange' | 'yellow' | 'green' | 'blue';

export interface EditorProviderProps {
  children: ReactNode;
}
