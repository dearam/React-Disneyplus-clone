import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

function Originals() {
  return (
    <Container>
        <Title>Popular Movies
        </Title>
            <Content>
                <Wrap>
                    <Link to="/Temp" state={{id:5}}>
                        <img
                            src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E486A02FA7B60669E77958D4FAE567AA5C9C57344006E1D1ADFC080719545166/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals'
                            alt=''
                        />
                        
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:8}}>
                        <img
                            src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CC08686E87BDB2D83A46C9608CB2F43018381A82608C380649351A00ED0D2919/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals'
                            alt=''
                        />
                        
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:9}}>
                        <img
                            src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A13BEC78ACF76FC91A94A1595A62A42CC26DFC6259332C74E061ADA379024E5C/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals'
                            alt=''
                        />
                        
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/Temp" state={{id:11}}>
                        <img
                            src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F8D1A6FD00ED479CC5E2E5C3E85F10EB05550748BD3C0FE76756614071968541/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals'
                            alt=''
                        />
                        
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
    gap: 25px;
    grid-template-columns: repeat(4,minmax(0,1fr));

    @media (max-width:768px){
        grid-template-columns: repeat(2,minmax(0,1fr));
    }
`;
const Wrap=styled.div`
    padding-top: 56.25%;
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
        z-index: 2;
        border-color: rgba(249,249,249,0.8);
    }

`;

const Title=styled.h3`
    color: #fff;
`;
export default Originals