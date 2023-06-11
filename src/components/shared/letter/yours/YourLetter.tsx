import React from "react";
import * as S from "./YourLetter.style";
import { LetterFeature } from "@/features/letter/letter.feature";
import moment from "moment";

export const YourLetter = () => {
  const { letters } = LetterFeature();
  return (
    <S.LetterBg>
      {letters[0]?.data?.letters.map((d: any) => (
        <S.LetterArea>
          <span>{moment(d.sendAt).format("YYYY년 MM월 DD일")}</span>
        </S.LetterArea>
      ))}
    </S.LetterBg>
  );
};
