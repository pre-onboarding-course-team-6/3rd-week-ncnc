import React, { useState, useEffect } from "react";
import { ProductProps, ConCategory } from "shared/type";
import { SOON_API, CON_CATEGORY } from "shared/constant";
import Appbar from "components/Appbar";
import ProductList from "components/ProductList";
import CompanyContent from "components/CompanyContent";

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

  if (lists === null) {
    return (
	    <div>loading</div>
    );
  }

  console.log(category);

  return (
	<div>
		<Appbar title="니콘내콘" />
		<ProductList lists={lists} />
		<CompanyContent />
	</div>
  );
};

export default Index;
