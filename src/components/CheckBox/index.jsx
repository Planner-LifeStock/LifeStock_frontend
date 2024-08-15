import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  margin-bottom: 10px;

  background-color: yellow;
  height: 50px;
  font-size: 20px;
`

function CheckBox({ checked, name, level, type, onChange }) {
  //[todo] 체크가 되면 backend로 checked내용을 바꿔야함.

  return (
    <Container>
      <div>
        <input
          className="custom-checkbox"
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        {name}
      </div>
      <div style={{ display: 'flex', fontSize: '20px' }}>
        <div style={{ marginRight: 5 }}>{level}</div>
        <div>{type}</div>
      </div>
    </Container>
  )
}

export default CheckBox
