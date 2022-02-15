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

  return (
	<div>
		<Appbar title="니콘내콘" />
		<Banner />
		<HomeCategory category={category} />
		<ProductList lists={lists} />
		<CompanyContent />
	</div>
  );
};

export default Index;
