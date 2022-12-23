import React from 'react'
import styled from 'styled-components'

function Modal({open,onClose}) {
    if(!open) return null;
  return (
    <Overlay>
        <Mainform>
            <Button onClick={onClose}>X</Button>
            <MainComponent>
                <Name>Login</Name>
                <EmailInput placeholder='Email address' type="text"></EmailInput>
                <PasswordInput placeholder='Password' type="password"></PasswordInput>
                <LoginBtn>Log In</LoginBtn>
                <Line/>
                <GoauthBtn>Sign in with Google</GoauthBtn>
                <PhnloginBtn>Sign in with Phone</PhnloginBtn>
                <Popupsignup>Don't have an account? <a href='/'>Sign up</a></Popupsignup>
            </MainComponent>
        </Mainform>
    </Overlay>
    
  )
}
const Popupsignup=styled.div`
    margin: 10px 0px 10px;
    letter-spacing: normal;
    padding: 0px 40px;
    a{
        color: #0262f8;
        font-weight:500;
        font-size: 17px;
    }
`;
const Line=styled.div`
    background-color: rgba(0,0,0,0.5);
    height: 1.5px;
    width: 280px;
    margin: 10px 0px 10px;
`;
const GoauthBtn=styled.button`
    width: 280px;
    height: 35px;
    background-color: #0262f8;
    border: none;
    font-weight: 600;
    color: white;
    border-radius: 3px;
    margin: 10px 0px 10px;
    &:hover{
        border: #0262f8 solid;
        background-color: #fff;
        color: #0262f8;
        font-weight: 600;
    }
`;
const PhnloginBtn=styled.button`
    width: 280px;
    height: 35px;
    background-color: #007346;
    border: none;
    font-weight: 600;
    color: white;
    border-radius: 3px;
    margin: 10px 0px 10px;
    &:hover{
        border: #007346 solid;
        background-color: #fff;
        color: #007346;
        font-weight: 600;
    }
`;
const LoginBtn=styled.button`
    width: 280px;
    height: 35px;
    background-color: #0262f8;
    border: none;
    font-weight: 600;
    color: white;
    border-radius: 3px;
    margin: 10px 0px 10px;
    &:hover{
        border: #0262f8 solid;
        background-color: #fff;
        color: #0262f8;
        font-weight: 600;
    }
`;
const Name=styled.div`
    color: #333;
    font-weight: 600;
    font-size: 19px;
    letter-spacing: normal;
`;
const EmailInput=styled.input`
    letter-spacing: normal;
    padding: 7px;
    font-weight: 600;
    width: 280px;
    height: 35px;
    border-radius: 5px;
    border: rgba(0,0,0,0.5) solid;
    margin: 10px 0px 10px;
    &:focus::-webkit-input-placeholder{
        opacity: 0;
    }
`;
const PasswordInput=styled.input`
    letter-spacing: normal;
    width: 280px;
    height: 35px;
    padding: 7px;
    border-radius: 5px;
    font-weight: 600;
    border: rgba(0,0,0,0.5) solid;
    margin: 10px 0px 10px;
    &:focus::-webkit-input-placeholder{
        opacity: 0;
    }
`;
const MainComponent=styled.div`
    justify-content: flex-start;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 10%;
    left: 10%;
    height: 100%;
    width: 100%;
`;
const Button=styled.button`
    color: #333;
    border: none;
    border-radius: 50%;
    height: 35px;
    width: 35px;
    top: 2px;
    font-weight: 600;
    position: absolute;
    right: 2px;
    &:hover{
        background-color: green;
        font-weight: 600;
        color: #fff;
    }
`;
const Overlay=styled.div`
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
`;
const Mainform=styled.div`
    top: 20%;
    left: 35%;
    border-radius: 10px;
    position: fixed;
    height: 400px;
    width: 350px;
    color: #333;
    background-color: #fff;
    @media (max-width:768px){
        top: 30%;
        left: 5%;
        width: 350px;
    }
`;
export default Modal