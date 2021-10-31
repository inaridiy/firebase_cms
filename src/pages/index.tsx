import {
  Box,
  Flex,
  IconButton,
  Spacer,
  Button,
  Heading,
  Skeleton,
  Container,
} from '@chakra-ui/react';
import {
  ChevronLeftIcon,
  EditIcon,
  ViewIcon,
  AttachmentIcon,
  AddIcon,
} from '@chakra-ui/icons';
import { TwContainer } from '../components/atoms/TwContainer';
import { DefaultLayout } from '../components/layouts/default';
import { ReactElement } from 'react';
import { useNavi } from '../hooks/useNavi';

export default function Home() {
  const { onOpen } = useNavi();
  return (
    <Flex h="100vh">
      <Flex
        as="header"
        position="fixed"
        top={0}
        width="full"
        shadow="sm"
        py={4}
        px={8}
      >
        <Box>
          <IconButton
            aria-label="back"
            color="black"
            rounded="full"
            icon={<ChevronLeftIcon />}
          />
        </Box>
        <Spacer />
        <Box>
          <Button colorScheme="blue" onClick={onOpen}>
            保存済み
          </Button>
        </Box>
      </Flex>
      <TwContainer mt={'6rem'}>
        <Heading as="h1" size="lg" fontWeight="bold">
          chakra-ui を使ってみる (+create-react-app)
        </Heading>
        <Flex mt={8}>
          <Box w="100%" bg="white" rounded="md" p={4} shadow="lg">
            <ParagraphSkeleton />
            <ParagraphSkeleton />
            <ParagraphSkeleton />
            <ParagraphSkeleton />
            <ParagraphSkeleton />
            <ParagraphSkeleton />
            <ParagraphSkeleton />
            <ParagraphSkeleton />
            <ParagraphSkeleton />
          </Box>
          <Box ml={6} w="32">
            <Box bg="white" rounded="full" p={1} shadow="lg">
              <IconButton
                aria-label="edit"
                bg="gray.300"
                color="white"
                rounded="full"
                mr={1}
                icon={<EditIcon />}
              />
              <IconButton
                aria-label="view"
                bg="white"
                color="gray.400"
                rounded="full"
                icon={<ViewIcon />}
              />
            </Box>
            <Box mt={3}>
              <IconButton
                aria-label="view"
                shadow="lg"
                bg="white"
                color="gray.400"
                rounded="full"
                icon={<AttachmentIcon />}
              />
            </Box>
            <Box mt={3}>
              <IconButton
                aria-label="view"
                shadow="lg"
                bg="white"
                color="gray.400"
                rounded="full"
                icon={<AddIcon />}
              />
            </Box>
          </Box>
        </Flex>
      </TwContainer>
    </Flex>
  );
}

Home.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

const ParagraphSkeleton = () => <Skeleton mb={4} h={'1rem'}></Skeleton>;
