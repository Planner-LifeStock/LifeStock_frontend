import styled from 'styled-components';

import AssetInfo from './components/AssetInfo';
import MyCompany from './components/MyCompany';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
`;
const MyAssetPage = () => {
  return (
    <div style={{backgroundColor: 'white', height: '100vh'}}>
      <Container>
        <AssetInfo />
        <MyCompany />
      </Container>
    </div>
  );
};

export default MyAssetPage;
