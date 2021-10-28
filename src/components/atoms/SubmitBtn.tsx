import { Button } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';

type Props = { children: React.ReactNode };

export const SubmitBtn: React.FC<Props> = ({ children }) => {
  const bgColor = useColorModeValue('teal.500', 'teal.500');
  return <Button bg={bgColor}>{children}</Button>;
};
