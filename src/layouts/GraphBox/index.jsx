import styled from "styled-components"
import { nvidia_logo } from "../../assets"
import UpDownText from "../../components/UpDownText"
import CandleStick from "../../components/Candlestick"

const Container=styled.div`
    padding: 20px;
`

const TitleBox=styled.div`
    display: flex;
    justify-content: start;
    align-items: end;
    min-height: 60px;
`
const PriceBox=styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    min-height: 120px;
`


function GraphBox(
    {
        data
    }
){
    return (
        <Container>
            <TitleBox>
                <img src={data.logo} height='50px' style={{borderRadius:'100%', marginRight:8}}/>
                <div style={{fontSize:30, fontWeight: 600}}>{data.name}</div>
            </TitleBox>
            <PriceBox>
                <div style={{fontSize:50, fontWeight:600, marginRight:20}}>{data.currentPrice.toLocaleString()}</div>
                {/* [todo] 계산 함수 만들기 */}
                <UpDownText fontSize={30}>{(data.currentPrice-data.buyPrice).toLocaleString()} ({((data.currentPrice/data.buyPrice-1)*100).toFixed(1)}%)</UpDownText>
            </PriceBox>
            <CandleStick chartData={data.chartData}/>
        </Container>
    )
}

export default GraphBox