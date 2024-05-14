import { ReactNode, Ref, RefObject } from 'react';

export interface FormContainerProps {
  children: ReactNode;
  openButtonRef: RefObject<HTMLButtonElement | null>;
  isFormOpen: boolean;
  setIsFormOpen: (isFormOpen: boolean) => void;
}
