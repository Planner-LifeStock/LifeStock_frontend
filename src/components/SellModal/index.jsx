import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalContainer, ModalContent } from '../CreateCompanyModal/style';
import { light_bulb } from '../../assets';
import { useCompanyData } from '../../hooks/useCompanyData';
import { API } from '../../api/axios';
import { setDeletedRecord } from '../../api/deleteapi';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SellButton = styled.button`
  background-color: ${props => (props.disabled ? '#929292' : '#3182F6')};
  color: #ffffff;
  border-radius: 10px;
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
  const [deletedRecord, setDeletedRecord] = useState(null);

  const sellData = { item };

  const calculateDays = (listedDate) => {
    const listedDateObj = new Date(listedDate);
    const currentDate = new Date();
    const timeDifference = currentDate - listedDateObj;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  };

  const calSellDate = (leastOperatePeriod) => {
    const minSellDate = {
      "ONE_WEEK": 7,
      "TWO_WEEK": 14,
      "ONE_MONTH": 30,
    };
    return minSellDate[leastOperatePeriod];
  };

  if (!companyList) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      {activeCompany && (
        <>
          <SellButton
            disabled={calculateDays(activeCompany.listedDate) < calSellDate(activeCompany.leastOperatePeriod)}
            onClick={() => setPopupOpen(true)}
          >
            스톡옵션 매각하기
          </SellButton>

          {popupOpen && (
            <ModalContainer>
              <ModalContent style={{ maxWidth: '700px', maxHeight: '400px', padding: '10px' }}>
                <div style={{ fontSize: '35px', marginTop: '20px' }}>
                  회사 <span style={{ fontWeight: 'bold' }}>'{item.name}'</span>을 매각하시겠습니까?
                </div>
                <h3 style={{ marginTop: '80px' }}>
                  <img
                    src={light_bulb}
                    style={{ width: '12px', height: '20px', marginRight: '10px' }}
                    alt="Tip"
                  />
                  매각 후에는 복구가 되지 않으니 신중하게 선택하세요!
                </h3>
                <h3 style={{ marginBottom: '100px' }}>
                  매각 후에도 '운영기록'란에서 기록을 확인할 수 있어요.
                </h3>
                <Container>
                  <SellButton
                    style={{ height: '50px', width: '150px', marginLeft: '0px' }}
                    onClick={() => {
                      setDeletedRecord(item);
                      API.delete(`/company/${item.id}`, { data: { sellData } })
                        .then(() => {
                          window.location.reload();
                        })
                      setPopupOpen(false);
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
      )}
    </>
  );
};

export default SellCompany;
