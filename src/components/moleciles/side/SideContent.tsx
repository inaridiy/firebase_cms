import { useColorModeValue } from '@chakra-ui/color-mode';
import { Heading, Spacer, Stack, HStack } from '@chakra-ui/layout';
import { ToggleNavBtn } from '../../atoms/buttons/ToggleNaviBtn';
import { SideContentFrame } from './SideContentFrame';

export const SideContent: React.FC = ({}) => {
  return (
    <SideContentFrame>
      <Stack>
        <HStack
          borderBottom="2px"
          p="4"
          h={20}
          borderColor={useColorModeValue('gray.300', 'gray.700')}
        >
          <Heading>Heading</Heading>
          <Spacer />
          <ToggleNavBtn />
        </HStack>
      </Stack>
    </SideContentFrame>
  );
};
