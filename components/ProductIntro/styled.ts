import styled from "styled-components";

export const ProductWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #efefef;
  background-color: #ffffff;
  cursor: pointer;
`;

export const ProductImage = styled.img`
  padding: 20px;
  width: 70px;
  height: 70px;
`;

export const TextWrapper = styled.div`
  padding: 20px 0;
`;

export const BrandName = styled.div`
  font-size: 14px;
  color: #999999;
  margin-bottom: 7px;
`;

export const ProductName = styled.div`
  font-size: 16px;
  margin-bottom: 13px;
`;

export const PriceWrapper = styled.div`
  display: flex;
`;

export const DiscountRate = styled.p`
  color: red;
  font-size: 16px;
  margin-right: 9px;
`;

export const SellingPrice = styled.p`
  font-size: 16px;
  margin-right: 6px;
  font-weight: bold;
`;

export const OriginalPrice = styled.p`
  font-size: 14px;
  color: #999999;
  text-decoration-line: line-through;
`;
