import styled from "styled-components";

export const AppbarContainer = styled.nav`
    width: 100%;
    background-color: #FFFFFF;
`;
export const AppbarTitle = styled.h2`
    font-size: 15px;
    font-weight: 600;
    line-height: 18px;
    width: 100px;
    height: 26px;
    display: flex;
    self-items: center;
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
    position: relative;
    border-bottom: ${(props) => (props.isBorder ? "1px solid #F1F3F4" : null)};
`;

export const LeadIcon = styled.img`

`;

export const MenuButton = styled.button`
    padding: 10px 16px;
    position: absolute;
    left: 0;
`;
