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
    
){
    return (
        <Container>
            <TitleBox>
                <img src={nvidia_logo} height='50px' style={{borderRadius:'100%', marginRight:8}}/>
                <div style={{fontSize:30, fontWeight: 600}}>아침운동</div>
            </TitleBox>
            <PriceBox>
                <div style={{fontSize:50, fontWeight:600}}>73,134원</div>
                <UpDownText fontSize={30}>-560 (-3.8%)</UpDownText>
            </PriceBox>
            <CandleStick/>
        </Container>
    )
}

export default GraphBox