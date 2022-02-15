import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import {
  ItemDetail, ItemOption,
} from "shared/const";
import { GetServerSideProps } from "next";
import ProductIntro from "components/ProductIntro";
import Appbar from "components/Appbar";
import { PencilIcon } from "@heroicons/react/outline";
import * as S from "./style";

type Props = {
    item: ItemDetail
}

const Item: React.FC<Props> = ({ item }) => {
  const router = useRouter();
  const [selected, setSelected] = useState(null);
  const [onBottom, setOnBottom] = useState(false);
  const {
    name, tip, warning, conCategory2, options, discountRate,
  } = item;
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
  const createData = (str: string) : string => {
    const temp = str.substring(0, 10);
    const result = temp.split("-").join(".");
    return result;
  };
  const createComma = (price: number) : string => {
    const txt = String(price);
    const result = `${txt.slice(0, 1)},${txt.slice(1, 4)}원`;
    return result;
  };
  const handleBuying = () => {
    if (selected || onBottom) {
      alert("현재는 구매할수 없습니다.");
    } else {
      getBottomSheet();
    }
  };
  return (
	<S.ItemsContainer>
		<Appbar iconName="HomeIcon" isBorder title="" menuOnClick={() => router.back()} />
		<ProductIntro
			id={item.id}
			imageUrl={item.imageUrl}
			name={name}
			originalPrice={item.originalPrice}
			minSellingPrice={item.minSellingPrice}
			conCategory2={conCategory2}
		/>
		<S.ItemsBody>
			<S.TextBox>
				tip
			</S.TextBox>
			<S.TextBox>
				{warning}
			</S.TextBox>
			<S.TextBox>
				{info}
			</S.TextBox>
		</S.ItemsBody>
		{selected && (
		<S.SelectedWrapper>
			<S.SelectedBox>
				{`${createData(selected.expireAt)} 까지 / ${createComma(selected.sellingPrice)}`}
				<S.IconButton
					onClick={() => getBottomSheet()}
				>
					<PencilIcon style={{ width: "20px" }} />
				</S.IconButton>
			</S.SelectedBox>
		</S.SelectedWrapper>
		)}
		<S.OptionBox isVisible={!selected && onBottom}>
			<S.OptionBoxTitle>옵션선택하기</S.OptionBoxTitle>
			<S.OptionBoxWrapper>
				{options.map((option, index) => (
					<S.OptionBoxBody key={index} onClick={() => handleOption(option)}>
						<S.InfoWrapper>
							<S.OptionInfo>
								<S.InfoTitle>유효기간</S.InfoTitle>
								<S.InfoDetail>{createData(option.expireAt)}</S.InfoDetail>
							</S.OptionInfo>
							<S.OptionInfo>
								<S.InfoTitle>할인가</S.InfoTitle>
								<S.InfoDetail>{createComma(option.sellingPrice)}</S.InfoDetail>
							</S.OptionInfo>
						</S.InfoWrapper>
						<S.DiscountRate>
							{discountRate}
							%
						</S.DiscountRate>

					</S.OptionBoxBody>
				))}
			</S.OptionBoxWrapper>
		</S.OptionBox>
		<S.BuyingButton
			disabled={!selected && onBottom}
			onClick={() => handleBuying()}
		>
			{selected || onBottom ? "구매하기" : "옵션선택하기" }
		</S.BuyingButton>
	</S.ItemsContainer>
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
