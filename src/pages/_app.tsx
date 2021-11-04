import { ReactElement, ReactNode, useEffect } from 'react';
import type { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import { useRouter } from 'next/dist/client/router';
import { useAuth } from '../hooks/useAuth';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function AppInit() {
  const { waitForAuth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    waitForAuth().then((userData) => {
      const pathAry = router.pathname.split(`/`).slice(1);
      console.log(router);
      console.log(userData);
      if (!userData && pathAry[0] !== 'auth') {
        router.push('/auth/login');
      } else if (userData && pathAry[0] === 'auth') {
        router.push('/');
      }
    });
  }, [router.pathname]);

  return null;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <RecoilRoot>
      <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
      <AppInit />
    </RecoilRoot>
  );
}

export default MyApp;
