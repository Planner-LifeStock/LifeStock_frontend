import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "../../hooks/useUser";
import { useCompanyData } from "../../hooks/useCompanyData";

const MaxContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`
const Container = styled.div`
  display: flex;
  width: 100%;
`

const InfoFont = styled.div`
  font-size: 64px;
  font-weight: bold;
`

const CheckSellButton = styled.button`
    background-color: #3182F6;
    border-radius: 10px;
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

    background-color: #EFEFEF;
    border-radius: 16px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
`

const PriceFont = styled.span`
    display: flex;
    color: #636363;
    font-size: 25px;
    font-weight: bold;
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
                    fontSize: "15px",
                    fontWeight: "bold",}}
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
              <PriceFont>창업 비용</PriceFont>
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
