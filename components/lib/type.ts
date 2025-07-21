// travel/lib/types.ts
export interface UserData {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  customID: string;
  createdAt: string;
  updatedAt: string;
  profileImage?: string;
  referralLink: string;
}

export interface AuthResponse {
  error?: boolean;
  message: string;
  token?: string;
  user?: UserData;
  referralLink?: string;
}

export interface FormData {
  name?: string;
  email: string;
  phone?: string;
  password: string;
}