import { SideStaticDrawer } from '../../atoms/navi/SideStaticDrawer';
import { SideDrawer } from '../../atoms/navi/SideDrawer';

import { needChild } from '../../../types/needChild';

export const SideContentFrame: React.FC<needChild> = ({ children }) => {
  return (
    <>
      <SideStaticDrawer>{children}</SideStaticDrawer>
      <SideDrawer>{children}</SideDrawer>
    </>
  );
};
