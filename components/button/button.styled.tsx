import styled from "styled-components";
import Button from "./button.component";

export const StyledButton = styled.button`
  @-webkit-keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  min-width: 156px;
  width: 100%;
  height: 50px;
  background: ${(props) => (props.disabled ? `#e3e3e3` : `#0086a8`)};
  border-radius: 8px;
  border: none;

  text-align: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  transition: 0.25s all ease;
  font-family: "Open Sans", sans-serif;
  color: ${(props) => (props.disabled ? `#828282` : `#fff`)};

  ${(props) =>
    !props.disabled &&
    `
    &:hover {
        background: #007693;
        cursor: pointer;
    }

    &:active {
        background: #00657e;
    }
  `}

  img {
    width: 30px;
    height: 30px;

    -webkit-animation: rotate-center 1.5s linear infinite both;
    animation: rotate-center 1.5s linear infinite both;
  }
`;
