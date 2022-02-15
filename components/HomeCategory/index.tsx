/* eslint-disable react/no-array-index-key */
import React from "react";
import { ConCategory } from "shared/type";
import * as S from "./styled";

const HomeCategory: React.FC<{category: ConCategory[]}> = ({ category }) => (
	<S.Section>
		<S.MainWrapper>
			{category.map((content, index) => {
	  console.log(content);
			  const {
			    id,
			    name,
			    imageUrl,
			  } = content;
	  return (
		<S.ContentBoxWrapper key={index}>
			<S.ContentBox>
				<S.Link href={`/categories/${id}`}>
					<S.Image src={imageUrl} alt={`${name}아이콘`} />
					<S.Title>
						{content.name}
					</S.Title>
				</S.Link>
			</S.ContentBox>
		</S.ContentBoxWrapper>
	  );
			})}
		</S.MainWrapper>
	</S.Section>
);

export default HomeCategory;
