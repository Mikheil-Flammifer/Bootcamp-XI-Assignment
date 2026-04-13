"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import RegisterModal from "@/components/modals/RegisterModal";
import LoginModal from "@/components/modals/LoginModal";
import { saveUser } from "@/lib/storage";
import type { User } from "@/types/user/types";


/*
Page for user login and register
*/
export default function AuthPage() {
  const router = useRouter();
  const [modal, setModal] = useState<"register" | "login" | null>("register");

  const handleSuccess = (user: User) => {
    saveUser(user);
    router.push("/profile");
  };

  return (
    <>
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4">
        <div className="flex gap-3">
          <button onClick={() => setModal("register")}>Register</button>
          <button onClick={() => setModal("login")}>Log in</button>
        </div>
      </main>

      {modal === "register" && (
        <RegisterModal
          onClose={() => setModal(null)}
          onSwitchToLogin={() => setModal("login")}
          onSuccess={handleSuccess}
        />
      )}
      {modal === "login" && (
        <LoginModal
          onClose={() => setModal(null)}
          onSwitchToRegister={() => setModal("register")}
          onSuccess={handleSuccess}
        />
      )}
    </>
  );
}