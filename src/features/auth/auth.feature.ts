import { login } from "@/apis/auth";
import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

export const AuthFeature = () => {
  const navigate = useNavigate();
  const authLogin = useMutation(login, {
    onSuccess: (data) => {
      alert(data.message);
      navigate("/");
    },
  });
  return authLogin;
};
