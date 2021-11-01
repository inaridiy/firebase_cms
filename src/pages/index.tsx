import { ReactElement } from 'react';
import { Flex } from '@chakra-ui/react';
import { DefaultLayout } from '../components/layouts/default';
import { Header } from '../components/moleciles/Header';

export default function Home() {
  return (
    <Flex h="100vh">
      <Header />
    </Flex>
  );
}

Home.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;
