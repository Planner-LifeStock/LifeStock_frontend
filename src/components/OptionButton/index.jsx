import styled from 'styled-components';

const GroupButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  flex: 1;
  padding: 6px;
  min-height: 40px;

  font-size: 20px;
  font-weight: ${(props) => props.theme.font.weight.bold};

  border-radius: ${(props) => props.theme.border.radius.small};
  background-color: ${props => (props.$isSelect ? `#3181f8` : 'grey')};
  color: #fff;

  cursor: pointer;

  transition: all 0.3s ease;
  
  &:focus {
    border: none;
    outline: none;
  }
  
  &:hover {
    opacity: 0.5;
  }
`;

const ButtoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
  width: 100%;
  gap: 10px;
  margin-bottom: 10px;

  &:focus {
    border: none;
    outline: none;
  }
`;

const OptionButton = ({ OptionList, currentState, SetState, multiple = false }) => {
  const handleClick = option => {
    if (multiple) {
      SetState(prevState => {
        if (prevState.includes(option)) {
          return prevState.filter(selectOption => selectOption !== option);
        } else {
          return [...prevState, option];
        }
      });
    } else {
      SetState(option); // 선택된 옵션을 직접 SetState에 전달
    }
  };

  return (
    <ButtoContainer>
      {OptionList.map((name, index) => {
        const isSelected = multiple ? currentState.includes(name) : currentState === name;
        return (
          <GroupButton
            key={index}
            $isSelect={isSelected}
            onClick={() => handleClick(name)}
          >
            {name}
          </GroupButton>
        );
      })}
    </ButtoContainer>
  );
};

export default OptionButton;