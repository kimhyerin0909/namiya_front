import { colors } from "@/constants/colors.constant";
import styled from "styled-components";

export const LetterBg = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  padding: 5%;
  aspect-ratio: 1 /1;
  background-color: ${colors.LIGHT_YELLOW};
`;

export const LetterArea = styled.textarea`
  z-index: 2;
  width: 100%;
  height: 90%;
  font-size: 15px;
  background: rgba(255, 255, 255, 0);
  resize: none;
  outline: none;
  border: none;

  background-attachment: local;
  background-image: repeating-linear-gradient(
    ${colors.LIGHT_YELLOW},
    ${colors.LIGHT_YELLOW} 40px,
    ${colors.YELLOW_DARK} 25px,
    ${colors.YELLOW_DARK} 41px
  );
  line-height: 41px;
`;
