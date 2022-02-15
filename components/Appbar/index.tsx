import React from "react";
import { useRouter } from "next/router";
import {
  AppbarContainer,
  AppbarTitle,
  DiviceInfoContainer,
  Container,
} from "./style";

type Props = {
    title: string
    isBorder: boolean
}
const Appbar: React.FC<Props> = ({ title, isBorder }) => {
  const isDeviceInfo = true;
  const router = useRouter();
  const { id } = router.query;

  return (
	<AppbarContainer>
		<DiviceInfoContainer isVisible={isDeviceInfo} />
		<Container isBorder={isBorder}>
			<AppbarTitle>
				{title}
			</AppbarTitle>
		</Container>
	</AppbarContainer>
  );
};

export default Appbar;
