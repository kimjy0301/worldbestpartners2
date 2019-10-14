import React, { useEffect, useRef, useState } from 'react';
import '../css/tailwind.css';
import Nav from './Nav';
import Portfolio from './Portfolio';
import Header from './Header';
import Contact from './Contact';
import styled from 'styled-components';

const Main = () => {

    const ticking = useRef(false);
    const lastScrollY = useRef(0);
    const portfolioRef = useRef();
    const contactRef = useRef();

    const [navVisible, setNavVisible] = useState(false);

    useEffect(() => {
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



    return (
        <>
            <Nav navVisible={navVisible} portfolioRef={portfolioRef} contactRef={contactRef}> </Nav>
            <Header portfolioRef={portfolioRef}></Header>
            <Portfolio portfolioRef={portfolioRef}></Portfolio>
            <Contact contactRef={contactRef}></Contact>
            <DIV className="bg-indigo-400 p-16"><h1> copyright !@#!@#</h1></DIV>

        </>
    )
}


const DIV = styled.div`
            display:flex;
            position:relative;
            justify-content:center;
            height: auto;
            margin-top:2rem;
            border-top-left-radius: 0.5rem;
            border-top-right-radius: 0.5rem;
            color : white;           
            flex-direction:column;
            align-items:center;
        `;

export default Main;