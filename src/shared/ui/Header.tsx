import React from "react";
import { useSelector, useDispatch } from "react-redux";

import type { RootState, AppDispatch } from "@/app/store";
import { logout } from "@/features/auth/model/authSlice";



interface HeaderProps {
  title?: string;
  onLoginClick?: () => void;
}
export const Header: React.FC<HeaderProps> = ({ title }) => {

  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">{title || "Online Courses"}</h1>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span>{user}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <a href="/auth" className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 transition">
            Login
          </a>
        )}
      </div>
    </header>
  );
};
