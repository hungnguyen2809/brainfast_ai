import { cn } from '@/lib/utils';

type MobileSidebarProps = {
  className?: string;
  isProPlan?: boolean;
  userLimitCount?: number;
};

function MobileSidebar({ className }: MobileSidebarProps) {
  return <div className={cn(className)}>MobileSidebar</div>;
}

export default MobileSidebar;
