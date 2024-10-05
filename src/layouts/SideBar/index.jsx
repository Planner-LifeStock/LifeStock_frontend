import styled from 'styled-components';
import CompanyList from '../../components/CompanyList';
import UpDownText from '../../components/UpDownText';
import Button from '../../components/Button';
import TotalSum from '../../components/TotalSum';
import SumList from '../../function/calculation/sumList';
import CreateCompany from '../../components/CreateCompanyModal';

import { nvidia_logo } from '../../assets';
import { useEffect, useState } from 'react';
import { API } from '../../api/axios.jsx';
import { set } from 'date-fns';
import { useUser } from '../../hooks/useUser.jsx';
import { useCompanyData } from '../../hooks/useCompanyData.jsx';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: -5px 0 16px 0 rgba(0, 0, 0, 0.08);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 328px;
  background-color: #f6f7f9;
  padding: 20px 16px;
  flex-grow: 1;
`;

const Title = styled.div`
  display: flex;
  justify-content: start;
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 3px;
`;

const GrayText = styled.div`
  font-size: 16px;
  font-weight: 800;
  color: #8b95a1;
`;

function SideBar({ activeCompany, setActiveCompany, companyList }) {
  const { setCompanyList} = useCompanyData();
  const { userData, setUserData } = useUser();

  // if(!userData || !activeCompany || !companyList)
  //   return <div>로딩 중...</div>

  return (
    <>
      <AppWrapper>
        <Container>
          <div>
            <div style={{ borderBottom: 'solid 1px', marginBottom: 30 }}>
              {userData && activeCompany && companyList && companyList.length > 0 && (
                <>
                  <Title>{userData.username + '님의 종목'}</Title>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'end',
                      marginBottom: 24,
                    }}>
                    <TotalSum />
                    <UpDownText
                      standard={SumList({ data: companyList, type: 'currentStockPrice' })}
                      comparision={SumList({ data: companyList, type: 'initialStockPrice' })} />
                  </div>
                  <div>
                    {companyList.map((item) => (
                      <CompanyList
                        key={item.id}
                        name={item.name}
                        logo={item.logo.url}
                        buyPrice={item.initialStockPrice}
                        currentPrice={item.currentStockPrice}
                        onClick={() => setActiveCompany(item)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            <CreateCompany companyData={companyList} setCompanyData={setCompanyList}>
              회사 상장하기
            </CreateCompany>
          </div>
        </Container>
      </AppWrapper>
    </>
  );
  
}

export default SideBar;
