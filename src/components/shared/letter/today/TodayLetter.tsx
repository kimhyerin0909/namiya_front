import React, { useEffect } from "react";
import * as S from "./TodayLetter.style";
import { Button } from "../../button/Button";
import { useInput } from "@/hooks/useInput";
import { LetterFeature } from "@/features/letter/letter.feature";
import { useRecoilValue } from "recoil";
import { authState } from "@/atoms/auth/auth.atom";

export const TodayLetter = () => {
  const user = useRecoilValue(authState);
  const { value, onChange, setValue } = useInput("");
  const { sendTodayLetter, letters } = LetterFeature();

  const sendLetter = () => {
    const date = new Date();
    const currentTime = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    sendTodayLetter.mutate({
      userId: user.userId,
      request: { ...value, sendAt: currentTime, previousId: null },
    });

    setValue("");
  };

  return (
    <>
      <S.LetterBg>
        {letters[1]?.data?.isExist ? (
          <S.Message>오늘의 나야미는 우체통에 있어요.</S.Message>
        ) : (
          <>
            <span>To. 누군가에게</span>
            <S.LetterArea name="content" spellCheck="false" onChange={onChange} />
          </>
        )}
      </S.LetterBg>
      {!letters[1]?.data?.isExist && (
        <Button btnColor={true} onClick={sendLetter}>
          우체통에 넣기
        </Button>
      )}
    </>
  );
};
