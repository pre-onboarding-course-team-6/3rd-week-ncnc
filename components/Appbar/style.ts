import styled from "styled-components";

export const AppbarContainer = styled.div`
    text-align: center;
    min-height: 93px;
    width: 100%;
`;
export const AppbarTitle = styled.h2`
    font-size: 15px;
    font-weight: 600;
    line-height: 18px;
    width: 100px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
`;

export const Container = styled.div<{ isBorder: boolean }>`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-bottom: ${(props) => (props.isBorder ? "1px solid #F1F3F4" : null)};
`;

export const DiviceInfoContainer = styled.div<{ isVisible: boolean }>`
    width: 100%;
    height: 44px;
    display: ${(props) => (props.isVisible ? "flex" : "hidden")};
`;
