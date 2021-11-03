import { AddIcon } from '@chakra-ui/icons';
import { VStack, Spacer, Stack, Text } from '@chakra-ui/layout';

import { SideContentFrame } from './SideContentFrame';
import { SideHeadingFrame } from './SideHeadingFrame';
import { SideMinHeader } from './SideMinHeader';

export const SideContent: React.FC = ({}) => {
  return (
    <SideContentFrame>
      <SideMinHeader />
      <Stack pl={4}>
        <SideHeadingFrame icon={<AddIcon />}>Contents</SideHeadingFrame>
        <Stack pl="4">
          <Text>
            <a href="#">Introduction</a>
          </Text>
          <Text>
            <a href="#">Getting Started</a>
          </Text>
          <Text>
            <a href="#">Components</a>
          </Text>
          <Text>
            <a href="#">Customization</a>
          </Text>
          <Text>
            <a href="#">FAQ</a>
          </Text>
          <Text>
            <a href="#">Changelog</a>
          </Text>
        </Stack>
        <SideHeadingFrame icon={<AddIcon />}>Medias</SideHeadingFrame>
      </Stack>
    </SideContentFrame>
  );
};
