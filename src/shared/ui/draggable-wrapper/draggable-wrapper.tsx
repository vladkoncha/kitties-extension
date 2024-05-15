import { useRef, useState } from 'react';

import styles from './styles.module.css';
import { DraggableWrapperProps } from './types';

export const DraggableWrapper = ({
  children,
  ...props
}: DraggableWrapperProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [{ dx, dy }, setOffset] = useState({
    dx: 0,
    dy: 0,
  });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const startPos = {
      x: e.clientX - dx,
      y: e.clientY - dy,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const wrapper = wrapperRef.current;
      if (!wrapper) {
        return;
      }

      const dx = e.clientX - startPos.x;
      const dy = e.clientY - startPos.y;

      wrapper.style.transform = `translate(${dx}px, ${dy}px)`;

      setOffset({ dx, dy });
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];

    const startPosition = {
      x: touch.clientX - dx,
      y: touch.clientY - dy,
    };

    const handleTouchMove = (e: TouchEvent) => {
      const wrapper = wrapperRef.current;
      if (!wrapper) {
        return;
      }
      const touch = e.touches[0];
      const dx = touch.clientX - startPosition.x;
      const dy = touch.clientY - startPosition.y;

      wrapper.style.transform = `translate(${dx}px, ${dy}px)`;
      setOffset({ dx, dy });
    };

    const handleTouchEnd = () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  return (
    <div
      {...props}
      ref={wrapperRef}
      className={styles['draggable-wrapper']}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {children}
    </div>
  );
};
