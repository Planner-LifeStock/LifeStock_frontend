import styled from 'styled-components'
import SumList from '../../function/calculation/sumList'

const GrayText = styled.div`
  font-size: 16px;
  font-weight: 800;
  color: #8b95a1;
`

function TotalSum({ data }) {
  return (
    <GrayText>
      총 {SumList({ data: data, type: 'buyPrice' }).toLocaleString()}원
    </GrayText>
  )
}

export default TotalSum
