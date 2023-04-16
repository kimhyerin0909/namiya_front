import React from "react";
import * as S from "./Navigation.style";
import { useRecoilState } from "recoil";
import { navState } from "@/atoms/navigation/navigation.atom";

export const Navigation = () => {
  const [nav, setNav] = useRecoilState(navState);

  const handleNav = (name: "today" | "reply" | "yours") => {
    setNav(name);
  };

  return (
    <S.Nav>
      <S.NavItem clicked={nav === "today"} onClick={() => handleNav("today")}>
        오늘 당신의 나야미
      </S.NavItem>
      <S.NavItem clicked={nav === "reply"} onClick={() => handleNav("reply")}>
        어제 누군가의 나야미
      </S.NavItem>
      <S.NavItem clicked={nav === "yours"} onClick={() => handleNav("yours")}>
        당신의 나야미
      </S.NavItem>
    </S.Nav>
  );
};
