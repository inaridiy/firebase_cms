import { useState } from 'react';
import { Stack } from '@chakra-ui/layout';
import { EmailInput, PasswordInput } from '../atoms/forms';
import { SubmitBtn } from '../atoms/buttons/SubmitBtn';
import { Button } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { useValidateState } from '../../hooks/useValidateState';

type Props = {
  onSubmit?: (data: { email: string; password: string }) => void;
  onGoogleLogin?: () => void;
};

export const LoginForm = ({ onSubmit, onGoogleLogin }: Props) => {
  const [email, isValid, setEmail] = useValidateState('', (value) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
  });

  return (
    <Stack spacing={4} mt="4">
      <EmailInput onChange={(e) => setEmail(e.target.value)} />
      <PasswordInput />
      <Stack direction={['column', 'row']}>
        <SubmitBtn w={{ base: '100%', sm: '50%' }}>Login</SubmitBtn>
        <Button
          w={{ base: '100%', sm: '50%' }}
          leftIcon={<FcGoogle />}
          onClick={onGoogleLogin || (() => {})}
        >
          Login with Google
        </Button>
      </Stack>
    </Stack>
  );
};
