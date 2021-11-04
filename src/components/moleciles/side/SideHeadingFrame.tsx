import { IconButton } from '@chakra-ui/button';
import { HStack, Spacer, Heading } from '@chakra-ui/layout';

type Props = {
  'aria-label'?: string;
  children: React.ReactNode;
  icon?: React.ReactElement;
  onClick?: () => void;
};

export const SideHeadingFrame: React.FC<Props> = ({
  children,
  icon,
  onClick,
  'aria-label': label = 'side button',
}) => {
  return (
    <HStack pl="1">
      <Heading as="h3" size="md">
        {children}
      </Heading>

      <Spacer />
      {icon && (
        <IconButton
          bg="transparent"
          size="md"
          aria-label={label}
          icon={icon}
          onClick={onClick}
        />
      )}
    </HStack>
  );
};
