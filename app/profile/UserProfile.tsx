// app/profile/UserProfile.tsx
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
 
import { UserData } from "components/lib/type"; // Adjust path if necessary
import { useRouter } from "next/navigation";
import { authService } from "hook/useAuth";
// import { authService } from "../../components/lib/type";

export default function UserProfile() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setError("No token found. Please log in.");
        setIsLoading(false);
        router.push("/login");
        return;
      }

      try {
        const result = await authService.getProfile(token);
        if (result.error) {
          setError(result.error);
          router.push("/login");
        } else {
          setUserData(result.user || null); // Handle case where user might be undefined
        }
      } catch (err) {
        setError("An unexpected error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="inline-block text-2xl"
        >
          🔄
        </motion.span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="p-3 bg-red-100 text-red-700 rounded-lg text-sm"
        >
          {error}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-lg shadow-md max-w-md w-full"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">User Profile</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <p className="text-gray-900">{userData?.name || "N/A"}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="text-gray-900">{userData?.email || "N/A"}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <p className="text-gray-900">{userData?.phone || "N/A"}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <p className="text-gray-900">{userData?.role || "N/A"}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Custom ID</label>
            <p className="text-gray-900">{userData?.customID || "N/A"}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Referral Link</label>
            <p className="text-blue-600 hover:underline">
              <a href={userData?.referralLink || "#"} target="_blank" rel="noopener noreferrer">
                {userData?.referralLink || "N/A"}
              </a>
            </p>
          </div>
          {userData?.profileImage && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Profile Image</label>
              <img
                src={`https://flxergithub.onrender.com${userData.profileImage}`}
                alt="Profile"
                className="w-24 h-24 rounded-full mt-2"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700">Created At</label>
            <p className="text-gray-900">
              {userData?.createdAt ? new Date(userData.createdAt).toLocaleDateString() : "N/A"}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Updated At</label>
            <p className="text-gray-900">
              {userData?.updatedAt ? new Date(userData.updatedAt).toLocaleDateString() : "N/A"}
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem("authToken");
            router.push("/login");
          }}
          className="mt-6 w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
        >
          Logout
        </button>
      </motion.div>
    </div>
  );
}