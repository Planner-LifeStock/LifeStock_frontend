import styled from "styled-components";

const MentContainer = styled.div`
  position: absolute;
  top : 140px;
  left : 133px;
  padding: 10px;
`

const Font = styled.div`
  font-size: 64px;
  font-weight: bold;
  text-align: right;
`

const userData = {
    name : '최정혁',
    // 티어 바꿔줄 가격?
}

const userTier = {
    ...userData,

}

function RankMent()
{
    return (
        <MentContainer>
            <div>
                <Font>{userData.name}님은 <br />'청년창업가'입니다</Font>
            </div>
        </MentContainer>
    )
}
export default RankMent;