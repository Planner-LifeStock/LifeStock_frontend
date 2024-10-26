import styled from "styled-components";

import AssetInfo from "./components/AssetInfo";
import MyCompany from "./components/MyCompany";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 50px;
`
const MyAssetPage = () => {
    return (
      <>
        <Container>
            <AssetInfo/>
            <MyCompany/>
        </Container>
      </>
    )
}

export default MyAssetPage
