import React from "react";
import { ProductIntroProps } from "shared/type";
import Link from "next/link";
import * as S from "./styled";

const ProductIntro: React.FC<ProductIntroProps> = (props) => {
  const {
    imageUrl, name, originalPrice, minSellingPrice, conCategory2, id,
  } = props;
  const discountRate = (((originalPrice - minSellingPrice) / originalPrice) * 100).toFixed(0);
  function numAddComma(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
	<Link href={`/items/${id}`}>
		<S.ProductWrapper>
			<S.ProductImage src={imageUrl} alt={`${name}사진`} />
			<S.TextWrapper>
				{conCategory2 && <S.BrandName>{conCategory2.name}</S.BrandName>}
				<S.ProductName>
					{name}
				</S.ProductName>
				<S.PriceWrapper>
					<S.DiscountRate>
						{discountRate}
						%
					</S.DiscountRate>
					<S.SellingPrice>
						{numAddComma(minSellingPrice)}
						원
					</S.SellingPrice>
					<S.OriginalPrice>
						{numAddComma(originalPrice)}
						원
					</S.OriginalPrice>
				</S.PriceWrapper>
			</S.TextWrapper>
		</S.ProductWrapper>
	</Link>
  );
};

export default ProductIntro;
