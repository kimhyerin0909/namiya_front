import React, { useState } from "react";
import * as S from "./Store.style";

export const Store = () => {
  const [storeImg, setStoreImg] = useState("close");

  return (
    <S.StoreBox>
      <S.Door onMouseOver={() => setStoreImg("open")} onMouseLeave={() => setStoreImg("close")}>
        {storeImg === "open" && <S.toMyStoreBtn>김혜린의 잡화점 들어가기</S.toMyStoreBtn>}
      </S.Door>
      <S.StoreImg src={`/assets/store/${storeImg}-1.svg`} />
    </S.StoreBox>
  );
};
