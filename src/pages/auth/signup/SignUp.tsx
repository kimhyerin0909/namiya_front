import React from "react";
import { AuthLayout } from "@/components/layout/AuthLayout";
import * as S from "../Auth.style";
import { useNavigate } from "react-router-dom";
import { useInput } from "@/hooks/useInput";
import { AuthFeature } from "@/features/auth/auth.feature";

export const SignUp = () => {
  const navigate = useNavigate();
  const { authSignUp } = AuthFeature();
  const { value, onChange } = useInput({});

  return (
    <AuthLayout>
      <S.Title>회원가입을 위해 정보를 입력해 주세요.</S.Title>
      <S.InputForm>
        <S.Input
          name="email"
          type="email"
          placeholder="이메일을 입력해 주세요."
          onChange={onChange}
        />
        <S.Input
          name="nickname"
          type="text"
          placeholder="닉네임을 입력해 주세요."
          onChange={onChange}
        />
        <S.Input
          onChange={onChange}
          name="password"
          type="password"
          autoComplete="new-password"
          placeholder="비밀번호를 입력해 주세요."
        />
      </S.InputForm>
      <S.LoginBtn onClick={() => authSignUp.mutate(value)}>회원가입하기</S.LoginBtn>
      <S.GoSignUpBtn onClick={() => navigate("/login")}>뒤로</S.GoSignUpBtn>
    </AuthLayout>
  );
};
