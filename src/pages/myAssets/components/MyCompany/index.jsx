import styled from "styled-components";

import SumList from "../../../../function/calculation/sumList";
import SellCompany from "../SellModal";
import { useUser } from "../../../../hooks/useUser";
import { useCompanyData } from "../../../../hooks/useCompanyData";
import UpDownText from "../../../../components/UpDownText";

const Container = styled.div`
  margin-top: 5px;

  display: flex;
  flex-direction: column;
`

const FontContainer = styled.div`
  display: flex;
  align-items: center;

  margin-left: 50px;
  font-weight: ${(props) => props.theme.font.weight.bold};
`

const MinContainer = styled.div`
  display: flex;
`

const Font = styled.div`
  font-size: 40px;
  font-weight: ${(props) => props.theme.font.weight.bold};
`

const CompanyBox = styled.div`
  margin-top: ${(props) => (props.$isFirst ? '0px' : '10px')};
  padding: 20px;
  width: 100%;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.grey.border};
  border-radius: ${(props) => props.theme.border.radius.small};
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
`

function MyCompany() {
  const { userData, setUserData } = useUser();
  const { companyList, setCompanyList, activeCompany, setActiveCompany } = useCompanyData();

  const currentValue = SumList({ data: companyList, type: 'currentStockPrice'});
  const openValue = SumList({data: companyList, type: 'openStockPrice'});

  if (!companyList) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      <>
        <Font style={{ marginRight: "auto", marginTop: "50px" }}>보유 회사</Font>
        <Container style={{
          borderRadius: "12px",
          padding: "0 0 10px 0",
          backgroundColor: "#D3D3D3",
        }}>
        <Container
          style={{
            borderRadius: "12px",
            padding: "10px",
            overflowY: "auto",
            backgroundColor: "#D3D3D3",
            height: "490px",
          }}
        >
          {companyList.map((item, index) => (
            <CompanyBox key={item.id} $isFirst={index === 0} style={{alignItems: "center"}}>
              <img
                src={item.logo.url}
                style={{ height: "12vh", borderRadius: "50%", marginLeft: "20px" }}
              />
              <MinContainer style={{ flexDirection: "column"}}>
                <MinContainer>
                  <FontContainer style={{ fontSize: "30px" }}>
                    {item.name}
                    <FontContainer style={{ fontSize: "18px" }}>
                      (회사 info) - {item.description}
                    </FontContainer>
                  </FontContainer>
                </MinContainer>
                <MinContainer style={{justifyContent: "center", alignItems: "center"}}>
                  <MinContainer style={{ flexDirection: 'column', marginTop: '10px' }}>
                    <FontContainer>
                      상장일:&nbsp;<span style={{ color: '#5A5A5A' }}>{item.listedDate}</span>
                    </FontContainer>
                    <FontContainer style={{ marginTop: '10px' }}>
                      발행주식 수:&nbsp;<span style={{ color: '#5A5A5A' }}>100주</span>
                    </FontContainer>
                  </MinContainer>
                  <MinContainer style={{ flexDirection: 'column', marginTop: '10px' }}>
                    <FontContainer>
                      상장가:&nbsp;<span style={{ color: '#5A5A5A' }}>{parseInt(item.initialStockPrice).toLocaleString()}원</span>
                    </FontContainer>
                    <FontContainer style={{ marginTop: '10px' }}>
                      현재가:&nbsp;<span style={{ color: '#5A5A5A' }}>{parseInt(item.currentStockPrice/100).toLocaleString()}원</span>
                    </FontContainer>
                  </MinContainer>
                  <MinContainer style={{ flexDirection: 'column', marginTop: '10px' }}>
                    <FontContainer>
                      투자비용:&nbsp;<span style={{ color: '#5A5A5A' }}>{parseInt(item.investmentAmount).toLocaleString()}원</span>
                    </FontContainer>
                    <FontContainer style={{ marginTop: '10px' }}>
                      회사가치:&nbsp;<span style={{ color: '#5A5A5A' }}>{parseInt(item.currentStockPrice).toLocaleString()}원</span>
                    </FontContainer>
                  </MinContainer>
                  <MinContainer style={{flexDirection: "column", alignItems: "center", marginLeft: '210px'}}>
                    <div style={{fontSize: '40px', marginTop: "-35px", fontWeight: "bold"}}>회사매각예상손익</div>
                    <UpDownText
                        standard={item.openStockPrice}
                        comparision={item.currentStockPrice}
                        fontSize={40}
                    />
                  </MinContainer>
                </MinContainer>
              </MinContainer>
              <SellCompany item={ item }/>
            </CompanyBox>
          ))}
        </Container>
        </Container>
      </>
    </>
  );
}


export default MyCompany
