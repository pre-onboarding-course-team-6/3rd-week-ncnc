import styled from "styled-components";

export const AppbarContainer = styled.div`
    padding: 10px;
    text-align: center;
    height: 93px;
    width: 375px;
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

export const Container = styled.div`
    width: 375px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const DiviceInfoContainer = styled.div<{ isVisible: boolean }>`
    width: 375px;
    height: 44px;
    display: ${(props) => (props.isVisible ? "flex" : "hidden")};
`;
