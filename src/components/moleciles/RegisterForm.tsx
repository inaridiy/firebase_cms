import { useState } from 'react';
import { Stack } from '@chakra-ui/layout';
import { EmailInput, PasswordInput } from '../atoms/forms';
import { useValidateState } from '../../hooks/useValidateState';
import { SubmitFormButtons } from './SubmitFormButtons';

type Props = {
  onSubmit?: (data: { email: string; password: string }) => void;
  onGoogleSubmit?: () => void;
};

export const RegisterForm = ({ onSubmit, onGoogleSubmit }: Props) => {
  const [email, isEmailValid, setEmail] = useValidateState('', (value) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  );
  const [password, isPassWordValid, setPassword] = useValidateState(
    '',
    (value) => value.length >= 8
  );
  const [confirmPassword, isConfirmPasswordValid, setConfirmPassword] =
    useValidateState('', (value) => value === password);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const trySubmit = () => {
    const isValid = isEmailValid && isPassWordValid && isConfirmPasswordValid;
    if (isValid && onSubmit) {
      onSubmit({ email, password });
    } else {
      setEmailError(isEmailValid ? '' : 'Email is not valid');
      setPasswordError(
        isPassWordValid ? '' : 'The password must be 8 or more characters'
      );
      setConfirmPasswordError(
        isConfirmPasswordValid ? '' : 'The passwords do not match'
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
      <PasswordInput
        isRetype
        onChange={(e) => setConfirmPassword(e.target.value)}
        errorMessage={confirmPasswordError}
      />

      <SubmitFormButtons
        message="Login"
        onSubmit={trySubmit}
        onGoogleSubmit={onGoogleSubmit}
      />
    </Stack>
  );
};
