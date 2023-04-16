import { atom } from "recoil";

export const navState = atom<"today" | "reply" | "yours">({
  key: "navState",
  default: "today",
});
