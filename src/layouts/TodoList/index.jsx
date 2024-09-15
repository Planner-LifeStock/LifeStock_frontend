import styled from 'styled-components'
import Button from '../../components/Button'
import CheckBox from '../../components/CheckBox'
import CreateTodoModal from '../../components/CreatTodoModal'

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Container = styled.div`
  width: 328px;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`

function TodoList({ data, updateTodo }) {
  return (
    <ContainerWrapper>
      <Container>
        <div>
          <h2>todoList</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* <button>왼쪽버튼</button> */}
            <h2>8월 5일</h2>
            {/* <button>오른쪽버튼</button> */}
          </div>
          {data.map(({ checked, name, level, type }, index) => {
            return (
              <CheckBox
                key={index}
                checked={checked}
                name={name}
                level={level}
                type={type}
                onChange={() => {
                  updateTodo(index, !checked)
                }}
              />
            )
          })}
        </div>
        <CreateTodoModal />
      </Container>
    </ContainerWrapper>
  )
}

export default TodoList
