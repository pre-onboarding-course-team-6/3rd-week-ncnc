import React, { useState, useEffect } from "react";
import { ProductProps, ConCategory } from "shared/type";
import { SOON_API, CON_CATEGORY } from "shared/constant";
import Appbar from "components/Appbar";
import HomeCategory from "components/HomeCategory";
import ProductList from "components/ProductList";
import CompanyContent from "components/CompanyContent";
import Banner from "components/Banner";

const Index = () => {
  const [lists, setLists] = useState<ProductProps[] | null>(null);
  const [category, setCategory] = useState<ConCategory[] | null>(null);
  const menuIconImg = () => (<svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 7.3a.7.7 0 100 1.4V7.3zm16 1.4a.7.7 0 100-1.4v1.4zm-16 0h16V7.3H7v1.4zM7 14.3a.7.7 0 100 1.4v-1.4zm16 1.4a.7.7 0 100-1.4v1.4zm-16 0h16v-1.4H7v1.4zM7 21.3a.7.7 0 100 1.4v-1.4zm16 1.4a.7.7 0 100-1.4v1.4zm-16 0h16v-1.4H7v1.4z" fill="#000" /></svg>);

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

  const menuOnClick = () => {
    console.log("클릭");
  };

  return (
	<div>
		<Appbar title="니콘내콘" isBorder={false} iconName="MenuIcon" menuOnClick={menuOnClick} />
		<Banner />
		<HomeCategory category={category} />
		<ProductList lists={lists} />
		<CompanyContent />
	</div>
  );
};

export default Index;
