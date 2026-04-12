// hooks/useLoginForm.ts
import { useState } from "react";

interface Form {
  email: string;
  password: string;
}

interface Errors {
  email?: string;
  password?: string;
  api?: string;
}

export function useLoginForm(onSuccess: (user: unknown) => void) {
  const [form, setForm] = useState<Form>({ email: "", password: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  const setField = (field: keyof Form, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const clearError = (field: keyof Errors) =>
    setErrors((prev) => ({ ...prev, [field]: undefined }));

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.email) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.password) e.password = "Password is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        setErrors({ api: data.message ?? "Login failed" });
        return;
      }
      const user = await res.json();
      onSuccess(user);
    } catch {
      setErrors({ api: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return { form, errors, loading, setField, clearError, handleSubmit };
}