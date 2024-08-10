import styled from "styled-components";
import { nvidia_logo } from "../../assets";
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



function CompanyList(){
    return(
        <ButtonBox>
            <div style={{display:'flex', alignItems:"center"}}>
                <img src={nvidia_logo} height='30px' style={{borderRadius:'100%', marginRight:8}}/>
                <div>아침운동</div>
            </div>
            <div style={{textAlign:'right'}}>
                <div>12,345원</div>
                <UpDownText>-560 (-3.8%)</UpDownText>
            </div>
        </ButtonBox>
    )
}

export default CompanyList;