import React from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { authState } from "../../atoms/auth/auth";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { login, signup } from "@/apis/auth/index";
import { LOGIN_RESPONSE } from "@/types/auth";

export const AuthFeature = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(authState);
  const resetUser = useResetRecoilState(authState);

  const authLogin = useMutation(login, {
    onSuccess: (data: LOGIN_RESPONSE) => {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      setUser(data.user);
      alert(data.message);
      navigate("/");
    },
  });

  const authSignUp = useMutation(signup, {
    onSuccess: (data: LOGIN_RESPONSE) => {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      setUser(data.user);
      alert(data.message);
      navigate("/");
    },
  });

  const authLogout = () => {
    resetUser();
    localStorage.clear();
    navigate("/login");
  };

  return { user, setUser, authLogin, authSignUp, authLogout };
};
