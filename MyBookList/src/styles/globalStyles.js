import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #121212;
    }
` 

export default globalStyle