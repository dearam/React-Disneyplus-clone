import React ,{useState} from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import data from '../disneyMoview.json';

function Sports() {
  return (
    <Container>
        <Title>Best in Sports</Title>
            <Content>
                <Wrap>
                    <Link to="/Temp" state={{id:4}}>
                        <img
                            src='https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7482/1407482-h-61fb0d7da085'
                            alt=''
                        />
                        <Fname>{data[26].title}</Fname>
                        <All>
                            <Duration>{data[26].subtitle}</Duration>
                            <Name>{data[26].title}</Name>
                            <Para>{data[26].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:6}}>
                        <img
                            src='https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7076/1407076-h-8e6c203d9d7d'
                            alt=''
                        />
                        <Fname>{data[27].title}</Fname>
                        <All>
                            <Duration>{data[27].subtitle}</Duration>
                            <Name>{data[27].title}</Name>
                            <Para>{data[27].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:10}}>
                        <img
                            src='https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7259/1407259-h-9ee35ea3927f'
                            alt=''
                        />
                        <Fname>{data[28].title}</Fname>
                        <All>
                            <Duration>{data[28].subtitle}</Duration>
                            <Name>{data[28].title}</Name>
                            <Para>{data[28].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:14}}>
                        <img
                            src='https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7226/1407226-h-7b806ba7b910'
                            alt=''
                        />
                        <Fname>{data[29].title}</Fname>
                        <All>
                            <Duration>{data[29].subtitle}</Duration>
                            <Name>{data[29].title}</Name>
                            <Para>{data[29].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:14}}>
                        <img
                            src='https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7162/1407162-h-d4389a38ed75'
                            alt=''
                        />
                        <Fname>{data[30].title}</Fname>
                        <All>
                            <Duration>{data[30].subtitle}</Duration>
                            <Name>{data[30].title}</Name>
                            <Para>{data[30].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:14}}>
                        <img
                            src='https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7230/1407230-h-6bc839a4b711'
                            alt=''
                        />
                        <Fname>{data[31].title}</Fname>
                        <All>
                            <Duration>{data[31].subtitle}</Duration>
                            <Name>{data[31].title}</Name>
                            <Para>{data[31].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
            </Content>
        </Container>
  )
}
const Container=styled.div`
    padding: 0 0 26px;
    color: #000;
`;

const Content=styled.div`
    display: grid;
    grid-gap: 25px;
    gap: 10px;
    grid-template-columns: repeat(6,minmax(0,1fr));

    @media (max-width:768px){
        grid-template-columns: repeat(2,minmax(0,1fr));
    }
`;
const Wrap=styled.div`
    padding-top: 56.25%;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                    rgb(0 0 0 / 73%) 0px 16px 10px -10px ;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    //border: 3px solid rgba(249,249,249,0.1);

    img{
        inset: 0;
        object-fit: cover;
        position: absolute;
        display: block;
        height: 100%;
        opacity: 1;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }

    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px,
                    rgb(0 0 0 / 73%) 0px 16px 10px -10px ;
        transform: scale(1.35);
        z-index: 2;
        //border-color: rgba(249,249,249,0.8);
    }

`;

const Title=styled.h3`
    color: #fff;
`;

const All=styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 10px;
    left: 0;
    z-index: 2;
    padding: 30px 10px;
    transition: 0.5s;
    background: linear-gradient(to bottom,rgba(4,8,15,0), #192133 60%);
    opacity: 0;
    &:hover{
        opacity: 1;
    }
`;
const Name=styled.div`
    color: #fff;
    font-size:9.5px;
    font-weight: 500;
    text-transform: capitalize;

`;
const Para=styled.div`
    color: #fff;
    opacity: 0.8;
    font-weight: 500;
    font-size: 9px;
    margin-top: 5px;
`;
const Btn=styled.button`
    font-size: 8px;
    opacity: 0.5;
    font-weight: 500;
    padding: 2px 45px;
    text-align: center;
    margin-top: 5px;
    cursor: pointer;
    &:hover{
        background-color: #333;
        border-radius: 2px;
        color: #fff;
    }

`;
const Duration=styled.div`
    position: absolute;
    font-size: 10px;
    font-weight: 500;
    font-style:bold;
    top: 5px;
    right: 10px;
`;
const Fname=styled.div`
    font-size:15px;
    font-weight: 500;
    font-style: bold;
    color: #fff;
    position: absolute;
    padding: 10px 25px;
    top: 55px;
    z-index: 2;
    opacity: 1;
    background: linear-gradient(to bottom,rgba(4,8,15,0), #192133 98%);
    &:hover{
        opacity: 0;
    }
`;
export default Sports