export const MAX_FREE_COUNTS = 5;

export const THEME_MODES = [
  {
    value: 'light',
    label: 'Light',
  },
  {
    value: 'dark',
    label: 'Dark',
  },
];

export const TOOLS = [
  {
    title: 'Conversation',
    icon: '/icons/conversation.svg',
    path: '/conversation',
    color: 'bg-blue-500',
    slug: 'conversation',
  },
  {
    title: 'Photo generation',
    icon: '/icons/photo.svg',
    path: '/photo',
    color: 'bg-violet-500',
    slug: 'photo',
  },
  {
    title: 'Video generation',
    icon: '/icons/video.svg',
    path: '/video',
    color: 'bg-amber-500',
    slug: 'video',
  },
  {
    title: 'Audio generation',
    icon: '/icons/audio.svg',
    path: '/audio',
    color: 'bg-orange-500',
    slug: 'audio',
  },
  {
    title: 'Code generation',
    icon: '/icons/code.svg',
    path: '/code',
    color: 'bg-green-500',
    slug: 'code',
  },
];

export const NAVS = [
  {
    title: 'Dashboard',
    icon: '/icons/dashboard.svg',
    path: '/dashboard',
    slug: 'dashboard',
  },
  ...TOOLS,
];
