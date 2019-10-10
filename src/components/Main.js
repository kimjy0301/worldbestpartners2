import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import '../css/tailwind.css';
import mainVideo from '../resource/video/mainVideo.mp4';
import Nav from './Nav';

const Main = () => {

    const NavRef = useRef(null);
    const ticking = useRef(false);
    const lastScrollY = useRef(0);

    const [navVisible, setNavVisible] = useState(false);

    useEffect(() => {

        console.dir(NavRef.current);
        window.addEventListener('scroll', handleScroll, true);

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
            <HEADER>
                <H1Div>
                    <H1>World Best Partners</H1>
                </H1Div>
                <MainVideo loop autoPlay muted>
                    <source src={mainVideo} type="video/mp4" />
                </MainVideo>
            </HEADER>
            <DIV2 className="bg-red-400">
                <h1>dd</h1>
                <button onClick={onBtnClick}>NAV</button>
            </DIV2>
            <DIV2 className="bg-indigo-400">
                <h1>dd</h1>
            </DIV2>
        </>
    )
}

const HEADER = styled.div`
    display:flex;
    position:relative;
    justify-content:center;
    height: 50rem;
    margin-top: 1rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;
const DIV2 = styled.div`
    display:flex;
    position:relative;
    justify-content:center;
    height: 30rem;
    margin-top:2rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
`;

const H1 = styled.h1`
    color : white;
    font-size: 5rem;
    z-index:2;
`;
const MainVideo = styled.video`
    position:absolute;
    width:100%;
    height:100%;
    object-fit:fill;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    
`;
const H1Div = styled.div`
    position:absolute;
    width:100%;
    z-index:2;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`;


export default Main;