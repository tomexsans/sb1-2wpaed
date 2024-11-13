import { defineStore } from 'pinia';

interface TimelineItem {
  id: string;
  type: 'image' | 'video' | 'text';
  content: string;
  start: number;
  duration: number;
  track: number;
}

export const useEditorStore = defineStore('editor', {
  state: () => ({
    items: [] as TimelineItem[]
  }),
  actions: {
    addItem(item: TimelineItem) {
      this.items.push(item);
    },
    updateItem(id: string, updates: Partial<TimelineItem>) {
      const index = this.items.findIndex(item => item.id === id);
      if (index !== -1) {
        this.items[index] = { ...this.items[index], ...updates };
      }
    },
    removeItem(id: string) {
      this.items = this.items.filter(item => item.id !== id);
    }
  }
});