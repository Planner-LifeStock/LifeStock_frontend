import React, { useState } from 'react';
import styled from 'styled-components';

import { light_bulb } from '../../../../assets';
import { useCompanyData } from '../../../../hooks/useCompanyData';
import { API } from '../../../../api/axios';

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 520px;
  height: 750px;
  padding: 15px;

  background-color: #ffffff;

  border-radius: ${props => props.theme.border.radius.small};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SellButton = styled.button`
  background-color: ${props => (props.disabled ? '#929292' : '#3182F6')};
  color: #ffffff;
  border-radius: ${props => props.theme.border.radius.small};
  border: none;
  transition: all 0.3s ease;
  margin-left: 100px;
  height: 12vh;

  &:focus {
    border: none;
    outline: none;
  }

  &:hover {
    opacity: ${props => (props.disabled ? 1 : 0.5)};
  }
`;

const SellCompany = ({ item }) => {
  const { companyList, activeCompany } = useCompanyData();
  const [popupOpen, setPopupOpen] = useState(false);

  const sellData = { item };

  const calculateDays = listedDate => {
    const listedDateObj = new Date(listedDate);
    const currentDate = new Date();
    const timeDifference = currentDate - listedDateObj;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  };

  const calSellDate = leastOperatePeriod => {
    const minSellDate = {
      ONE_WEEK: 7,
      TWO_WEEK: 14,
      ONE_MONTH: 30,
    };
    return minSellDate[leastOperatePeriod];
  };

  if (!companyList) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      <>
        <SellButton
          // disabled={calculateDays(new Date(item.createdAt)) < calSellDate(item.leastOperatePeriod)}
          onClick={() => setPopupOpen(true)}
        >
          주식 매각하기
        </SellButton>

        {popupOpen && (
          <ModalContainer>
            <ModalContent style={{ minWidth: '700px', maxHeight: '450px', padding: '10px' }}>
              <div style={{ fontSize: '35px', marginTop: '20px' }}>
                회사 <span style={{ fontSize: '35px', fontWeight: 'bold' }}>'{item.name}'</span>의 주식을 매각하시겠습니까?
              </div>
              <h3 style={{ marginTop: '30px' }}>
                <img src={light_bulb} style={{ width: '12px', height: '20px', marginRight: '10px' }} alt="Tip" />
                매각 후에는 복구가 되지 않으니 신중하게 선택하세요!
              </h3>
              <h3 style={{ marginBottom: '50px' }}>매각 후에도 '매매기록'란에서 기록을 확인할 수 있어요.</h3>
              <h3 style={{ marginBottom: '20px', fontWeight: 'bold' }}>‼️베타서비스 기간에는 최소 운영 기간과 관계없이 매각 가능합니다‼️</h3>
              <Container>
                <SellButton
                  style={{ height: '50px', width: '150px', marginLeft: '0px' }}
                  onClick={async () => {
                    try {
                      await API.put(`/company/${item.id}/list`, item);
                      setPopupOpen(false);

                      window.location.reload();
                    } catch (error) {
                      console.error('회사 매각 중 오류:', error);
                    }
                  }}
                >
                  회사 매각
                </SellButton>
                <SellButton
                  style={{
                    height: '50px',
                    width: '150px',
                    backgroundColor: '#929292',
                    marginLeft: '30px',
                  }}
                  onClick={() => setPopupOpen(false)}
                >
                  취소
                </SellButton>
              </Container>
            </ModalContent>
          </ModalContainer>
        )}
      </>
    </>
  );
};

export default SellCompany;
