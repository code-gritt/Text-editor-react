import React from 'react';

interface ToolbarProps {
  items: {
    icon: React.ReactNode;
    action: () => void;
    tooltip: string;
  }[];
}

export default function Toolbar({ items }: ToolbarProps) {
  return (
    <div className="border-b border-gray-200 bg-gray-50 p-2 flex gap-1">
      {items.map((item, index) => (
        <button
          key={index}
          onClick={item.action}
          className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200"
          title={item.tooltip}
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
}