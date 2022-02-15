import React from "react";
import { ProductProps, ConCategory } from "shared/type";
import { SOON_API, CON_CATEGORY } from "shared/constant";
import Appbar from "components/Appbar";
import HomeCategory from "components/HomeCategory";
import ProductList from "components/ProductList";
import CompanyContent from "components/CompanyContent";
import Banner from "components/Banner";
import axios from "axios";
import { GetServerSideProps } from "next";

type Props = {
  lists: ProductProps[],
  category: ConCategory[]
}

const Index: React.FC<Props> = ({ lists, category }) => (
	<div>
		<Appbar title="니콘내콘" isBorder />
		<Banner />
		<HomeCategory category={category} address="categories" />
		<ProductList lists={lists} />
		<CompanyContent />
	</div>
);

export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
  const soonResponse = await axios(SOON_API);
  const categoryResponse = await axios(CON_CATEGORY);
  const { conItems } = soonResponse.data;
  const { conCategory1s } = categoryResponse.data;
  return {
    props: {
      lists: conItems,
      category: conCategory1s,
    },
  };
};
