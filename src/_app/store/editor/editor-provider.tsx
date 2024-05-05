'use client';

import { createContext, useContext } from 'react';

import { EditorStore } from './editor-store';
import { EditorProviderProps } from './types';

const EditorContext = createContext<EditorStore | null>(null);
const editorStore = new EditorStore();

export const useEditor = () => useContext(EditorContext);

export function EditorProvider({ children }: EditorProviderProps) {
  return (
    <EditorContext.Provider value={editorStore}>
      {children}
    </EditorContext.Provider>
  );
}
