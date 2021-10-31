import { ReactElement } from 'react';
import { Heading } from '@chakra-ui/layout';
import { AuthLayout } from '../../components/layouts/auth';
import { LoginForm } from '../../components/moleciles/LoginForm';

export default function Login() {
  return (
    <>
      <Heading as="h1" size="lg" fontWeight="bold">
        Login
      </Heading>
      <LoginForm />
    </>
  );
}

Login.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;
