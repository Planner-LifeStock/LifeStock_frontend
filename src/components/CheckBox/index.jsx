import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  margin-bottom: 10px;
  border-radius: 16px;
  background-color: #ddedff;
  height: 50px;
  font-size: 20px;
`;

function CheckBox({ completed, title, level, onChange }) {
  return (
    <Container>
      <div>
        <input className="custom-checkbox" type="checkbox" checked={completed} onChange={onChange} />
        {title}
      </div>
      <div style={{ display: 'flex', fontSize: '20px' }}>
        <div style={{ marginRight: 5 }}>{level}</div>
      </div>
    </Container>
  );
}

export default CheckBox;
