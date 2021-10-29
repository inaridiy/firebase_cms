import { useEffect, useState } from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control';
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from '@chakra-ui/input';
import { EmailIcon } from '@chakra-ui/icons';

type EmailInputProps = InputProps & {
  errorMessage?: string;
};

export const EmailInput: React.FC<EmailInputProps> = (props) => {
  const { errorMessage, ...rest } = props;

  return (
    <FormControl id="email" isRequired isInvalid={Boolean(errorMessage)}>
      <FormLabel>Email</FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <EmailIcon color="gray.300" />
        </InputLeftElement>
        <Input type="email" placeholder="email address" {...rest} />
      </InputGroup>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};
