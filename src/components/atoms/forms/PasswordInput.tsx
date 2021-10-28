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
  InputRightElement,
} from '@chakra-ui/input';
import { LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/button';

type PasswordInputProps = {
  onChange?: (value: string) => void;
  onValidate?: (isValid: boolean) => void;
  isShowError?: boolean;
};

export const PasswordInput: React.FC<PasswordInputProps> = (props) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <FormControl
      id="password"
      isRequired
      //    isInvalid={props.isShowError && !isValid}
    >
      <FormLabel>Password</FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <LockIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type={isShow ? 'text' : 'password'}
          placeholder="your password"
          // onChange={(e) => setPassword(e.target.value)}
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
      <FormErrorMessage>
        Password must be at least 8 characters
      </FormErrorMessage>
    </FormControl>
  );
};
