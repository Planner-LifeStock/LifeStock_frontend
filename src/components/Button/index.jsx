import styled from "styled-components";
import { getTheme } from "../../styles/theme";

const ButtonContainer =styled.button`
    background-color: #3181F8;
    color: #fff;
    border-radius: 10px;
    
    font-size: 20px;
    font-weight: 600;

    display: flex;
    align-items: center;
    justify-content: center;

    width: ${({width})=>`${width}px`};
    height: ${({height})=>`${height}px`};

    &:hover{
        background-color: ${({hoverBackground})=>hoverBackground};
    }

`

//[todo] theme추가하기?

function Button (
    {children,width=320,height=40,hoverBackground="blue", hoverColor="#fff"}
){
    return(
        <ButtonContainer width={width} height={height} hoverBackground={hoverBackground} hoverColor={hoverColor}>
            {children}
        </ButtonContainer>
    )
}

export default Button;