import { useState, useEffect } from 'react';
import { ProductProps } from 'shared/const';
import ProductList from 'components/ProductList';

function Index() {
  const [state, setState] = useState<ProductProps[] | null>(null);

  useEffect(() => {
    GetJsonData('https://api2.ncnc.app/con-items/soon');
  }, []);

  async function GetJsonData(address: string) {
    const data = await fetch(address, { mode: 'cors' })
      .then((response) => response.json())
      .then((myJson) => myJson);
    setState(data.conItems);
  }
  return <div><ProductList ProductList={state} /></div>;
}

export default Index;
