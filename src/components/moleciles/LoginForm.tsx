import { useState } from 'react';
import { Stack } from '@chakra-ui/layout';
import { EmailInput, PasswordInput } from '../atoms/forms';
import { SubmitBtn } from '../atoms/buttons/SubmitBtn';
import { Button } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';

type Props = {
  onSubmit?: (data: { email: string; password: string }) => void;
  onGoogleLogin?: () => void;
};

export const LoginForm = ({ onSubmit, onGoogleLogin }: Props) => {
  return (
    <Stack spacing={4} mt="4">
      <EmailInput />
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
