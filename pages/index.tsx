import React, { useState, useEffect } from "react";
import { ProductProps, ConCategory } from "shared/type";
import { SOON_API, CON_CATEGORY } from "shared/constant";
import Appbar from "components/Appbar";
import HomeCategory from "components/HomeCategory";
import ProductList from "components/ProductList";
import CompanyContent from "components/CompanyContent";
import Banner from "components/Banner";
import axios from "axios";
import { GetServerSideProps } from "next";
import styled from "styled-components";
import Link from "next/link";
import Head from "next/head";
import { ChevronRight } from "../shared/icons";

const SidebarContainer = styled.div`
  padding: 10px 0;
`;
const MypageBox = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #FFFFFF;
  justify-content: space-between;
  cursor: pointer;
`;

const BoxTitle = styled.p`
  font-size: 15px;
  font-weight: 500;
`;

const Index = () => {
  const [lists, setLists] = useState<ProductProps[] | null>(null);
  const [category, setCategory] = useState<ConCategory[] | null>(null);
  const [isClose, setIsClose] = useState<boolean>(true);
  async function GetSoonData() {
    const data = await fetch(SOON_API, { mode: "cors" })
      .then((response) => response.json())
      .then((myJson) => myJson);
    setLists(data.conItems);
  }

  async function GetConCategory() {
    const data = await fetch(CON_CATEGORY, { mode: "cors" })
      .then((response) => response.json())
      .then((myJson) => myJson);
    setCategory(data.conCategory1s);
  }

  useEffect(() => {
    GetConCategory();
    GetSoonData();
  }, []);

  if (lists === null || category === null) {
    return (
	    <div>loading</div>
    );
  }
  const handleSidebar = () => {
    setIsClose(!isClose);
  };

  return (
	<>
    <Head>
        <meta property="og:title" content="더블엔씨 과제 홈화면" />
        <meta property="og:description" content="더블엔씨 과제 홈화면" />
        <meta name="description" content="더블엔씨 과제 홈화면" />
        <meta name="keywords" content="더블엔씨" />
    </Head>
		<Appbar title={isClose ? "니콘내콘" : "마이페이지"} isBorder={false} iconName={isClose ? "MenuIcon" : "XIcon"} menuOnClick={handleSidebar} />
		{isClose ? (
			<>
				<Banner />
				<HomeCategory category={category} address="categories" />
				<ProductList lists={lists} />
				<CompanyContent />
			</>
		) : (
			<SidebarContainer>
				<Link href="/contacts">
					<MypageBox>
						<BoxTitle>고객센터</BoxTitle>
						<ChevronRight />
					</MypageBox>
				</Link>
			</SidebarContainer>
		)}
	</>
  );
};

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
