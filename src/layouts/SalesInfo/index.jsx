import styled from "styled-components"
import { API, serverAPI } from "../../api/axios"
import { useUser } from "../../hooks/useUser"
import { useCompanyData } from "../../hooks/useCompanyData"
import CompanyList from "../../components/CompanyList"
import { getDeletedRecords } from "../../api/deleteapi"

const Container = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: space-around;
`

const ItemsInfo = styled.div`
  font-size: 18px;
  font-weight: bold;
`

const SalesInfo = () => {

    const levelMap = { 상: 'HIGH', 중: 'MEDIUM', 하: 'LOW' };

    const { userData, setUserData } = useUser();
    const { companyList, setCompanyList, activeCompany, setActiveComapny} = useCompanyData();

    // if(!userData || !CompanyList || !activeCompany)
    //     return <div>로딩 중...</div>

    return (
      <Container style={{ borderBottom: "solid 3px", marginTop: "30px", marginBottom: "30px" }}>
        <ItemsInfo style={{color: "#3182F6"}}>회사명</ItemsInfo>
        <ItemsInfo style={{color: "#3182F6"}}>회사 설명</ItemsInfo>
        <ItemsInfo style={{color: "#3182F6"}}>상장일</ItemsInfo>
        <ItemsInfo style={{color: "#3182F6"}}>매각일</ItemsInfo>
        <ItemsInfo style={{color: "#3182F6"}}>상장가</ItemsInfo>
        <ItemsInfo style={{color: "#3182F6"}}>발행주식 수</ItemsInfo>
        <ItemsInfo style={{color: "#3182F6"}}>난이도</ItemsInfo>
        <ItemsInfo style={{color: "#3182F6"}}>상장비용</ItemsInfo>
        <ItemsInfo style={{color: "#3182F6"}}>회사매각가격</ItemsInfo>
        <ItemsInfo style={{color: "#3182F6"}}>회사매각손익</ItemsInfo>
      </Container>
    )
}

export default SalesInfo