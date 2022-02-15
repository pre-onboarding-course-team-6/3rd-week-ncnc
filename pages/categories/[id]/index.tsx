/* eslint-disable react/no-array-index-key */
import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Appbar from "components/Appbar";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { ICategory, CategoryInfo } from "shared/const";
import HomeCategory from "components/HomeCategory";
import styled from "styled-components";
import Head from "next/head";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Section = styled.section`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const FlexBox = styled.div`
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

const MenuWrapper = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 0px 10px;
`;

const Menu = styled.button`
  padding: 10px 14px;
  height: 41px;
  cursor: pointer;
  border: none;
  background-color: #fff;
  color: #333;
  font-size: 16px;
`;

const CurrentMenu = styled.button`
  color: #f75656;
  font-size: 16px;
  border-bottom: 2px solid #f75656;
  padding: 10px 14px 8px 14px;
  cursor: pointer;
  background-color: #fff;
`;

type Props = {
  categories: ICategory[];
  categoryInfos: CategoryInfo[];
};

const Category: React.FC<Props> = ({ categories, categoryInfos }) => {
  const router = useRouter();
  const { id } = router.query;
  const currentCategory = categories.find(
    (element) => element.id === Number(id)
  );
	const currentCategoryName = currentCategory.name;

  return (
	<>
		<Head>
      <meta property="og:title" content={`더블엔씨 과제 ${currentCategoryName} 카테고리 페이지`} />
      <meta property="og:description" content={`더블엔씨 과제 ${currentCategoryName} 카테고리 페이지`} />
      <meta name="description" content={`더블엔씨 과제 ${currentCategoryName} 카테고리 페이지`} />
      <meta name="keywords" content={currentCategoryName} />
    </Head>
		<Appbar iconName="BackIcon" isBorder={false} title={currentCategoryName} menuOnClick={() => { router.back(); }} />
		<Wrapper>
			<Section className="CategoryMenu">
				<FlexBox>
					<MenuWrapper>
						{categories.map(((category, index) => {
				  const { name } = category;
				  const categoryId = category.id;
				  return (
					<Link key={index} href={`${categoryId}`}>
						{categoryId === Number(id) ? (
							<CurrentMenu>
								{name}
							</CurrentMenu>
						) : (
							<Menu>{name}</Menu>
						)}
					</Link>
				  );
						}))}
					</MenuWrapper>
				</FlexBox>
			</Section>
			<HomeCategory category={categoryInfos} address="brands" />
		</Wrapper>
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
  const {
    conCategory1: { conCategory2s },
  } = responseTwo.data;
  return {
    props: {
      categories: conCategory1s,
      categoryInfos: conCategory2s,
    },
  };
};
