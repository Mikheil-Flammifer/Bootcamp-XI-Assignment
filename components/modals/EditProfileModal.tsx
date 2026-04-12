import { useEffect } from "react";
import EditProfileForm from "@/components/forms/userForms/EditProfileForm";
import type { User } from "@/types/user/types";

interface Props {
  onClose: () => void;
  onSuccess: (user: User) => void;
  user: User;
}

export default function EditProfileModal({ onClose, onSuccess, user }: Props) {

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
      onClick={onClose}
    >
      <div
        className="w-[460px] bg-white rounded-2xl shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <EditProfileForm
          onClose={onClose}
          onSuccess={onSuccess}
          user={user}
        />
      </div>
    </div>
  );
}