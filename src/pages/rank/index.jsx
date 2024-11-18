import styled from 'styled-components';

import Ranking from './components/Ranking';
import UserInfo from './components/UserInfo';

import { useRanking } from '../../hooks/useRanking';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const RankPage = () => {
  return (
    <div style={{backgroundColor: 'white', height: '100vh'}}>
      <Container>
        <UserInfo />
        <Ranking />
      </Container>
    </div>
  );
};

export default RankPage;
