import { useState } from "react";
import type { User } from "@/types/user/types";
import type { Errors } from "@/types/errors/types";

export function useEditProfileForm(
  initialUser: User,
  onSuccess: (user: User) => void
) {
  const [form, setForm] = useState({
    fullName: initialUser.fullName ?? "",
    email: initialUser.email ?? "",
    mobileNumber: initialUser.mobileNumber ?? "",
    age: initialUser.age?.toString() ?? "",
    avatarPreview: initialUser.avatar ?? "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  const setField = (field: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const clearError = (field: keyof Errors) =>
    setErrors((prev) => ({ ...prev, [field]: undefined }));

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.email) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.fullName) e.fullName = "Full name is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/users/${initialUser.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          mobileNumber: form.mobileNumber,
          age: form.age ? Number(form.age) : null,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        setErrors({ api: data.message ?? "Update failed" });
        return;
      }
      const updatedUser: User = await res.json();
      onSuccess(updatedUser);
    } catch {
      setErrors({ api: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);  
    }
  };

  return { form, errors, loading, setField, clearError, handleSubmit };
}