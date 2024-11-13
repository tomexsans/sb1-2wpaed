import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Canvas from './components/Canvas';
import Timeline from './components/Timeline';
import MediaLibrary from './components/MediaLibrary';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gray-900 p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold text-white mb-8">Video Editor</h1>
          
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-1">
              <MediaLibrary />
            </div>
            <div className="col-span-3">
              <Canvas />
            </div>
          </div>
          
          <Timeline />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;