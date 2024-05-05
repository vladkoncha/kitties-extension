'use client';

import { createContext, useContext } from 'react';

import { CatsStore } from './cats-store';
import { CatsProviderProps } from './types';

const CatsContext = createContext<CatsStore | null>(null);
const catsStore = new CatsStore();

export const useCats = () => useContext(CatsContext);

export function CatsProvider({ children }: CatsProviderProps) {
  return (
    <CatsContext.Provider value={catsStore}>{children}</CatsContext.Provider>
  );
}
