// import styled from "styled-components"
// import { API, serverAPI } from "../../api/axios"
// import { useUser } from "../../hooks/useUser"
// import { useCompanyData } from "../../hooks/useCompanyData"
// import CompanyList from "../../components/CompanyList"
// import { getDeletedRecords } from "../../api/deleteapi"

// const Container = styled.div`
//   display: flex;

//   flex-direction: row;
//   justify-content: space-around;
// `

// const ItemsInfo = styled.div`
//   font-size: 18px;
//   font-weight: bold;

//   text-align: center;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
//   max-width: 90px;
// `

// function SalesRecord() {

//     const levelMap = { 상: 'HIGH', 중: 'MEDIUM', 하: 'LOW' };

//     const { userData, setUserData } = useUser();
//     const { companyList, setCompanyList, activeCompany, setActiveCompany} = useCompanyData();

//     // const DeletedCompany = getDeletedRecords();

//     const DeletedComapnies = [
//       {
//         "userId": 1,
//         "id": 1,
//         "name": "My Company... with default logo",
//         "description": "test for creating initial chart",
//         "level": "HIGH",
//         "leastOperatePeriod": "ONE_WEEK",
//         "listedDate": null,
//         "investmentAmount": 1000000,
//         "initialStockPrice": 5000,
//         "initialStockQuantity": null,
//         "logo": {
//           "id": null,
//           "originalName": "default_logo.png",
//           "mimeType": "image/png",
//           "size": 2065,
//           "meta": null,
//           "url": "http://127.0.0.1:8080/files/company/default_logo"
//         },
//         "currentStockPrice": 100
//       },
//       {
//         "userId": 1,
//         "id": 2,
//         "name": "My Company... with default logo",
//         "description": "test for creating initial chart",
//         "level": "HIGH",
//         "leastOperatePeriod": "ONE_WEEK",
//         "listedDate": null,
//         "investmentAmount": 500000,
//         "initialStockPrice": 5000,
//         "initialStockQuantity": null,
//         "logo": {
//           "id": null,
//           "originalName": "default_logo.png",
//           "mimeType": "image/png",
//           "size": 2065,
//           "meta": null,
//           "url": "http://127.0.0.1:8080/files/company/default_logo"
//         },
//         "currentStockPrice": 100
//       },
//       {
//         "userId": 1,
//         "id": 7,
//         "name": "열심히 숨쉬기",
//         "description": "1시간 동안 숨참기",
//         "level": "HIGH",
//         "leastOperatePeriod": "TWO_WEEK",
//         "listedDate": null,
//         "investmentAmount": 1000000,
//         "initialStockPrice": 5000,
//         "initialStockQuantity": null,
//         "logo": {
//           "id": null,
//           "originalName": "default_logo.png",
//           "mimeType": "image/png",
//           "size": 2065,
//           "meta": null,
//           "url": "http://127.0.0.1:8080/files/company/default_logo"
//         },
//         "currentStockPrice": 100
//       },
//       {
//         "userId": 1,
//         "id": 8,
//         "name": "열심히 밥먹기",
//         "description": "감자튀김",
//         "level": "HIGH",
//         "leastOperatePeriod": "ONE_MONTH",
//         "listedDate": null,
//         "investmentAmount": 1000000,
//         "initialStockPrice": 5000,
//         "initialStockQuantity": null,
//         "logo": {
//           "id": null,
//           "originalName": "default_logo.png",
//           "mimeType": "image/png",
//           "size": 2065,
//           "meta": null,
//           "url": "http://127.0.0.1:8080/files/company/default_logo"
//         },
//         "currentStockPrice": 100
//       },
//       {
//         "userId": 1,
//         "id": 9,
//         "name": "열심히 술마시기",
//         "description": "소주 한짝!!",
//         "level": "HIGH",
//         "leastOperatePeriod": "TWO_WEEK",
//         "listedDate": null,
//         "investmentAmount": 1000000,
//         "initialStockPrice": 5000,
//         "initialStockQuantity": null,
//         "logo": {
//           "id": null,
//           "originalName": "default_logo.png",
//           "mimeType": "image/png",
//           "size": 2065,
//           "meta": null,
//           "url": "http://127.0.0.1:8080/files/company/default_logo"
//         },
//         "currentStockPrice": 100
//       },
//       {
//         "userId": 1,
//         "id": 12,
//         "name": "열심히 자기",
//         "description": "24시간 수면",
//         "level": "LOW",
//         "leastOperatePeriod": "ONE_MONTH",
//         "listedDate": null,
//         "investmentAmount": 1000000,
//         "initialStockPrice": 5000,
//         "initialStockQuantity": null,
//         "logo": {
//           "id": null,
//           "originalName": "default_logo.png",
//           "mimeType": "image/png",
//           "size": 2065,
//           "meta": null,
//           "url": "http://127.0.0.1:8080/files/company/default_logo"
//         },
//         "currentStockPrice": 100
//       }
//     ]

//     // if(!userData || !CompanyList || !activeCompany)
//     //     return <div>로딩 중...</div>

//     return (
//       <Container style={{ flexDirection: "column"}}>
//         <Container style={{ borderBottom: "solid 3px", marginTop: "30px", marginBottom: "30px" }}>
//           <ItemsInfo style={{color: "#3182F6"}}>회사명</ItemsInfo>
//           <ItemsInfo style={{color: "#3182F6"}}>회사 설명</ItemsInfo>
//           <ItemsInfo style={{color: "#3182F6"}}>상장일</ItemsInfo>
//           <ItemsInfo style={{color: "#3182F6"}}>매각일</ItemsInfo>
//           <ItemsInfo style={{color: "#3182F6"}}>상장가</ItemsInfo>
//           <ItemsInfo style={{color: "#3182F6"}}>발행주식 수</ItemsInfo>
//           <ItemsInfo style={{color: "#3182F6"}}>난이도</ItemsInfo>
//           <ItemsInfo style={{color: "#3182F6"}}>상장비용</ItemsInfo>
//           <ItemsInfo style={{color: "#3182F6", maxWidth: "100px"}}>회사매각가격</ItemsInfo>
//           <ItemsInfo style={{color: "#3182F6", maxWidth: "100px"}}>회사매각손익</ItemsInfo>
//         </Container>
//         {DeletedComapnies.map((data) => (
//         <Container key={data.id} style={{ borderBottom: "solid 1px", marginBottom: "30px" }}>
//           <ItemsInfo style={{ marginLeft: "0px"}}>{data.name}</ItemsInfo>
//           <ItemsInfo>{data.description}</ItemsInfo>
//           <ItemsInfo>{data.listedDate || '정보 없음'}</ItemsInfo>
//           <ItemsInfo>{data.saleDate || '정보 없음'}</ItemsInfo>
//           <ItemsInfo>{data.initialStockPrice}</ItemsInfo>
//           <ItemsInfo>{data.initialStockQuantity || 0}</ItemsInfo>
//           <ItemsInfo>{levelMap[data.level]}</ItemsInfo>
//           <ItemsInfo>{data.listingCost || '정보 없음'}</ItemsInfo>
//           <ItemsInfo>{data.salePrice || '정보 없음'}</ItemsInfo>
//           <ItemsInfo>{data.profitLoss || '정보 없음'}</ItemsInfo>
//         </Container>
//       ))}
//       </Container>
//     )
// }

// export default SalesRecord

import styled from "styled-components";
import { useUser } from "../../hooks/useUser";
import { useCompanyData } from "../../hooks/useCompanyData";
import React from "react";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 10px; // 열 사이의 간격
`;

const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #3182F6;
  text-align: center;
`;

const ItemsInfo = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 90px; // 최대 너비 설정
`;

function SalesRecord() {
  const levelMap = { 상: 'HIGH', 중: 'MEDIUM', 하: 'LOW' };

  const { userData } = useUser();
  const { companyList } = useCompanyData();

  const DeletedComapnies = [
    {
      "userId": 1,
      "id": 1,
      "name": "My Company... with default logo",
      "description": "test for creating initial chart",
      "level": "HIGH",
      "leastOperatePeriod": "ONE_WEEK",
      "listedDate": null,
      "investmentAmount": 1000000,
      "initialStockPrice": 5000,
      "initialStockQuantity": null,
      "logo": {
        "id": null,
        "originalName": "default_logo.png",
        "mimeType": "image/png",
        "size": 2065,
        "meta": null,
        "url": "http://127.0.0.1:8080/files/company/default_logo"
      },
      "currentStockPrice": 100
    },
    {
      "userId": 1,
      "id": 2,
      "name": "My Company... with default logo",
      "description": "test for creating initial chart",
      "level": "HIGH",
      "leastOperatePeriod": "ONE_WEEK",
      "listedDate": null,
      "investmentAmount": 500000,
      "initialStockPrice": 5000,
      "initialStockQuantity": null,
      "logo": {
        "id": null,
        "originalName": "default_logo.png",
        "mimeType": "image/png",
        "size": 2065,
        "meta": null,
        "url": "http://127.0.0.1:8080/files/company/default_logo"
      },
      "currentStockPrice": 100
    },
    {
      "userId": 1,
      "id": 7,
      "name": "열심히 숨쉬기",
      "description": "1시간 동안 숨참기",
      "level": "HIGH",
      "leastOperatePeriod": "TWO_WEEK",
      "listedDate": null,
      "investmentAmount": 1000000,
      "initialStockPrice": 5000,
      "initialStockQuantity": null,
      "logo": {
        "id": null,
        "originalName": "default_logo.png",
        "mimeType": "image/png",
        "size": 2065,
        "meta": null,
        "url": "http://127.0.0.1:8080/files/company/default_logo"
      },
      "currentStockPrice": 100
    },
    {
      "userId": 1,
      "id": 8,
      "name": "열심히 밥먹기",
      "description": "감자튀김",
      "level": "HIGH",
      "leastOperatePeriod": "ONE_MONTH",
      "listedDate": null,
      "investmentAmount": 1000000,
      "initialStockPrice": 5000,
      "initialStockQuantity": null,
      "logo": {
        "id": null,
        "originalName": "default_logo.png",
        "mimeType": "image/png",
        "size": 2065,
        "meta": null,
        "url": "http://127.0.0.1:8080/files/company/default_logo"
      },
      "currentStockPrice": 100
    },
    {
      "userId": 1,
      "id": 9,
      "name": "열심히 술마시기",
      "description": "소주 한짝!!",
      "level": "HIGH",
      "leastOperatePeriod": "TWO_WEEK",
      "listedDate": null,
      "investmentAmount": 1000000,
      "initialStockPrice": 5000,
      "initialStockQuantity": null,
      "logo": {
        "id": null,
        "originalName": "default_logo.png",
        "mimeType": "image/png",
        "size": 2065,
        "meta": null,
        "url": "http://127.0.0.1:8080/files/company/default_logo"
      },
      "currentStockPrice": 100
    },
    {
      "userId": 1,
      "id": 12,
      "name": "열심히 자기",
      "description": "24시간 수면",
      "level": "LOW",
      "leastOperatePeriod": "ONE_MONTH",
      "listedDate": null,
      "investmentAmount": 1000000,
      "initialStockPrice": 5000,
      "initialStockQuantity": null,
      "logo": {
        "id": null,
        "originalName": "default_logo.png",
        "mimeType": "image/png",
        "size": 2065,
        "meta": null,
        "url": "http://127.0.0.1:8080/files/company/default_logo"
      },
      "currentStockPrice": 100
    }
  ]

  return (
    <>
      <Container style={{ borderBottom: "solid 3px", marginTop: "30px", marginBottom: "30px" }}>
        <Header>회사명</Header>
        <Header>회사 설명</Header>
        <Header>상장일</Header>
        <Header>매각일</Header>
        <Header>상장가</Header>
        <Header>발행주식 수</Header>
        <Header>난이도</Header>
        <Header>상장비용</Header>
        <Header>회사매각가격</Header>
        <Header>회사매각손익</Header>
      </Container>
      <Container>
        {DeletedComapnies.map((data) => (
          <React.Fragment key={data.id} tyle={{ borderBottom: "solid 1px", marginTop: "30px", marginBottom: "30px" }}>
            <ItemsInfo>{data.name}</ItemsInfo>
            <ItemsInfo>{data.description}</ItemsInfo>
            <ItemsInfo>{data.listedDate || '정보 없음'}</ItemsInfo>
            <ItemsInfo>{data.saleDate || '정보 없음'}</ItemsInfo>
            <ItemsInfo>{data.initialStockPrice}</ItemsInfo>
            <ItemsInfo>{data.initialStockQuantity || 0}</ItemsInfo>
            <ItemsInfo>{levelMap[data.level]}</ItemsInfo>
            <ItemsInfo>{data.listingCost || '정보 없음'}</ItemsInfo>
            <ItemsInfo>{data.salePrice || '정보 없음'}</ItemsInfo>
            <ItemsInfo>{data.profitLoss || '정보 없음'}</ItemsInfo>
          </React.Fragment>
        ))}
      </Container>
    </>
  )
}

export default SalesRecord;
