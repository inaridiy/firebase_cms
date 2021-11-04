import { HStack, Heading, Spacer, Box } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';
import Image from 'next/image';

import { ToggleNavBtn } from '../../atoms/buttons/ToggleNaviBtn';

export const SideMinHeader: React.FC = ({}) => {
  return (
    <HStack
      borderBottom="2px"
      p="3"
      h={20}
      borderColor={useColorModeValue('gray.300', 'gray.700')}
    >
      <Box w={12} h={12}>
        <Image src="/logo.png" alt="logo" width={200} height={200} />
      </Box>
      <Heading>FastFox</Heading>
      <Spacer />
      <ToggleNavBtn />
    </HStack>
  );
};
