import AssetInfo from "../layouts/AssetInfo";
import TopBar from "../layouts/TopBar"
import MyCompany from "../layouts/MyCompany";
import styled from "styled-components";

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
            <AssetInfo/>
            <MyCompany/>
        </Container>
      </>
    )
}

export default MyAssetPage
