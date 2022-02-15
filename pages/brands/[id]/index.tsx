/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
import axios from "axios";
import React from "react";
import { GetServerSideProps } from "next";
import Appbar from "components/Appbar";
import { Item } from "shared/const";
import ProductIntro from "components/ProductIntro";
import { useRouter } from "next/router";
import { BrandTopContainer } from "./style";

type Props = {
    title: string
    items: Item[]
}

const Brand: React.FC<Props> = ({ title, items }) => {
  const isBorder = true;
  const router = useRouter();
  return (
	<>
		<Appbar iconName="HomeIcon" isBorder={isBorder} title={title} menuOnClick={() => { router.back(); }} />
		<BrandTopContainer>
			{items && items.length}
			개의 상품
		</BrandTopContainer>
		{items.map((item, index) => (
			<ProductIntro
				key={index}
				id={item.id}
				imageUrl={item.imageUrl}
				name={item.name}
				originalPrice={item.originalPrice}
				minSellingPrice={item.minSellingPrice}
			/>
		))}
	</>
  );
};

export default Brand;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const API_URL = "https://api2.ncnc.app/con-category1s";
  const response = await axios(API_URL);
  const { conCategory1s } = response.data;
  const idList = conCategory1s.map((element) => (element.id));
  let content = [];
  const brandList = await Promise.all(idList.map(async (id: number) => {
    const res = await axios(`https://api2.ncnc.app/con-category1s/${id}/nested`);
    const { conCategory1: conCategory2s } = res.data;
    const result = conCategory2s.conCategory2s;
    content = [...content, ...result];
    return result;
  }));
  const currentBrand = content.find((element) => element.id === Number(params.id));
  console.log(brandList);
  return {
    props: {
      title: currentBrand.name,
      items: currentBrand.conItems,
    },
  };
};
