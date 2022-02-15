import React from "react";
import * as OutlineIcons from "@heroicons/react/outline";
import * as S from "./style";

type Props = {
  title: string;
  isBorder: boolean;
  iconName: string;
  menuOnClick: Function;
};
const Appbar: React.FC<Props> = ({
  title,
  isBorder,
  iconName,
  menuOnClick,
}) => {
  const { ...icons } = OutlineIcons;
  // eslint-disable-next-line no-undef
  const Icon = icons[iconName];
  return (
    <S.AppbarContainer>
      <S.Container isBorder={isBorder}>
        {iconName && (
          <S.MenuButton onClick={() => menuOnClick()}>
            <Icon style={{ width: "18px" }} />
          </S.MenuButton>
        )}
        <S.AppbarTitle>{title}</S.AppbarTitle>
      </S.Container>
    </S.AppbarContainer>
  );
};

export default Appbar;
