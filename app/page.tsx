"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUser } from "@/lib/storage";


/*
Main page of app
*/
export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const user = getUser();
    if (user) router.push("/dashboard");
    else router.push("/auth");
  }, [router]);

  return null;
}