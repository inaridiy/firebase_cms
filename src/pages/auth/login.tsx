import { ReactElement, useState } from 'react';
import { Heading } from '@chakra-ui/layout';
import { AuthLayout } from '../../components/layouts/auth';
import { LoginForm } from '../../components/moleciles/LoginForm';
import { loginByGoogle, loginByPassword } from '../../firebase/auth';
import { useRouter } from 'next/dist/client/router';

export default function Login() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLoginByPassword = async (email: string, password: string) => {
    try {
      await loginByPassword(email, password);
      router.push('/');
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
