import { Heading } from '@chakra-ui/layout';
import { AuthLayout } from '../../components/layouts/auth';

export default function Login() {
  return (
    <AuthLayout>
      <Heading as="h1" size="lg" fontWeight="bold">
        Login
      </Heading>
    </AuthLayout>
  );
}
