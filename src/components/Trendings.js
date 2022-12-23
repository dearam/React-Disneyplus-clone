import React ,{useState} from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import data from '../disneyMoview.json';

function Trendings() {
  return (
    <Container>
        <Title>Trendings</Title>
            <Content>
                <Wrap>
                    <Link to="/Temp" state={{id:4}}>
                        <img
                            src='https://images-cdn.ubuy.co.in/8LKIP1KI-tangled-poster-disneywall-poster-tangled.jpg'
                            alt=''
                        />
                        <All>
                            <Name>{data[4].title}</Name>
                            <Para>{data[4].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:6}}>
                        <img
                            src='https://image.tmdb.org/t/p/original/6iHQpFiTg0QbKYac5Mprhx7tXo3.jpg'
                            alt=''
                        />
                        <All>
                            <Name>{data[6].title}</Name>
                            <Para>{data[6].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:10}}>
                        <img
                            src='https://i.pinimg.com/736x/c7/b4/b0/c7b4b0c0265a5bc34089e305f507492f.jpg'
                            alt=''
                        />
                        <All>
                            <Name>{data[10].title}</Name>
                            <Para>{data[10].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:14}}>
                        <img
                            src='https://gazette-eu-west2.azureedge.net/media/3173/2070ie07a-12-12-13.jpg?width=696&mode=max&bgcolor=fff&updated=08%2F03%2F2017+16%3A45%3A49'
                            alt=''
                        />
                        <All>
                            <Name>{data[14].title}</Name>
                            <Para>{data[14].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>

                <Wrap>
                    <Link to="/Temp" state={{id:32}}>
                        <img
                            src='https://m.media-amazon.com/images/M/MV5BNWMzZjNjMjgtYjdlNS00ZmNiLThlYWQtOTkyNmNmZjBlOTdhXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg'
                            alt=''
                        />
                        <All>
                            <Name>{data[32].title}</Name>
                            <Para>{data[32].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:33}}>
                        <img
                            src='https://lumiere-a.akamaihd.net/v1/images/movie_poster_zootopia_866a1bf2.jpeg'
                            alt=''
                        />
                        <All>
                            <Name>{data[33].title}</Name>
                            <Para>{data[33].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:34}}>
                        <img
                            src='https://m.media-amazon.com/images/M/MV5BOGY0NTk0YjItZDZiMS00MGY3LWFiZjYtNGIwODYwYmE5YjY3XkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_FMjpg_UX1000_.jpg'
                            alt=''
                        />
                        <All>
                            <Name>{data[34].title}</Name>
                            <Para>{data[34].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:35}}>
                        <img
                            src='https://images.moviesanywhere.com/9d3e252253e87a6c330a3677e3acb400/91c2a4f6-c811-47fb-934a-68db3ef3658a.jpg'
                            alt=''
                        />
                        <All>
                            <Name>{data[35].title}</Name>
                            <Para>{data[35].sdescript}</Para>
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
    grid-template-columns: repeat(8,minmax(0,1fr));

    @media (max-width:768px){
        grid-template-columns: repeat(2,minmax(0,1fr));
    }
`;
const Wrap=styled.div`
    padding-top: 125.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                    rgb(0 0 0 / 73%) 0px 16px 10px -10px ;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249,249,249,0.1);

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
        transform: scale(1.20);
        border-color: rgba(249,249,249,0.8);
    }

`;

const Title=styled.h3`
    color: #fff;
`;

const All=styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    padding: 10px;
    transition: 0.5s;
    background: linear-gradient(to bottom,rgba(4,8,15,0), #192133 90%);
    opacity: 0;
    &:hover{
        opacity: 1;
    }
`;
const Name=styled.div`
    color: #fff;
    font-size:15px;
    font-weight: 500;
    text-transform: capitalize;
    margin-top: 60%;
`;
const Para=styled.div`
    color: #fff;
    opacity: 0.8;
    margin: 5px 0;
    font-weight: 500;
    font-size: 9px;
`;
const Btn=styled.div`
    font-size: 12px;
    color: #fff;
    opacity: 0.5;
    font-weight: 500;
    padding: 5px 1px;
    text-align: center;
    margin: 5px 0;
    cursor: pointer;
    &:hover{
        background-color: #333;
        border-radius: 2px;
    }
`;
export default Trendings