import { 
    HiHome, 
    HiUserGroup, 
    HiCog,
    HiShoppingCart,
    HiPhone,
    HiUserCircle,
    HiCurrencyDollar,
    HiSupport
  } from 'react-icons/hi';
  import { MenuItem } from '@/types/navigation';
  
  export const menuItems: MenuItem[] = [
    {
      id: 'home',
      label: 'Home',
      href: '/',
      icon: HiHome
    },
    {
      id: 'products',
      label: 'Products',
      href: '/products',
      icon: HiShoppingCart,
      subMenu: [
        {
          id: 'new-arrivals',
          label: 'New Arrivals',
          href: '/products/new-arrivals'
        },
        {
          id: 'best-sellers',
          label: 'Best Sellers',
          href: '/products/best-sellers'
        }
      ]
    },
    {
      id: 'services',
      label: 'Services',
      href: '/services',
      icon: HiCog,
      subMenu: [
        {
          id: 'consulting',
          label: 'Consulting',
          href: '/services/consulting',
          icon: HiUserGroup
        },
        {
          id: 'support',
          label: 'Support',
          href: '/services/support',
          icon: HiSupport
        }
      ]
    },
    {
      id: 'pricing',
      label: 'Pricing',
      href: '/pricing',
      icon: HiCurrencyDollar
    },
    {
      id: 'contact',
      label: 'Contact',
      href: '/contact',
      icon: HiPhone
    }
  ];