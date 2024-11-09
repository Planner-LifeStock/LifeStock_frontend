import styled from "styled-components";
import { human, startup, smallCompany, companyCEO } from '../../../../assets';

import { useUser } from '../../../../hooks/useUser';
import { useRanking } from '../../../../hooks/useRanking';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px;
`;

const MentFont = styled.div`
  text-align: right;
  font-size: 64px;
  font-weight: ${(props) => props.theme.font.weight.bold};
`;

function UserInfo() {
  const { userData } = useUser();
  const { userRanking } = useRanking();

  let TierImg, TierName;

  if (!userData) {
    return <div>로딩 중...</div>;
  }

  if (userRanking <= 10) {
    TierName = '대기업 사장님';
    TierImg = companyCEO;
  } else if (userRanking <= 20) {
    TierName = '중소기업 사장님';
    TierImg = smallCompany;
  } else {
    TierName = '스타트업 사장님';
    TierImg = startup;
  }

  return (
    <Container style={{ marginTop: "40px" }}>
      <MentFont>{userData.realName}님은 <br />'{TierName}'입니다</MentFont>
      <img src={TierImg} height="600px" alt={TierName} />
    </Container>
  );
}

export default UserInfo;