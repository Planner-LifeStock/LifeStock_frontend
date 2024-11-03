import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../hooks/useUser";
import { useCompanyData } from "../../../../hooks/useCompanyData";

const MaxContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`
const Container = styled.div`
  display: flex;
  width: 100%;
`

const InfoFont = styled.div`
  font-size: 64px;
  font-weight: ${(props) => props.theme.font.weight.bold};
`

const CheckSellButton = styled.button`
    background-color: ${(props) => props.theme.colors.blue.primary};
    border-radius: ${(props) => props.theme.border.radius.small};
    border: none;
    transition: all 0.3s ease;

    margin-left: auto;
    margin-top: 30px;
    width: 200px;
    height: 40px;

    &:focus {
        border: none;
        outline: none;
    }

    &:hover {
        opacity: 0.5;
    }
`

const PriceBox = styled.div`
    padding: 10px;
    margin-top: 60px;

    display: flex;
    flex-direction: column;

    background-color: ${(props) => props.theme.colors.background.chatbot};
    border-radius: ${(props) => props.theme.border.radius.small};
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
`

const PriceFont = styled.span`
    display: flex;
    color: ${(props) => props.theme.colors.grey.hover};
    font-size: ${(props) => props.theme.font.size.xLarge};
    font-weight: ${(props) => props.theme.font.weight.bold};
`

const AssetInfo = () => {

  const { userData, setUserData } = useUser()
  const { companyList, setCompanyList, activeCompany, setActiveCompany} = useCompanyData()
  const navigate = useNavigate();

  if(!companyList) {
    return <div>로딩중...</div>
  }

    return (
      <MaxContainer>
        <Container>
          <InfoFont>{userData.realName}님의 자산</InfoFont>
          <CheckSellButton
          style = {{color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: "bold",
                    marginTop: "19px"}}
          onClick={() => navigate('/salesrecords')}>
              스톡옵션 매매 기록</CheckSellButton>
        </Container>


        <Container style={{justifyContent: "space-between"}}>
          <Container>
            <PriceBox style={{minWidth: "500px"}}>
              <PriceFont>총 자산</PriceFont>
              <Container style={{justifyContent: "space-between"}}>
                <PriceFont style={{color: "black"}}>{parseInt(activeCompany.investmentAmount).toLocaleString()}원</PriceFont>
                <PriceFont style={{color: "blue"}}>-550,000(-13.75%)</PriceFont>
              </Container>
            </PriceBox>
          </Container>


          <Container style={{justifyContent: "end"}}>
            <PriceBox style={{minWidth: "200px", marginRight: "30px"}}>
              <PriceFont>투자 비용</PriceFont>
              <Container style={{justifyContent: "space-between"}}>
                <PriceFont style={{color: "black"}}>3,550,000원</PriceFont>
              </Container>
            </PriceBox>
            <PriceBox style={{minWidth: "200px"}}>
              <PriceFont>투자 가능 금액</PriceFont>
              <Container style={{justifyContent: "space-between"}}>
                <PriceFont style={{color: "black"}}>6,000,000원</PriceFont>
              </Container>
            </PriceBox>
          </Container>


        </Container>
      </MaxContainer>
    )
}

export default AssetInfo
