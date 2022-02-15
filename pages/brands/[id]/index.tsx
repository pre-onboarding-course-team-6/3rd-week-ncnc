/* eslint-disable react/jsx-key */
import axios from "axios";
import React from "react";
import { GetServerSideProps } from "next";
import Appbar from "components/Appbar";
import ItemTile from "components/ItemTile";
import { Item } from "shared/const";
import { BrandTopContainer } from "./style";
import ProductIntro from "components/ProductIntro";

type Props = {
    title: string
    items: Item[]
}

const Brand: React.FC<Props> = ({ title, items }) => {
  const isBorder = true;
  return (
	<>
		<Appbar isBorder={isBorder} title={title} />
		<BrandTopContainer>
			{items && items.length}
			{" "}
			개의 상품
		</BrandTopContainer>
		{items.map((item, index) => (
			<ProductIntro name={item.name} imageUrl={item.imageUrl} id={item.id} />
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
