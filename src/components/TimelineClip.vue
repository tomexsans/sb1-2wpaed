<template>
  <div
    :class="clipClasses"
    :style="clipStyle"
    draggable="true"
    @dragstart="onDragStart"
  >
    <div class="p-2 text-white text-sm truncate">
      {{ item.type }}: {{ item.content }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  item: {
    id: string;
    type: 'image' | 'video' | 'text';
    content: string;
    start: number;
    duration: number;
  }
}>();

const clipClasses = computed(() => {
  const baseClasses = 'absolute rounded-md cursor-move transition-colors';
  const colorClasses = {
    image: 'bg-blue-500 hover:bg-blue-600',
    video: 'bg-green-500 hover:bg-green-600',
    text: 'bg-purple-500 hover:bg-purple-600'
  }[props.item.type] || 'bg-gray-500 hover:bg-gray-600';
  
  return `${baseClasses} ${colorClasses}`;
});

const clipStyle = computed(() => ({
  left: `${props.item.start}px`,
  width: `${props.item.duration}px`,
  height: '80%',
  top: '10%'
}));

const onDragStart = (event: DragEvent) => {
  if (event.dataTransfer) {
    event.dataTransfer.setData('application/json', JSON.stringify(props.item));
  }
};
</script>