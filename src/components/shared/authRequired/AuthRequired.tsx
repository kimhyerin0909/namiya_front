import { authState } from "@/atoms/auth/auth.atom";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";

export const AuthRequired = ({ children }: { children: React.ReactNode }) => {
  const auth = useRecoilValue(authState);
  const location = useLocation();

  return auth.email ? <>{children}</> : <Navigate to="/login" state={{ from: location }} replace />;
};
