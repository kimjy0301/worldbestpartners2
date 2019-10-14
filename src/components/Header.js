import React, { useState, useEffect, useRef } from 'react'
import mainVideo from '../resource/video/mainVideo.mp4';
import LoadingOverlay from 'react-loading-overlay';
import Typing from 'react-typing-animation';
import Cursor from 'react-typing-animation/dist/Cursor';
import styled from 'styled-components';
import 'animate.css';

const Header = ({ portfolioRef }) => {

    const [isLoading, setIsLoading] = useState(true);
    const moreBtnRef = useRef();
    const mainRef = useRef();

    useEffect(() => {
        setIsLoading(false);
        return () => {
        };
    }, [])

    const scrollIt = (element) => {
        window.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': element.offsetTop - 80
        });
    }

    const btnClick = () => {
        scrollIt(portfolioRef.current);
        moreBtnRef.current.blur();
    }

    const onFinishedTyping = () => {
        moreBtnRef.current.classList.remove('hidden');
    }

    return (
        <>
            <LoadingOverlay
                active={isLoading}
                spinner
                text='Loading'
                fadeSpeed={1500}>

                <HEADER>
                    <H1Div>
                        <Typing cursor={<CustomCursor className=""></CustomCursor>} speed={20} onFinishedTyping={onFinishedTyping}>
                            <Typing.Delay ms={2000} />
                            <H2>고객을 최우선으로 어쩌고 저쩌고~~</H2>
                            <H2>기업 소개 문구 들어갈 자리</H2>
                            <Typing.Reset count={0} delay={300} />
                            <Typing.Speed ms={100} />
                            <Typing.Delay ms={1000} />
                            <button className="animated 1 flash delay-1s" ref={mainRef} onClick={btnClick}><H1>WORLD BEST PARTNERS</H1></button>
                        </Typing>
                        <Button ref={moreBtnRef} onClick={btnClick} className="hidden animated infinite pulse" >
                            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 16.172l-6.071-6.071-1.414 1.414L10 20l.707-.707 7.778-7.778-1.414-1.414L11 16.172V0H9z" /></Icon>
                            <HeaderH1>Click Here !</HeaderH1>
                        </Button>
                    </H1Div>

                    <MainVideo loop autoPlay muted>
                        <source src={mainVideo} type="video/mp4" />
                    </MainVideo>
                </HEADER>

            </LoadingOverlay>

        </>
    )
}


const Icon = styled.svg`
    fill: #c53030;
    margin-top: 1rem;
    width: 5rem;
    height: 5rem;
    :hover{
        fill: #f56565;
    }
`;

const HeaderH1 = styled.h1`
    color: #c53030;
    
`;

const Button = styled.button`
 :hover{      
    ${Icon}{fill: #f56565;};
    ${HeaderH1}{color: #f56565;};
    }
`;


const CustomCursor = styled(Cursor)`
    color : white !important;
`

const HEADER = styled.div`
            display:flex;
            position:relative;
            justify-content:center;
            height: 100vh;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        `;



const H1 = styled.h1`
            color: #f7fafc;
            font-size: 2rem;
            z-index:2;
    @media (min-width: 640px) {
                font-size: 5rem;
          }
        `;
const H2 = styled.h1`
            color: #f7fafc;
            font-size: 1.5rem;
            z-index:2;
    @media (min-width: 640px) {
                font-size: 3rem;
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

export default Header;