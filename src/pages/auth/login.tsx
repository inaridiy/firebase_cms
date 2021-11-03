import { ReactElement, useState } from 'react';
import { Heading } from '@chakra-ui/layout';
import { AuthLayout } from '../../components/layouts/auth';
import { LoginForm } from '../../components/moleciles/LoginForm';
import { loginByGoogle, loginByPassword } from '../../firebase/auth';

export default function Login() {
  const [error, setError] = useState('');

  const handleLoginByPassword = async (email: string, password: string) => {
    try {
      return await loginByPassword(email, password);
    } catch (error) {
      if ((error as any).code === 'auth/user-not-found') {
        setError('User not found');
      } else {
        setError('Unknown error');
      }
    }
  };

  return (
    <>
      <Heading as="h1" size="lg" fontWeight="bold">
        Login
      </Heading>
      <LoginForm
        errorMessage={error}
        onGoogleSubmit={loginByGoogle}
        onSubmit={({ email, password }) =>
          handleLoginByPassword(email, password)
        }
      />
    </>
  );
}

Login.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;
