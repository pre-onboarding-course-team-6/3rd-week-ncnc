import React from "react";
import Link from "next/link";
import { TileContainer, ProfileImage, TileName } from "./style";

type Props = {
    id: number;
    categoryId: number;
    name: string;
    profileImgUrl: string;
}

const CategoryTile: React.FC<Props> = ({
    id,
    categoryId,
    name,
    profileImgUrl,
}) => (
	<TileContainer>
		<Link href={{
                pathname: `brands/${id}`,
                query: { categoryId },
              }}
		>
			<ProfileImage
				src={profileImgUrl}
				alt={name}
			/>
			<TileName>{name}</TileName>
		</Link>
	</TileContainer>
    );

export default CategoryTile;
