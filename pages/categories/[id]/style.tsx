import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;

export const Section = styled.section`
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
`;

export const FlexBox = styled.div`
    width: 100%;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    height: 41px;
    background-color: #fff;
    font-size: 16px;
`;

export const MenuWrapper = styled.div`
    border-bottom: 1px solid #ccc;
    padding: 0px 10px;
`;

export const Menu = styled.button`
    padding: 10px 14px;
    height: 41px;
    box-shadow: none!important;
    cursor: pointer;
    border: none;
    background-color: #fff;
    color: #333;
`;

export const BoxItem = styled.button`
    padding: 10px 14px;
    height: 41px;
    cursor: pointer;
    border: none;
    background-color: #fff;
    color: #333;
    font-size: 16px;
`;

export const CurrentMenu = styled.button`
    color: #f75656;
    font-size: 16px;
    border-bottom: 2px solid #f75656;
    padding: 10px 14px 9px 14px;
    box-shadow: none!important;
    cursor: pointer;
    background-color: #fff;
`;
