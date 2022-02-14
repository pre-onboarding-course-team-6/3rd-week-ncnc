import styled from "styled-components";

export const TileContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 112px;
    height: 94px;
    border-radius: 5px;
    cursor: pointer;
`;

export const ProfileImage = styled.img`
    width: 36px;
    height: 36px;
    margin-bottom: 15px;
`;

export const TileName = styled.p`
    width: 94px;
    height: 13px;
    font-size: 12px;
    text-align: center;
`;
