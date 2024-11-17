import styled from 'styled-components';

import SumList from '../../../../function/calculation/sumList';
import SellCompany from '../SellModal';
import { useUser } from '../../../../hooks/useUser';
import { useCompanyData } from '../../../../hooks/useCompanyData';
import UpDownText from '../../../../components/UpDownText';

import LoadingSpinner from '../../../../styles/LoadingSpinner';
import SellProfit from '../SellProfit';

const Container = styled.div`
  margin-top: 5px;

  display: flex;
  flex-direction: column;
`;

const FontContainer = styled.div`
  display: flex;
  align-items: center;

  margin-left: 50px;
  font-weight: ${props => props.theme.font.weight.bold};
`;

const MinContainer = styled.div`
  display: flex;
`;

const Font = styled.div`
  margin-top: 5px;
  font-size: 40px;
  font-weight: ${props => props.theme.font.weight.bold};
`;

const CompanyBox = styled.div`
  margin-top: ${props => (props.$isFirst ? '0px' : '10px')};
  padding: 20px;
  width: 100%;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.grey.border};
  border-radius: ${props => props.theme.border.radius.small};
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
`;

function MyCompany() {
  const { userData, setUserData } = useUser();
  const { companyList, setCompanyList, activeCompany, setActiveCompany, loading } = useCompanyData();

  const periodMap = {
    'ONE_WEEK' : '7일',
    'TWO_WEEK' : '14일',
    'ONE_MONTH' : '한달(30일)',
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Font style={{ marginRight: 'auto' }}>보유 주식</Font>
      <Container
        style={{
          borderRadius: '12px',
          padding: '0 0 10px 0',
          backgroundColor: '#D3D3D3',
        }}
      >
        <Container
          style={{
            borderRadius: '12px',
            padding: '10px',
            overflowY: 'auto',
            backgroundColor: '#D3D3D3',
            height: '480px',
          }}
        >
          {companyList.length === 0 ? (
            <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '20px', color: '#555' }}>보유중인 회사가 없습니다!</div>
          ) : (
            companyList.map((item, index) => (
              <CompanyBox key={item.id} $isFirst={index === 0}>
                <img
                  src={item.logo.url}
                  style={{
                    height: '150px',
                    width: '150px',
                    borderRadius: '50%',
                    marginLeft: '40px',
                  }}
                />
                <MinContainer style={{ flexDirection: 'column' }}>
                  <MinContainer style={{ marginLeft: '0px' }}>
                    <FontContainer>
                      <FontContainer
                        style={{
                          fontSize: '30px',
                          marginLeft: '0',
                          maxWidth: '200px',
                          minWidth: '200px',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                          overflow: 'hidden',
                          display: 'inline-block',
                        }}
                      >
                        {item.name}
                      </FontContainer>
                      <FontContainer
                        style={{
                          fontSize: '18px',
                          maxWidth: '250px',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                          overflow: 'hidden',
                        }}
                      >
                        (회사 info) - {item.description}
                      </FontContainer>
                    </FontContainer>
                  </MinContainer>
                  <MinContainer style={{ marginLeft: '0px', justifyContent: 'center', alignItems: 'center' }}>
                    <MinContainer style={{ flexDirection: 'column', marginTop: '10px' }}>
                      <FontContainer>
                        상장일:&nbsp;
                        <span style={{ color: '#5A5A5A' }}>{new Date(item.createdAt).toLocaleDateString('ko-KR')}</span>
                      </FontContainer>
                      <FontContainer style={{ marginTop: '10px' }}>
                        발행주식 수:&nbsp;<span style={{ color: '#5A5A5A' }}>100주</span>
                      </FontContainer>
                    </MinContainer>
                    <MinContainer style={{ flexDirection: 'column', marginTop: '10px' }}>
                      <FontContainer>
                        상장가:&nbsp;
                        <span style={{ color: '#5A5A5A' }}>{parseInt(item.initialStockPrice).toLocaleString()}원</span>
                      </FontContainer>
                      <FontContainer style={{ marginTop: '10px' }}>
                        현재가:&nbsp;
                        <span style={{ color: '#5A5A5A' }}>{parseInt(item.currentStockPrice).toLocaleString()}원</span>
                      </FontContainer>
                    </MinContainer>
                    <MinContainer style={{ flexDirection: 'column', marginTop: '10px' }}>
                      <FontContainer>
                        투자비용:&nbsp;
                        <span style={{ color: '#5A5A5A' }}>{parseInt(item.investmentAmount).toLocaleString()}원</span>
                      </FontContainer>
                      <FontContainer style={{ marginTop: '10px' }}>
                        최소운영기간:&nbsp;
                        <span style={{ color: '#5A5A5A' }}>{periodMap[item.leastOperatePeriod]}</span>
                      </FontContainer>
                    </MinContainer>
                    <MinContainer style={{ flexDirection: 'column', alignItems: 'center', marginLeft: '210px' }}>
                      <div
                        style={{
                          fontSize: '40px',
                          marginTop: '-35px',
                          fontWeight: 'bold',
                        }}
                      >
                        주식매각예상손익
                      </div>
                      <SellProfit companyId={item.id} />
                    </MinContainer>
                  </MinContainer>
                </MinContainer>
                <SellCompany item={item} />
              </CompanyBox>
            ))
          )}
        </Container>
      </Container>
    </>
  );
}

export default MyCompany;
