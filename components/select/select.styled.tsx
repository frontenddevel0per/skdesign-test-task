import styled from "styled-components";

export const NameLabel = styled.label<{ isOpened: boolean }>`
  font-size: ${(props) => (props.isOpened ? `12px` : `14px`)};
  color: ${(props) => (props.isOpened ? `#0086a8` : `#353238`)};
  background: #ffffff;
  padding: 0px 5px;
  position: relative;
  top: ${(props) => (props.isOpened ? `-14px` : `12px`)};
  left: ${(props) => (props.isOpened ? `-10px` : `-5px`)};
  transition: 0.25s all ease;
  cursor: pointer;
`;

export const DropDown = styled.div<{ isOpened: boolean }>`
  display: ${(props) => (props.isOpened ? `block` : `none`)};
  z-index: 5;
  position: relative;
  background: #ffffff;
  border: 2px solid #e3e3e3;
  box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
  border-radius: 8px;
`;

export const DropDownItem = styled.div`
  padding: 5px 15px;
  color: #353238;
  font-size: 14px;
  cursor: pointer;
  border-bottom: 2px solid #e3e3e3;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #fafafa;
  }
`;

export const Text = styled.p`
  margin: 0;
`;

export const SelectWrapper = styled.div<{ isOpened: boolean }>`
  min-width: 200px;
  width: 100%;
  height: 51px;
  font-family: "Open Sans", sans-serif;
  padding: 0px 15px;
  background: #ffffff;
  border: 2px solid ${(props) => (props.isOpened ? `#0086A8` : `#E3E3E3`)};
  border-radius: 8px;
  transition: 0.25s all ease;
  cursor: pointer;
  position: relative;

  img {
    position: sticky;
    margin-bottom: -12px;
    left: 1800px;
    transform: rotate(${(props) => (props.isOpened ? `0deg` : `-180deg`)});
    transition: 0.25s all ease;
  }
`;
