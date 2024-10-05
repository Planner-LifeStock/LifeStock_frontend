import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: -10px;
  color: gray;
`
const AssetText = styled.div`
  font-size: 40px;
  font-weight: 700;
`

function AssetBox({Text = ' ', Asset, unit = '원', box }) {
  return (
    <Container>
      <Title>{Text}</Title>
      <AssetText>
        {Asset.toLocaleString()}
        {unit}
      </AssetText>
    </Container>
  )
}

export default AssetBox
