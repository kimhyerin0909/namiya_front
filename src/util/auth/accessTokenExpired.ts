import { refreshTokenHeader } from "./headers";
import customAxios from "@/apis/customAxios";

export const accessTokenExpired = async () => {
  const data = (await customAxios.get("/auth/reissuanceToken", refreshTokenHeader())).data;
  localStorage.setItem("accessToken", data.accessToken);
};
