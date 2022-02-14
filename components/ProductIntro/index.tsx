import React from "react";
import { ProductIntroProps } from "shared/const";
import * as S from "./styled";

type Props = ProductIntroProps;

const ProductIntro: React.FC<Props> = (props) => {
  const {
    imageUrl, name, originalPrice, minSellingPrice, conCategory2,
  } = props;
  const brandName = conCategory2.name;
  const discountRate = (((originalPrice - minSellingPrice) / originalPrice) * 100).toFixed(0);
  function numAddComma(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
	<S.ProductWrapper>
		<S.ProductImage src={imageUrl} alt={`${name}사진`} />
		<S.TextWrapper>
			<S.BrandName>
				{brandName}
			</S.BrandName>
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
  );
};

export default ProductIntro;
