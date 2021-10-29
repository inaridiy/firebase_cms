import { useState } from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control';
import {
  Input,
  InputProps,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/input';
import { LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/button';

type PasswordInputProps = InputProps & {
  errorMessage?: string;
  isRetype?: boolean;
};

export const PasswordInput: React.FC<PasswordInputProps> = (props) => {
  const [isShow, setIsShow] = useState(false);
  const { errorMessage, isRetype, ...rest } = props;
  return (
    <FormControl id="password" isRequired isInvalid={Boolean(errorMessage)}>
      <FormLabel>{isRetype ? 'Retype Password' : 'Password'}</FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <LockIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type={isShow ? 'text' : 'password'}
          placeholder={isRetype ? 'Retype your password' : 'your password'}
          {...rest}
        />
        <InputRightElement>
          <IconButton
            aria-label="switch"
            color="gray.700"
            icon={isShow ? <ViewOffIcon /> : <ViewIcon />}
            onClick={() => setIsShow(!isShow)}
          />
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};
