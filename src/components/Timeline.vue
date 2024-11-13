<template>
  <div class="bg-gray-800 p-4 rounded-lg">
    <div class="relative">
      <TimelineRuler />
      <div>
        <TimelineTrack
          v-for="trackIndex in 3"
          :key="trackIndex"
          :track-index="trackIndex - 1"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TimelineTrack from './TimelineTrack.vue';
import TimelineRuler from './TimelineRuler.vue';
</script>