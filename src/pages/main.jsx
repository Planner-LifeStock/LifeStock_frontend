import styled from "styled-components"
import SideBar from "../layouts/SideBar";
import TodoList from "../layouts/TodoList";
import GraphBox from "../layouts/GraphBox";
import { nvidia_logo } from "../assets";

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

const companyData=[
    {
        name:'아침운동',
        logo:nvidia_logo,
        buyPrice:12345,
        currentPrice:15000,
        chartData : [
            ["Date", "Low", "Open", "Close", "High"],
            ["8/10", 73000, 75000, 78000, 81000],
            ["8/11", 81000, 83000, 85000, 95000],
            ["8/12", 82000, 84000, 81000, 97000],
            ["8/13", 79000, 81000, 80000, 86000],  
            ["8/14", 81000, 83000, 84000, 89000],  
            ["8/15", 82000, 84000, 83000, 88000],  
            ["8/16", 80000, 82000, 85000, 87000],  
            ["8/17", 81000, 82000, 81000, 86000],  
            ["8/18", 78000, 79000, 81000, 85000],  
            ["8/19", 82000, 84000, 83000, 87000],  
            ["8/20", 81000, 82000, 80000, 86000],  
            ["8/21", 80000, 81000, 82000, 87000],  
            ["8/22", 79000, 80000, 81000, 85000],
            // ["8/23", 99000, 90000, 181000, 85000],
            // ["8/24", 180000, 180000, 281000, 291000],
          ]
    },
    {
        name:'밥먹기',
        logo:nvidia_logo,
        buyPrice:55555,
        currentPrice:40000
    },
    {
        name:'숨쉬기',
        logo:nvidia_logo,
        buyPrice:11111,
        currentPrice:17000
    },
]



function MainPage(){
    return(
        <Container>
            <EventContainer>
                <div style={{flex:3}}>
                    <GraphBox companyData={companyData}/>
                    {/* {console.log(companyData[0].chartData)} */}
                </div>
                <div style={{flex:1}}>
                    <TodoList/>
                </div>
            </EventContainer>
            <SideBar companyData={companyData}/>
        </Container>
    )
}

export default MainPage;