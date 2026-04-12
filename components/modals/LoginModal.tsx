"use client";
import { useEffect } from "react";
import LoginForm from "@/components/forms/userForms/LoginForm";

import type { User } from "@/types/user/types"

interface Props {
  onClose: () => void;
  onSwitchToRegister: () => void;
  onSuccess: (user: User) => void;
}

export default function LoginModal({ onClose, onSwitchToRegister, onSuccess }: Props) {

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    // Backdrop — click outside to close
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
      onClick={onClose}
    >
      <div
        className="w-[460px] bg-white rounded-2xl shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <LoginForm
          onSuccess={onSuccess}
          onSwitchToRegister={onSwitchToRegister}
          onClose={onClose}
        />
      </div>
    </div>
  );
}