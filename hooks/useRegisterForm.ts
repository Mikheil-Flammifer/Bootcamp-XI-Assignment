import { useState, useRef } from "react";
import { mockRegister } from "@/lib/mock";

import type { User } from "@/types/user/types";
import type { Errors } from "@/types/errors/types"

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
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const setField = (field: keyof FormState, value: unknown) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const clearError = (field: keyof Errors) =>
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });

    

  // Each step validates only its own fields
  const validateStep = (): Errors => {
    const e: Errors = {};

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
      const user = mockRegister(form.email, form.username);
      onSuccess(user);
    } catch (err) {
      setErrors({ api: (err as Error).message });
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