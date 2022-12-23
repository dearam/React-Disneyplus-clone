import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import data from '../disneyMoview.json';

function Newdisney() {
  return (
    <Container>
        <Title>New Commings</Title>
            <Content>
                <Wrap>
                    <Link to="/Temp" state={{id:2}}>
                        <img
                            src='https://m.media-amazon.com/images/M/MV5BOGU3ZTMyMDAtNTQ4My00NWMxLTk3OTMtOTUwMTI5MGRlNTU4XkEyXkFqcGdeQXVyMTA1NjE5MTAz._V1_FMjpg_UX1000_.jpg'
                            alt=''
                        />
                    <All>
                            <Name>{data[2].title}</Name>
                            <Para>{data[2].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:12}}>
                        <img
                            src='https://lumiere-a.akamaihd.net/v1/images/p_rayaandthelastdragon_21294_83346778.jpeg'
                            alt=''
                        />
                        <All>
                            <Name>{data[12].title}</Name>
                            <Para>{data[12].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:15}}>
                        <img
                            src='https://m.media-amazon.com/images/M/MV5BODNiODVmYjItM2MyMC00ZWQyLTgyMGYtNzJjMmVmZTY2OTJjXkEyXkFqcGdeQXVyNzk3NDUzNTc@._V1_.jpg'
                            alt=''
                        />
                        <All>
                            <Name>{data[15].title}</Name>
                            <Para>{data[15].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:16}}>
                        <img
                            src='https://m.media-amazon.com/images/M/MV5BZGQyYTYzZDYtNWJjYi00MTk1LWI4NjEtMzQ4ZmUyODEyZDljXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg'
                            alt=''
                        />
                        <All>
                            <Name>{data[16].title}</Name>
                            <Para>{data[16].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>

                <Wrap>
                    <Link to="/Temp" state={{id:36}}>
                        <img
                            src='https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQePzTRUAxVRh2HMZ_e-VveoJ8aiePGkgnvruipwpBy0LUhMQhKHBDVrjXbcdsSeVcQHqtNCkJcPCAZMpqHoVmxItrAAILt7xtq25abqmWZrTY7vFQEiDK-rjaq4t63GdPEb_TOFpLDwLPeW_PkLhaGx2.jpg?r=93e'
                            alt=''
                        />
                        <All>
                            <Name>{data[36].title}</Name>
                            <Para>{data[36].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:37}}>
                        <img
                            src='https://i0.wp.com/firewireblog.com/wp-content/uploads/2020/01/eogjevtxkaeu0ik.jpeg?resize=580%2C725&ssl=1'
                            alt=''
                        />
                        <All>
                            <Name>{data[37].title}</Name>
                            <Para>{data[37].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:38}}>
                        <img
                            src='https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg'
                            alt=''
                        />
                        <All>
                            <Name>{data[38].title}</Name>
                            <Para>{data[38].sdescript}</Para>
                            <Btn> + Add to WatchList</Btn>
                        </All>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:39}}>
                        <img
                            src='https://image.tmdb.org/t/p/original/sACb5UVRdVbgEZklS5Wu5gNlmVF.jpg'
                            alt=''
                        />
                        <All>
                            <Name>{data[39].title}</Name>
                            <Para>{data[39].sdescript}</Para>
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
export default Newdisney