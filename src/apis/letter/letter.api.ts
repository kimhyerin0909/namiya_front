import { header } from "@/util/auth/headers";
import customAxios from "../customAxios";
import { LETTER_RESPONSE } from "@/types/letter/letter.type";

export const getMyLetters = async (userId: number) => {
  return (await customAxios.get(`/letter/${userId}`, header())).data;
};

export const getTodayLetter = async (userId: number) => {
  return (await customAxios.get(`/letter/today/${userId}`, header())).data;
};

export const sendLetter = async (request: LETTER_RESPONSE) => {
  return (await customAxios.post(`/letter/send/${request.userId}`, request.request, header())).data;
};
