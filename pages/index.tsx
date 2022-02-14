import React, { useState, useEffect } from "react";
import { ProductProps } from "shared/const";
import ProductList from "components/ProductList";

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

  return <div><ProductList lists={lists} /></div>;
};

export default Index;
