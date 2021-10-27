import { useEffect, useState } from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { EmailIcon } from '@chakra-ui/icons';

type EmailInputProps = {
  onChange?: (value: string) => void;
  onValidate?: (isValid: boolean) => void;
  isShowError?: boolean;
};

export const EmailInput: React.FC<EmailInputProps> = (props) => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  props.onChange && props.onChange(email);

  useEffect(() => {
    const isValid =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      );
    props.onValidate && props.onValidate(isValid);
    setErrorMessage(isValid ? '' : 'Invalid email');
  }, [email]);

  return (
    <FormControl id="email" isRequired isInvalid={props.isShowError}>
      <FormLabel>Email</FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <EmailIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="email"
          placeholder="email address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputGroup>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};
