import { NAVS } from '@/constants';
import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/stores/sidebar-store';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  const pathname = usePathname();
  const { isMinimal, onToggleSidebar } = useSidebarStore();

  return (
    <div className="px-4">
      <nav>
        {NAVS.map((nav) => (
          <div key={nav.path} className="mb-2">
            <Link href={nav.path} onClick={onToggleSidebar}>
              <div
                className={cn(
                  'flex items-center py-1 rounded-lg px-5 opacity-70',
                  'hover:opacity-100',
                  isMinimal && 'px-1',
                  pathname.includes(nav.path) &&
                    'transition-colors bg-gradient-to-l from-slate-800 to-slate-900 shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.05),0_0.25rem_0.5rem_0_rgba(0,0,0,0.1)] opacity-100'
                )}
              >
                <div className="flex items-center p-2">
                  <Image width={24} height={24} src={nav.icon} alt={nav.title} />
                  {!isMinimal && <span className="ml-4 text-sm">{nav.title}</span>}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
