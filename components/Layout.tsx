import React from "react";
import styled from "styled-components";

const Background = styled.div`
	background-color: #dddddd;
	width: 100%;
`;

const Main = styled.div`
	width: 100%;
	max-width: 672px;
	background-color: #eeeeee;
	display: block;
	margin: 0 auto;
`;

const Layout:React.FC = ({ children }) => (
	<Background>
		<Main>{children}</Main>
	</Background>
);

export default Layout;
