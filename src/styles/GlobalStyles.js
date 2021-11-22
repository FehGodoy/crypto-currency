import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;        
}
html, body, #root{
    height: 100%;
    background-color: var(--boxCrypto);
    font-family: var(--fontDefault);
    scroll-behavior: smooth;
    overflow-x: hidden;
    
}
*, button, input {
    border: 0;
    outline: 0;
}
:root {
    --background: #000617;
    --secondColor: #F5F4F6;
    --white: #ffffff;
    --fontDefault: 'Poppins', sans-serif;
    --black: #000000;    
    --boxCrypto: #010205;
}

/* ::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);	
} */


`;