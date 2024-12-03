import React, { useState } from 'react';
import { Table2, Type, AlignLeft, AlignCenter, AlignRight, Bold, Italic, Underline } from 'lucide-react';
import Toolbar from './Toolbar';
import TableModal from './TableModal';
import { EditorContent } from './EditorContent';
import { useEditor } from '../../hooks/useEditor';
import { formatText } from '../../utils/textFormatting';

export default function Editor() {
  const [showTableModal, setShowTableModal] = useState(false);
  const { content, setContent, selection, setSelection } = useEditor();

  const handleFormat = (type: string) => {
    const formattedText = formatText(content, selection, type);
    setContent(formattedText);
  };

  const toolbarItems = [
    { icon: <Type size={18} />, action: () => handleFormat('normal'), tooltip: 'Normal Text' },
    { icon: <Bold size={18} />, action: () => handleFormat('bold'), tooltip: 'Bold' },
    { icon: <Italic size={18} />, action: () => handleFormat('italic'), tooltip: 'Italic' },
    { icon: <Underline size={18} />, action: () => handleFormat('underline'), tooltip: 'Underline' },
    { icon: <AlignLeft size={18} />, action: () => handleFormat('left'), tooltip: 'Align Left' },
    { icon: <AlignCenter size={18} />, action: () => handleFormat('center'), tooltip: 'Align Center' },
    { icon: <AlignRight size={18} />, action: () => handleFormat('right'), tooltip: 'Align Right' },
    { icon: <Table2 size={18} />, action: () => setShowTableModal(true), tooltip: 'Insert Table' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <Toolbar items={toolbarItems} />
        
        <EditorContent
          content={content}
          setContent={setContent}
          selection={selection}
          setSelection={setSelection}
        />

        {showTableModal && (
          <TableModal
            onClose={() => setShowTableModal(false)}
            onInsert={(rows, cols) => {
              const tableHTML = `<table class="w-full border-collapse border border-gray-300 my-4">
                ${Array(rows).fill(0).map(() => `
                  <tr>${Array(cols).fill(0).map(() => '<td class="border border-gray-300 p-2">Cell</td>').join('')}</tr>
                `).join('')}
              </table>`;
              setContent(content + tableHTML);
              setShowTableModal(false);
            }}
          />
        )}
      </div>
    </div>
  );
}