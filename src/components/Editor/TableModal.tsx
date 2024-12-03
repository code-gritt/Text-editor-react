import React, { useState } from 'react';
import { X } from 'lucide-react';

interface TableModalProps {
  onClose: () => void;
  onInsert: (rows: number, cols: number) => void;
}

export default function TableModal({ onClose, onInsert }: TableModalProps) {
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Insert Table</h3>
          <button onClick={onClose} className="hover:bg-gray-100 p-1 rounded-full">
            <X size={20} />
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Rows</label>
            <input
              type="number"
              min="1"
              value={rows}
              onChange={(e) => setRows(Math.max(1, parseInt(e.target.value)))}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Columns</label>
            <input
              type="number"
              min="1"
              value={cols}
              onChange={(e) => setCols(Math.max(1, parseInt(e.target.value)))}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          
          <div className="flex justify-end gap-2 mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              onClick={() => onInsert(rows, cols)}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Insert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}