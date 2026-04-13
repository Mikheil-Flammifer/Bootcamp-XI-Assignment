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
    if (user) router.push("/profile");
    else router.push("/auth");
  }, []);

  return null;
}