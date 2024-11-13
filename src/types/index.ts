export interface TimelineItem {
  id: string;
  type: 'image' | 'video' | 'text';
  content: string;
  start: number;
  duration: number;
  track: number;
}