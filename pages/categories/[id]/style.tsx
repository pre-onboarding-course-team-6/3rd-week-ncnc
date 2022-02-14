import styled from "styled-components";

export const HorizontalBox = styled.ul`
    display: flex;
    flex-direction: row;
`;

export const BoxItem = styled.li`
    white-space: nowrap;
    padding: 10px 15px;
    &:hover {
        color: #f75656;
        cursor: pointer;
        border-bottom: 2px solid #f75656;
    }
`;
