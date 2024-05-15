import { HTMLAttributes, ReactNode } from 'react';

export interface DraggableWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
