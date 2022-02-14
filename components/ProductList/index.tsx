import React from "react";
import { ProductProps } from "shared/const";

type Props = {
  lists: ProductProps[]
}

const ProductList: React.FC<Props> = ({ lists }) => {
  console.log(lists);
  return (
	<div>
		Enter
	</div>
  );
};

export default ProductList;
