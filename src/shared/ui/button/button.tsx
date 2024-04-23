import clsx from 'clsx';
import { forwardRef } from 'react';

import { useTheme } from '@/src/_app/theme-context';

import styles from './styles.module.css';
import stylesDark from './styles-dark.module.css';
import stylesLight from './styles-light.module.css';
import { ButtonProps } from './types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ styleType, ...props }, ref) => {
    const theme = useTheme();
    const stylesTheme = theme.style === 'light' ? stylesLight : stylesDark;

    return (
      <button
        className={clsx(styles.button, {
          [stylesTheme.primary]: styleType === 'primary',
          [stylesTheme.secondary]: styleType === 'secondary',
        })}
        {...props}
        ref={ref}
      />
    );
  }
);

Button.displayName = 'Button';
export { Button };
