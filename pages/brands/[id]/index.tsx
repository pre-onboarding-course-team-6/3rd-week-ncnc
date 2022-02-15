import axios from "axios";
import { Item } from "shared/type";
import React from "react";
import { GetServerSideProps } from "next";

type Props = {
    items: Item[],
}

const Brand: React.FC<Props> = ({ items }) => {
  console.log(items);
  return <div>{items}</div>;
};

export default Brand;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query, params } = context;
  const DETAIL_URL = `https://api2.ncnc.app/con-category1s/${params.id}/nested`;
  const response = await axios(DETAIL_URL);
  const { conCategory1: { conCategory2s } } = response.data;
  console.log(conCategory2s);
  const result = conCategory2s.find((element) => element.id === params.id);
  console.log(result);
  console.log(query.categoryId);
  return {
    props: {
      items: params.id,
    },
  };
};
