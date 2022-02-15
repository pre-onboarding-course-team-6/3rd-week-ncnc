/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { ProductProps } from "shared/type";
import ProductIntro from "../ProductIntro";
import * as S from "./styled";

const ProductList: React.FC<{lists: ProductProps[]}> = ({ lists }) => (
	<section className="ProductList">
		<S.Introduce>
			<S.RedText>
				놓치지 마세요
			</S.RedText>
			<S.BlackText>
				오늘의 땡처리콘!
			</S.BlackText>
		</S.Introduce>
		{lists.map((product, index) => {
		  const {
		    imageUrl, name, originalPrice, minSellingPrice, conCategory2, id,
		  } = product;
		  return (
			<ProductIntro
				key={index}
				id={id}
				imageUrl={imageUrl}
				name={name}
				originalPrice={originalPrice}
				minSellingPrice={minSellingPrice}
				conCategory2={conCategory2}
			/>
		  );
		})}
	</section>
);

export default ProductList;
