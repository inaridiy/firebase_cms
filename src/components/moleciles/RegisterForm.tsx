import { useState } from 'react';
import { Stack } from '@chakra-ui/layout';
import {
  EmailInput,
  PasswordConfirmInput,
  PasswordInput,
} from '../atoms/forms';
import { SubmitBtn } from '../atoms/buttons/SubmitBtn';
import { Button } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';

type Props = {
  onSubmit?: (data: { email: string; password: string }) => void;
  onGoogleLogin?: () => void;
};

export const RegisterForm = ({ onSubmit, onGoogleLogin }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordConfirmValid, setIsPasswordConfirmValid] = useState(false);

  const [isShowError, setIsShowError] = useState(false);
  console.log(isEmailValid, isPasswordValid, isPasswordConfirmValid);
  const handleSubmit = () => {
    console.log({ email, password });

    if (isEmailValid && isPasswordValid && isPasswordConfirmValid) {
      setIsShowError(false);
      console.log('all ok');
      onSubmit && onSubmit({ email, password });
    } else {
      console.log('not ok');
      setIsShowError(true);
    }
  };
  return (
    <Stack spacing={4} mt="4">
      <EmailInput
        onChange={setEmail}
        onValidate={(e) => {
          console.log(e);
          setIsEmailValid(e);
        }}
        isShowError={isShowError}
      />
      <PasswordInput
        onChange={setPassword}
        onValidate={setIsPasswordValid}
        isShowError={isShowError}
      />
      <PasswordConfirmInput
        onValidate={setIsPasswordConfirmValid}
        masterPassword={password}
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
