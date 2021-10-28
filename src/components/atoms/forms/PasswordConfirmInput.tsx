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

type PasswordConfirmInputProps = {
  onValidate?: (isValid: boolean) => void;
  masterPassword?: string;
  isShowError?: boolean;
};

export const PasswordConfirmInput: React.FC<PasswordConfirmInputProps> = (
  props
) => {
  const [isShow, setIsShow] = useState(false);
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(props.masterPassword === password);

    props.onValidate && props.onValidate(isValid);
  }, [password, props.masterPassword]);

  return (
    <FormControl
      id="password-confirm"
      isRequired
      isInvalid={props.isShowError && !isValid}
    >
      <FormLabel>Retype your password</FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <LockIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type={isShow ? 'text' : 'password'}
          placeholder="Retype your password"
          onChange={(e) => setPassword(e.target.value)}
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
      <FormErrorMessage>Password does not match</FormErrorMessage>
    </FormControl>
  );
};
