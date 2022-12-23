import React, { useEffect,useState} from 'react'
import styled from 'styled-components'
import { auth, provider,signInwithgoogle} from '../firebase';
import {GoogleAuthProvider,getAuth, signInWithPopup, signOut} from "firebase/auth";

import {useNavigate} from "react-router-dom";
import { getStorage } from "firebase/storage";
import {useDispatch,useSelector} from "react-redux";
import { selectUserPhoto,selectUserName,setUserLoginDetails, setSignOutState } from "../features/user/Userslice";
import Modal from './Modal';

function Header() {
    const dispatch=useDispatch();
    const history=useNavigate();
    const userName=useSelector(selectUserName);
    const userPhoto=useSelector(selectUserPhoto);

    useEffect(()=>{
        auth.onAuthStateChanged(async(user)=>{
            if(user){
                setUser(user);
                history('/home');
            }
        });
    }, [userName] );
    
    const handleAuth=()=>{
        if(!userName){
        signInWithPopup(auth,provider).then((result)=>{
            setUser(result.user);
          }).catch((error)=>{
            alert(error.message());
          });
        }else if(userName){
            signOut(auth).then(()=>{
                dispatch(setSignOutState());
                history("/");
            }).catch((error)=> alert(error.message));
        }
    };

    const setUser=(user)=>{
        dispatch(setUserLoginDetails({
          name:user.displayName,
          email:user.email,
          photo:user.photoURL,
        }))
      }
    const [openModal,setOpenModal]=useState(false);
  return (
    <Nav>
        <Logo>
            <img src="/Images/disneyhotstar.svg" alt='Disney+'/>
        </Logo>
        {!userName?
            <div>
            <Login onClick={()=>setOpenModal(true)}>
            <span>Login</span>
            </Login>
            <Modal open={openModal} onClose={()=>setOpenModal(false)}/></div>:
        <>
        <NavMenu>
            <a href="/home">
                <span>HOME</span>
            </a>
            <a href="/home">
                <span>TV</span>
            </a>
            <a href="/home">
                <span>SPORTS</span>
            </a>
            <a href="/home">
                <span>DISNEY+</span>
            </a>
            <a href="/home">
                <span>MOVIES</span>
            </a>
            <a href="/home">
                <span><img src="/Images/kids.svg" alt="SERIES"/></span>
            </a>
        </NavMenu>
        <SignOut>
            <UsrImg src={userPhoto} alt={userName}/>
            <DropDown>
                <span onClick={handleAuth}>Watchlist</span>
                <span onClick={handleAuth}>My Account</span>
                <span onClick={handleAuth}>Log Out</span>
            </DropDown>
        </SignOut>
        </>}
    </Nav>
  )
}
const Nav=styled.nav`
    position:fixed;
    right:0;
    left:0;
    top:0;
    height:70px;
    background-color:#090b13;
    display:flex;
    justify-content:space-between;
    align-items:center;
    align-items:center;
    padding:0 36px;
    letter-spacing:16px;
    z-index:3;
`;
const Logo=styled.a`
    padding:0;
    width:120px; 
    max-height:70px;
    margin-top:4px;
    font-size:0;
    display:inline-block;
    img{
        display:block;
        width:100%;
    }
`;

const NavMenu=styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        img {
        height: 20px;
        min-width: 20px;
        width: 40px;
        z-index: auto;
        }
        span {
        color: rgb(249, 249, 249);
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;
        &:before {
            background-color: rgb(249, 249, 249);
            border-radius: 0px 0px 4px 4px;
            bottom: -6px;
            content: "";
            height: 2px;
            left: 0px;
            opacity: 0;
            position: absolute;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            visibility: hidden;
            width: auto;
        }
        }
        &:hover {
        span:before {
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
        }
    }
  }
    

    @media (max-width:768px){
        display:none;
    }

`;

const Login=styled.a`
    background-color: rgba(0,0,0,0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    letter-spacing: 1.5px;
    transition: all .2s ease 0s;
    span:hover{
        color: green;
    }
`;

const UsrImg =styled.img`
    height : 100%;
`;

const DropDown=styled.div`
    position: absolute;
    top: 50px;
    right: 0px;
    background: #121a26;
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 12px;
    letter-spacing: 3px;
    width: 125px;
    opacity: 0;
    display: flex;
    flex-direction: column;
    span{
        padding: 5px;
    }
    span:hover{
        background: #020b16;
    }
`;
const SignOut=styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    ${UsrImg} {
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }
    &:hover {
        ${DropDown} {
        opacity: 1;
        transition-duration: 1s;
        }
    }
`; 
export default Header