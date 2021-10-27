import { Heading, Stack } from '@chakra-ui/layout';

import { AuthLayout } from '../../components/layouts/auth';
import { LoginForm } from '../../components/moleciles/LoginForm';

export default function Login() {
  return (
    <AuthLayout>
      <Heading as="h1" size="lg" fontWeight="bold">
        Login
      </Heading>
      <LoginForm />
    </AuthLayout>
  );
}
