import { Color } from '@/src/_app/store/editor/types';

export interface ColorSwatchProps {
  color: Color;
  onSelect: (color: Color) => void;
}

export interface ColorGridProps {
  colors: Color[];
}
