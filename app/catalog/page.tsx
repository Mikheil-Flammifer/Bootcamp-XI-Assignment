"use client";
import { useState, useEffect } from "react";
import { HeaderNavbar } from "@/components/ui/sections/Navbar/HeaderNavbar"
import { CatalogCourses } from "@/components/ui/sections/Catalog/CatalogCuorses";
import { CatalogCuorsesFilter } from "@/components/ui/sections/Catalog/CatalogCuorsesFilter";
import { mockGetCourses, mockGetinstructors, mockGetTopics, mockGetCategories, getUser } from "@/lib/mock";
import { saveUser } from "@/lib/storage";
import type { User } from "@/types/user/types";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import EditProfileModal from "@/components/modals/EditProfileModal";



export default function CatalogPage() {
    const [modal, setModal] = useState<"login" | "register" | "profile" | null>(null);
    const [showEdit, setShowEdit] = useState(false);
    const [user, setUser] = useState<User | null>(() => getUser());
    const courses = mockGetCourses();
    const instructors = mockGetinstructors().slice(0, 4);
    const topics = mockGetTopics().slice(0, 4);
    const categories = mockGetCategories().slice(0, 3);
    
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

    return(
    <div className="w-[1920px] min-h-[2283px] bg-white">
      
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

      {/* Main Content */}
      <div className="flex gap-[32px] px-[576px] pt-[234px]">
        
        {/* Left: Filters */}
        <CatalogCuorsesFilter
          categories={categories}
          lecturers={instructors}
          topics={topics}
        />
        {/* Right: Courses */}
        <CatalogCourses courses={courses}/>

      </div>

    </div>
    );
}