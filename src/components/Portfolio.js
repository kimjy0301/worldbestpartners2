import React, { useEffect } from 'react';
import styled from 'styled-components';
import dotMap from '../css/image/dotmap.png';
import AOS from 'aos';
import 'aos';
import 'aos/dist/aos.css';

const Portfolio = ({ portfolioRef }) => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
        return () => {
        };
    }, []);


    return (
        <>
            <DIV1 ref={portfolioRef}>
                <InnerDiv>
                    <div data-aos="zoom-in" className="mb-6  mt-6 max-w-sm rounded overflow-hidden shadow-lg bg-white">
                        <img className="w-full" src={dotMap} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="text-blue-500 font-bold text-xl mb-2">제목</div>
                            <p className="text-gray-700 text-base">
                                기업포트폴리오 들어갈 자리
                                기업포트폴리오 들어갈 자리
                                기업포트폴리오 들어갈 자리
                        </p>
                        </div>
                        <div className="px-6 py-4">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="mb-6  mt-6 max-w-sm rounded overflow-hidden shadow-lg bg-white">
                        <img className="w-full" src={dotMap} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="text-blue-500 font-bold text-xl mb-2">제목</div>
                            <p className="text-gray-700 text-base">
                                기업포트폴리오 들어갈 자리
                                기업포트폴리오 들어갈 자리
                                기업포트폴리오 들어갈 자리
                        </p>
                        </div>
                        <div className="px-6 py-4">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="mb-6  mt-6 max-w-sm rounded overflow-hidden shadow-lg bg-white">
                        <img className="w-full" src={dotMap} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="text-blue-500 font-bold text-xl mb-2">제목</div>
                            <p className="text-gray-700 text-base">
                                기업포트폴리오 들어갈 자리
                                기업포트폴리오 들어갈 자리
                                기업포트폴리오 들어갈 자리
                        </p>
                        </div>
                        <div className="px-6 py-4">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="mb-6  mt-6 max-w-sm rounded overflow-hidden shadow-lg bg-white">
                        <img className="w-full" src={dotMap} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="text-blue-500 font-bold text-xl mb-2">제목</div>
                            <p className="text-gray-700 text-base">
                                기업포트폴리오 들어갈 자리
                                기업포트폴리오 들어갈 자리
                                기업포트폴리오 들어갈 자리
                        </p>
                        </div>
                        <div className="px-6 py-4">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                        </div>
                    </div>
                </InnerDiv>
            </DIV1>

        </>
    )
}



const DIV1 = styled.div`
            background-color: #a3bffa;
            display:flex;
            position:relative;
            justify-content:space-around;
            flex-wrap:wrap;
            margin-top:2rem;
            border-top-left-radius: 0.5rem;
            border-top-right-radius: 0.5rem;
        `;
const InnerDiv = styled.div`
            background-color: #a3bffa;
            display:flex;
            position:relative;
            justify-content:space-around;
            flex-wrap:wrap;
            flex:1;
            max-width:85rem;            
        `;




export default Portfolio;