import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useSidebarStore } from '@/stores/sidebar-store';
import Sidebar from '..';

type MobileSidebarProps = {
  className?: string;
  isProPlan?: boolean;
  userLimitCount?: number;
};

function MobileSidebar({ isProPlan, userLimitCount }: MobileSidebarProps) {
  const { isOpen } = useSidebarStore();

  return (
    <Sheet open={isOpen}>
      <SheetContent showClose={false} side="left" className="w-screen border-none bg-black p-0 pt-8">
        <Sidebar isProPlan={isProPlan} userLimitCount={userLimitCount} />
      </SheetContent>
    </Sheet>
  );
}

export default MobileSidebar;
