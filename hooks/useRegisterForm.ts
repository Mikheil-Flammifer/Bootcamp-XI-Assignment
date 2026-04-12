import { useState, useRef } from "react";
import type { User } from "@/types/user/";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

type Step = 1 | 2 | 3;

interface FormState {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
  avatar: File | null;
  avatarPreview: string | null;
}

interface FormErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
  username?: string;
  avatar?: string;
  api?: string;
}

export function useRegisterForm(onSuccess: (user: User) => void) {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormState>({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    avatar: null,
    avatarPreview: null,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const setField = (field: keyof FormState, value: unknown) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const clearError = (field: keyof FormErrors) =>
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });

  // Each step validates only its own fields
  const validateStep = (): FormErrors => {
    const e: FormErrors = {};

    if (step === 1) {
      if (!form.email || !EMAIL_REGEX.test(form.email))
        e.email = "Enter a valid email address.";
    }

    if (step === 2) {
      if (!form.password || form.password.length < 6)
        e.password = "Password must be at least 6 characters.";
      if (form.password !== form.confirmPassword)
        e.confirmPassword = "Passwords do not match.";
    }

    if (step === 3) {
      if (!form.username || form.username.length < 3)
        e.username = "Username must be at least 3 characters.";
    }

    return e;
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!ALLOWED_TYPES.includes(file.type)) {
      setErrors((prev) => ({ ...prev, avatar: "Only JPG, PNG, or WebP allowed." }));
      return;
    }
    clearError("avatar");
    const reader = new FileReader();
    reader.onload = (ev) => {
      setField("avatarPreview", ev.target?.result as string);
      setField("avatar", file);
    };
    reader.readAsDataURL(file);
  };

  // Steps 1 and 2 just advance, step 3 submits
  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateStep();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    if (step < 3) {
      setStep((s) => (s + 1) as Step);
      return;
    }

    // Step 3 — final submit
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("email", form.email);
      fd.append("password", form.password);
      fd.append("username", form.username);
      if (form.avatar) fd.append("avatar", form.avatar);

      const res = await fetch("/api/auth/register", { method: "POST", body: fd });
      const data = await res.json();

      if (!res.ok) {
        if (data.field) setErrors({ [data.field]: data.message });
        else setErrors({ api: data.message ?? "Registration failed." });
        return;
      }
      onSuccess(data.user);
    } catch {
      setErrors({ api: "Network error. Please check your connection." });
    } finally {
      setLoading(false);
    }
  };

  const goBack = () => setStep((s) => (s - 1) as Step);

  return {
    step,
    form,
    errors,
    loading,
    fileRef,
    setField,
    clearError,
    handleAvatarChange,
    handleNext,
    goBack,
  };
}