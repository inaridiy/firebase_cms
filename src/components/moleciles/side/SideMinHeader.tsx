import { HStack, Heading, Spacer } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { ToggleNavBtn } from '../../atoms/buttons/ToggleNaviBtn';
import { useIsMd } from '../../../hooks/useIsMd';

export const SideMinHeader: React.FC = ({}) => {
  const isMd = useIsMd();
  return (
    <HStack
      borderBottom="2px"
      p="3"
      h={20}
      borderColor={useColorModeValue('gray.300', 'gray.700')}
    >
      <Heading>Heading</Heading>
      <Spacer />
      <ToggleNavBtn />
    </HStack>
  );
};
