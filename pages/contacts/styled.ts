import styled from "styled-components";

export const Section = styled.section`
  padding: 17px;
  box-sizing: border-box;
  background-color: #ffffff;
`;

export const Kakao = styled.a`
  display: flex;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  color: rgb(255, 87, 87); 
  margin: 25px 0px;
  padding: 1rem 0;
  border: 1px solid rgb(255, 87, 87);
  border-radius: 0.5rem;
`;

export const TabWrapper = styled.div`
  display: flex;
`;

export const Tab = styled.button<{isTabSelected:string, value: string}>`
  text-align: center;
  padding: 1rem;
  flex-grow: 1;
  cursor: pointer;
  ${(props) => (props.isTabSelected === props.value && (
    "color: #f75656;border-bottom: 2px solid #f75656;"
  ))}
`;

export const FaqWrapper = styled.div`
  border-bottom: 2px solid #ebeced;
`;

export const Ask = styled.button`
  font-size: 16px;
  font-weight: 500;
  padding: 17px;
  width: 100%;
  display: flex;
`;

export const Q = styled.span`
  margin-right: 10px;
  color: rgb(255, 87, 87)
`;

export const Question = styled.span`
  flex-grow: 1;
  text-align: left;
`;

export const AnswerWrapper = styled.div`
  background-color: #eeeeee;
  padding: 17px;
`;

export const P = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  line-height: 1.3;
`;
