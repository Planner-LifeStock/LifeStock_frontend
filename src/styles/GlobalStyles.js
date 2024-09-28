import { createGlobalStyle } from 'styled-components'
import { theme } from './ThemeStyles'

const GlobalStyles = createGlobalStyle`
  
  html, body, #root {
    margin: 0;
    padding: 0;
    border: 0;
    width: 100%;
    height: 100%;
    vertical-align: baseline;
    /* background-color: ${theme.colors.blue.primary} */
  }

  div {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    background: none;
    vertical-align: baseline;
  }

  textarea {
    background: none;
    border: none;
    line-height: 1.2;
    width: 100%;
    resize: none;
    overflow: hidden;
}

  textarea:focus {
    outline: none;
  }

  * {
    font-family: "Noto Sans KR", sans-serif;
    font-size: ${theme.font.size.primary};
    color: ${theme.colors.grey.primary};
    font-weight: ${theme.font.weight.primary};
    transition: all 0.3s ease;
  }
`

export default GlobalStyles
