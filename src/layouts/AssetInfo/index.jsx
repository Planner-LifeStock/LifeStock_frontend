import { Link } from "react-router-dom";
import styled from "styled-components";

const MaxContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`
const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: #444444;
`

const InfoFont = styled.div`
  font-size: 64px;
  font-weight: bold;
`

const CheckSellButton = styled.button`
    background-color: #3182F6;
    border-radius: 10px;
    border: none;
    transition: all 0.3s ease;

    margin-left: auto;
    margin-top: 30px;
    width: 200px;
    height: 40px;

    &:focus {
        border: none;
        outline: none;
    }

    &:hover {
        opacity: 0.5;
    }
`

const PriceBox = styled.div`
    padding: 10px;
    margin-top: 60px;
    min-width: 500px;
    max-width: 600px;

    display: flex;
    
    background-color: #EFEFEF;
    border-radius: 16px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);

    font-size: 20px;
    font-weight: bold;
`

const AssetInfo = ({data}) => {
    return (
      <MaxContainer>
        <Container>
          <InfoFont>{data[0].username} 님의 자산</InfoFont>
          <CheckSellButton><Link to="/salesrecords"
          style = {{color: "#FFFFFF",
                    fontSize: "15px",
                    fontWeight: "bold",
          }}>스톡옵션 매매 기록</Link></CheckSellButton>
        </Container>
        <Container>
          <PriceBox>총 자산</PriceBox>
        </Container>
      </MaxContainer>
    )
}

export default AssetInfo
