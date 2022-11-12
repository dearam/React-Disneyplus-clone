import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
                <Link to="/Temp" state={{id:22}}>
                <a>
                    <img src='/Images/remaster.jpg' alt='slide1'/>
                </a>
                </Link>
            </Wrap>
            <Wrap>
                <Link to="/Temp" state={{id:23}}>
                <a>
                    <img src='https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/5367/1395367-h-72a3ffab57fc' alt='slide2'/>
                </a>
                </Link>
            </Wrap>
            <Wrap>
                <Link to="/Temp" state={{id:24}}>
                <a>
                    <img src='https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/05/she-hulk-teaser-poster.jpg' alt='slide3'/>
                </a>
                </Link>
            </Wrap>
            <Wrap>
                <Link to="/Temp" state={{id:25}}>
                <a>
                    <img src='https://www.shmoti.com/ImageFiles/Image_555x271/20190715_Banner_dear%20comrade_large20190715.jpg' alt='slide4'/>
                </a>
                </Link>
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
            font-size: 10px;
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
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                    rgb(0 0 0 / 73%) 0px 16px 10px -10px ;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;
        img{
            width: 100%;
            height: 400px;
            @media (max-width:768px){
                height: 200px;
            }
        }

        &:hover{
            padding: 0;
            border: 4px solid rgba(249,249,249,0.8);
            transition-duration:300ms;
        }
    }
`;
export default ImgSlider