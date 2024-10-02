import TopBar from '../layouts/TopBar'
import React, { useState } from 'react';
import { API, serverAPI } from '../api/axios';
import { useUser } from '../hooks/useUser';
import { useCompanyData } from '../hooks/useCompanyData';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SalesRecord from '../layouts/SalesRecord'

const Contianer = styled.div`
  display: flex;
`

const FontBox = styled.div`
  font-weight: bold;
`

const BackButton = styled.button`
  height: 50px;
  width: 150px;
  border-radius: 10px;

  margin-top: 20px;

  background-color: #3181f8;
  color: #fff;
  
  font-size: 15px;
  font-weight: bold;

  transition: all 0.3s ease;

  &:focus {
    border: none;
    outline: none;
  }

  &:hover {
    opacity: ${props => (props.disabled ? 1 : 0.5)};
  }
`

const SalesRecordsPage = () => {

    const { userData, setUserData } = useUser();
    const { companyList, setComapnyList, activeCompany, setActiveCompany } = useCompanyData();
    const navigate = useNavigate();

    if(!userData)
        return <div>로딩 중...</div>

    return (
      <>
        <TopBar/>
        <Contianer style={{flexDirection: "column", padding: "50px"}}>
          <Contianer style={{justifyContent: "space-between"}}>
            <FontBox style={{fontSize: "60px"}}>{userData.realName} 스톡옵션 매매 기록</FontBox>
            <BackButton onClick={() => navigate('/myasset')}>뒤로가기</BackButton>
          </Contianer>
          <div style={{alignSelf: "flex-start"}}>
            <FontBox style={{fontSize: "40px", marginTop: "20px"}}>
              총 손익 : <span style={{color: "blue", fontWeight: "bold", fontSize: "40px"}}>-275,000(-13.5%)</span>
            </FontBox>
          </div>
          <SalesRecord/>
        </Contianer>
      </>
    )
}


export default SalesRecordsPage