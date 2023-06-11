import { colors } from "@/constants/colors.constant";
import styled from "styled-components";

export const LetterBg = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
  aspect-ratio: 1 /1;
`;

export const LetterArea = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${colors.LIGHT_YELLOW};
`;
