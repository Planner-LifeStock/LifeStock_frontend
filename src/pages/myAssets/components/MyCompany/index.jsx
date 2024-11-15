import styled from 'styled-components';

import SumList from '../../../../function/calculation/sumList';
import SellCompany from '../SellModal';
import { useUser } from '../../../../hooks/useUser';
import { useCompanyData } from '../../../../hooks/useCompanyData';
import UpDownText from '../../../../components/UpDownText';

import LoadingSpinner from '../../../../styles/LoadingSpinner';

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
  const { companyList, setCompanyList, activeCompany, setActiveCompany } = useCompanyData();

  if (!companyList || !activeCompany) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <>
        <Font style={{ marginRight: 'auto' }}>보유 스톡옵션</Font>
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
            {companyList.map((item, index) => (
              <CompanyBox key={item.id} $isFirst={index === 0} style={{ alignItems: 'center' }}>
                <img src={item.logo.url} style={{ height: '150px', width: '150px', borderRadius: '50%', marginLeft: '70px' }} />
                <MinContainer style={{ flexDirection: 'column' }}>
                  <MinContainer style={{ marginLeft: '-100px' }}>
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
                  <MinContainer style={{ marginLeft: '-100px', justifyContent: 'center', alignItems: 'center' }}>
                    <MinContainer style={{ flexDirection: 'column', marginTop: '10px' }}>
                      <FontContainer>
                        상장일:&nbsp;<span style={{ color: '#5A5A5A' }}>{new Date(item.createdAt).toLocaleDateString('ko-KR')}</span>
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
                        현재가:&nbsp;<span style={{ color: '#5A5A5A' }}>{parseInt(item.currentStockPrice).toLocaleString()}원</span>
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
                    <MinContainer style={{ flexDirection: 'column', alignItems: 'center', marginLeft: '210px' }}>
                      <div style={{ fontSize: '40px', marginTop: '-35px', fontWeight: 'bold' }}>회사매각예상손익</div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontSize: '40px', fontWeight: 'bold', marginRight: '10px' }}>
                          {console.log(item)}
                          {Math.floor(
                            (item.investmentAmount * (item.currentStockPrice - item.initialStockPrice)) / item.initialStockPrice
                          ).toLocaleString()}
                        </span>
                        <UpDownText standard={item.initialStockPrice} comparision={item.currentStockPrice} fontSize={40} />
                      </div>
                    </MinContainer>
                  </MinContainer>
                </MinContainer>
                <SellCompany item={item} />
              </CompanyBox>
            ))}
          </Container>
        </Container>
      </>
    </>
  );
}

export default MyCompany;
