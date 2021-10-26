import { Container, ContainerProps } from '@chakra-ui/layout';
import { needChild } from '../../types/needChild';

export const TwContainer: React.FC<needChild | ContainerProps> = (props) => (
  <Container
    maxW={['container.sm', 'container.md', 'container.lg', 'container.xl']}
    {...props}
  ></Container>
);
