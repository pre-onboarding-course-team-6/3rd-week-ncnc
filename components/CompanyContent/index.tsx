import React, { useState } from "react";
import * as C from "shared/constant";
import Link from "next/link";
import { CompanyChevronDown, CompanyChevronUp } from "shared/icons";
import * as S from "./styled";

const CompanyContent: React.FC = () => {
  const [companyInfo, setCompanyInfo] = useState(false);

  const onClick = () => {
    setCompanyInfo(!companyInfo);
  };

  return (
	<S.Section className="CompanyContent">
		<S.FlexBox>
			<S.SmallText href="https://ncnc-public.s3.ap-northeast-2.amazonaws.com/doublenc.pdf">{C.COMPANY_INTRODUCE}</S.SmallText>
			<S.SmallText href="mailto:contact@doublenc.com">{C.COMPANY_CONTACT}</S.SmallText>
			<S.SmallText href="https://ncnc.io/privacy">{C.PERSONAL_INFO}</S.SmallText>
			{companyInfo ? (
				<div className="moreCompanyInfo">
					<S.CompanyInfoBtn onClick={onClick} className="moreCompanyInfoClose">
						{C.COMPANY_NAME}
						<CompanyChevronUp />
					</S.CompanyInfoBtn>
					<S.CompanyInfo>
						대표 : 박진희
						<span> | </span>
						이메일 :
						<Link href="mailto:cs@doublenc.com">
							<S.EmailLink href="mailto:cs@doublenc.com" target="_blank" rel="noreferrer">cs@doublenc.com</S.EmailLink>
						</Link>
						<br />
						사업자 등록번호 : 290-86-00970
						<span> | </span>
						통신판매업신고번호 : 제2020-서울성동-00206호
						<br />
						개인정보보호책임자 : 김웅비
						<br />
						서울특별시 강남구 테헤란로 501, 4층(삼성동, 브이플렉스)
						<br />
						<div>고객센터: 02-6265-0018</div>
					</S.CompanyInfo>
				</div>
			) : (
				<S.CompanyInfoBtn onClick={onClick} className="moreCompanyInfoOpen">
					{C.COMPANY_NAME}
					<CompanyChevronDown />
				</S.CompanyInfoBtn>
			)}
		</S.FlexBox>
	</S.Section>
  );
};
export default CompanyContent;
