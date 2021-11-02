import { useState, useEffect } from 'react';
import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/alert';
import { CloseButton } from '@chakra-ui/close-button';

type Props = { errorMessage?: string };

export const ErrorAlert: React.FC<Props> = ({ errorMessage }) => {
  const [isShow, setIsShow] = useState(Boolean(errorMessage));
  useEffect(() => {
    setIsShow(Boolean(errorMessage));
  }, [errorMessage]);

  return (
    <>
      {isShow && (
        <Alert status="error" m={0}>
          <AlertIcon />
          <AlertTitle mr={2}>{errorMessage}</AlertTitle>
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            onClick={() => setIsShow(false)}
          />
        </Alert>
      )}
    </>
  );
};
