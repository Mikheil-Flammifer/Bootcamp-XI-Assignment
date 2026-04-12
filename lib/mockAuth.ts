import mockUsers from "@/data/mockUsers.json";
import type { User } from "@/types/user/types";

// strip password before returning — never expose it
const toUser = (u: typeof mockUsers[0]): User => ({
  id: u.id,
  username: u.username,
  email: u.email,
  avatar: u.avatar,
  fullName: u.fullName,
  mobileNumber: u.mobileNumber,
  age: u.age,
  profileComplete: u.profileComplete,
});

export function mockLogin(email: string, password: string): User {
  const found = mockUsers.find(
    (u) => u.email === email && u.password === password
  );
  if (!found) throw new Error("Invalid email or password.");
  return toUser(found);
}

export function mockRegister(email: string, username: string): User {
  const exists = mockUsers.find((u) => u.email === email);
  if (exists) throw new Error("Email already in use.");
  // in a real app this would persist — here we just return a fake user
  return {
    id: Date.now(),
    username,
    email,
    avatar: null,
    fullName: null,
    mobileNumber: null,
    age: null,
    profileComplete: false,
  };
}