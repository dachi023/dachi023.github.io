import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fff;
    color: #30336b;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 1.4rem;
  }
  a {
    color: #227093;
  }
  ul, ol {
    list-style: none;
  }
  hr {
    margin: 1.8rem 0;
  }
`

export default GlobalStyle
