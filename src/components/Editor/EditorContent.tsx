import React from 'react';

interface EditorContentProps {
  content: string;
  setContent: (content: string) => void;
  selection: { start: number; end: number } | null;
  setSelection: (selection: { start: number; end: number } | null) => void;
}

export function EditorContent({
  content,
  setContent,
  selection,
  setSelection,
}: EditorContentProps) {
  const handleSelect = (e: React.SyntheticEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    setSelection({
      start: target.selectionStart || 0,
      end: target.selectionEnd || 0,
    });
  };

  return (
    <div
      className="min-h-[300px] p-4 focus:outline-none"
      contentEditable
      dangerouslySetInnerHTML={{ __html: content }}
      onSelect={handleSelect}
      onInput={(e) => setContent((e.target as HTMLDivElement).innerHTML)}
    />
  );
}