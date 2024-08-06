import styled from "styled-components";
import MainPageLayout from "../layouts/mainPageLayout";
import SideBar from "../layouts/SideBar";

const Container =styled.div`
    display: flex;
`

function MainPage(){
    return (
        <Container>
            <MainPageLayout />
        </Container>
    )
}

export default MainPage;