import styled from "styled-components";

export const HorizontalBox = styled.ul`
    display: flex;
    flex-direction: row;
    width: 375px;
    height: 42px;
    padding: 0px 17px;
    overflow-x: scroll;
    border-bottom: 1px solid #C4C4C4;
`;

export const BoxItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    padding:0px 10px;
    font-size: 14px;
    font-weight: 500;
    height: 40px;
    white-space: nowrap;
    margin-right: 13px;
    &:hover {
        color: #FF5757;
        cursor: pointer;
        border-bottom: 2px solid #FF5757;
    }

`;

export const CategoryBody = styled.div`
    width: 415px;
    display: flex;
    min-height: 100vh;
    align-items: start;
    justify-content: center;
    background-color: #F1F3F4;
`;

export const CategoryInfoList = styled.div`
    width: min-content;
    height: min-content;
    background-color: #F1F3F4;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    padding: 17px;
`;
