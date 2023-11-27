import { cva } from 'class-variance-authority';
import React from 'react';

type ToolItemProps = {
  icon: string;
  title: string;
  path: string;
  slug: string;
  color?: string;
};

const toolItemColorVariants = cva('absolute intet-0 opacity-20 rounded-xl', {
  variants: {
    color: {
      code: 'bg-green-500',
      audio: 'bg-orange-500',
    },
  },
});

function ToolItem({ icon, slug, title, path, color }: ToolItemProps) {
  return <div>ToolItem</div>;
}

export default ToolItem;
