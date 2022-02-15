import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
`;

export const ListBox = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;
  right: 26px;
`;

export const Point = styled.button<{value: number, state: number}>`
  background-color: ${(props) => (props.value === props.state ? "#333333" : "#ffffff")};
  padding: 8px;
  margin: 4px;
  border-radius: 50%;
`;

export const MoveArrow = styled.div`
  width: 24px;
  height: 24px;
  background-color: #dfdfdf;
  padding: 20px 4px;
  border-radius: 24px;
  opacity: 0.9;
  position: absolute;
  top: 40%;
  z-index: 1;
  cursor: pointer;
`;
