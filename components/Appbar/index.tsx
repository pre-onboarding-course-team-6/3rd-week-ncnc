/* eslint-disable no-undef */
import React from "react";
import * as Icons from "shared/icons";
import * as S from "./style";

type Props = {
  title: string;
  isBorder: boolean;
  iconName: string;
  menuOnClick: () => void;
};

const Appbar: React.FC<Props> = ({
  title,
  isBorder,
  iconName,
  menuOnClick,
}) => {
  const Icon = Icons[iconName];
  return (
    <S.AppbarContainer>
      <S.Container isBorder={isBorder}>
        {iconName && (
          <S.MenuButton onClick={menuOnClick}>
            <Icon />
          </S.MenuButton>
        )}
        <S.AppbarTitle>{title}</S.AppbarTitle>
      </S.Container>
    </S.AppbarContainer>
  );
};

export default Appbar;
