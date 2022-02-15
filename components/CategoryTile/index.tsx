import React from "react";
import Link from "next/link";
import {
    TileContainer,
    TileBox,
    ProfileImage,
    TileName,
} from "./style";

type Props = {
    id: number;
    name: string;
    profileImgUrl: string;
}

const CategoryTile: React.FC<Props> = ({
    id,
    name,
    profileImgUrl,
}) => (
	<TileContainer>
		<Link key={id} href={`/brands/${id}`}>
			<TileBox>
				<ProfileImage
					src={profileImgUrl}
					alt={name}
				/>
				<TileName>{name}</TileName>
			</TileBox>
		</Link>
	</TileContainer>
    );

export default CategoryTile;
