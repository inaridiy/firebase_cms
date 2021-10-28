import { Heading } from '@chakra-ui/layout';
import { AuthLayout } from '../../components/layouts/auth';
import { RegisterForm } from '../../components/moleciles/RegisterForm';

export default function Login() {
  return (
    <AuthLayout>
      <Heading as="h1" size="lg" fontWeight="bold">
        Register
      </Heading>
      <RegisterForm />
    </AuthLayout>
  );
}
