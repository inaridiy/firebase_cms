import { ReactElement } from 'react';
import { Heading } from '@chakra-ui/layout';
import { AuthLayout } from '../../components/layouts/auth';
import { RegisterForm } from '../../components/moleciles/RegisterForm';

export default function Register() {
  return (
    <>
      <Heading as="h1" size="lg" fontWeight="bold">
        Register
      </Heading>
      <RegisterForm />
    </>
  );
}

Register.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;
