import React from 'react';
import { useDrop } from 'react-dnd';
import { useEditorStore } from '../store/editorStore';
import TimelineTrack from './TimelineTrack';
import TimelineRuler from './TimelineRuler';

const Timeline: React.FC = () => {
  const { items, addItem } = useEditorStore();
  const tracks = Array.from({ length: 3 }, (_, i) => i);

  const [, drop] = useDrop({
    accept: ['IMAGE', 'VIDEO', 'TEXT'],
    drop: (item: any, monitor) => {
      const offset = monitor.getClientOffset();
      if (offset) {
        const trackElement = document.elementFromPoint(offset.x, offset.y);
        const trackIndex = trackElement?.getAttribute('data-track-index');
        
        if (trackIndex !== null && trackIndex !== undefined) {
          addItem({
            id: Date.now().toString(),
            type: item.type.toLowerCase(),
            content: item.content,
            start: Math.floor((offset.x - 100) / 10) * 10,
            duration: 100,
            track: parseInt(trackIndex, 10),
          });
        }
      }
    },
  });

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div className="relative" ref={drop}>
        <TimelineRuler />
        <div className="ml-20">
          {tracks.map((trackIndex) => (
            <TimelineTrack
              key={trackIndex}
              trackIndex={trackIndex}
              items={items.filter((item) => item.track === trackIndex)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;