import styled from "styled-components";

export const Title = styled.p`
  color: white;
  text-shadow: 0px 0px 4px #ffffff;
  -webkit-text-stroke: 0.5px white;
  font-size: larger;
`;

export const InputForm = styled.form`
  display: flex;
  width: 50%;
  justify-content: center;
  flex-direction: column;
  row-gap: 15px;
`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  padding: 10px;
  border: none;
  outline: none;
  background: rgba(255, 255, 255, 0.2);
  color: white;

  &::placeholder {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
  }

  &:-webkit-autofill {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const GoSignUpBtn = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: white;
  font-size: 14px;
`;

export const LoginBtn = styled(GoSignUpBtn)`
  -webkit-text-stroke: 0.5px white;
  font-size: 16px;
`;
