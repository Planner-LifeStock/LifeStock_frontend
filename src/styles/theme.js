//[todo] 지금은 안쓰고 있지만 나중에 적용시키기


const theme={
    primary: 'blue',
    white:'#fff'


}

export const getTheme = (key)=>{
    //key값이 있고, theme 객체 안에 key 가 있다면 그 기본값을 내보내주고, 만약 없다면 gray900을 내보낸다.
    return key && theme[key] ? theme[key]:theme.gray900;
}

export default theme;