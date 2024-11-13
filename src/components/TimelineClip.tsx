import React from 'react';
import { useDrag } from 'react-dnd';
import { TimelineItem } from '../types';

interface TimelineClipProps {
  item: TimelineItem;
}

const TimelineClip: React.FC<TimelineClipProps> = ({ item }) => {
  const [{ isDragging }, drag] = useDrag({
    type: item.type.toUpperCase(),
    item: { id: item.id, type: item.type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const getClipColor = () => {
    switch (item.type) {
      case 'image':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'video':
        return 'bg-green-500 hover:bg-green-600';
      case 'text':
        return 'bg-purple-500 hover:bg-purple-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <div
      ref={drag}
      className={`absolute rounded-md ${getClipColor()} cursor-move transition-colors`}
      style={{
        left: `${item.start}px`,
        width: `${item.duration}px`,
        height: '80%',
        top: '10%',
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <div className="p-2 text-white text-sm truncate">
        {item.type}: {item.content}
      </div>
    </div>
  );
};

export default TimelineClip;