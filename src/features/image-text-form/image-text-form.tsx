'use client';

import clsx from 'clsx';
import { observer } from 'mobx-react-lite';

import { useEditor } from '@/src/_app/store/editor';
import { useTheme } from '@/src/_app/theme-context';
import { TEXT_SIZES } from '@/src/shared/constants/text-sizes';

import styles from './styles.module.css';
import stylesDark from './styles-dark.module.css';
import stylesLight from './styles-light.module.css';

export const ImageTextForm = observer(() => {
  const theme = useTheme();
  const editor = useEditor();
  const stylesTheme = theme.style === 'light' ? stylesLight : stylesDark;

  return (
    <form className={clsx(styles['form'], stylesTheme['form'])}>
      <div className={styles['form-item']}>
        <label htmlFor="text">Текст</label>
        <textarea
          className={styles['textarea']}
          maxLength={30}
          rows={3}
          name="text"
          id="text"
          onChange={(e) => editor?.setText(e.target.value)}
        />
      </div>
      <fieldset className={styles['text-size-field']}>
        <legend>Размер</legend>
        {TEXT_SIZES.map((size) => (
          <div key={size} className={styles['radio-item']}>
            <input
              type="radio"
              id={size}
              name="text-size"
              value={size}
              checked={size === editor?.getTextSize()}
              onChange={() => editor?.setTextSize(size)}
            />
            <label htmlFor={size}>{size}</label>
          </div>
        ))}
      </fieldset>

      {/* <div className={styles['form-item']}>
        <label htmlFor="size">Размер</label>
        <input type="number" min="10" max="200" name="size" id="size" />
      </div>
      <div className={styles['form-item']}>
        <label htmlFor="body">Цвет</label>
        <input
          type="color"
          id="text-color"
          name="text-color"
          value="#ffffff"
          list="color-list"
        />
        <datalist id="color-list">
          <option value="red" />
          <option value="green" />
          <option value="blue" />
          <option value="brown" />
          <option value="yellow" />
        </datalist>
      </div> */}
    </form>
  );
});
