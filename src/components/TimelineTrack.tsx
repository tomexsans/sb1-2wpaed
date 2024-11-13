import React from 'react';
import { TimelineItem } from '../types';
import TimelineClip from './TimelineClip';

interface TimelineTrackProps {
  trackIndex: number;
  items: TimelineItem[];
}

const TimelineTrack: React.FC<TimelineTrackProps> = ({ trackIndex, items }) => {
  return (
    <div className="relative flex">
      <div className="w-20 h-20 bg-gray-700 flex items-center justify-center border-r border-gray-600 shrink-0">
        <span className="text-gray-400 text-sm">Track {trackIndex + 1}</span>
      </div>
      <div
        data-track-index={trackIndex}
        className="h-20 bg-gray-700 border-b border-gray-600 relative overflow-hidden"
        style={{ minWidth: '5000px' }}
      >
        {/* Grid lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 100 }, (_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 border-l border-gray-600"
              style={{ left: `${i * 50}px` }}
            ></div>
          ))}
        </div>
        
        {/* Clips */}
        {items.map((item) => (
          <TimelineClip key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TimelineTrack;