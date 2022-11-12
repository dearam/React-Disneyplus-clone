import React from 'react'
import {useLocation} from 'react-router-dom';
import data from '../disneyMoview.json';
import styled from 'styled-components';

function Temp(props) {
  const location=useLocation();
  let d=location.state.id;
  let bimg=data[d].backgroundImg;
  let title=data[d].title;
  let titleImg=data[d].titleImg;
  let subTitle=data[d].subTitle;
  let description=data[d].description;
  let trailer=data[d].trailer;
  return (
    <Container>
      <Box>
          <div className='right'>
            <img className="backgroundimg" alt={title} src={bimg} />
            {/* <div className="Imgtitle">
              <img className='title' alt={title} src={titleImg}/>
            </div> */}
          </div>
            <ContentMeta>
              <Subscriber>Subscriber</Subscriber>
              <Title>{title}</Title>
              <SubTitle>{subTitle}</SubTitle>
              <Description>{description}</Description>
              <Controls>
                <Player>
                  <img className='Player' src="/Images/play-icon-black.png" alt="" />
                  <span>Play</span>
                </Player>
                <Trailer >
                  <a href={trailer}>
                  <img src="/Images/play-icon-white.png" alt="" />
                  <span>Trailer</span>
                  </a>
                </Trailer>
                <AddList>
                  <span />
                  <span />
                </AddList>
                <GroupWatch>
                  <div>
                    <img src="/Images/group-icon.png" alt="" />
                  </div>
                </GroupWatch>
              </Controls>
            </ContentMeta>
          </Box>
        </Container>
  )
}

const Container = styled.div`
  display: flex;
  position: relative;
  min-height: calc(85vh);
  overflow-x: hidden;
  display: block;
  top: 100px;
  background-color: #141b28;
  padding: 0 calc(3.5vw + 5px);
`;
const Box=styled.div`
  position: relative;
  height: 450px;

  .right{
    position: absolute;
    height: 450px;
    width: 80%;
    top:10px;
    right: 0;
    background: linear-gradient(to bottom,rgba(4,8,15,0), #192133 90%);
    .Imgtitle{
      position:absolute;
      align-items: flex-end;
      display: flex;
      -webkit-box-pack: start;
      justify-content: flex-start;
      margin: 0px auto;
      height: 30vw;
      min-height: 170px;
      padding-bottom: 24px;
      width: 100%;
      .titleimg{
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
      }
    }
  
  .backgroundimg{
            height: 100% ;
            width: 100%;
            height: 450px;
            @media (max-width:768px){
                height: 200px;
            }
            font-size: 15px;
          }
          @media (max-width:768px){
              left: 10%;
            }
  }
`;
const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
  position: absolute;
  padding: 60px;
  top: 10px;
  width: 50%;
  height: 450px;
  z-index: 2;
  background: linear-gradient(to left,rgba(4,8,15,0), #030b17 30%);
  @media (max-width: 768px) {
    position: relative;
    padding: 10px 40px;
    width: 100%;
    top: 50%;
    background: none;
  }
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
  margin: 50px 0px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;
  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
`;
const Subscriber=styled.button`
  color:#e5bb44;
  font-weight: bold;
  background: none;
  padding: 0px 0px 5px;
`;
const Title=styled.div`
  font-size: 30px;
  font-weight: bold;
  padding: 0px 0px 10px;
`;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  padding: 0px 0px 10px;
  opacity: 80%;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 15px;
  opacity: 80%;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export default Temp