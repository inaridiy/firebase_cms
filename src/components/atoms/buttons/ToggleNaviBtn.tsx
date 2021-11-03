import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { useNavi } from '../../../hooks/useNavi';

export const ToggleNavBtn: React.FC = ({}) => {
  const { isOpen, onToggle } = useNavi();
  return (
    <IconButton
      aria-label="toggle-navi"
      bg="transparent"
      icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
      onClick={onToggle}
    />
  );
};
