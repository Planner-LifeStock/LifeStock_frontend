import styled from "styled-components"
import SideBar from "./SideBar";

const Container = styled.div`
    display: flex;
    height: 300px;
`


function MainPageLayout(){
    return(
        <Container>
            <div>
                차트 contianer
            </div>
            <div>
                todoList container
            </div>
            <SideBar/>
        </Container>
    )
}

export default MainPageLayout;