import { useTheme } from '@/src/_app/theme-context';
import { IconButton } from '@/src/shared/ui/icon-button';
import { DarkTheme } from '@/src/shared/ui/icons/dark-theme';
import { LightTheme } from '@/src/shared/ui/icons/light-theme';

export const ThemeSwitcher = () => {
  const theme = useTheme();

  return (
    <IconButton
      icon={theme.style === 'light' ? DarkTheme : LightTheme}
      onClick={() => theme.toggleTheme()}
    />
  );
};
