"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUser, clearUser } from "@/lib/storage";
import EditProfileModal from "@/components/modals/EditProfileModal";
import type { User } from "@/types/user/types";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    const stored = getUser();
    if (!stored) {
      router.push("/");   // not logged in → back to auth page
      return;
    }
    setUser(stored);
  }, []);

  if (!user) return null; // still loading

  return (
    <>
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4">
        <h1>Welcome, {user.username}</h1>
        <button onClick={() => setShowEdit(true)}>Edit Profile</button>
        <button onClick={() => { clearUser(); router.push("/"); }}>
          Log out
        </button>
      </main>

      {showEdit && (
        <EditProfileModal
          user={user}
          onClose={() => setShowEdit(false)}
          onSuccess={(updatedUser) => { 
            setUser(updatedUser);    
            setShowEdit(false);
          }}
        />
      )}
    </>
  );
}