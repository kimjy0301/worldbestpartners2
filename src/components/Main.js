import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import '../css/tailwind.css';
import mainVideo from '../resource/video/mainVideo.mp4';
import Nav from './Nav';
import LoadingOverlay from 'react-loading-overlay';
import Typing from 'react-typing-animation';
import dotMap from '../css/image/dotmap.png';

const Main = () => {

    const ticking = useRef(false);
    const lastScrollY = useRef(0);
    const [isLoading, setIsLoading] = useState(true);

    const [navVisible, setNavVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);
        setIsLoading(false);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    const handleScroll = () => {
        lastScrollY.current = window.scrollY;
        if (!ticking.current) {
            window.requestAnimationFrame(() => {
                if (lastScrollY.current > 100) {
                    setNavVisible(true);
                    ticking.current = false;
                }
                else {
                    setNavVisible(false);
                    ticking.current = false;
                }
            });
            ticking.current = true;
        }
    };

    const onBtnClick = () => {
        navVisible ? setNavVisible(!navVisible) : setNavVisible(!navVisible)
    }


    return (
        <>
            <Nav navVisible={navVisible}> </Nav>
            <LoadingOverlay
                active={isLoading}
                spinner
                text='Loading'
                fadeSpeed={1500}
            >


                <HEADER>
                    <H1Div>
                        <Typing className="text-white" speed={20}>
                            <H2>가까이 할수록 편안합니다</H2>
                            <H2>힘들었던 어제가 있었기에 내일을 믿습니다</H2>
                            <H2>신선한 공기, 신나는 하루 → 서울랜드</H2>
                            <H2>기업 소개 문구 들어갈 자리</H2>
                            <Typing.Reset count={0} delay={300} />
                            <Typing.Speed ms={100} />
                            <Typing.Delay ms={1000} />
                            <H1>WORLD BEST PARTNERS</H1>
                        </Typing>
                    </H1Div>

                    <MainVideo loop autoPlay muted>
                        <source src={mainVideo} type="video/mp4" />
                    </MainVideo>
                </HEADER>

            </LoadingOverlay>


            <DIV1 className="bg-red-400">
                <h1>dd</h1>
                <button onClick={onBtnClick}>NAV</button>
            </DIV1>

            <DIV2>
                <h1>dd</h1>
            </DIV2>
        </>
    )
}

const HEADER = styled.div`
    display:flex;
    position:relative;
    justify-content:center;
    height: 100vh;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const DIV1 = styled.div`
    display:flex;
    position:relative;
    justify-content:center;
    height: 30rem;
    margin-top:2rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
`;

const DIV2 = styled.div`
    display:flex;
    position:relative;
    justify-content:center;
    height: 30rem;
    margin-top:2rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    color : white;
    background-image: url(${dotMap});
    background-size: 50rem;
    background-repeat: no-repeat;
    background-position:center;
    background-color: #1d1b1b;
`;

const H1 = styled.h1`
    color : white;
    font-size: 2rem;
    z-index:2;
    @media (min-width: 640px) {
    font-size: 5rem;
  }
`;
const H2 = styled.h1`
    color : white;
    font-size: 1.5rem;
    z-index:2;
    @media (min-width: 640px) {
    font-size: 3rem;
  }
}


`;

const MainVideo = styled.video`
    position:absolute;
    width:100%;
    height:100%;
    object-fit:cover;    
`;
const H1Div = styled.div`
    position:absolute;
    width:100%;
    z-index:2;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;


export default Main;