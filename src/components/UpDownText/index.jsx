import styled from "styled-components";


const RiseText=styled.div`
    
`

const FallText=styled.div`
    font-size: 13px;
    color: #3181F8;
    font-weight: 600;
`

// [todo] Text의 값이 양수이냐 음수이냐에 따라서 FallText, RiseText로 바꿔야함. 조건문 적용
function UpDownText(
    {children}
){
    return(
        <FallText>
            {children}
        </FallText>
    )
}

export default UpDownText;