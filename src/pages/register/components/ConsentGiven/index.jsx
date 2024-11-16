import { useState } from "react";
import styled from "styled-components";

import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../../../../hooks/useRegister";

import RegisterBox from "../RegisterBox";

import Button from "../../../../components/Button";
import InputBox from "../../../../components/InputBox";

const RegisterEdge = styled.div`
  width: 100%;
  height: 90vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 40px;
  background-color: white;
  border-radius: ${(props) => props.theme.border.radius.small};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const MainTitle = styled.h1`
  font-size: 32px;
  font-weight: ${(props) => props.theme.font.weight.bold};
  margin-bottom: 10px;
  color: #000;
`;

const SubTitle = styled.h2`
  font-size: ${(props) => props.theme.font.size.xLarge};
  margin-bottom: 20px;
  color: #333;
`;

const LoginLink = styled.a`
  margin-top: 20px;
  font-size: ${(props) => props.theme.font.size.primary};
  color: #333;
  cursor: pointer;
  display: block;
`;

const linkStyles = {
    marginTop: '20px',
    fontSize: '16px',
    color: '#333',
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'block',
}

const ConsentGiven = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isConsentGiven, setIsConsentGiven] = useState(false);
  const navigate = useNavigate();

  const handleConsent = () => {
    if (isChecked) {
      setIsConsentGiven(true);
    } else {
      alert("개인정보 수집 및 이용에 동의해야 진행할 수 있습니다.");
    }
  };

  return (
    <>
    {isConsentGiven ? (
      <RegisterBox />
        ) : (
      <RegisterEdge>
        <MainTitle>[개인정보 수집 및 이용 동의서]</MainTitle>
        <SubTitle>
          귀하의 개인정보는 학회 프로젝트 참여와 관련된 목적으로 수집·이용됩니다.
        </SubTitle>
        <div>
          <h3>1. 수집 항목: 이름, 전화번호, 이메일</h3>
          <h3>2. 수집 목적: 프로젝트 참여 관리</h3>
          <h3>3. 보유 기간: 프로젝트 종료 후 1년간 보관 후 파기</h3>
          <h3>4. 개인정보 제공: 수집된 정보는 제3자에게 제공되지 않습니다.</h3>
        </div>
        <div style={{ marginBottom: "30px" }}>
          <label>
            <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            />
              본인은 개인정보 수집 및 이용에 동의합니다.
          </label>
        </div>
        <Button onClick={handleConsent} style={linkStyles}>
          동의함
        </Button>
      </RegisterEdge> 
    )}
    </>
    );
};

export default ConsentGiven;