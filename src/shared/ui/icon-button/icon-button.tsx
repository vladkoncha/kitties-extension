'use client';

import clsx from 'clsx';
import { forwardRef } from 'react';

import { useTheme } from '@/src/_app/theme-context';

import styles from './styles.module.css';
import stylesDark from './styles-dark.module.css';
import stylesLight from './styles-light.module.css';
import { IconButtonProps } from './types';

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon: Icon, onClick, ...rest }, ref) => {
    const theme = useTheme();
    const stylesTheme = theme.style === 'light' ? stylesLight : stylesDark;

    return (
      <button
        type="button"
        className={clsx(styles['icon-button'], stylesTheme['icon-button'])}
        ref={ref}
        onClick={onClick}
        {...rest}
      >
        <Icon />
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
export { IconButton };
