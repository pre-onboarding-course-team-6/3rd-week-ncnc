import styled from "styled-components";

export const Section = styled.section`
  display: flex;
`;

export const MainWrapper = styled.div`
  padding: 17px;
`;

export const ContentBoxWrapper = styled.div`
  float: left;
  width: 33%;
  padding: 1px;
  `;

export const ContentBox = styled.div`
  border-radius: 0.5rem;
  background-color: #fff;
  height: 8rem;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center
`;

export const Link = styled.a`
  margin- bottom: 0.25rem;
  text-decoration: none;
  color: #000000;
  transition: all 1s ease-in-out;
  &: hover{
    zoom: 1.1;
  }
`;

export const Image = styled.img`
  width: 43px;
  height: 43px;
  align-self: center;
`;

export const Title = styled.div`
  padding: 0 7px;
  margin-top: 5px;
  font-size: .875rem;
`;
