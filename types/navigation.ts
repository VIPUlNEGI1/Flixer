import { IconType } from 'react-icons';

export interface MenuItem {
  id: string;
  label: string;
  href: string;
  icon?: IconType;
  subMenu?: MenuItem[];
}