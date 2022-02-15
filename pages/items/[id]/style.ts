import styled, { css } from "styled-components";

export const TextBox = styled.p`
    white-space: pre-wrap;
`;

export const BuyingButton = styled.button`
    max-width: 672px;
    width:100%;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 500;
    background: #FF5757;
    height: 80px;
    ${(props) => props.disabled && css`
     background: #CCCCCC;
  `}
`;

export const OptionBox = styled.div<{ isVisible: boolean }>`
    width: 100%;
    max-width: 672px;
    display: ${(props) => (props.isVisible ? "inline" : "none")};
    height: 200px;
    
`;

export const ItemsContainer = styled.div`
    postion: relative;
    min-height: 100vh;
`;

export const IconButton = styled.button`

`;

export const OptionBoxTitle = styled.h4`
    background-color: #F1F3F4;
    padding: 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
`;

export const OptionBoxBody = styled.div`
    padding: 5px;
    display:flex;
    align-items: center;
    height: 60px;
    max-width: 672px;
    cursor: pointer;
    border-bottom: 1px solid #F1F3F4;
`;

export const DiscountRate = styled.p`
  color: red;
  font-size: 16px;
  font-weight: 400;
  margin-right: 22.5px;
`;

export const OptionInfo = styled.div`
    width:100%;
    padding: 0px 17px;
    display: flex;
`;

export const InfoTitle = styled.p`
    width: 44px;
    font-size: 12px;
    font-weight: 400;
    color: #808080;
    display: flex;
    align-items: center;
`;

export const InfoWrapper = styled.div`
    width: 100%;
`;

export const InfoDetail = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: #000000;
    margin-left: 9px;
`;

export const OptionBoxWrapper = styled.div`
    overflow: scroll;
    height: 183px;
`;

export const SelectedBox = styled.div`
    margin: 0px 17px;
    display: flex;
    background-color: #F1F3F4;
    height: 30px;
    border-radius: 5px;
    padding: 8px 17px;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 500;
`;

export const SelectedWrapper = styled.div`
    border-top: 1px solid #F1F3F4;
    width: 100%;
    padding: 17px 0px;
    max-width: 672px;
`;

export const ItemsBody = styled.div`
    min-height: 700px;
`;

export const IconImg = styled.img`
    
`;
