import React from "react";
import { AuthLayout } from "@/components/layout/AuthLayout";
import * as S from "../Auth.style";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout>
      <S.Title>회원가입을 위해 정보를 입력해 주세요.</S.Title>
      <S.InputForm>
        <S.Input type="email" placeholder="이메일을 입력해 주세요." />
        <S.Input type="text" placeholder="닉네임을 입력해 주세요." />
        <S.Input
          type="password"
          autoComplete="new-password"
          placeholder="비밀번호를 입력해 주세요."
        />
        <S.Input
          type="password"
          autoComplete="new-password"
          placeholder="비밀번호를 한 번 더 입력해 주세요."
        />
      </S.InputForm>
      <S.LoginBtn>회원가입하기</S.LoginBtn>
      <S.GoSignUpBtn onClick={() => navigate("/login")}>뒤로</S.GoSignUpBtn>
    </AuthLayout>
  );
};
