import { header } from "@/util/auth/headers";
import customAxios from "../customAxios";

export const getMyLetters = async (userId: number) => {
  return (await customAxios.get(`/letter/${userId}`, header())).data;
};
