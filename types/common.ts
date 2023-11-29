export type SlugType = 'code' | 'audio' | 'video' | 'photo' | 'conversation';

export type ToolType = {
  icon: string;
  title: string;
  path: string;
  slug: SlugType;
  color?: string;
};
