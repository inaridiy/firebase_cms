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

type EmailInputProps = {
  isShowError?: boolean;
};

export const EmailInput: React.FC<EmailInputProps | InputProps> = (props) => {
  return (
    <FormControl id="email" isRequired>
      <FormLabel>Email</FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <EmailIcon color="gray.300" />
        </InputLeftElement>
        <Input type="email" placeholder="email address" {...props} />
      </InputGroup>
      <FormErrorMessage>{}</FormErrorMessage>
    </FormControl>
  );
};
