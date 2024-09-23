import AssetInfo from "../layouts/AssetInfo";
import TopBar from "../layouts/TopBar"
import MyCompany from "../layouts/MyCompany";
import styled from "styled-components";
import { companyFirstData } from './main'

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 50px;
`
const MyAssetPage = () => {
    return (
      <>
        <TopBar/>
        <Container>
            <AssetInfo data={companyFirstData}/>
            <MyCompany data={companyFirstData}/>
        </Container>
      </>
    )
}

export default MyAssetPage
