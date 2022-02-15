/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";
import axios from "axios";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { FAQ, KAKAO_CHANNEL } from "shared/constant";
import { FAQType } from "shared/type";
import Link from "next/link";
import Appbar from "components/Appbar";
import styled from "styled-components";
import { ChevronDown } from "../../shared/icons";

const Section = styled.section`
  padding: 17px;
  box-sizing: border-box;
  background-color: #ffffff;
`;

const Kakao = styled.a`
  display: flex;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  color: rgb(255, 87, 87); 
  margin: 25px 0px;
  padding: 1rem 0;
  border: 1px solid rgb(255, 87, 87);
  border-radius: 0.5rem;
`;

const TabWrapper = styled.div`
  display: flex;
`;

const Tab = styled.button<{isTabSelected:string, value: string}>`
  text-align: center;
  padding: 1rem;
  flex-grow: 1;
  cursor: pointer;
  ${(props) => (props.isTabSelected === props.value && (
    "color: #f75656;border-bottom: 2px solid #f75656;"
  ))}
`;

const FaqWrapper = styled.div`
  border-bottom: 2px solid #ebeced;
`;

const Ask = styled.button`
  font-size: 16px;
  font-weight: 500;
  padding: 17px;
  width: 100%;
  display: flex;
`;

const Q = styled.span`
  margin-right: 10px;
  color: rgb(255, 87, 87)
`;

const Question = styled.span`
  flex-grow: 1;
  text-align: left;
`;

const AnswerWrapper = styled.div`
  background-color: #eeeeee;
  padding: 17px;
`;

const P = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  line-height: 1.3;
`;

type Props = {
  buy: FAQType[];
  sell: FAQType[];
};

const Contacts: React.FC<Props> = (props) => {
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
		<Section>
			<div style={{ fontSize: "18px", marginBottom: "10px" }}>상담시간 안내</div>
			<div style={{ fontSize: "16px", marginBottom: "2px" }}>평일 10:00 ~ 18:00</div>
			<div style={{ fontSize: "16px", color: "rgb(128,128,128)" }}>점심시간 12:30 ~ 13:30 / 토·일·공휴일 휴무</div>
			<Link href={KAKAO_CHANNEL}>
				<Kakao href={KAKAO_CHANNEL}>1:1 카카오톡 문의</Kakao>
			</Link>
		</Section>
		<div style={{ height: "10px" }} />
		<Section style={{ paddingBottom: 0 }}>
			<div style={{ fontSize: "18px", marginBottom: "15px" }}>자주 묻는 질문</div>
			<TabWrapper>
				<Tab onClick={onTabClick} value="buy" isTabSelected={tabSelected}>구매</Tab>
				<Tab onClick={onTabClick} value="sell" isTabSelected={tabSelected}>판매</Tab>
			</TabWrapper>
		</Section>
		<div style={{ height: "10px" }} />
		<Section style={{ padding: 0 }}>
			{props[tabSelected].map((faq, index) => {
			  const { id, question, answer } = faq;
			  return (
				<FaqWrapper key={id}>
					<Ask onClick={onFaqClick} value={index}>
						<Q>Q</Q>
						<Question>{question}</Question>
						<ChevronDown />
					</Ask>
					{index === faqSelected && (
					<AnswerWrapper>
						<P>{answer}</P>
					</AnswerWrapper>
					)}
				</FaqWrapper>
			  );
			})}
		</Section>
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
