'use client';

import clsx from 'clsx';
import { useEffect, useRef } from 'react';

import styles from './styles.module.css';
import { FormContainerProps } from './types';

export const FormContainer = ({
  children,
  openButtonRef,
  isFormOpen,
  setIsFormOpen,
}: FormContainerProps) => {
  const formContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: TouchEvent | MouseEvent) {
      if (event instanceof MouseEvent) {
        if (
          openButtonRef.current &&
          openButtonRef.current.contains(event.target as Node)
        ) {
          return;
        }
        if (
          formContainerRef.current &&
          !formContainerRef.current.contains(event.target as Node)
        ) {
          setIsFormOpen(false);
        }
      } else if (event instanceof TouchEvent) {
        for (const touch of event.touches) {
          if (
            openButtonRef.current &&
            openButtonRef.current.contains(touch.target as Node)
          ) {
            return;
          }
          if (
            formContainerRef.current &&
            !formContainerRef.current.contains(touch.target as Node)
          ) {
            setIsFormOpen(false);
            break;
          }
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [openButtonRef, setIsFormOpen]);

  return (
    <div
      ref={formContainerRef}
      className={clsx(styles['form-container'], {
        [styles['form-open']]: isFormOpen,
      })}
    >
      {children}
    </div>
  );
};
