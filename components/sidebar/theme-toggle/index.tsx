'use client';

import { THEME_MODES } from '@/constants';
import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/stores/sidebar-store';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const { isMinimal } = useSidebarStore();

  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div
      onClick={handleChangeTheme}
      className={cn(
        'p-2 rounded-lg flex items-center bg-gray-900 w-full cursor-pointer',
        isMinimal && 'w-14 h-14 justify-center'
      )}
    >
      {isMinimal ? (
        <span>{theme === 'dark' ? <Moon /> : <Sun />}</span>
      ) : (
        THEME_MODES.map((item) => (
          <span
            key={item.value}
            className={cn(
              'flex items-center p-2 rounded-lg px-7 w-full cursor-pointer text-muted-foreground font-medium',
              theme === item.value && 'bg-gray-950 shadow text-white'
            )}
          >
            {item.value === 'dark' ? <Moon /> : <Sun />}
            <span className="ml-2">{item.label}</span>
          </span>
        ))
      )}
    </div>
  );
}

export default ThemeToggle;
