import clsx from 'clsx';
import { forwardRef } from 'react';

import styles from './styles.module.css';
import { ButtonProps } from './types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ styleType, ...props }, ref) => {
    return (
      <button
        className={clsx(styles.button, {
          [styles.primary]: styleType === 'primary',
          [styles.secondary]: styleType === 'secondary',
        })}
        {...props}
        ref={ref}
      />
    );
  }
);

Button.displayName = 'Button';
export { Button };
