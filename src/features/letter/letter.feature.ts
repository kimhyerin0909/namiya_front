import React from "react";
import { getMyLetters, sendLetter } from "@/apis/letter/letter.api";
import { authState } from "@/atoms/auth/auth.atom";
import { LETTER_KEY } from "@/constants/keys/letter.key";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useRecoilValue } from "recoil";

export const LetterFeature = () => {
  const user = useRecoilValue(authState);
  const queryClient = useQueryClient();
  const getLetters = useQuery([LETTER_KEY.GET_MY_LETTERS], () => getMyLetters(user.userId));

  const sendTodayLetter = useMutation(sendLetter, {
    onSuccess(data) {
      alert(data.message);
      queryClient.invalidateQueries([LETTER_KEY.GET_MY_LETTERS]);
    },
  });

  return { getLetters, sendTodayLetter };
};
