import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Layout from "components/Layout";
import GlobalStyle from "../styles/global-style";
import { theme } from "../styles/theme";

const MyApp = ({ Component, pageProps }: AppProps) => (
	<>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<title>boilerplate</title>
		</Head>
		<GlobalStyle />
		<ThemeProvider theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	</>
);

export default MyApp;
