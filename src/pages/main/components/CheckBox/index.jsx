import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px 10px;
  margin-bottom: 10px;

  height: 50px;
  width: 320px;

  border-radius: ${(props) => props.theme.border.radius.small};
  background-color: #ddedff;
  font-size: ${(props) => props.theme.font.size.large};
`

const TodoName = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 150px;
  display: inline-block;
`

function CheckBox({ completed, title, level, onChange }) {
  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center'}}>
        <input className="custom-checkbox" type="checkbox" checked={completed} onChange={onChange}/>
        <TodoName>{title}</TodoName>
      </div>
      <div style={{ display: 'flex', fontSize: '20px' }}>
        <div style={{ marginRight: 5 }}>{level}</div>
      </div>
    </Container>
  );
}

export default CheckBox;
