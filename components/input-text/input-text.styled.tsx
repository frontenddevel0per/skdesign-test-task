import styled from "styled-components";
import InputText from "./input-text.component";

export const Input = styled.input<{ error: boolean }>`
  width: 100%;
  background: #ffffff;
  border: 2px solid ${(props) => (props.error ? `#eb5e55` : `#e3e3e3`)};
  border-radius: 8px;
  outline: none;
  padding: 18px 15px;
  transition: 0.25s all ease;

  font-size: 14px;
  color: #353238;

  &:focus,
  &:active {
    border-color: ${(props) => (props.error ? `#ff0000` : `#0086a8`)};
  }
`;

export const NameLabel = styled.label<{ error: boolean }>`
  font-size: 12px;
  color: ${(props) => (props.error ? `#eb5e55` : `#828282`)};
  background: #ffffff;
  position: relative;
  top: 8px;
  left: 10px;
  padding: 0 5px;

  ${Input}:focus & {
    color: #0086a8;
  }
`;

export const ErrorLabel = styled.label`
  padding-left: 15px;
  font-size: 12px;
  color: #eb5e55;
`;

export const StyledInput = styled.div`
  min-width: 70px;
  width: 100%;
  font-family: "Open Sans", sans-serif;
`;
