<template>
  <div class="bg-gray-700 p-4 rounded-lg">
    <h2 class="text-white text-lg mb-4">Media Library</h2>
    <div class="space-y-2">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="p-2 bg-gray-600 rounded cursor-move"
        draggable="true"
        @dragstart="onDragStart($event, item)"
      >
        <p class="text-white">{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  { type: 'IMAGE', content: 'Sample Image' },
  { type: 'VIDEO', content: 'Sample Video' },
  { type: 'TEXT', content: 'Sample Text' }
];

const onDragStart = (event: DragEvent, item: any) => {
  if (event.dataTransfer) {
    event.dataTransfer.setData('application/json', JSON.stringify(item));
  }
};
</script>