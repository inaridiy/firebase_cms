import { useColorModeValue } from '@chakra-ui/color-mode';
import { HStack, Flex, Spacer, Box } from '@chakra-ui/react';
import { eitherChild } from '../../types/needChild';
import { ToggleNavBtn } from '../atoms/buttons/ToggleNaviBtn';
import { ToggleColorBtn } from '../atoms/buttons/toggleLightMode';
import { useNavi } from '../../hooks/useNavi';

export const Header: React.FC<eitherChild> = ({ children }) => {
  const { isOpen } = useNavi();
  return (
    <HStack
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
      {isOpen || <ToggleNavBtn />}
      {children}
      <Spacer />
      <ToggleColorBtn />
    </HStack>
  );
};
