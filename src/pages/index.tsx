import { ReactElement } from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { DefaultLayout } from '../components/layouts/default';

export default function Home() {
  return <Heading></Heading>;
}

Home.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;
