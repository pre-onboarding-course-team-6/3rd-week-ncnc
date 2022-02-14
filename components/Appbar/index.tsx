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
}
const Appbar: React.FC<Props> = ({ title }) => {
  const isDeviceInfo = true;
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  return (
	<AppbarContainer>
		<DiviceInfoContainer isVisible={isDeviceInfo} />
		<Container>
			<AppbarTitle>
				{title}
			</AppbarTitle>
		</Container>
	</AppbarContainer>
  );
};

export default Appbar;
