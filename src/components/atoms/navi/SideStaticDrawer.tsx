import { Box, Stack } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { needChild } from '../../../types/needChild';
import { useNavi } from '../../../hooks/useNavi';
import { IconButton } from '@chakra-ui/button';
import { CloseIcon } from '@chakra-ui/icons';

export const SideStaticDrawer: React.FC<needChild> = ({ children }) => {
  const { isOpen } = useNavi();
  return (
    <Box
      w={{ base: 'full', md: '30%' }}
      maxW={{ base: 'full', md: '360px' }}
      display={isOpen ? { base: 'none', md: 'block' } : 'none'}
      minH="100vh"
      pos="relative"
      bg={useColorModeValue('gray.50', 'gray.800')}
      borderRightWidth="2px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
    >
      {children}
    </Box>
  );
};
