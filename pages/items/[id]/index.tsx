/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { ItemDetail, ItemOption } from "shared/const";
import { GetServerSideProps } from "next";
import ProductIntro from "components/ProductIntro";
import Appbar from "components/Appbar";
import { PencilIcon } from "shared/icons";
import styled, { css } from "styled-components";

const TextBox = styled.p`
  white-space: pre-wrap;
`;

const BuyingButton = styled.button`
  max-width: 672px;
  width: 100%;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  background: #ff5757;
  height: 80px;
  ${(props) =>
    props.disabled &&
    css`
      background: #cccccc;
    `}
`;

const OptionBox = styled.div<{ isVisible: boolean }>`
  width: 100%;
  max-width: 672px;
  display: ${(props) => (props.isVisible ? "inline" : "none")};
  height: 200px;
`;

const ItemsContainer = styled.div`
  postion: relative;
  min-height: 100vh;
`;

const IconButton = styled.button``;

const OptionBoxTitle = styled.h4`
  background-color: #f1f3f4;
  padding: 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
`;

const OptionBoxBody = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  height: 60px;
  max-width: 672px;
  cursor: pointer;
  border-bottom: 1px solid #f1f3f4;
  background-color: #ffffff;
`;

const DiscountRate = styled.p`
  color: red;
  font-size: 16px;
  font-weight: 400;
  margin-right: 22.5px;
`;

const OptionInfo = styled.div`
  width: 100%;
  padding: 0px 17px;
  display: flex;
`;

const InfoTitle = styled.p`
  width: 44px;
  font-size: 12px;
  font-weight: 400;
  color: #808080;
  display: flex;
  align-items: center;
`;

const InfoWrapper = styled.div`
  width: 100%;
`;

const InfoDetail = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #000000;
  margin-left: 9px;
`;

const OptionBoxWrapper = styled.div`
  overflow: scroll;
  height: 183px;
`;

const SelectedBox = styled.div`
  margin: 0px 17px;
  display: flex;
  background-color: #f1f3f4;
  height: 30px;
  border-radius: 5px;
  padding: 8px 17px;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 500;
`;

const SelectedWrapper = styled.div`
  background-color: #ffffff;
  border-top: 1px solid #f1f3f4;
  width: 100%;
  padding: 17px 0px;
  max-width: 672px;
`;

const ItemsBody = styled.div`
  min-height: 700px;
  background-color: #ffffff;
`;

type Props = {
  item: ItemDetail;
};

const Item: React.FC<Props> = ({ item }) => {
  const router = useRouter();
  const [selected, setSelected] = useState(null);
  const [onBottom, setOnBottom] = useState(false);
  const { name, warning, conCategory2, options, discountRate } = item;
  const { conCategory1 } = conCategory2;
  const { info } = conCategory1;

  const handleOption = (option: ItemOption) => {
    setSelected(option);
    setOnBottom(!onBottom);
  };
  const getBottomSheet = () => {
    setSelected(null);
    setOnBottom(!onBottom);
  };
  const createData = (str: string): string => {
    const temp = str.substring(0, 10);
    const result = temp.split("-").join(".");
    return result;
  };
  const createComma = (price: number): string => {
    const txt = String(price);
    const result = `${txt.slice(0, 1)},${txt.slice(1, 4)}원`;
    return result;
  };
  const handleBuying = () => {
    if (selected || onBottom) {
      // eslint-disable-next-line no-alert
      alert("현재는 구매할수 없습니다.");
    } else {
      getBottomSheet();
    }
  };
  return (
    <ItemsContainer>
      <Appbar
        iconName="BackIcon"
        isBorder
        title=""
        menuOnClick={() => router.back()}
      />
      <ProductIntro
        id={item.id}
        imageUrl={item.imageUrl}
        name={name}
        originalPrice={item.originalPrice}
        minSellingPrice={item.minSellingPrice}
        conCategory2={conCategory2}
      />
      <ItemsBody>
        <TextBox>tip</TextBox>
        <TextBox>{warning}</TextBox>
        <TextBox>{info}</TextBox>
      </ItemsBody>
      {selected && (
        <SelectedWrapper>
          <SelectedBox>
            {`${createData(selected.expireAt)} 까지 / ${createComma(
              selected.sellingPrice
            )}`}
            <IconButton onClick={() => getBottomSheet()}>
              <PencilIcon />
            </IconButton>
          </SelectedBox>
        </SelectedWrapper>
      )}
      <OptionBox isVisible={!selected && onBottom}>
        <OptionBoxTitle>옵션선택하기</OptionBoxTitle>
        <OptionBoxWrapper>
          {options.map((option, index) => (
            <OptionBoxBody key={index} onClick={() => handleOption(option)}>
              <InfoWrapper>
                <OptionInfo>
                  <InfoTitle>유효기간</InfoTitle>
                  <InfoDetail>{createData(option.expireAt)}</InfoDetail>
                </OptionInfo>
                <OptionInfo>
                  <InfoTitle>할인가</InfoTitle>
                  <InfoDetail>{createComma(option.sellingPrice)}</InfoDetail>
                </OptionInfo>
              </InfoWrapper>
              <DiscountRate>{discountRate}%</DiscountRate>
            </OptionBoxBody>
          ))}
        </OptionBoxWrapper>
      </OptionBox>
      <BuyingButton
        disabled={!selected && onBottom}
        onClick={() => handleBuying()}
      >
        {selected || onBottom ? "구매하기" : "옵션선택하기"}
      </BuyingButton>
    </ItemsContainer>
  );
};

export default Item;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const BASE_URL = "https://api2.ncnc.app/con-items/";
  const response = await axios(BASE_URL + params.id);
  const { conItem } = response.data;
  return {
    props: {
      item: conItem,
    },
  };
};
