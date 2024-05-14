'use client';

import clsx from 'clsx';

import { useEditor } from '@/src/_app/store/editor';
import { useTheme } from '@/src/_app/theme-context';

import styles from './styles.module.css';
import stylesDark from './styles-dark.module.css';
import stylesLight from './styles-light.module.css';

export const ImageTextForm = () => {
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
      {/* TODO: */}
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
};
