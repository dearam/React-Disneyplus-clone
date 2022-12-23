import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import data from '../disneyMoview.json';

function Originals() {
  return (
    <Container>
        <Title>Popular Movies
        </Title>
            <Content>
                <Wrap>
                    <Link to="/Temp" state={{id:40}}>
                        <img
                            src='https://m.media-amazon.com/images/M/MV5BM2NjY2EwOWEtOGRjMS00NDVhLTg0MGMtOWRmODE1MmYyZWQwXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_FMjpg_UX1000_.jpg'
                            alt=''
                        />
                    <All>
                            <Name>{data[40].title}</Name>
                            <Para>{data[40].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:41}}>
                        <img
                            src='https://m.media-amazon.com/images/M/MV5BNjQyNGI5OWEtZjI1Yy00NDVjLWE4MTAtMzRlNzU1NzM2OGVkXkEyXkFqcGdeQXVyMTA1NzEzOTU1._V1_FMjpg_UX1000_.jpg'
                            alt=''
                        />
                    <All>
                            <Name>{data[41].title}</Name>
                            <Para>{data[41].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:42}}>
                        <img
                            src='https://m.media-amazon.com/images/S/pv-target-images/294bffc29ff89e018f4b9cd3c73326c2ad6d508c57bee696b9e6b73b5fff536d._SX342_SY600_.jpg'
                            alt=''
                        />
                    <All>
                            <Name>{data[42].title}</Name>
                            <Para>{data[42].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:43}}>
                        <img
                            src='https://static.moviecrow.com/gallery/20220907/204607-ps2.jpg'
                            alt=''
                        />
                    <All>
                            <Name>{data[43].title}</Name>
                            <Para>{data[43].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>

                <Wrap>
                    <Link to="/Temp" state={{id:44}}>
                        <img
                            src='https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/minions-the-rise-of-gru-et00332393-1656142126.jpg'
                            alt=''
                        />
                    <All>
                            <Name>{data[44].title}</Name>
                            <Para>{data[44].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:45}}>
                        <img
                            src='https://upload.wikimedia.org/wikipedia/en/1/16/Jagame_Thandhiram_poster.jpg'
                            alt=''
                        />
                    <All>
                            <Name>{data[45].title}</Name>
                            <Para>{data[45].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:46}}>
                        <img
                            src='https://m.media-amazon.com/images/I/610CYrdV7AS._SL1500_.jpg'
                            alt=''
                        />
                    <All>
                            <Name>{data[46].title}</Name>
                            <Para>{data[46].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:47}}>
                        <img
                            src='https://moviegalleri.net/wp-content/uploads/2018/07/Trisha-Krishnan-Vijay-Sethupathi-96-Movie-New-Poster.jpg'
                            alt=''
                        />
                    <All>
                            <Name>{data[47].title}</Name>
                            <Para>{data[47].sdescript}</Para>
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
        z-index: 2;
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
export default Originals