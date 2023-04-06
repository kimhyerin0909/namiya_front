import React, { ButtonHTMLAttributes } from "react";
import * as S from "./Button.style";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnColor: boolean;
}

export const Button = (props: BtnProps) => {
  return (
    <S.BtnBox>
      <S.Btn bgColor={props.btnColor} {...props} />
    </S.BtnBox>
  );
};
