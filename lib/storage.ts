import type { User } from "@/types/user/types";

const KEY = "current_user";

export const saveUser = (user: User) =>
  localStorage.setItem(KEY, JSON.stringify(user));

export const getUser = (): User | null => {
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : null;
};

export const clearUser = () => localStorage.removeItem(KEY);