/* eslint-disable no-redeclare */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { useRouter } from "next/router";
import Appbar from "components/Appbar";
import axios from "axios";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { ICategory, CategoryInfo } from "shared/const";
import HomeCategory from "components/HomeCategory";
import * as S from "./style";

type Props = {
    categories: ICategory[],
    categoryInfos: CategoryInfo[],
}

const Category: React.FC<Props> = ({ categories, categoryInfos }) => {
  const router = useRouter();
  const { id } = router.query;
  const currentCategory = categories.find((element) => element.id === Number(id));

  return (
	<div>
		<Appbar iconName="BackIcon" isBorder={false} title={currentCategory.name} menuOnClick={() => { router.back(); }} />
		<S.Wrapper>
			<S.Section>
				<S.FlexBox>
					<S.MenuWrapper>
						{categories.map(((category, index) => {
				  const { name } = category;
				  const categoryId = category.id;
				  return (
					<Link key={index} href={`${categoryId}`}>
						{categoryId === Number(id) ? (
							<S.CurrentMenu>
								{name}
							</S.CurrentMenu>
						) : (
							<S.Menu>{name}</S.Menu>
						)}
					</Link>
				  );
						}))}
					</S.MenuWrapper>
				</S.FlexBox>
			</S.Section>
			<div style={{ marginTop: "40px" }} />
			<HomeCategory category={categoryInfos} address="brands" />
		</S.Wrapper>
	</div>
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
