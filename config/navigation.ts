// config/navigation.ts
import { 
  Home, 
  Backpack, 
  User,
  // Add other icons you need
} from "lucide-react"

export const navigationConfig = {
  mainNav: [
    {
      id: "home",
      name: "Home",
      path: "/",
      icon: Home,
    },
    {
      id: "categories",
      name: "Categories",
      path: "/categories",
      icon: Backpack,
      subMenu: [
        // { 
        //   id: "weekend-trips", 
        //   name: "Weekend Trips", 
        //   path: "/trips/weekend",
        // },
        // ... other submenu items
      ]
    },
  ],
  authConfig: {
    loggedOut: [
      {
        id: "login",
        name: "Sign In",
        path: "/login",
      },
      {
        id: "register",
        name: "Register",
        path: "/register",
      }
    ],
    loggedIn: {
      id: "profile",
      name: "Profile",
      path: "/profile",
      icon: User
    }
  }
}