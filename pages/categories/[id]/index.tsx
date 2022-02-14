/* eslint-disable no-redeclare */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { useRouter } from "next/router";
import Appbar from "components/Appbar";
import CategoryTile from "components/CategoryTile";
import axios from "axios";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { ICategory, CategoryInfo } from "shared/const";
import {
  HorizontalBox,
  BoxItem,
  CategoryInfoList,
  CategoryBody,
} from "./style";

type Props = {
    categories: ICategory[],
    categoryInfos: CategoryInfo[],
}

const Category: React.FC<Props> = ({ categories, categoryInfos }) => {
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
		<CategoryBody>
			<CategoryInfoList>
				{categoryInfos.map((info, index) => (
					<CategoryTile key={index} profileImgUrl={info.imageUrl} name={info.name}>
						{info.name}
					</CategoryTile>
          ))}
			</CategoryInfoList>
		</CategoryBody>
	</>
  );
};

export default Category;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const API_URL = "https://api2.ncnc.app/con-category1s";
  const DETAIL_URL = `https://api2.ncnc.app/con-category1s/${params.id}/nested`;
  const response = await axios(`${API_URL}`);
  const responseTwo = await axios(DETAIL_URL);
  const { conCategory1s } = response.data;
  const { conCategory1: { conCategory2s } } = responseTwo.data;
  return {
    props: {
      categories: conCategory1s,
      categoryInfos: conCategory2s,
    },
  };
};
