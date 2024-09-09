import styled from "styled-components";
import { human } from '../../assets'

const Image = styled.div`
  position: absolute;
  top: 327px;
  left: 14px;
  width: 695px;
  overflow: hidden;
`

const StyledImg = styled.img`
  width: 100%;
  height: auto;
`

function TierImage()
{
    return (
        <Image>
            <StyledImg src={human}/>
        </Image>
    )
}

export default TierImage;