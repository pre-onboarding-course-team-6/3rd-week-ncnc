import axios from "axios";
import React from "react";
import { GetServerSideProps } from "next";
import Appbar from "components/Appbar";

type Props = {
    title: string;
}

const Brand: React.FC<Props> = ({ title }) => (
	<>
		<Appbar title={title} />
		<div>
			ddd
		</div>
	</>
    );

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
    console.log(currentBrand);
    // const DETAIL_URL = `https://api2.ncnc.app/con-category1s/${params.id}/nested`;
    // const response = await axios(DETAIL_URL);
    // const { conCategory1: { conCategory2s } } = response.data;
    // console.log(conCategory2s);
    // const result = conCategory2s.find((element) => element.id === params.id);
    // console.log(result);
    // console.log(query.categoryId);
    return {
      props: {
        title: currentBrand.name,
      },
    };
  };
