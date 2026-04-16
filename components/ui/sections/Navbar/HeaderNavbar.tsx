"use client";

import React from "react";
import { NavItemUnauthorized } from "./NavItems/NavItemUnauthorized";
import { NavItemAuthorized } from "./NavItems/NavItemAuthorized";

import type { User } from "@/types/user/types"


interface Props {
  user: User | null;
  onLogout: () => void;
  onSwitchToLogin: () => void;
  onSwitchToRegister: () => void;
  onProfileClick: () => void;
  isAuthorized?: boolean;
}

export function HeaderNavbar({ user, onLogout, onSwitchToLogin, onSwitchToRegister, onProfileClick } : Props) {
  return (
    <header className="w-[1920px] h-[108px] bg-[#F5F5F5] relative z-50 border-b border-[#D1D1D1] shadow-[0px_0px_11.7px_0px_#0000000A] px-[177px] py-[24px]">
      
      {/* Frame 328 */}
      <div className="w-[1566px] h-[60px] flex items-center justify-between">
        
        {/* Logo */}
        <div
          className="w-[60px] h-[60px] px-[16px] py-[16px] rounded-[14px] bg-[#4F46E5] flex items-center justify-center cursor-pointer"
          onClick={() => console.log("Dashboard_authorized")}
        >
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="60" height="60" rx="14" fill="#4F46E5"/>
                  <path 
                    d="M29.1282 34.5001L24.6667 29.8848M29.1282 34.5001C31.2056 33.6828 33.1984 32.652 35.0769 31.4232M29.1282 34.5001V42.1923C29.1282 42.1923 33.6344 41.3462 35.0769 39.1155C36.6831 36.6232 35.0769 31.4232 35.0769 31.4232M24.6667 29.8848C25.4581 27.7609 26.4546 25.725 27.641 23.808C29.3739 20.9418 31.7867 18.5819 34.6501 16.9528C37.5135 15.3237 40.7322 14.4794 44 14.5004C44 18.6849 42.84 26.0387 35.0769 31.4232M24.6667 29.8848L17.2308 29.8848C17.2308 29.8848 18.0487 25.2233 20.2051 23.731C22.6144 22.0695 27.641 23.731 27.641 23.731M17.9744 36.8078C15.7436 38.7462 15 44.5 15 44.5C15 44.5 20.5621 43.7308 22.4359 41.4231C23.4918 40.1308 23.4769 38.1462 22.3021 36.9463C21.724 36.3755 20.9625 36.0457 20.1638 36.0201C19.3651 35.9946 18.5854 36.2751 17.9744 36.8078Z" 
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
        </div>

        {/* Frame 327 (Nav + Buttons together) */}
        {user
          ? <NavItemAuthorized 
              onProfileClick={onProfileClick}/>
          : <NavItemUnauthorized 
             onSwitchToLogin={onSwitchToLogin} 
             onSwitchToRegister={onSwitchToRegister}/>
        }
      </div>
    </header>
  );
}