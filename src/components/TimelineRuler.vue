<template>
  <div class="h-8 border-b border-gray-600 flex items-end">
    <div
      v-for="marker in 100"
      :key="marker"
      class="relative"
      style="width: 50px; height: 100%"
    >
      <div class="absolute bottom-0 w-px h-3 bg-gray-500"></div>
      <span class="absolute bottom-4 left-1 text-xs text-gray-400">
        {{ marker - 1 }}s
      </span>
    </div>
  </div>
</template>