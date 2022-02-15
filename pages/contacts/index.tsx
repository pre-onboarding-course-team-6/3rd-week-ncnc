/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";
import axios from "axios";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { FAQ, KAKAO_CHANNEL } from "shared/constant";
import { FAQType } from "shared/type";
import Link from "next/link";
import Appbar from "components/Appbar";
import * as S from "./styled";

type Props = {
  buy: FAQType[],
  sell: FAQType[]
}

const Contacts:React.FC<Props> = (props) => {
  const router = useRouter();
  const [tabSelected, setTabSelected] = useState("buy");
  const [faqSelected, setFaqSeleted] = useState(null);

  const onTabClick = (e) => {
    setFaqSeleted(null);
    setTabSelected(e.target.value);
  };

  const onFaqClick = (e) => {
    const target = Number(e.currentTarget.value);
    if (target === faqSelected) {
      setFaqSeleted(null);
    } else {
      setFaqSeleted(target);
    }
  };

  return (
	<>
		<Appbar title="고객센터" isBorder={false} iconName="XIcon" menuOnClick={() => router.push("/")} />
		<S.Section>
			<div style={{ fontSize: "18px", marginBottom: "10px" }}>상담시간 안내</div>
			<div style={{ fontSize: "16px", marginBottom: "2px" }}>평일 10:00 ~ 18:00</div>
			<div style={{ fontSize: "16px", color: "rgb(128,128,128)" }}>점심시간 12:30 ~ 13:30 / 토·일·공휴일 휴무</div>
			<Link href={KAKAO_CHANNEL}>
				<S.Kakao href={KAKAO_CHANNEL}>1:1 카카오톡 문의</S.Kakao>
			</Link>
		</S.Section>
		<div style={{ height: "10px" }} />
		<S.Section style={{ paddingBottom: 0 }}>
			<div style={{ fontSize: "18px", marginBottom: "15px" }}>자주 묻는 질문</div>
			<S.TabWrapper>
				<S.Tab onClick={onTabClick} value="buy" isTabSelected={tabSelected}>구매</S.Tab>
				<S.Tab onClick={onTabClick} value="sell" isTabSelected={tabSelected}>판매</S.Tab>
			</S.TabWrapper>
		</S.Section>
		<div style={{ height: "10px" }} />
		<S.Section style={{ padding: 0 }}>
			{props[tabSelected].map((faq, index) => {
			  const { id, question, answer } = faq;
			  return (
				<S.FaqWrapper key={id}>
					<S.Ask onClick={onFaqClick} value={index}>
						<S.Q>Q</S.Q>
						<S.Question>{question}</S.Question>
						<span>
							<svg data-v-52e7c3af="" width="16" height="9" fill="none" xmlns="http://www.w3.org/2000/svg" className="self-center"><path data-v-52e7c3af="" d="M1.354.646a.5.5 0 10-.708.708l.708-.708zM8 8l-.354.354a.5.5 0 00.708 0L8 8zm7.354-6.646a.5.5 0 00-.708-.708l.708.708zm-14.708 0l7 7 .708-.708-7-7-.708.708zm7.708 7l7-7-.708-.708-7 7 .708.708z" fill="gray" /></svg>
						</span>
					</S.Ask>
					{index === faqSelected && (
					<S.AnswerWrapper>
						<S.P>{answer}</S.P>
					</S.AnswerWrapper>
					)}
				</S.FaqWrapper>
			  );
			})}
		</S.Section>
	</>
  );
};

export default Contacts;

export const getStaticProps: GetStaticProps = async () => {
  const buyResponse = await axios(`${FAQ}=1`);
  const sellResponse = await axios(`${FAQ}=2`);
  return {
    props: {
      buy: buyResponse.data.qas,
      sell: sellResponse.data.qas,
    },
  };
};
