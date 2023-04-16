import React from "react";
import { AuthLayout } from "@/components/layout/AuthLayout";
import * as S from "../Auth.style";
import { useNavigate } from "react-router-dom";
import { AuthFeature } from "@/features/auth/auth.feature";
import { useInput } from "@/hooks/useInput";

export const Login = () => {
  const navigate = useNavigate();
  const { authLogin } = AuthFeature();
  const { value, onChange } = useInput({});

  return (
    <AuthLayout>
      <S.Title>당신에게도 나누고 싶은 이야기가 있나요?</S.Title>
      <S.InputForm>
        <S.Input
          name="email"
          onChange={onChange}
          type="email"
          placeholder="이메일을 입력해 주세요."
        />
        <S.Input
          name="password"
          onChange={onChange}
          type="password"
          autoComplete="new-password"
          placeholder="비밀번호를 입력해 주세요."
        />
      </S.InputForm>
      <S.LoginBtn onClick={() => authLogin.mutate(value)}>로그인하기</S.LoginBtn>
      <S.GoSignUpBtn onClick={() => navigate("/signup")}>회원가입하러 가기</S.GoSignUpBtn>
    </AuthLayout>
  );
};
