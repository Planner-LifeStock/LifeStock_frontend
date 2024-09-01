import { useState } from 'react'
import styled from 'styled-components'

const GroupButton = styled.button`
  display: flex;
  flex: 1;
  padding: 6px;
  min-height: 40px;

  align-items: center;
  justify-content: center;

  font-size: 20px;
  font-weight: 600;
  /* #3181f8; */
  background-color: ${({ isSelect }) => (isSelect ? `#3181f8` : 'grey')};
  color: #fff;
  border-radius: 10px;
  border: none;
  outline: none;

  cursor: pointer;
`

const ButtoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  margin-bottom: 10px;
`

const OptionButton = ({ OptionList, currentState, SetState }) => {
  const handleClick = index => {
    SetState(prelevel => (prelevel === index ? null : index))
  }
  return (
    <ButtoContainer>
      {OptionList.map((name, index) => {
        return (
          <GroupButton
            key={index}
            isSelect={currentState === index}
            onClick={() => {
              handleClick(index)
            }}
          >
            {name}
          </GroupButton>
        )
      })}
    </ButtoContainer>
  )
}

export default OptionButton
