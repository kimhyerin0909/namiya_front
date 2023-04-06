import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  width: 90%;
  justify-content: space-between;
  .active {
    color: white;
  }
`;

export const NavItem = styled.button<{ clicked: boolean }>`
  background: rgba(255, 255, 255, 0);
  border: none;
  font-size: 13px;
  color: ${(props) => (props.clicked ? "white" : "rgba(255, 255, 255, 0.6)")};
  text-decoration: none;
  transition: all 0.2s ease;
`;
