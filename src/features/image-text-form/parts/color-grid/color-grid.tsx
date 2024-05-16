'use client';

import { useEditor } from '@/src/_app/store/editor';
import { Color } from '@/src/_app/store/editor/types';

import { ColorSwatch } from './color-swatch';
import styles from './styles.module.css';
import { ColorGridProps } from './types';

export const ColorGrid = ({ colors }: ColorGridProps) => {
  const editor = useEditor();

  const handleColorSelect = (color: Color) => {
    editor?.setColor(color);
  };

  return (
    <div>
      <div className={styles['color-grid']}>
        {colors.map((color) => (
          <ColorSwatch
            key={color.hex}
            color={color}
            onSelect={handleColorSelect}
          />
        ))}
      </div>
      <input
        type="hidden"
        name="text-color"
        id="text-color"
        value={editor?.getColor()?.hex ?? ''}
      />
    </div>
  );
};
