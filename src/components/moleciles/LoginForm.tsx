import { useState } from 'react';
import { Stack } from '@chakra-ui/layout';
import { EmailInput, PasswordInput } from '../atoms/forms';
import { useValidateState } from '../../hooks/useValidateState';
import { SubmitFormButtons } from './SubmitFormButtons';

type Props = {
  onSubmit?: (data: { email: string; password: string }) => void;
  onGoogleSubmit?: () => void;
};

export const LoginForm = ({ onSubmit, onGoogleSubmit }: Props) => {
  const [email, isEmailValid, setEmail] = useValidateState('', (value) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  );
  const [password, isPassWordValid, setPassword] = useValidateState(
    '',
    (value) => value.length >= 8
  );

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const trySubmit = () => {
    const isValid = isEmailValid && isPassWordValid;
    if (isValid && onSubmit) {
      onSubmit({ email, password });
    } else {
      setEmailError(isEmailValid ? '' : 'Email is not valid');
      setPasswordError(
        isPassWordValid ? '' : 'The password must be 8 or more characters'
      );
    }
  };

  return (
    <Stack spacing={4} mt="4">
      <EmailInput
        onChange={(e) => setEmail(e.target.value)}
        errorMessage={emailError}
      />
      <PasswordInput
        onChange={(e) => setPassword(e.target.value)}
        errorMessage={passwordError}
      />
      <SubmitFormButtons
        message="Login"
        onSubmit={trySubmit}
        onGoogleSubmit={onGoogleSubmit}
      />
    </Stack>
  );
};
