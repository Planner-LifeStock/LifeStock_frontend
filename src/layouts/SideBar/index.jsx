import styled from "styled-components";
import CompanyList from "../../components/CompanyList";
import UpDownText from "../../components/UpDownText";
import Button from "../../components/Button";
import { nvidia_logo } from "../../assets";

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    box-shadow: -5px 0 16px 0 rgba(0, 0, 0, 0.08);
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 328px;
    background-color: #F6F7F9;
    padding: 20px 16px;
    flex-grow: 1;
`;

const Title=styled.div`
    display: flex;
    justify-content: start;
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 3px;
`

const GrayText=styled.div`
    font-size: 16px;
    font-weight: 800;
    color: #8B95A1;
`


const UserData={
    name: '박주영',
}


function SideBar (
    {
        companyData
    }
){
    return (
        <AppWrapper>
            <Container>
                <div>
                    <div style={{borderBottom:'solid 1px', marginBottom:30}}>
                        <Title>{UserData.name}님의 종목</Title>
                        <div style={{display:'flex', justifyContent:'space-between', alignItems:'end', marginBottom: 24}}>
                            <GrayText>총 1,234,567원</GrayText>
                            <UpDownText>-124,567 (-10.7%)</UpDownText>
                        </div>
                    </div>
                    <div>
                        {companyData.map(({name,logo,buyPrice,currentPrice}, index)=>{
                            return(
                                <CompanyList key={index} name={name} logo={logo} buyPrice={buyPrice} currentPrice={currentPrice}/>
                            )
                        })}
                    </div>
                </div>
                <Button>회사 상장하기</Button>
            </Container>
        </AppWrapper>
    )
}

export default SideBar;