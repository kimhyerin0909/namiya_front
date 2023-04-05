import styled from "styled-components";

export const StoreBox = styled.div`
  position: absolute;
  display: flex;
  bottom: 5px;
  left: 4%;
  height: 500px;
  align-items: flex-end;
  justify-content: center;
  object-fit: contain;
`;

export const StoreImg = styled.img`
  height: 100%;
`;

export const Door = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 55px;
  z-index: 2;
  left: calc(4% + 120px);
  width: 120px;
  height: 145px;
`;

export const toMyStoreBtn = styled.button`
  width: 100%;
  font-size: 12px;
  word-break: keep-all;
  border: none;
  background: rgb(255, 255, 255, 0);
`;
