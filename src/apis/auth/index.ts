import { USER } from "@/types/auth";
import customAxios from "../customAxios";

export const login = async (request: USER) => {
  return (await customAxios.post("/auth/login", request)).data;
};

export const signup = async (request: USER) => {
  return (await customAxios.post("/auth/signup", request)).data;
};
