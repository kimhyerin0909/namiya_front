import { getMyLetters } from "@/apis/letter/letter.api";
import { authState } from "@/atoms/auth/auth.atom";
import { LETTER_KEY } from "@/constants/keys/letter.key";
import React from "react";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";

export const LetterFeature = () => {
  const user = useRecoilValue(authState);
  const getLetters = useQuery([LETTER_KEY.GET_MY_LETTERS], () => getMyLetters(user.userId));
  const myLetters = getLetters.data;

  return { myLetters };
};
