import { Button } from '@chakra-ui/button';
import { Stack } from '@chakra-ui/layout';
import { EmailInput, PasswordInput } from '../atoms/forms';
import { SubmitBtn } from '../atoms/SubmitBtn';

type Props = {
  onChange?: (e: { email: string; password: string }) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const LoginForm = ({ onChange, onSubmit }: Props) => {
  const data = { email: '', password: '' };
  const onPasswordChange = (e: string) => {
    data.password = e;
    onChange && onChange(data);
  };
  const onEmailChange = (e: string) => {
    data.email = e;
    onChange && onChange(data);
  };
  return (
    <Stack spacing={4}>
      <EmailInput onChange={onEmailChange} />
      <PasswordInput onChange={onPasswordChange} />
      <SubmitBtn>Login</SubmitBtn>
    </Stack>
  );
};
