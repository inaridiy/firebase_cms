import { useColorModeValue } from '@chakra-ui/color-mode';
import { AddIcon } from '@chakra-ui/icons';
import { Heading, Spacer, Stack, HStack } from '@chakra-ui/layout';
import { ToggleNavBtn } from '../../atoms/buttons/ToggleNaviBtn';
import { SideContentFrame } from './SideContentFrame';
import { SideHeadingFrame } from './SideHeadingFrame';
import { SideMinHeader } from './SideMinHeader';

export const SideContent: React.FC = ({}) => {
  return (
    <SideContentFrame>
      <SideMinHeader />
      <Stack pl={4}>
        <SideHeadingFrame icon={<AddIcon />}>Contents</SideHeadingFrame>
      </Stack>
    </SideContentFrame>
  );
};
