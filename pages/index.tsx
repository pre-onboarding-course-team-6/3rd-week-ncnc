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
import { ChevronRightIcon } from "@heroicons/react/outline";
import Link from "next/link";

const SidebarContainer = styled.div`
  padding: 10px 0;
`;
const MypageBox = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #FFFFFF;
  justify-content: space-between;
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
	<div>
		<Appbar title={isClose ? "니콘내콘" : "마이페이지"} isBorder={false} iconName={isClose ? "MenuIcon" : "XIcon"} menuOnClick={handleSidebar} />
		{isClose ? (
			<>
				<Banner />
				<HomeCategory category={category} />
				<ProductList lists={lists} />
				<CompanyContent />
			</>
		) : (
			<SidebarContainer>
				<MypageBox>
					<BoxTitle>고객센터</BoxTitle>
					<Link href="/contacts">
						<ChevronRightIcon style={{ width: "22px", cursor: "pointer" }} />
					</Link>
				</MypageBox>
			</SidebarContainer>
		)}

	</div>
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
