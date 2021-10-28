import { Button, ButtonProps } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';

export const SubmitBtn: React.FC<ButtonProps> = (props) => {
  const bgColor = useColorModeValue('teal.500', 'teal.500');
  return <Button bg={bgColor} color="white" type="submit" {...props} />;
};
