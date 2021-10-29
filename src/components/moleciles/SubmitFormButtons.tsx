import { SubmitBtn } from '../atoms/buttons/SubmitBtn';
import { Button } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { Stack } from '@chakra-ui/layout';
import React from 'react';

type SubmitFormButtonsProps = {
  onSubmit?: React.MouseEventHandler<HTMLButtonElement>;
  onGoogleSubmit?: React.MouseEventHandler<HTMLButtonElement>;
  message?: string;
};

export const SubmitFormButtons: React.FC<SubmitFormButtonsProps> = ({
  onSubmit = () => {},
  onGoogleSubmit = () => {},
  message = 'Message',
}) => {
  return (
    <Stack direction={['column', 'row']}>
      <SubmitBtn w={{ base: '100%', sm: '50%' }} onClick={onSubmit}>
        {message}
      </SubmitBtn>
      <Button
        w={{ base: '100%', sm: '50%' }}
        leftIcon={<FcGoogle />}
        onClick={onGoogleSubmit}
      >
        {message} with Google
      </Button>
    </Stack>
  );
};
