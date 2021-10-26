import { Box, BoxProps } from '@chakra-ui/layout';

export const Card: React.FC<BoxProps> = (props) => (
  <Box bg="white" rounded="md" p={4} shadow="lg" {...props}></Box>
);
