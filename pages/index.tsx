import React, { useState, useEffect } from "react";
import { ProductProps } from "shared/type";
import Appbar from "components/Appbar";
import ProductList from "components/ProductList";
import CompanyContent from "components/CompanyContent";

const Index = () => {
  const [lists, setLists] = useState<ProductProps[] | null>(null);
  async function GetJsonData(address: string) {
    const data = await fetch(address, { mode: "cors" })
      .then((response) => response.json())
      .then((myJson) => myJson);
    setLists(data.conItems);
  }

  useEffect(() => {
    GetJsonData("https://api2.ncnc.app/con-items/soon");
  }, []);

  if (lists === null) {
    return (
	    <div>loading</div>
    );
  }

  return (
	<div>
		<Appbar title="니콘내콘" />
		<ProductList lists={lists} />
		<CompanyContent />
	</div>
  );
};

export default Index;
