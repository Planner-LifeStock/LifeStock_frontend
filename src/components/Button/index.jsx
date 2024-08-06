import { Children } from "react";
import styled from "styled-components";

const ButtonContainer =styled.button`
    background-color: #3181F8;
    color: #fff;
    height: 40px;
    border-radius: 10px;
    
    font-size: 20px;
    font-weight: 600;

    display: flex;
    align-items: center;
    justify-content: center;


`



function Button (
    {children}
){
    return(
        <ButtonContainer>
            {children}
        </ButtonContainer>
    )
}

export default Button;