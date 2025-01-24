import { LucideIcon } from 'lucide-react';

export interface MenuItem {
  id: string;
  label: string;
  href: string;
  icon?: LucideIcon;
  description?: string;
  subMenu?: MenuItem[];
}

export interface NavigationConfig {
  mainNav: MenuItem[];
  contactButton: MenuItem;
}