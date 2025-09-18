import { useTheme } from './ThemeProvider';
import FamicomButton from './FamicomButton';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <FamicomButton 
      variant="secondary" 
      onClick={toggleTheme}
      className="text-xs"
    >
      {theme === 'dark' ? '☀️ LIGHT' : '🌙 DARK'}
    </FamicomButton>
  );
}