export interface User {
  id: number;
  username: string;
  email: string;
  avatar: string | null;
  fullName: string | null;
  mobileNumber: string | null;
  age: number | null;
  profileComplete: boolean; 
}

export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
  avatar?: File | null;
}

export interface LoginPayload {
  email: string;
  password: string;
}