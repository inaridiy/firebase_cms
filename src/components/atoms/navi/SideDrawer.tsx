import { useColorModeValue } from '@chakra-ui/color-mode';
import { Drawer, DrawerContent, DrawerOverlay } from '@chakra-ui/modal';
import { useContext } from 'react';
import { useIsMd } from '../../../hooks/useIsMd';
import { needChild } from '../../../types/needChild';
import { MenuContext } from '../../providers/MenuProvider';

export const SideDrawer: React.FC<needChild> = (props) => {
  const { isOpen, onClose } = useContext(MenuContext);
  const isMd = useIsMd();
  return (
    <Drawer placement="left" isOpen={!isMd && isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg={useColorModeValue('gray.50', 'gray.800')}>
        {props.children}
      </DrawerContent>
    </Drawer>
  );
};
