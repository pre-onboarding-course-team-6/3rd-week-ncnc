import {  useState,useEffect } from 'react';
import {ProductProps} from "shared/const"
import ProductList from "components/ProductList"

const Index = () => {
  const [state, setState] = useState<ProductProps[] | null>(null);

  useEffect(() => {
    GetJsonData('https://api2.ncnc.app/con-items/soon');
  },[])

  async function GetJsonData(address: string) {
    const data = await fetch(address, { mode: 'cors' })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        return myJson;
      });
      setState(data.conItems);
  }
  return <div><ProductList ProductList={state}/></div>;
};

export default Index;
