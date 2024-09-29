import styled from "styled-components";
import SellCompany from "../../components/SellModal";
import useFetch from "../../hooks/useFetch";
import { API } from "../../api/axios";

const Container = styled.div`
  margin-top: 5px;

  display: flex;
  flex-direction: column;
`

const FontContainer = styled.div`
  margin-left: 50px;
  font-weight: bold;

  display: flex;
  align-items: center;
`

const MinContainer = styled.div`
  display: flex;
`

const Font = styled.div`
  font-size: 40px;
  font-weight: bold;
`

const CompanyBox = styled.div`
  margin-top: 10px;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;

  display: flex;
  align-items: center;

  background-color: #efefef;
  border-radius: 16px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
`

function MyCompany() {
  
  const Id = 1
  const userList = useFetch(`http://localhost:8080/users/${Id}`)
  const companyList = useFetch(`http://localhost:8080/company/${Id}`)

    return (
      <>
        <Font style={{marginRight: "auto", marginTop: "50px"}}>보유 회사</Font>
        <Container style={{
          borderRadius: "15px",
          padding: "10px",
          overflowY: "auto",
          backgroundColor: "#D3D3D3",
          maxHeight: "400px"
        }}>
          <CompanyBox>
          {companyList && companyList.logo ? (
                <img 
                  src={companyList.logo.url} 
                  style={{ height: "12vh", borderRadius: "50%", marginLeft: "20px" }} />
              ) : (
                <div style={{ height: "12vh", width: "12vh", borderRadius: "50%", backgroundColor: "#ccc", marginLeft: "20px" }}>
                </div>
              )}
              <MinContainer  style={{flexDirection: "column"}}>
                <MinContainer>
                  <FontContainer style={{fontSize: "30px"}}>
                    {companyList.name}
                      <FontContainer style={{fontSize: "18px"}}>
                        (회사 info) - {companyList.description}</FontContainer>
                  </FontContainer>
                </MinContainer>
                <MinContainer>
                  <MinContainer style={{ flexDirection: 'column', marginTop: '10px' }}>
                    <FontContainer>
                      상장가:&nbsp; <span style={{ color: '#5A5A5A' }}>15,000원</span>
                    </FontContainer>
                    <FontContainer style={{ marginTop: '10px' }}>
                      현재가:&nbsp; <span style={{ color: '#5A5A5A' }}>{parseInt(companyList.currentStockPrice).toLocaleString()}원</span>
                    </FontContainer>
                  </MinContainer>
                  <MinContainer style={{ flexDirection: 'column', marginTop: '10px' }}>
                    <FontContainer>
                      창업비용:&nbsp; <span style={{ color: '#5A5A5A' }}>2,000,000원</span>
                    </FontContainer>
                    <FontContainer style={{ marginTop: '10px' }}>
                      회사가치:&nbsp; <span style={{ color: '#5A5A5A' }}>1,750,000원</span>
                    </FontContainer>
                  </MinContainer>
                  <MinContainer style={{ flexDirection: 'column', marginTop: '10px' }}>
                    <FontContainer>
                      창업비용:&nbsp; <span style={{ color: '#5A5A5A' }}>2,000,000원</span>
                    </FontContainer>
                    <FontContainer style={{ marginTop: '10px' }}>
                      회사가치:&nbsp; <span style={{ color: '#5A5A5A' }}>1,750,000원</span>
                    </FontContainer>
                  </MinContainer>
                </MinContainer>
              </MinContainer>
              {/* <SellCompany/> */}
          </CompanyBox>
        </Container>
      </>
    )
}

export default MyCompany
