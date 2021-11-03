import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Flex, Stack } from '@chakra-ui/layout';
import { needChild } from '../../types/needChild';
import { MenuProvider } from '../providers/MenuProvider';
import { Header } from '../moleciles/Header';
import { SideContent } from '../moleciles/side/SideContent';

export const DefaultLayout: React.FC<needChild> = ({ children }) => {
  return (
    <MenuProvider>
      <Flex
        width="100wh"
        height="100vh"
        backgroundColor={useColorModeValue('gray.200', 'gray.900')}
        justifyContent="center"
        alignItems="center"
      >
        <SideContent />
        <Stack w="full" h="100vh" spacing={0}>
          <Header />
          <Box flexGrow={1}>{children}</Box>
        </Stack>
      </Flex>
    </MenuProvider>
  );
};
