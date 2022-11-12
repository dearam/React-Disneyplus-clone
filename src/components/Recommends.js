import React,{useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import data from '../disneyMoview.json';


function Recommends() {
    const [id,setId]=useState({data:""});
    const changeState=(i)=>{
        setId({data:{i}});
    }
    return(
        <Container>
            <Title>Recommends For You</Title>
            <Content>
                <Wrap>
                    {/* <Details parentToChild={id}/> */}
                    <Link to="/Temp" state={{id:1}}>
                        <img
                            src='https://wallpapercave.com/wp/wp4305157.jpg'
                            alt=''
                        />
                        <All>
                            <Name>{data[1].title}</Name>
                            <Para>{data[1].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:3}}>
                        <img
                            src='https://i.pinimg.com/736x/52/be/e1/52bee1ca0ef72474b398b4b23ae2d911.jpg'
                            alt=''
                        />
                        <All>
                            <Name>{data[3].title}</Name>
                            <Para>{data[3].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:7}}>
                        <img
                            src='https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_FMjpg_UX1000_.jpg'
                            alt=''
                        />
                        <All>
                            <Name>{data[7].title}</Name>
                            <Para>{data[7].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:"13"}}>
                        <img
                            src='https://media.harrypotterfanzone.com/philosophers-stone-20-years-of-movie-magic-harry-poster.jpg'
                            alt=''
                        />
                        <All>
                            <Name>{data[13].title}</Name>
                            <Para>{data[13].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>



                <Wrap>
                    <Link to="/Temp" state={{id:"17"}}>
                        <img
                            src='https://igimages.gumlet.io/tamil/home/kamal-vikrammovie-glimpseposter.jpg?w=376&dpr=2.6'
                            alt=''
                        />
                        <All>
                            <Name>{data[17].title}</Name>
                            <Para>{data[17].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:"19"}}>
                        <img
                            src='https://m.media-amazon.com/images/M/MV5BZjY2MmI1ZWItNmU0Yy00NTdkLWJiYmQtNzFlZWNlMzkxZTZjXkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_.jpg'
                            alt=''
                        />
                        <All>
                            <Name>{data[19].title}</Name>
                            <Para>{data[19].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:"20"}}>
                        <img
                            src='https://www.pinkvilla.com/imageresize/arjun_reddy_poster_kabir_singh_0.jpg?width=752&t=pvorg'
                            alt=''
                        />
                        <All>
                            <Name>{data[20].title}</Name>
                            <Para>{data[20].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:"21"}}>
                        <img
                            src='https://m.media-amazon.com/images/M/MV5BMjI4Y2I5ZDYtYWVjZC00MTkzLWI1ZmYtNDYyNDExYzYwYTQxXkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_.jpg'
                            alt=''
                        />
                        <All>
                            <Name>{data[21].title}</Name>
                            <Para>{data[21].sdescript}</Para>
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
        grid-template-columns: repeat(3,minmax(0,1fr));
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
    justify-content: center;
    align-items: center;
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
const Cont=styled.p`
    position: absolute;
    color: #fff;
    font-size:50px;
    bottom: 30px;
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
    z-index: 2;
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

export default Recommends