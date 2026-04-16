"use client";
import { useState, useEffect } from "react";
import { HeaderNavbar } from "@/components/ui/sections/Navbar/HeaderNavbar"
import { HeroSlider } from "@/components/ui/sections/HeroSlider"
import { FeaturedCourses } from "@/components/ui/sections/FeaturedCourses";
import { InProgressCourses } from "@/components/ui/sections/InProgressCourses";
import { mockGetCourses, mockGetFeaturedCourses, getUser, getUserEnrollments } from "@/lib/mock";
import { saveUser } from "@/lib/storage";
import type { User } from "@/types/user/types";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import EditProfileModal from "@/components/modals/EditProfileModal";


export default function DashboardPage() {
  const [modal, setModal] = useState<"login" | "register" | "profile" | null>(null);
  const [showEdit, setShowEdit] = useState(false);
  const [user, setUser] = useState<User | null>(() => getUser());
  const featuredCourses = mockGetFeaturedCourses().slice(0, 3);
  const enrollments = user ? getUserEnrollments() : null;

  const handleSuccess = (user: User) => {
    saveUser(user);
    setUser(user);   
    setModal(null);  
  };

   useEffect(() => {
      const stored = getUser();
      setUser(stored);
    }, []);
  
    if (!user) return null;

  return (
    <div className="flex flex-col bg-[#F5F5F5]">
      
      {/* Navbar */}
      <HeaderNavbar
          user={user}
          onLogout={() => {
            localStorage.removeItem("user");
            setUser(null);
          }}
         onSwitchToLogin={() => setModal("login")}
         onSwitchToRegister={() => setModal("register")}
         onProfileClick={() => setModal("profile")}
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
      {modal === "profile" && (
        <EditProfileModal
          user={user}
          onClose={() => setModal(null)}
          onSuccess={(updatedUser: User) => {
            saveUser(updatedUser);
            setUser(updatedUser);
            setModal(null);
          }}
        />
      )}

      {/* Page content */}
      <main className="flex flex-col w-[1920px] h-[2282px] items-center py-[60px] gap-[64px]">
        <HeroSlider/>
        <FeaturedCourses courses={featuredCourses} />
        <InProgressCourses isAuthorized={!!user} enrollments={enrollments}/>
      </main>

    </div>
  );
}