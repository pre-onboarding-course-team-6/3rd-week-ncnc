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
			<link rel="icon" href="/favicon.ico" />
			<meta property="og:type" content="website"/>
			<meta property="og:url" content="https://eloquent-hopper-416b1b.netlify.app/"/>
			<meta property="og:title" content="더블엔씨 과제"/>
			<meta property="og:image" content="https://play-lh.googleusercontent.com/smN-gJe3ADgCW-F9gEaas-Gc4firGq9IA_2Wt7__KXao0_Xz3xPx5RsCVW77SzIVfD4"/>
			<meta property="og:description" content="원티드 프리온보딩 프론트엔드코스 더블엔씨 크론코딩입니다"/>
			<meta property="og:site_name" content="더블엔씨 과제"/>
			<meta property="og:locale" content="ko"/>
			<meta property="og:image:width" content="400"/>
			<meta property="og:image:height" content="250"/>
			<title>더블엔씨 과제</title>
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
