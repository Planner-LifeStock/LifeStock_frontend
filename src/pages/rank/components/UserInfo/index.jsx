import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { human, startup, smallCompany, companyCEO } from '../../../../assets';

import { useUser } from '../../../../hooks/useUser';
import { useRanking } from '../../../../hooks/useRanking';

import LoadingSpinner from '../../../../styles/LoadingSpinner';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const MentFont = styled.div`
  margin-top: 60px;
  text-align: left;
  font-size: 48px;
  font-weight: ${props => props.theme.font.weight.bold};
`;

function UserInfo() {
  const { userData } = useUser();
  const { ranking, setRanking, userRanking, setUserRanking } = useRanking();

  if (!Array.isArray(ranking) || !userData) {
    return <LoadingSpinner />;
  }

  let TierImg, TierName;

  console.log(userRanking)

  if (userRanking >= 0 && userRanking < 10) {
    TierName = '대기업 사장님';
    TierImg = companyCEO;
  } else if (userRanking >= 10 && userRanking < 20) {
    TierName = '중소기업 사장님';
    TierImg = smallCompany;
  } else {
    TierName = '스타트업 사장님';
    TierImg = startup;
  }

  return (
    <Container>
      <MentFont>{userData.realName}님은 <br />'{TierName}'입니다</MentFont>
      <img src={TierImg} height="600px" alt={TierName} />
    </Container>
  );
}

export default UserInfo;
