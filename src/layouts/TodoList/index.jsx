import styled from "styled-components"
import Button from "../../components/Button"

const ContainerWrapper=styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

const Container=styled.div`
    width:328px;
    padding: 20px 16px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    flex-grow: 1;
`


function TodoList(){
    return(
        <ContainerWrapper>
            <Container>
                <div>
                    <h2>todoList</h2>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <button>왼쪽버튼</button>
                            <h3>8월 5일</h3>
                        <button>오른쪽버튼</button>
                    </div>
                    <div style={{height:'', backgroundColor:'rgb(165, 255, 165)'}}>
                        todolist1
                    </div>
                </div>
                <Button>할 일 추가하기</Button>
            </Container>
        </ContainerWrapper>
    )

}

export default TodoList