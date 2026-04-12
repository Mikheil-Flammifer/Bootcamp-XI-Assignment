"use client";
import { useState } from "react";
import RegisterModal from "@/components/modals/RegisterModal";
import LoginModal from "@/components/modals/LoginModal";

type ModalState = "register" | "login" | null;

export default function RegisterPage() {
  const [modal, setModal] = useState<ModalState>("register");

  return (
    <>
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-medium text-gray-800">Welcome</h1>
        <p className="text-gray-500 text-sm">Create an account to get started.</p>

        <div className="flex gap-3">
          <button
            onClick={() => setModal("register")}
            className="px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Register
          </button>
          <button
            onClick={() => setModal("login")}
            className="px-5 py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Log in
          </button>
        </div>
      </main>

      {modal === "register" && (
        <RegisterModal
          onClose={() => setModal(null)}
          onSwitchToLogin={() => setModal("login")}
          onSuccess={(user) => {
            console.log("Registered:", user);
            setModal(null);
          }}
        />
      )}

      {modal === "login" && (
        <LoginModal
          onClose={() => setModal(null)}
          onSwitchToRegister={() => setModal("register")}
          onSuccess={(user) => {
            console.log("Logged in:", user);
            setModal(null);
          }}
        />
      )}
    </>
  );
}