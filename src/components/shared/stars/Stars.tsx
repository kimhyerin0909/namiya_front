import React, { ReactElement, useEffect, useState } from "react";
import * as S from "./Stars.style";

export const Stars = () => {
  const [stars, setStars] = useState<ReactElement[]>([]);
  const { innerWidth, innerHeight } = window;

  const createStar = (id: number) => {
    const star = React.createElement("div", {
      className: "star",
      id: `star${id}`,
      style: {
        left: Math.random() * (innerWidth - 2) + "px",
        top: Math.random() * (innerHeight - 2) + "px",
      },
    });
    setStars((prev) => [...prev, star]);
  };

  const twinkleStar = () => {
    const starLocate = document.getElementById("star" + Math.floor(Math.random() * 30));
    if (starLocate !== null) {
      starLocate.style.opacity = "0";
      setTimeout(() => {
        starLocate.style.opacity = "1";
      }, 500);
    }
  };

  useEffect(() => {
    for (let i = 0; i < 30; i++) createStar(i);
  }, []);

  useEffect(() => {
    const twinkle = setInterval(() => {
      twinkleStar();
      twinkleStar();
      twinkleStar();
    }, 1000);
    return () => clearInterval(twinkle);
  }, []);

  useEffect(() => {
    console.log(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <S.StarBground>
      <S.Moon src="/assets/moon.svg" />
      {stars.map((s) => {
        return s;
      })}
    </S.StarBground>
  );
};
