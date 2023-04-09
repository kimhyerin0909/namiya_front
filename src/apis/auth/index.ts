import { LOGIN_USER } from "@/types/auth";
import customAxios from "../customAxios";

export const login = async (request: LOGIN_USER) => {
  return (await customAxios.post("/auth/login", request)).data;
};
