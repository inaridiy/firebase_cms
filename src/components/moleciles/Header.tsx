import { useColorModeValue } from '@chakra-ui/color-mode';
import { HStack, Flex, Spacer, Box } from '@chakra-ui/react';
import { eitherChild } from '../../types/needChild';
import { ToggleNavBtn } from '../atoms/navi/ToggleNaviBtn';
import { ToggleColorBtn } from '../atoms/toggleLightMode';

export const Header: React.FC<eitherChild> = ({ children }) => {
  return (
    <Flex
      as="header"
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
    </Flex>
  );
};
