import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import 'aos';
import 'aos/dist/aos.css';

const Marker = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z" /></SVG>
                <MarkerDIV >
                    <h1>서울 종로구 종로1길 50</h1>
                    <h1> 더케이트윈타워</h1>
                </MarkerDIV>
            </div>
        </>

    )
}

const Contact = ({ contactRef }) => {

    const center = {
        lat: 37.574597,
        lng: 126.979246
    };
    const zoom = 15;

    return (
        <>
            <DIV ref={contactRef}>
                <h1 className="text-4xl mt-8 mb-8 font-bold">CONTACT</h1>
                <MapDIV data-aos="zoom-in">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyDKbjjUwIRNfRR933yEQ4UoL-EtlocgXbw' }}
                        defaultCenter={center}
                        defaultZoom={zoom}
                    >
                        <Marker
                            lat={37.574597}
                            lng={126.979246}
                        />
                    </GoogleMapReact>
                    <MailDIV className="flex flex-col flex-wrap mt-6">
                        <div data-aos="zoom-in" className="flex items-center flex-1 pt-1 pb-1">
                            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path className="heroicon-ui" d="M13 20v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.59l-.3.3a1 1 0 1 1-1.4-1.42l9-9a1 1 0 0 1 1.4 0l9 9a1 1 0 0 1-1.4 1.42l-.3-.3V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5h3z" /></Icon>
                            <H1><span className="ml-2 mr-2">|</span><span>서울시 종로구 종로1길 50 더케이트윈타워 0호</span></H1>
                        </div>
                        <div data-aos="zoom-in" className="flex items-center pt-1 pb-1">
                            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path className="heroicon-ui" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 0 1-.9 0L4 9.62V18h16V9.62z" /></Icon>
                            <H1><span className="ml-2 mr-2">|</span><span>email@google.com</span></H1>
                        </div>
                        <div data-aos="zoom-in" className="flex items-center pt-1 pb-1">
                            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path className="heroicon-ui" d="M13.04 14.69l1.07-2.14a1 1 0 0 1 1.2-.5l6 2A1 1 0 0 1 22 15v5a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2h5a1 1 0 0 1 .95.68l2 6a1 1 0 0 1-.5 1.21L9.3 10.96a10.05 10.05 0 0 0 3.73 3.73zM8.28 4H4v2a14 14 0 0 0 14 14h2v-4.28l-4.5-1.5-1.12 2.26a1 1 0 0 1-1.3.46 12.04 12.04 0 0 1-6.02-6.01 1 1 0 0 1 .46-1.3l2.26-1.14L8.28 4z" /></Icon>
                            <H1><span className="ml-2 mr-2">|</span><span>010 - 1234 - 1234</span></H1>
                        </div>
                    </MailDIV>
                </MapDIV>
            </DIV>
        </>
    )
}

const MailDIV = styled.div`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    margin-top:1.5rem;
    width:max-content;
`;

const MarkerDIV = styled.div`
    color: #1a202c;
    width:max-content;
    margin-top: 0.5rem;
    background-color: #f7fafc;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size:1rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;
const SVG = styled.svg`
    width:2rem;
    height:2rem;
    fill:#2a4365;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;

const Icon = styled.svg`
    width:1.3rem;
    height:1.3rem;
    fill:#f7fafc;
    @media (min-width: 640px) {
        width:3rem;
        height:3rem;
          }        
`;

const H1 = styled.h1`
    font-size:0.9rem;
    fill:#f7fafc;
    @media (min-width: 640px) {
        font-size:2rem;
          }      
`;

const MapDIV = styled.div`
    display:flex;
    position: relative;
    height : 70vh;
    width: 75%;
    margin-bottom:3rem;
    border-radius: 0.3rem;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;
const DIV = styled.div`
            display:flex;
            position:relative;
            justify-content:center;
            height: auto;
            margin-top:2rem;
            border-top-left-radius: 0.5rem;
            border-top-right-radius: 0.5rem;
            color : #edf2f7;
            background-image: url();
            background-size: 50rem;
            background-repeat: no-repeat;
            background-position:center;
            background-color: #2d3748;
            flex-direction:column;
            align-items:center;
        `;

export default Contact;