import React from "react";
import { Item } from "shared/const";
import Link from "next/link";

type Props = Item;

const ItemTile: React.FC<Props> = ({
  id, name, originalPrice, minSellingPrice, count, imageUrl,
}) => {
  const discountRate = (((originalPrice - minSellingPrice) / originalPrice) * 100).toFixed(0);
  function numAddComma(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
	<Link href={`/items/${id}`}>
		<p>{name}</p>
	</Link>

  );
};

export default ItemTile;
