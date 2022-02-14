import React from "react";
import { TileContainer, ProfileImage, TileName } from "./style";

type Props = {
    name: string;
    profileImgUrl: string;
}

const CategoryTile: React.FC<Props> = ({ name, profileImgUrl }) => {
    console.log(profileImgUrl);
    return (
	<TileContainer>
		<ProfileImage
			src={profileImgUrl}
			alt={name}
		/>
		<TileName>{name}</TileName>
	</TileContainer>
    );
};

export default CategoryTile;
