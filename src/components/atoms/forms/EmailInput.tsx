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
  return (
    <FormControl id="email" isRequired>
      <FormLabel>Email</FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <EmailIcon color="gray.300" />
        </InputLeftElement>
        <Input type="email" placeholder="email address" />
      </InputGroup>
      <FormErrorMessage>{}</FormErrorMessage>
    </FormControl>
  );
};
