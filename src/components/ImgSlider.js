import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import data from '../disneyMoview.json';

function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
  return (
    <div>
        <Carousel {...settings}>
            <Wrap>
                <Box>
                    <Link to="/Temp" state={{id:22}}>
                    <div className='right'>
                        <a>
                            <img src='/Images/remaster.jpg' alt='slide1'/>
                        </a>
                    </div>
                    <ContentMeta>
                        <Title>{data[22].title}</Title>
                        <SubTitle>{data[22].sTitle}</SubTitle>
                        <Description>{data[22].description}</Description>
                    </ContentMeta>
                    </Link>
                </Box>
            </Wrap>
            <Wrap>
                <Box>
                    <Link to="/Temp" state={{id:23}}>
                        <div className='right'>
                            <a>
                                <img src='https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/5367/1395367-h-72a3ffab57fc' alt='slide2'/>
                            </a>
                        </div>
                        <ContentMeta>
                            <Title>{data[23].title}</Title>
                            <SubTitle>{data[23].sTitle}</SubTitle>
                            <Description>{data[23].description}</Description>
                        </ContentMeta>
                    </Link>
                </Box>
            </Wrap>
            <Wrap>
                <Box>
                    <Link to="/Temp" state={{id:24}}>
                        <div className='right'>
                            <a>
                                <img src='https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/05/she-hulk-teaser-poster.jpg' alt='slide3'/>
                            </a>
                        </div>
                    <ContentMeta>
                            <Title>{data[24].title}</Title>
                            <SubTitle>{data[24].sTitle}</SubTitle>
                            <Description>{data[24].description}</Description>
                    </ContentMeta>
                    </Link>
                </Box>
            </Wrap>
            <Wrap>
                <Box>
                    <Link to="/Temp" state={{id:25}}>
                    <div className='right'>
                        <a>
                            <img src='https://www.shmoti.com/ImageFiles/Image_555x271/20190715_Banner_dear%20comrade_large20190715.jpg' alt='slide4'/>
                        </a>
                    </div>
                    <ContentMeta>
                            <Title>{data[25].title}</Title>
                            <SubTitle>{data[25].sTitle}</SubTitle>
                            <Description>{data[25].description}</Description>
                    </ContentMeta>
                    </Link>
                </Box>
            </Wrap>
        </Carousel>
    </div>
  );
}
const Carousel=styled(Slider)`
    margin-top: 20px;

    & > button{
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover{
            opacity: 1;
            transition: opacity 0.2 ease 0s;
        }
    }
    ul li button{
        &:before{
            display: none;
            font-size: 50px;
            color: rgb(150,158,171);
        }
    }
    li.slick-active button:before{
        color: white;
    }
    .slick-list{
        overflow: initial;
    }
    .slick-prev{
        left: -75px;
    }
    .slick-prev{
        right:-75px;
    }
`;

const Wrap=styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;

    a{
        border-radius: 10px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                    rgb(0 0 0 / 73%) 0px 16px 10px -10px ;
        cursor: pointer;
        display: block;
        position: relative;
        height: 425px;
        padding: 4px;
        img{
            width: 100%;
            height: 425px;
            border-radius: 4px;
            @media (max-width:768px){
                height: 200px;
            }
        }
        @media (max-width:768px){
                height: 225px;
            }

        /* &:hover{
            padding: 0;
            //border: 4px solid rgba(249,249,249,0.8);
            transition-duration:300ms;
        } */
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
  @media (max-width:768px){
                display: none;
            }
`;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  padding: 0px 0px 10px;
  opacity: 80%;
  font-weight: bold;
  min-height: 20px;
  @media (max-width:768px){
                display: none;
            }
`;
const Box=styled.div`
  position: relative;
  height: 425px;
  border-radius: 4px;

  .right{
    position: absolute;
    height: 425px;
    width: 80%;
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
            border-radius: 4px;
            height: 425px;
            @media (max-width:768px){
                height: 200px;
            }
            font-size: 15px;
          }
          @media (max-width:768px){
                height: 200px;
              left: 10%;
            }
  }
  @media (max-width:768px){
                height: 225px;
            }
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 15px;
  opacity: 80%;
  padding: 20px 0px;
  color: rgb(249, 249, 249);
  line-height: 30px;
  @media (max-width:768px){
                display: none;
            }
`;

const ContentMeta = styled.div`
  max-width: 874px;
  position: absolute;
  padding: 60px;
  width: 50%;
  border-radius: 4px;
  top: 8px;
  height: 425px;
  z-index: 2;
  background: linear-gradient(to left,rgba(4,8,15,0), #030b17 30%);
  @media (max-width:768px){
                display: none;
            }
`;
export default ImgSlider