import { USER } from "@/types/auth/auth.type";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "authLocal",
  storage: localStorage,
});

export const authState = atom<USER>({
  key: "authState",
  default: {
    userId: 0,
    nickname: "",
    email: "",
    password: "",
  },
  effects_UNSTABLE: [persistAtom],
});
