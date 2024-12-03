import { useState } from 'react';

export function useEditor() {
  const [content, setContent] = useState('');
  const [selection, setSelection] = useState<{ start: number; end: number } | null>(null);

  return {
    content,
    setContent,
    selection,
    setSelection,
  };
}