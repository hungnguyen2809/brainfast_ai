'use client';

import { MAX_FREE_COUNTS } from '@/constants';
import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/stores/sidebar-store';
import { UserButton, useUser } from '@clerk/nextjs';
import Logo from '../logo';
import SubscriptButtton from '../subscript-button';
import { Progress } from '../ui';
import MobileSidebar from './mobile-sidebar';
import Navbar from './navbar';
import SidebarToggle from './sidebar-toggle';
import ThemeToggle from './theme-toggle';

export { MobileSidebar };

type SidebarProps = {
  className?: string;
  isProPlan?: boolean;
  userLimitCount?: number;
};

function Sidebar({ className, isProPlan, userLimitCount = 0 }: SidebarProps) {
  const userInfo = useUser();
  const { isMinimal } = useSidebarStore();

  return (
    <div className={cn('text-white', className)}>
      <div className="h-20 pl-7 pr-6">
        <div className="flex items-center justify-between w-full">
          {!isMinimal ? <Logo /> : null}
          <SidebarToggle />
        </div>
      </div>

      <div className="grow overflow-y-auto scroll-smooth scrollbar-none">
        <Navbar />
      </div>

      <div className={cn('fixed bottom-8 left-4 right-4', 'lg:left-7 lg:right-auto', isMinimal && 'lg:left-3')}>
        <div className=" mb-4 p-4 rounded-lg bg-gray-900">
          <div className="mb-4 flex items-center">
            <UserButton afterSignOutUrl="/" />
            {!isMinimal && <span className="text-sm ml-4">{userInfo.user?.emailAddresses?.[0]?.emailAddress}</span>}
          </div>

          {!isMinimal && (
            <div className="border-t border-t-gray-950 pt-2">
              {!isProPlan && (
                <div className="mb-4">
                  <div className="text-center mb-2 text-muted-foreground font-semibold">
                    {userLimitCount}/{MAX_FREE_COUNTS} Free generations
                  </div>
                  <Progress
                    className="bg-gray-950 h-3"
                    indicatorClassName="gradient-btn"
                    value={(userLimitCount / MAX_FREE_COUNTS) * 100}
                  />
                </div>
              )}
              <SubscriptButtton isPro={isProPlan} />
            </div>
          )}
        </div>

        <ThemeToggle />
      </div>
    </div>
  );
}

export default Sidebar;
