import React, { useState } from "react";
import * as S from "./ReplyLetter.style";
import { Button } from "../../button/Button";
import { LetterFeature } from "@/features/letter/letter.feature";
import { useRecoilValue } from "recoil";
import { authState } from "@/atoms/auth/auth.atom";
import { useInput } from "@/hooks/useInput";

export const ReplyLetter = () => {
  const user = useRecoilValue(authState);
  const { value, setValue, onChange } = useInput("");
  const { letters, sendTodayLetter } = LetterFeature();
  const [mode, setMode] = useState<"view" | "reply">("view");

  const sendLetter = () => {
    const date = new Date();
    const currentTime = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    sendTodayLetter.mutate({
      userId: user.userId,
      request: { ...value, sendAt: currentTime, previousId: letters[2].data.letter.letterId },
    });

    setValue("");
  };

  return (
    <>
      <S.LetterBg>
        {mode === "view" ? (
          <>
            <span>To. {user.nickname}님에게</span>
            <S.LetterArea
              dangerouslySetInnerHTML={{
                __html: letters[2].data.letter.content.replace(/\n/gi, "<br>"),
              }}
            />
          </>
        ) : (
          <>
            <span>To. 누군가에게</span>
            <S.LetterInput onChange={onChange} />
          </>
        )}
      </S.LetterBg>
      {mode === "view" && (
        <Button btnColor={false} children="답장하기" onClick={() => setMode("reply")} />
      )}
      {mode === "reply" && (
        <Button onClick={sendLetter} btnColor={false} children="우유 상자에 넣기" />
      )}
    </>
  );
};
