import styled from "styled-components";
import { nvidia_logo } from "../../assets";
import { useState } from "react";
import SellCompany from "../../components/SellModal";
import { companyFirstData } from "../../pages/main";

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

    background-color: #EFEFEF;
    border-radius: 16px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
`

// function MyCompany({data}) {
//     return (
//       <>
//         <Font style={{marginRight: "auto", marginTop: "50px"}}>보유 회사</Font>
//         <Container>
//           <CompanyBox>
//               <img src={nvidia_logo}
//                    style={{height: "12vh", borderRadius: "50%"}}/>
//               <MinContainer style={{flexDirection: "column"}}>
//                 <FontContainer style={{fontSize: "30px"}}>
//                   아침운동
//                     <FontContainer style={{fontSize: "18px"}}>
//                       (회사 info) - 아침 8시에 매일 운동하는 계획표</FontContainer>
//                 </FontContainer>
//                 <FontContainer style={{marginTop: "10px"}}>
//                     상장일: 2024.08.21 (8일차)
//                     <FontContainer>
//                     상장가: 15,000원
//                     </FontContainer>
//                     <FontContainer>
//                     창업비용: 2,000,000원
//                     </FontContainer>
//                 </FontContainer>
//                 <FontContainer style={{marginTop: "10px"}}>
//                     상장일: 2024.08.21 (8일차)
//                     <FontContainer>
//                     상장가: 15,000원
//                     </FontContainer>
//                     <FontContainer>
//                     창업비용: 2,000,000원
//                     </FontContainer>
//                 </FontContainer>
//               </MinContainer>
//               <MinContainer style={{flexDirection: "column", alignItems: "center"}}>
//                 <FontContainer style={{marginLeft: "0"}}>회사매각예상손익</FontContainer>
//                 <Font style={{color: "blue"}}>-275,000(-13.75%)</Font>
//               </MinContainer>
//               <SellButton>
//                 스톡옵션 매각하기
//               </SellButton>
//           </CompanyBox>
//         </Container>
//       </>
//     )
// }

function MyCompany({ data }) {
  
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
                <MinContainer>
                  <MinContainer style={{flexDirection: "column", marginTop: "10px"}}>
                    <FontContainer>상장일:&nbsp;<span style={{color: "#5A5A5A"}}>2024.08.21 (8일차)</span></FontContainer>
                    <FontContainer style={{marginTop: "10px"}}>발행주식 수:&nbsp;<span style={{color: "#5A5A5A"}}>100주</span></FontContainer>
                  </MinContainer>
                  <MinContainer style={{flexDirection: "column", marginTop: "10px"}}>
                    <FontContainer>상장가:&nbsp;<span style={{color: "#5A5A5A"}}>15,000원</span></FontContainer>
                    <FontContainer style={{marginTop: "10px"}}>현재가:&nbsp;<span style={{color: "#5A5A5A"}}>17,250원</span></FontContainer>
                  </MinContainer>
                  <MinContainer style={{flexDirection: "column", marginTop: "10px"}}>
                    <FontContainer>창업비용:&nbsp;<span style={{color: "#5A5A5A"}}>2,000,000원</span></FontContainer>
                    <FontContainer style={{marginTop: "10px"}}>회사가치:&nbsp;<span style={{color: "#5A5A5A"}}>1,750,000원</span></FontContainer>
                  </MinContainer>
                </MinContainer>
              </MinContainer>
              <MinContainer style={{flexDirection: "column", alignItems: "center", marginLeft: "200px"}}>
                <FontContainer style={{marginLeft: "0"}}>회사매각예상손익</FontContainer>
                <Font style={{color: "blue"}}>-275,000(-13.75%)</Font>
              </MinContainer>
              <SellCompany data = {companyFirstData}/>
          </CompanyBox>
          {/* <CompanyBox>
              <img src={nvidia_logo}
                   style={{height: "12vh", borderRadius: "50%", marginLeft: "20px"}}/>
              <MinContainer style={{flexDirection: "column"}}>
                <FontContainer style={{fontSize: "30px"}}>
                  아침운동
                    <FontContainer style={{fontSize: "18px"}}>
                      (회사 info) - 아침 8시에 매일 운동하는 계획표</FontContainer>
                </FontContainer>
                <MinContainer>
                  <MinContainer style={{flexDirection: "column", marginTop: "10px"}}>
                    <FontContainer>상장일:&nbsp;<span style={{color: "#5A5A5A"}}>2024.08.21 (8일차)</span></FontContainer>
                    <FontContainer style={{marginTop: "10px"}}>발행주식 수:&nbsp;<span style={{color: "#5A5A5A"}}>100주</span></FontContainer>
                  </MinContainer>
                  <MinContainer style={{flexDirection: "column", marginTop: "10px"}}>
                    <FontContainer>상장가:&nbsp;<span style={{color: "#5A5A5A"}}>15,000원</span></FontContainer>
                    <FontContainer style={{marginTop: "10px"}}>현재가:&nbsp;<span style={{color: "#5A5A5A"}}>17,250원</span></FontContainer>
                  </MinContainer>
                  <MinContainer style={{flexDirection: "column", marginTop: "10px"}}>
                    <FontContainer>창업비용:&nbsp;<span style={{color: "#5A5A5A"}}>2,000,000원</span></FontContainer>
                    <FontContainer style={{marginTop: "10px"}}>회사가치:&nbsp;<span style={{color: "#5A5A5A"}}>1,750,000원</span></FontContainer>
                  </MinContainer>
                </MinContainer>
              </MinContainer>
              <MinContainer style={{flexDirection: "column", alignItems: "center", marginLeft: "200px"}}>
                <FontContainer style={{marginLeft: "0"}}>회사매각예상손익</FontContainer>
                <Font style={{color: "blue"}}>-275,000(-13.75%)</Font>
              </MinContainer>
              <SellCompany/>
          </CompanyBox>
          <CompanyBox>
              <img src={nvidia_logo}
                   style={{height: "12vh", borderRadius: "50%", marginLeft: "20px"}}/>
              <MinContainer style={{flexDirection: "column"}}>
                <FontContainer style={{fontSize: "30px"}}>
                  아침운동
                    <FontContainer style={{fontSize: "18px"}}>
                      (회사 info) - 아침 8시에 매일 운동하는 계획표</FontContainer>
                </FontContainer>
                <MinContainer>
                  <MinContainer style={{flexDirection: "column", marginTop: "10px"}}>
                    <FontContainer>상장일:&nbsp;<span style={{color: "#5A5A5A"}}>2024.08.21 (8일차)</span></FontContainer>
                    <FontContainer style={{marginTop: "10px"}}>발행주식 수:&nbsp;<span style={{color: "#5A5A5A"}}>100주</span></FontContainer>
                  </MinContainer>
                  <MinContainer style={{flexDirection: "column", marginTop: "10px"}}>
                    <FontContainer>상장가:&nbsp;<span style={{color: "#5A5A5A"}}>15,000원</span></FontContainer>
                    <FontContainer style={{marginTop: "10px"}}>현재가:&nbsp;<span style={{color: "#5A5A5A"}}>17,250원</span></FontContainer>
                  </MinContainer>
                  <MinContainer style={{flexDirection: "column", marginTop: "10px"}}>
                    <FontContainer>창업비용:&nbsp;<span style={{color: "#5A5A5A"}}>2,000,000원</span></FontContainer>
                    <FontContainer style={{marginTop: "10px"}}>회사가치:&nbsp;<span style={{color: "#5A5A5A"}}>1,750,000원</span></FontContainer>
                  </MinContainer>
                </MinContainer>
              </MinContainer>
              <MinContainer style={{flexDirection: "column", alignItems: "center", marginLeft: "200px"}}>
                <FontContainer style={{marginLeft: "0"}}>회사매각예상손익</FontContainer>
                <Font style={{color: "blue"}}>-275,000(-13.75%)</Font>
              </MinContainer>
              <SellCompany/>
          </CompanyBox> */}
        </Container>
      </>
    )
}

export default MyCompany