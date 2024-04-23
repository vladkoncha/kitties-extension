import { forwardRef } from 'react';

import styles from './styles.module.css';
import { IconButtonProps } from './types';

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon: Icon, onClick, ...rest }, ref) => {
    return (
      <button
        type="button"
        className={styles['icon-button']}
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
