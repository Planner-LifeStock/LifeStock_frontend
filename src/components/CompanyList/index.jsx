import styled from "styled-components";
import UpDownText from "../UpDownText";


const ButtonBox=styled.button`
    width: 320px;
    padding: 5,0;

    display: flex;
    justify-content: space-between;
    margin: 10px;

    &:hover{
        background-color: #d5d5d5;
    }
`


function CompanyList(
    {
        name, logo, currentPrice,buyPrice,onClick
    }
){
    return(
        <ButtonBox onClick={onClick}>
            <div style={{display:'flex', alignItems:"center"}}>
                <img src={logo} height='30px' style={{borderRadius:'100%', marginRight:8}}/>
                <div>{name}</div>
            </div>
            <div style={{textAlign:'right'}}>
                <div>{currentPrice}원</div>
                <UpDownText>-560 (-3.8%)</UpDownText>
            </div>
        </ButtonBox>
    )
}

export default CompanyList;