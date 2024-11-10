import styled from 'styled-components';
import UpDownText from '../../../../components/UpDownText';
import { useCompanyData } from '../../../../hooks/useCompanyData';
import { useEffect, useState } from 'react';
import { API } from '../../../../api/axios';
import { useChartData } from '../../../../hooks/useChart';

const ButtonBox = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 5px;
  width: 320px;

  &:hover {
    background-color: #d5d5d5;
    border: 0;
  }

  &:focus {
    outline: 0;
  }
`;

const LogoImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  object-fit: cover;
  margin-right: 8px;
`;

const ChangeText = styled.div`
  font-size: 15px;
  color: ${props => (props.value > 0 ? 'red' : props.value < 0 ? 'blue' : 'grey')};
`;

function CompanyList({ name, logo, companyId, initialStockPrice, investmentAmount, onClick, initialStockQuantity }) {
  const { companyList, activeCompany } = useCompanyData();
  const [sidecompany, setSideCompany] = useState(null);
  const { chartData } = useChartData();

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await API.get(`/company/${companyId}/charts`);
        setSideCompany(response.data);
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    fetchChartData();
  }, [chartData]);

  const calculateChange = () => {
    if (!sidecompany) return 0;
    return sidecompany.chartList[0].close * initialStockQuantity - investmentAmount;
  };

  const changeValue = calculateChange();
  const changeRate = ((changeValue / investmentAmount) * 100).toFixed(2);

  return (
    <>
      {companyList && activeCompany && sidecompany && (
        <ButtonBox onClick={onClick}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <LogoImage src={logo} alt={`${name} 로고`} />
            <div style={{ fontSize: 25, fontWeight: 'bold' }}>{name}</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <div style={{ fontSize: 20, fontWeight: 'bold' }}>{`${(sidecompany.chartList[0].close * initialStockQuantity).toLocaleString()}원`}</div>
            <div style={{ display: 'flex' }}>
              <ChangeText value={changeValue}>{changeValue > 0 ? `+${changeValue.toLocaleString()}` : changeValue.toLocaleString()}원</ChangeText>
              <ChangeText value={changeRate}>{changeRate > 0 ? `(+${changeRate}%)` : `(${changeRate}%)`}</ChangeText>
            </div>
            <div style={{ fontSize: 15, color: 'grey' }}>{`${sidecompany.chartList[0].close}원*${initialStockQuantity}주`}</div>
          </div>
        </ButtonBox>
      )}
    </>
  );
}

export default CompanyList;
