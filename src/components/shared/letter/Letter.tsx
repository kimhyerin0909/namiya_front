import React from "react";
import * as S from "./Letter.style";
import { Button } from "../button/Button";

export const Letter = () => {
  return (
    <>
      <S.LetterBg>
        <span>To. 누군가에게</span>
        <S.LetterArea spellCheck="false" />
      </S.LetterBg>
      <Button btnColor={true}>우체통에 넣기</Button>
    </>
  );
};
