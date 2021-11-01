import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const ToggleColorBtn: React.FC = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <IconButton
      aria-label="switch dark mode"
      position="fixed"
      bg="transparent"
      top="3"
      right="3"
      size="lg"
      onClick={toggleColorMode}
      icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
    />
  );
};
