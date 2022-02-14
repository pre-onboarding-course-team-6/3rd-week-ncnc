import React from "react";
import { useRouter } from "next/router";
import { AppbarContainer, AppbarTitle } from "./style";

type Props = {
    title: string
}
const Appbar: React.FC<Props> = ({ title }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  return (
	<AppbarContainer>
		<AppbarTitle>
			{title}
		</AppbarTitle>
	</AppbarContainer>
  );
};

export default Appbar;
