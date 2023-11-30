import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome

// Add icons to the library
library.add(faPaperPlane);


export const Body = styled.div`
    color: white;
    height: 100%;
`;
export const AppContainer = styled.div`
    height: 100vh;
    background: #0b141a;
`;

export const Header = styled.header`
    display: flex;
    justify-content: flex-start;
    background: #03040e;
    position: fixed;
    top: 0;
    width: 100%;
`;

export const Main = styled.div`
    margin-left: 1.5%;
    margin-bottom: 30px;
    padding-bottom: 30px;
    box-sizing: border-box;
`;

export const Section = styled.div`
`;


export const StyledContent = styled.div`
    background-color: #0b141a;
    padding: 20px;
    padding-top: 70px;
`;

export const ButtonLogin = styled.button`
    background-color: #3498db;
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    border-radius: 50px;
    margin: 70px 40px;

    &:hover {
        background-color: #007bb5;
    }
`;
export const ButtonLogout = styled.button`
    background-color: #3498db;
    color: #000;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    border-radius: 50px;
    height: 40px;
    position: absolute;
    top: 10%;
    right: 1.5%;
    transform: scale(.7);

    &:hover {
        background-color: #007bb5;
    }
`;

export const HeaderTitle = styled.h1`
    font-size: 1.2em;
    margin-left: 2.5%;
`;

export const InputMsg = styled.input`
    width: 60%;
    padding: 12px 20px;
    border-radius: 50px;
    background: #2a2d42;
    color: white;
    border: 0;
    outline: 0;
    border: 2px solid #3498db;

    &::placeholder {
        color: #FFF;
    }
    &:focus {
        background: #1b2b5c4f;
    }

    @media (min-width: 380px) {
        width: 70%;
    }
    @media (min-width: 500px) {
        width: 76%;
    }
    @media (min-width: 650px) {
        width: 80%;
    }
    @media (min-width: 768px) {
        width: 85%;
    }
    @media (min-width: 2500px) {
        width: 91.5%;
    }

`;

export const ButtonSubmit = styled.button`
    background: #2617dc;
    border: 0;
    padding: 10px 12px;
    border-radius: 50px;
    margin-left: 9px;
    cursor: pointer;

    @media (min-width: 500px) {
        margin-left: 10px;
    }
    @media (min-width: 768px) {
        margin-left: 20px;
    }
`;

export const StyledIcon = styled.div`
    font-size: 1.4em;
    color: black;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #03040e;
    z-index: 1;

`;

export const Message = styled.form`
    display: flex;
    margin-bottom: 20px;
    justify-content: flex-start;
    align-items: center;

    img {
        width: 50px;
        margin-right: 10px;
        border-radius: 50px;
    }
`;