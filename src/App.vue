<template>
  <div class="min-h-screen bg-gray-900 p-8">
    <div class="max-w-7xl mx-auto space-y-6">
      <h1 class="text-3xl font-bold text-white mb-8">Video Editor</h1>
      
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-1">
          <MediaLibrary />
        </div>
        <div class="col-span-3">
          <Canvas />
        </div>
      </div>
      
      <Timeline />
    </div>
  </div>
</template>

<script setup lang="ts">
import MediaLibrary from './components/MediaLibrary.vue';
import Canvas from './components/Canvas.vue';
import Timeline from './components/Timeline.vue';
</script>