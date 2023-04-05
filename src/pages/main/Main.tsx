import React, { useState } from "react";
import * as S from "./Main.style";

export const Main = () => {
  const [storeImg, setStoreImg] = useState("close");
  return (
    <div>
      <S.StoreBox>
        <S.Door onMouseOver={() => setStoreImg("open")} onMouseLeave={() => setStoreImg("close")}>
          {storeImg === "open" && <S.toMyStoreBtn>김혜린의 잡화점 들어가기</S.toMyStoreBtn>}
        </S.Door>
        <S.Store src={`/assets/store/${storeImg}-1.svg`} />
      </S.StoreBox>
    </div>
  );
};
