import React, { useDebugValue } from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider';
import Newdisney from './Newdisney';
import Originals from './Originals';
import Recommends from './Recommends';
import Trendings from './Trendings';
import Viewers from './Viewers';
import { useEffect } from 'react'
import {useNavigate} from "react-router-dom";
import { getStorage } from "firebase/storage";
import {useDispatch,useSelector} from "react-redux";
import db from "../firebase";
import {setMovies} from '../features/user/Movieslice';
import {selectUserName} from '../features/user/Userslice';
import { doc, onSnapshot, collection,query} from "firebase/firestore";
import Sports from './Sports';

function Home() {
  
  return (
    <Container>
      <ImgSlider/>
      <Viewers/>
      <Recommends/>
      <Sports/>
      <Trendings/>
      <Newdisney/>
      <Originals/>
    </Container>
  )
}
const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/Images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home