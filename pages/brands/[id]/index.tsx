/* eslint-disable react/no-array-index-key */
import React from "react";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Appbar from "components/Appbar";
import ProductIntro from "components/ProductIntro";
import { Item } from "shared/const";
import styled from "styled-components";

const BrandTopContainer = styled.div`
    padding: 10px;
    display: flex;
    background-color: #fff;
    top: 0;
    border-bottom: 1px solid #F1F3F4;
`;

type Props = {
  title: string;
  items: Item[];
};

const Brand: React.FC<Props> = ({ title, items }) => {
  const isBorder = true;
  const router = useRouter();
  return (
    <>
      <Head>
          <meta property="og:title" content={`더블엔씨 과제 ${title} 브랜드 페이지`} />
          <meta property="og:description" content={`더블엔씨 과제 ${title} 브랜드 페이지`} />
          <meta name="description" content={`더블엔씨 과제 ${title} 브랜드 페이지`} />
          <meta name="keywords" content={title} />
      </Head>
      <Appbar
        iconName="ChevronLeftIcon"
        isBorder={isBorder}
        title={title}
        menuOnClick={() => {
          router.back();
        }}
      />
      <BrandTopContainer>{items && items.length} 개의 상품</BrandTopContainer>
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
  const idList = conCategory1s.map((element) => element.id);
  let content = [];
  const brandList = await Promise.all(
    idList.map(async (id: number) => {
      const res = await axios(
        `https://api2.ncnc.app/con-category1s/${id}/nested`
      );
      const { conCategory1: conCategory2s } = res.data;
      const result = conCategory2s.conCategory2s;
      content = [...content, ...result];
      return result;
    })
  );
  const currentBrand = content.find(
    (element) => element.id === Number(params.id)
  );
  console.log(brandList);
  return {
    props: {
      title: currentBrand.name,
      items: currentBrand.conItems,
    },
  };
};
