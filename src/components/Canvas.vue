`<template>
  <div class="bg-gray-900 p-4 rounded-lg">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { fabric } from 'fabric';
import { useEditorStore } from '../stores/editor';

const canvasRef = ref<HTMLCanvasElement | null>(null);
const fabricCanvas = ref<fabric.Canvas | null>(null);
const store = useEditorStore();

onMounted(() => {
  if (canvasRef.value) {
    fabricCanvas.value = new fabric.Canvas(canvasRef.value, {
      width: 640,
      height: 360,
      backgroundColor: '#000'
    });
  }
});

onUnmounted(() => {
  fabricCanvas.value?.dispose();
});

watch(() => store.items, (items) => {
  if (!fabricCanvas.value) return;

  fabricCanvas.value.clear();
  
  items.forEach((item) => {
    if (item.type === 'text') {
      const text = new fabric.Text(item.content, {
        left: 100,
        top: 100,
        fill: 'white'
      });
      fabricCanvas.value?.add(text);
    }
  });

  fabricCanvas.value.renderAll();
}, { deep: true });
</script>`