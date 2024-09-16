import AssetInfo from "../layouts/AssetInfo";
import TopBar from "../layouts/TopBar"
import styled from "styled-components";
import { companyFirstData } from './main'

const Container = styled.div`
  display: flex;
  padding: 50px;
`
const MyAssetPage = () => {
    return (
      <>
        <TopBar/>
        <Container>
            <AssetInfo data={companyFirstData}/>
        </Container>
      </>
    )
}

export default MyAssetPage
