import styled from 'styled-components'
import CompanyList from '../../components/CompanyList'
import UpDownText from '../../components/UpDownText'
import Button from '../../components/Button'
import { nvidia_logo } from '../../assets'
import TotalSum from '../../components/TotalSum'
import SumList from '../../function/calculation/sumList'
import CreateCompany from '../../components/CreateCompanyModal'

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-shadow: -5px 0 16px 0 rgba(0, 0, 0, 0.08);
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 328px;
  background-color: #f6f7f9;
  padding: 20px 16px;
  flex-grow: 1;
`

const Title = styled.div`
  display: flex;
  justify-content: start;
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 3px;
`

const GrayText = styled.div`
  font-size: 16px;
  font-weight: 800;
  color: #8b95a1;
`

const UserData = {
  name: '박주영',
}

function SideBar({ companyData, setCompany }) {
  return (
    <AppWrapper>
      <Container>
        <div>
          <div style={{ borderBottom: 'solid 1px', marginBottom: 30 }}>
            <Title>{UserData.name}님의 종목</Title>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'end',
                marginBottom: 24,
              }}
            >
              <TotalSum data={companyData} />
              {/* [todo] 총합 : 함수 만들기  */}
              {/* 현재가 합 - 매수가 합 계산 */}
              <UpDownText
                standard={SumList({ data: companyData, type: 'buyPrice' })}
                comparision={SumList({
                  data: companyData,
                  type: 'currentPrice',
                })}
              />
            </div>
          </div>
          <div>
            {companyData.map(
              ({ name, logo, buyPrice, currentPrice }, index) => {
                return (
                  <CompanyList
                    key={index}
                    name={name}
                    logo={logo}
                    buyPrice={buyPrice}
                    currentPrice={currentPrice}
                    onClick={() => setCompany(companyData[index])}
                  />
                )
              }
            )}
          </div>
        </div>
        <CreateCompany>회사 상장하기</CreateCompany>
      </Container>
    </AppWrapper>
  )
}

export default SideBar
