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
import { ChevronDown } from "../../shared/icons";

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
						<ChevronDown />
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
