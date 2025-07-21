
// travel/app/profile/page.tsx
// import { UserProfile } from './UserProfile';

import UserProfile from "@/components/navigation/UserProfile";

export default function ProfilePage() {
  return (
	<div className="min-h-screen flex items-center justify-center bg-gray-100">
	  <UserProfile/>
	</div>
  );
}