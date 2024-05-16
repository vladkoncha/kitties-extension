import styles from './styles.module.css';
import { ColorSwatchProps } from './types';

export const ColorSwatch = ({ color, onSelect }: ColorSwatchProps) => {
  const handleClick = () => {
    onSelect(color);
  };

  return (
    <button
      type="button"
      className={styles['color-swatch']}
      style={{ backgroundColor: color.hex }}
      onClick={handleClick}
      title={color.label}
    />
  );
};
