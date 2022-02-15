import React, { useState } from "react";
import axios from "axios";
import {
  ItemDetail, BrandDetail, ItemOption, CategoryDetail,
} from "shared/const";
import { GetServerSideProps } from "next";

type Props = {
    item: ItemDetail
}

const getBottomSheet = () => {
  console.log("클릭");
};

const Item: React.FC<Props> = ({ item }) => {
  const [selected, setSelected] = useState(null);
  const {
    name, tip, warning, conCategory2, options,
  } = item;
  const { conCategory1 } = conCategory2;
  const { info } = conCategory1;

  const handleOption = (option: ItemOption) => {
    setSelected(option);
  };
  return (
	<div>
		<h2>{name}</h2>
		<p>
			tip:
			{" "}
			{tip}
		</p>
		<p>
			warning
			{" "}
			{warning}
		</p>
		<p>{info}</p>
        {selected && (<div> {selected.expireAt}</div>)}
		<div>
			<h1>옵션선택하기</h1>
			{options.map((option, index) => (
				<div>
					<p onClick={() => handleOption(option)}>{option.sellingPrice}</p>
				</div>
			))}

		</div>
		<button onClick={() => getBottomSheet()}>{selected === null ? "옵션선택하기" : "구매하기" }</button>
	</div>
  );
};

export default Item;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const BASE_URL = "https://api2.ncnc.app/con-items/";
  const response = await axios(BASE_URL + params.id);
  const { conItem } = response.data;
  return {
    props: {
      item: conItem,
    },
  };
};
