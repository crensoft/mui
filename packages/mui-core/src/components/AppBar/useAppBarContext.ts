import { useContext } from 'react';
import { AppBarContext } from './AppBar';

export default function useAppBarContext() {
  return useContext(AppBarContext);
}
