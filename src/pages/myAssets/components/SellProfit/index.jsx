import styled from 'styled-components';
import UpDownText from '../../../../components/UpDownText';
import { useCompanyData } from '../../../../hooks/useCompanyData';
import { useEffect, useState } from 'react';
import { API } from '../../../../api/axios';
import { useChartData } from '../../../../hooks/useChart';

function SellProfit({companyId}) {
    const { companyList, activeCompany } = useCompanyData();
    const [sidecompany, setSideCompany] = useState(null);
    const [standard, setStandard] = useState(0);
    const [comparision, setComparision] = useState(0);
  
    useEffect(() => {
      const fetchCompanyData = async () => {
        try {
          const response = await API.get(`/company/${companyId}`);
          setSideCompany(response.data);
          setStandard(response.data.initialStockPrice);
          setComparision(response.data.currentStockPrice);
        } catch (error) {
          console.error('Error fetching company data:', error);
        }
      };
  
      fetchCompanyData();
    }, [companyList]);
  
    const calculateChange = () => {
      if (!sidecompany) return 0;
      return (sidecompany.investmentAmount * (sidecompany.currentStockPrice - sidecompany.initialStockPrice)) / sidecompany.initialStockPrice;
    };
  
    const changeValue = calculateChange();

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span
            style={{
            fontSize: '40px',
            fontWeight: 'bold',
            marginRight: '10px',
            }}
          >
            {changeValue.toLocaleString()}
          </span>
          <UpDownText
            standard={standard}
            comparision={comparision}
            fontSize={40}
          />
        </div>
    )
}

export default SellProfit;