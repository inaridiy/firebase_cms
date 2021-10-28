import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, BoxProps } from '@chakra-ui/layout';

export const Card: React.FC<BoxProps> = (props) => {
  const bgColor = useColorModeValue('white', 'gray.700');
  return <Box bg={bgColor} rounded="md" p={4} shadow="lg" {...props}></Box>;
};
