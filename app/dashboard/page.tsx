"use client";

import { useState } from "react";
import { HeaderNavbar } from "@/components/ui/sections/Navbar/HeaderNavbar"
import { HeroSlider } from "@/components/ui/sections/HeroSlider"
import { FeaturedCourses } from "@/components/ui/sections/FeaturedCourses";
import { InProgressCourses } from "@/components/ui/sections/InProgressCourses";
import { mockGetCourses, mockGetFeaturedCourses, getUser } from "@/lib/mock";
import { saveUser } from "@/lib/storage";
import type { User } from "@/types/user/types";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";


export default function DashboardPage() {
  const [modal, setModal] = useState<"login" | "register" | null>("login");
  const [user, setUser] = useState<User | null>(() => getUser());
  const featuredCourses = mockGetFeaturedCourses().slice(0, 3);
  const inProgressCourses = mockGetCourses();

  const handleSuccess = (user: User) => {
    saveUser(user);
    setUser(user);   
    setModal(null);  
  };

  return (
    <div className="flex flex-col w-[1920px] h-[1080px] min-h-screen bg-[#F5F5F5]">
      
      {/* Navbar */}
      <HeaderNavbar
          user={user}
          onLogout={() => {
            localStorage.removeItem("user");
            setUser(null);
          }}
         onSwitchToLogin={() => setModal("login")}
         onSwitchToRegister={() => setModal("register")}
      />

      {modal === "register" && (
        <RegisterModal
          onClose={() => setModal(null)}
          onSwitchToLogin={() => setModal("login")}
          onSuccess={handleSuccess}
        />
      )}
      {modal === "login" && (
        <LoginModal
          onClose={() => setModal(null)}
          onSwitchToRegister={() => setModal("register")}
          onSuccess={handleSuccess}
        />
      )}

      {/* Page content */}
      <main className="flex flex-col w-[1920px] h-[2282px] items-center py-[60px] gap-[64px]">
        <HeroSlider/>
        <FeaturedCourses courses={featuredCourses} />
        <InProgressCourses courses={inProgressCourses}/>
      </main>

    </div>
  );
}