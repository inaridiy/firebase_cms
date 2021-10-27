import { Stack } from '@chakra-ui/layout';
import { EmailInput, PasswordInput } from '../atoms/forms';

type Props = {};

export const LoginForm: React.FC<Props> = ({}) => {
  return (
    <Stack pt="4" spacing={3}>
      <EmailInput />
      <PasswordInput />
    </Stack>
  );
};
