import styled from "styled-components"
import SideBar from "../layouts/SideBar";

import TodoList from "../layouts/TodoList";
import GraphBox from "../layouts/GraphBox";

const Container = styled.div`
    display: flex;
    padding: 10px;
`

const EventContainer=styled.div`
    display: flex;
    height: 100vh;
    background-color: #fffbfd;
    flex:3 1 0;
    
`


function MainPage(){
    return(
        <Container>
            <EventContainer>
                <div style={{flex:3}}>
                    <GraphBox/>
                </div>
                <div style={{flex:1}}>
                    <TodoList/>
                </div>
            </EventContainer>
            <SideBar/>
        </Container>
    )
}

export default MainPage;