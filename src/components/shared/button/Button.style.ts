import { colors } from "@/constants/colors";
import styled from "styled-components";

export const BtnBox = styled.div`
  width: 30%;
  height: 60px;
  align-self: flex-end;
`;

export const Btn = styled.button<{ bgColor: boolean }>`
  cursor: pointer;
  width: 100%;
  height: 50px;
  color: white;
  border: none;
  background-color: ${({ bgColor }) => (bgColor ? colors.RED : colors.GREEN)};
  border-bottom: 5px solid ${({ bgColor }) => (bgColor ? colors.RED_DARK : colors.GREEN_DARK)};

  &:hover {
    height: 45px;
    margin-top: 5px;
    border-bottom: none;
  }
`;
