import styled from 'styled-components'
import UpDownText from '../UpDownText'
import { useCompanyData } from '../../hooks/useCompanyData'

const ButtonBox = styled.button`
  padding: 5px;
  width: 320px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  &:hover {
    background-color: #d5d5d5;
    border: 0;
  }

  &:focus {
    outline: 0;
  }
  }
`

function CompanyList({ name, logo, currentPrice, buyPrice, onClick }) {
  const { companyList, setCompanyList, activeCompany, setActiveCompany } = useCompanyData();
  
  return (
  <>
    {companyList && activeCompany && (
      <ButtonBox onClick={onClick}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={logo}
            height="30px"
            style={{ borderRadius: '100%', marginRight: 8 }}
          />
          <div style={{ fontSize: 20 }}>{name}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div>{currentPrice}원</div>
          <UpDownText standard={buyPrice} comparision={currentPrice}/>
        </div>
      </ButtonBox>
    )}
  </>
  )
}

export default CompanyList
