import { colors } from "@/constants/colors";
import styled from "styled-components";

export const StarBground = styled.div<{ location: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: ${(props) => (props.location ? colors.AUTH_BACKGROUND : colors.MAIN_BACKGROUND)};
  .star {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 100%;
    box-shadow: 0px 0px 4px 1px #fcf2bf;
    background-color: ${colors.YELLOW};
    transition: opacity 0.5s ease;
  }
`;

export const Moon = styled.img`
  position: absolute;
  top: 10%;
  left: 5%;
  width: 60px;
`;
