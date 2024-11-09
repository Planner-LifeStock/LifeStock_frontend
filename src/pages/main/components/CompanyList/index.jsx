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

function CompanyList({ name, logo, companyId, initialStockPrice, investmentAmount, onClick }) {
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

  return (
    <>
      {companyList && activeCompany && sidecompany && (
        <ButtonBox onClick={onClick}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <LogoImage src={logo} alt={`${name} 로고`} />
            <div style={{ fontSize: 20 }}>{name}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div>{investmentAmount.toLocaleString()}원</div>
            {/* {console.log(sidecompany)} */}
            <UpDownText standard={initialStockPrice * 100} comparision={sidecompany.chartList[0].high} />
          </div>
          {/* initialStockPrice=38866  sidecompany.chartList[0].high=4034880 */}
        </ButtonBox>
      )}
    </>
  );
}

export default CompanyList;
