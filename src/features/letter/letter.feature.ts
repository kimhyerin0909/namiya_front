import React from "react";
import { getMyLetters, getReplyLetter, getTodayLetter, sendLetter } from "@/apis/letter/letter.api";
import { authState } from "@/atoms/auth/auth.atom";
import { LETTER_KEY } from "@/constants/keys/letter.key";
import { useMutation, useQueries, useQuery, useQueryClient } from "react-query";
import { useRecoilValue } from "recoil";

export const LetterFeature = () => {
  const user = useRecoilValue(authState);
  const queryClient = useQueryClient();

  const letters = useQueries([
    {
      queryKey: [LETTER_KEY.GET_MY_LETTERS],
      queryFn: () => getMyLetters(user.userId),
      onSuccess: () => {},
    },
    {
      queryKey: [LETTER_KEY.GET_TODAY_LETTER],
      queryFn: () => getTodayLetter(user.userId),
    },
    {
      queryKey: [LETTER_KEY.GET_REPLY_LETTER],
      queryFn: () => getReplyLetter(user.userId),
    },
  ]);

  const sendTodayLetter = useMutation(sendLetter, {
    onSuccess(data) {
      alert(data.message);
      queryClient.invalidateQueries([LETTER_KEY.GET_TODAY_LETTER]);
    },
  });

  return { letters, sendTodayLetter };
};
