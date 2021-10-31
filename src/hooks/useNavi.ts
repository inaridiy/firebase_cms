import { useContext } from 'react';
import { MenuContext } from '../components/providers/MenuProvider';

export const useNavi = () => useContext(MenuContext);
