import styled from "styled-components";
import SellCompany from "../../components/SellModal";
import { useState, useEffect } from "react";
import { nvidia_logo } from "../../assets";
import useFetch from "../../hooks/useFetch";
import { companyFirstData } from "../../pages/main";
// ㄴ 이거 연결하면 필요 없음

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

  //   return (
  //     <>
  //       <Font style={{marginRight: "auto", marginTop: "50px"}}>보유 회사</Font>
  //       <Container style={{
  //         borderRadius: "15px",
  //         padding: "10px",
  //         overflowY: "auto",
  //         backgroundColor: "#D3D3D3",
  //         maxHeight: "400px"
  //       }}>
  //         <CompanyBox>
  //             <img src={nvidia_logo}
  //                  style={{height: "12vh", borderRadius: "50%", marginLeft: "20px"}}/>
  //             <MinContainer style={{flexDirection: "column"}}>
  //               <FontContainer style={{fontSize: "30px"}}>
  //                 아침운동
  //                   <FontContainer style={{fontSize: "18px"}}>
  //                     (회사 info) - 아침 8시에 매일 운동하는 계획표</FontContainer>
  //               </FontContainer>
  //               <MinContainer>
  //                 <MinContainer style={{flexDirection: "column", marginTop: "10px"}}>
  //                   <FontContainer>상장일:&nbsp;<span style={{color: "#5A5A5A"}}>2024.08.21 (8일차)</span></FontContainer>
  //                   <FontContainer style={{marginTop: "10px"}}>발행주식 수:&nbsp;<span style={{color: "#5A5A5A"}}>100주</span></FontContainer>
  //                 </MinContainer>
  //                 <MinContainer style={{flexDirection: "column", marginTop: "10px"}}>
  //                   <FontContainer>상장가:&nbsp;<span style={{color: "#5A5A5A"}}>15,000원</span></FontContainer>
  //                   <FontContainer style={{marginTop: "10px"}}>현재가:&nbsp;<span style={{color: "#5A5A5A"}}>17,250원</span></FontContainer>
  //                 </MinContainer>
  //                 <MinContainer style={{flexDirection: "column", marginTop: "10px"}}>
  //                   <FontContainer>창업비용:&nbsp;<span style={{color: "#5A5A5A"}}>2,000,000원</span></FontContainer>
  //                   <FontContainer style={{marginTop: "10px"}}>회사가치:&nbsp;<span style={{color: "#5A5A5A"}}>1,750,000원</span></FontContainer>
  //                 </MinContainer>
  //               </MinContainer>
  //             </MinContainer>
  //             <MinContainer style={{flexDirection: "column", alignItems: "center", marginLeft: "200px"}}>
  //               <FontContainer style={{marginLeft: "0"}}>회사매각예상손익</FontContainer>
  //               <Font style={{color: "blue"}}>-275,000(-13.75%)</Font>
  //             </MinContainer>
  //             <SellCompany data = {companyFirstData}/>
  //         </CompanyBox>
  //       </Container>
  //     </>
  //   )

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
              <img src={nvidia_logo}
                   style={{height: "12vh", borderRadius: "50%", marginLeft: "20px"}}/>
              <MinContainer style={{flexDirection: "column"}}>
                <FontContainer style={{fontSize: "30px"}}>
                  아침운동
                    <FontContainer style={{fontSize: "18px"}}>
                      (회사 info) - 아침 8시에 매일 운동하는 계획표</FontContainer>
                </FontContainer>
              </MinContainer>
              <MinContainer
                style={{ flexDirection: 'column', marginTop: '10px' }}
              >
                <FontContainer>
                  상장가:&nbsp;
                  <span style={{ color: '#5A5A5A' }}>15,000원</span>
                </FontContainer>
                <FontContainer style={{ marginTop: '10px' }}>
                  현재가:&nbsp;
                  <span style={{ color: '#5A5A5A' }}>17,250원</span>
                </FontContainer>
              </MinContainer>
              <MinContainer
                style={{ flexDirection: 'column', marginTop: '10px' }}
              >
                <FontContainer>
                  창업비용:&nbsp;
                  <span style={{ color: '#5A5A5A' }}>2,000,000원</span>
                </FontContainer>
                <FontContainer style={{ marginTop: '10px' }}>
                  회사가치:&nbsp;
                  <span style={{ color: '#5A5A5A' }}>1,750,000원</span>
                </FontContainer>
              </MinContainer>
              <SellCompany data = {companyFirstData}/>
          </CompanyBox>
        </Container>
      </>
    )
}

export default MyCompany
