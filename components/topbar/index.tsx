'use client';

import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/stores/sidebar-store';
import { Menu } from 'lucide-react';
import Logo from '../logo';
import { Button } from '../ui/button';

function TopBar() {
  const { onToggleSidebar } = useSidebarStore();

  return (
    <div className={cn('flex items-center p-4 justify-between sticky top-0', 'lg:hidden')}>
      <Logo />

      <Button variant="ghost" size="icon" onClick={onToggleSidebar}>
        <Menu />
      </Button>
    </div>
  );
}

export default TopBar;
