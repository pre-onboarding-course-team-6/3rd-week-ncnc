/* eslint-disable react/no-array-index-key */
import React from "react";
import { useRouter } from "next/router";
import Appbar from "components/Appbar";
import axios from "axios";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { ICategory, CategoryInfo } from "shared/const";
import HomeCategory from "components/HomeCategory";
import styled from "styled-components";

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

  return (
    <div>
      <Appbar
        iconName="BackIcon"
        isBorder={false}
        title={currentCategory.name}
        menuOnClick={() => {
          router.back();
        }}
      />
      <Wrapper>
        <Section>
          <FlexBox>
            <MenuWrapper>
              {categories.map((category, index) => {
                const { name } = category;
                const categoryId = category.id;
                return (
                  <Link key={index} href={`${categoryId}`}>
                    {categoryId === Number(id) ? (
                      <CurrentMenu>{name}</CurrentMenu>
                    ) : (
                      <Menu>{name}</Menu>
                    )}
                  </Link>
                );
              })}
            </MenuWrapper>
          </FlexBox>
        </Section>
        <div style={{ marginTop: "40px" }} />
        <HomeCategory category={categoryInfos} address="brands" />
      </Wrapper>
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
