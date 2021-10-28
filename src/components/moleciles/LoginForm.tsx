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
  const data = { email: '', password: '' };
  const handlePasswordChange = (e: string) => (data.password = e);
  const handleEmailChange = (e: string) => (data.email = e);

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const [isShowError, setIsShowError] = useState(false);

  const handleSubmit = () => {
    if (isEmailValid && isPasswordValid) {
      setIsShowError(false);
      onSubmit && onSubmit(data);
    } else {
      setIsShowError(true);
    }
  };
  return (
    <Stack spacing={4} mt="4">
      <EmailInput
        onChange={handleEmailChange}
        onValidate={setIsEmailValid}
        isShowError={isShowError}
      />
      <PasswordInput
        onChange={handlePasswordChange}
        onValidate={setIsPasswordValid}
        isShowError={isShowError}
      />
      <Stack direction={['column', 'row']}>
        <SubmitBtn w={{ base: '100%', sm: '50%' }} onClick={handleSubmit}>
          Login
        </SubmitBtn>
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
