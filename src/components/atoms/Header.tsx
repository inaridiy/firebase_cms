import { useColorModeValue } from '@chakra-ui/color-mode';
import { HStack, Flex, Spacer } from '@chakra-ui/react';
import { eitherChild } from '../../types/needChild';
import { ToggleNavBtn } from './navi/ToggleNaviBtn';
import { ToggleColorBtn } from './toggleLightMode';

export const Header: React.FC<eitherChild> = ({ children }) => {
  return (
    <HStack
      as="header"
      position="fixed"
      top={0}
      width="full"
      shadow="sm"
      borderBottomWidth="2px"
      alignItems="center"
      bg={useColorModeValue('gray.50', 'gray.800')}
      borderColor={useColorModeValue('gray.300', 'gray.700')}
      px={8}
      h={20}
    >
      {children}
      <Spacer />
      <ToggleColorBtn />
      <ToggleNavBtn />
    </HStack>
  );
};
