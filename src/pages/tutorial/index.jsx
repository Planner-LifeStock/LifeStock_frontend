import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { money, usercompany, usersell, companytodo } from '../../assets';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 100px;
  font-weight: bold;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? '#007bff' : '#666')};
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
  height: 50px;
  width: 150px;

  transition: all 0.3s ease;
  
  &:focus {
    border: none;
    outline: none;
  }
  
  &:hover {
    opacity: 0.5;
  }
`;

const Image = styled.img`
  width: 200px;
  height: auto;
`;

const BlueFont = styled.span`
  font-size: 100px;
  font-weight: bold;
  color: #3182f6;
`

function Tutorial() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const Pages = [
    {
      content: (
        <div style = {{backgroundColor: 'white'}}>
          <Title style={{textAlign: 'start', marginBottom: '100px'}}><BlueFont>LIFESTOCK</BlueFont>은<br/>
          <BlueFont>주식게임</BlueFont>을 즐길 수 있는<br/>
          <BlueFont>일정관리 서비스</BlueFont>입니다.</Title> 
        </div>
      ),
      buttons: <Button primary onClick={() => setPage(1)}>다음</Button>,
    },
    {
      content: (
        <div style = {{backgroundColor: 'white'}}>
          <Image src = {money} alt="money" />
          <Title style={{fontSize: '60px', marginBottom: '100px'}}>당신에겐 <BlueFont style={{fontSize: '60px'}}>1000만원</BlueFont>의 초기자본금이 있습니다.</Title>
        </div>
      ),
      buttons: (
      <div style = {{backgroundColor: 'white'}}>
        <Button onClick={() => setPage(0)}>뒤로가기</Button>
        <Button primary onClick={() => setPage(2)}>다음</Button>
      </div>
      ),
    },
    {
      content: (
        <div style = {{backgroundColor: 'white'}}>
          <Image style={{width: '800px'}} src={usercompany} alt="usercompany" />
          <Subtitle style={{fontSize: '40px', marginBottom: '-20px'}}>당신은 창업 멤버로서 <BlueFont style={{fontSize: '40px'}}>투자</BlueFont>를 통해 <BlueFont style={{fontSize: '40px'}}>회사를 상장</BlueFont>합니다.</Subtitle>
          <Subtitle style={{fontSize: '40px'}}>그리고 투자금에 따른 <BlueFont style={{fontSize: '40px'}}>주식(스톡옵션)을 부여</BlueFont>받습니다.</Subtitle>
          <Subtitle style={{fontSize: '20px'}}>여기서 <BlueFont style={{fontSize: '20px'}}>회사</BlueFont>란 <BlueFont style={{fontSize: '20px'}}>할 일의 큰 주제</BlueFont>를 의미합니다.</Subtitle>
        </div>
      ),
      buttons: (
        <div style = {{backgroundColor: 'white'}}>
          <Button onClick={() => setPage(1)}>뒤로가기</Button>
          <Button primary onClick={() => setPage(3)}>다음</Button>
        </div>
      ),
    },
    {
      content: (
        <div style = {{backgroundColor: 'white'}}>
          <Image style={{width: '1000px'}} src={usersell} alt="usersell" />
          <Subtitle style={{fontSize: '40px', marginBottom: '-20px'}}>이제 당신은 회사의 할 일인 <BlueFont style={{fontSize: '40px'}}>TODO</BlueFont>를 추가하고,</Subtitle>
          <Subtitle style={{fontSize: '40px'}}>업무를 수행하게 됩니다.</Subtitle>
          <Subtitle style={{fontSize: '20px'}}>여기서 <BlueFont style={{fontSize: '20px'}}>TODO</BlueFont>란 <BlueFont style={{fontSize: '20px'}}>작은 의미의 할 일</BlueFont>을 의미합니다.</Subtitle>
        </div>
      ),
      buttons: (
        <div style = {{backgroundColor: 'white'}}>
          <Button onClick={() => setPage(2)}>뒤로가기</Button>
          <Button primary onClick={() => setPage(4)}>다음</Button>
        </div>
      ),
    },
    {
      content: (
        <div style = {{backgroundColor: 'white'}}>
          <Image style={{width: '1000px'}} src={companytodo} alt="companytodo" />
          <Subtitle style={{fontSize: '50px'}}>정리하면, 회사는 TODO의 <BlueFont style={{fontSize: '50px'}}>주제</BlueFont>를 의미합니다.</Subtitle>
        </div>
      ),
      buttons: (
        <div style = {{backgroundColor: 'white'}}>
          <Button onClick={() => setPage(3)}>뒤로가기</Button>
          <Button primary onClick={() => setPage(5)}>다음</Button>
        </div>
      ),
    },
    {
      content: (
        <div style = {{backgroundColor: 'white'}}>
          <Title style={{textAlign: 'start', marginBottom: '50px', fontSize: '80px'}}>보유한 회사의 <BlueFont style={{fontSize: '80px'}}>주가를 올리고,</BlueFont><br/>
          <BlueFont style={{fontSize: '80px'}}>주식을 매각하며</BlueFont> 자산을 불려나가세요!
          </Title> 
        </div>
      ),
      buttons: (
        <div style = {{backgroundColor: 'white'}}>
          <Button onClick={() => setPage(4)}>뒤로가기</Button>
          <Button
            primary
            onClick={() => {
              navigate('/');
              window.location.reload();
            }}
          >
            메인으로
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Container>
      {Pages[page].content}
      <div>{Pages[page].buttons}</div>
    </Container>
  );
}

export default Tutorial;