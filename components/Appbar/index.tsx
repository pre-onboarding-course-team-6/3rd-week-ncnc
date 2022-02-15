import React from "react";
import * as SolidIcons from "@heroicons/react/solid";
import * as S from "./style";

type Props = {
    title: string
    isBorder: boolean
    iconName: string
    menuOnClick: Function
}
const Appbar: React.FC<Props> = ({
  title, isBorder, iconName, menuOnClick,
}) => {
  const { ...icons } = SolidIcons;
  const Icon: JSX.Element = icons[iconName];
  return (
	<S.AppbarContainer>
		<S.Container isBorder={isBorder}>
			{iconName && (
			<S.MenuButton onClick={menuOnClick}>
				<Icon style={{ width: "17.4px" }} />
			</S.MenuButton>
			)}
			<S.AppbarTitle>
				{title}
			</S.AppbarTitle>
		</S.Container>
	</S.AppbarContainer>
  );
};

export default Appbar;
