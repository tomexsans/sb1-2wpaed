import React from 'react';
import { useDrag } from 'react-dnd';

const MediaLibrary: React.FC = () => {
  const items = [
    { type: 'IMAGE', content: 'Sample Image' },
    { type: 'VIDEO', content: 'Sample Video' },
    { type: 'TEXT', content: 'Sample Text' },
  ];

  return (
    <div className="bg-gray-700 p-4 rounded-lg">
      <h2 className="text-white text-lg mb-4">Media Library</h2>
      <div className="space-y-2">
        {items.map((item, index) => (
          <DraggableItem key={index} type={item.type} content={item.content} />
        ))}
      </div>
    </div>
  );
};

interface DraggableItemProps {
  type: string;
  content: string;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ type, content }) => {
  const [{ isDragging }, drag] = useDrag({
    type,
    item: { type, content },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`p-2 bg-gray-600 rounded cursor-move ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
    >
      <p className="text-white">{content}</p>
    </div>
  );
};

export default MediaLibrary;