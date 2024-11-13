import React from 'react';

const TimelineRuler: React.FC = () => {
  const markers = Array.from({ length: 100 }, (_, i) => i);

  return (
    <div className="h-8 border-b border-gray-600 flex items-end ml-20">
      {markers.map((marker) => (
        <div
          key={marker}
          className="relative"
          style={{ width: '50px', height: '100%' }}
        >
          <div className="absolute bottom-0 w-px h-3 bg-gray-500"></div>
          <span className="absolute bottom-4 left-1 text-xs text-gray-400">
            {marker}s
          </span>
        </div>
      ))}
    </div>
  );
};

export default TimelineRuler;