import { createContext, useEffect } from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import { needChild } from '../../types/needChild';
import { useIsMd } from '../../hooks/useIsMd';

export const MenuContext = createContext({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
  onToggle: () => {},
});

export const MenuProvider: React.FC<needChild> = ({ children }) => {
  const { onClose, onOpen, isOpen, onToggle } = useDisclosure();
  const isMd = useIsMd();
  useEffect(() => {
    if (isMd) {
      onOpen();
    } else {
      onClose();
    }
  }, [isMd]);

  return (
    <MenuContext.Provider value={{ onClose, onOpen, isOpen, onToggle }}>
      {children}
    </MenuContext.Provider>
  );
};
