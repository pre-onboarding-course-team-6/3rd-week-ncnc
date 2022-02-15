import styled from "styled-components";

export const Section = styled.section`
  padding: 20px 0 20px 20px;
  display: flex;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SmallText = styled.a`
  font-size: 12px;
  color: #333333;
  padding: 5px;
  cursor: pointer;
  text-decoration: none;
`;

export const CompanyInfoBtn = styled.button`
  padding: 10px 5px 5px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;

export const Svg = styled.svg`
  margin: 2px;
  width: 14px;
  height: 8px;
  fill: none;
  xmlns: http://www.w3.org/2000/svg;
`;

export const CompanyInfo = styled.div`
  line-height: 1.7;
  border-top: 1px solid #eee;
  font-size: 11px;
  color: #666;
  font-weight: 300;
`;

export const EmailLink = styled.a`
  text-decoration: none;
  color: #000000;
`;
