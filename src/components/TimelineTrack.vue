<template>
  <div class="relative flex">
    <div class="w-20 h-20 bg-gray-700 flex items-center justify-center border-r border-gray-600 shrink-0">
      <span class="text-gray-400 text-sm">Track {{ trackIndex + 1 }}</span>
    </div>
    <div
      class="h-20 bg-gray-700 border-b border-gray-600 relative overflow-hidden"
      style="min-width: 5000px"
      @dragover.prevent
      @drop="onDrop"
      :data-track-index="trackIndex"
    >
      <!-- Grid lines -->
      <div class="absolute inset-0">
        <div
          v-for="i in 100"
          :key="i"
          class="absolute top-0 bottom-0 border-l border-gray-600"
          :style="{ left: `${(i - 1) * 50}px` }"
        ></div>
      </div>
      
      <!-- Clips -->
      <TimelineClip
        v-for="item in trackItems"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useEditorStore } from '../stores/editor';
import TimelineClip from './TimelineClip.vue';

const props = defineProps<{
  trackIndex: number;
}>();

const store = useEditorStore();
const trackItems = computed(() => 
  store.items.filter(item => item.track === props.trackIndex)
);

const onDrop = (event: DragEvent) => {
  const json = event.dataTransfer?.getData('application/json');
  if (!json) return;

  const item = JSON.parse(json);
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
  const start = Math.floor((event.clientX - rect.left) / 10) * 10;

  store.addItem({
    id: Date.now().toString(),
    type: item.type.toLowerCase(),
    content: item.content,
    start,
    duration: 100,
    track: props.trackIndex
  });
};
</script>