import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Flex, Heading, Spacer, Stack } from '@chakra-ui/layout';
import { needChild } from '../../types/needChild';
import { SideContent } from '../moleciles/side/SideContentFrame';
import { MenuProvider } from '../providers/MenuProvider';
import { HStack } from '@chakra-ui/react';
import { ToggleNavBtn } from '../atoms/navi/ToggleNaviBtn';
import { ToggleColorBtn } from '../atoms/toggleLightMode';
import { useAuth } from '../../hooks/useAuth';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

export const DefaultLayout: React.FC<needChild> = ({ children }) => {
  const { loading, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log(user, loading);
    if (window && !user && !loading) {
      router.push('/auth/login');
    }
  }, [loading]);

  return (
    <MenuProvider>
      <Flex
        width="100wh"
        height="100vh"
        backgroundColor={useColorModeValue('gray.200', 'gray.900')}
        justifyContent="center"
        alignItems="center"
      >
        <SideContent>
          <Stack>
            <HStack
              borderBottom="2px"
              p="4"
              h={20}
              borderColor={useColorModeValue('gray.300', 'gray.700')}
            >
              <Heading>Heading</Heading>
              <Spacer />
              <ToggleColorBtn />
              <ToggleNavBtn />
            </HStack>
          </Stack>
        </SideContent>
        <Box flexGrow={1}>{children}</Box>
      </Flex>
    </MenuProvider>
  );
};
