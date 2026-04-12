"use client";
import { useEffect } from "react";
import RegisterForm from "@/components/forms/userForms/RegisterForm";

interface Props {
  onClose: () => void;
  onSwitchToLogin: () => void;
  onSuccess: (user: unknown) => void;
}

export default function RegisterModal({ onClose, onSwitchToLogin, onSuccess }: Props) {

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
      {/* Modal panel — stop click from bubbling to backdrop */}
      <div
        className="w-[460px] bg-white rounded-2xl shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <RegisterForm
          onSuccess={onSuccess}
          onSwitchToLogin={onSwitchToLogin}
          onClose={onClose}
        />
      </div>
    </div>
  );
}