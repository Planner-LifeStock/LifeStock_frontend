import React from 'react';
import styled from 'styled-components';
import FirstPageImage from './images/FirstPage.png'; // 이미지 파일을 import

const FullPageImage = styled.img`
  width: 100vw; /* 화면 너비 */
  height: 100vh; /* 화면 높이 */
  object-fit: cover; /* 비율 유지하며 꽉 채우기 */
  position: absolute;
  top: 0;
  left: 0;
`;

function Tutorial() {
  return (
    <FullPageImage src={FirstPageImage} alt="FirstPage" />
  );
}

export default Tutorial;