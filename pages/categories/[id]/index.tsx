/* eslint-disable no-redeclare */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { useRouter } from "next/router";
import Appbar from "components/Appbar";
import axios from "axios";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { HorizontalBox, BoxItem } from "./style";

// const title = "카페";

type Props = {
    categories: Category[],
}

interface Category {
    id: number;
    name: string;
    discountRate: number;
    imageUrl: string;
}

const Category: React.FC<Props> = ({ categories }) => {
  const router = useRouter();
  const { id } = router.query;
  const currentCategory = categories.find((element) => element.id === Number(id));
  return (
	<>
		<Appbar title={currentCategory.name} />
		<HorizontalBox>
			{categories.map(((category, index) => (
				<Link key={index} href={`${category.id}`}>
					<BoxItem>
						{category.name}
					</BoxItem>
				</Link>
			)))}
		</HorizontalBox>
		<p>
			현재 위치:
			{id}
		</p>
	</>
  );
};

export default Category;

export const getServerSideProps: GetServerSideProps = async () => {
  const API_URL = "https://api2.ncnc.app/con-category1s";
  const response = await axios(`${API_URL}`);
  return {
    props: {
      categories: response.data.conCategory1s,
    },
  };
};
