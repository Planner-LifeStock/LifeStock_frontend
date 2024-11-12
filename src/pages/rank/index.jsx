import styled from 'styled-components';

import Ranking from './components/Ranking';
import UserInfo from './components/UserInfo';

import { useRanking } from '../../hooks/useRanking';

const Container = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
`;

const RankPage = () => {
  return (
    <>
      <Container>
        <UserInfo />
        <Ranking />
      </Container>
    </>
  );
};

export default RankPage;
