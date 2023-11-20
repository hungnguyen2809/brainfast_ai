import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/stores/sidebar-store';
import { X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../../ui';

function SidebarToggle() {
  const { isMinimal, onToggleSidebar, onToggleMinimalSidebar } = useSidebarStore();

  return (
    <div>
      <div
        onClick={onToggleMinimalSidebar}
        className={cn('cursor-pointer hidden', 'lg:block')}
        is-navbar-minimal={isMinimal ? 'true' : undefined}
      >
        <Image alt="navbar icon" width={24} height={24} src={`/icons/menu-${isMinimal ? 'open' : 'close'}.svg`} />
      </div>

      <Button variant="ghost" className="lg:hidden" size="icon" onClick={onToggleSidebar}>
        <X />
      </Button>
    </div>
  );
}

export default SidebarToggle;
