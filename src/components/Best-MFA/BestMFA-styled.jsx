import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
    overflow-x: hidden;

    @media screen and (max-width: 800px) {
        position: relative;
        top: 10vh;
        height: fit-content;
    }

`;

export const ColoredContainer = styled.div`

    background: #F5F2FE;
    display: flex;
    padding: 4% 5% 0% 4%;
    @media screen and (max-width: 800px) {

        height: fit-content;
    }
    
`;
export const ColoredContainerText = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
`;

export const Heading = styled.h3`
    margin: 0;
    color: #1C1C1C;
    font-size: 3rem;
    font-family: Maven Pro;
    font-weight: 500;
    /* line-height: 80px; */

    @media screen and (max-width: 800px) {
        width: 70vw;
        font-size: 2.5rem;
    }

    @media screen and (max-width: 500px) {
        width: 95vw;
        font-size: 2.5rem;
    }
`;

export const ColorHeading = styled.span`
    color: #6725F4;
`;

export const Features = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 4vh;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        gap: 15px;
    }
`;

export const Feature = styled.span`
    display: flex;
    align-items: center;

    @media screen and (max-width: 500px) {
        width: 50%;
        gap: 10px;
    }

`;
export const FeatureText = styled.span`
    color: #1C1C1C;
    font-size: 14px;
    font-family: Maven Pro;
    width: 60%;
`;

export const FeatureIcon = styled.img`
    height: 2rem;
`;

export const VideoBtn = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #6725F4;
    font-size: 1.1rem;
    font-family: Maven Pro;
    font-weight: 600;
    line-height: 153.391%;
    background-color: #fff;
    width: fit-content;
    padding: 5px 5px 5px 20px;
    border-radius: 3rem;

    position: relative;
    top: 25vh;

    @media screen and (max-width: 800px) {
        font-size: 0.9rem;
        margin: 30px 0;
        top: 0vh;
    }

`;

export const VideoBtnImg = styled.img`
    height: 2.5rem;

    @media screen and (max-width: 500px) {
        height: 2rem;
    }
`;

export const MainImgPart = styled.div`
    min-width: 40%;
    height: fit-content;
    @media screen and (max-width: 800px) {
        width: 50%;
        position: relative;
        top: 20vh;
        left: -30vw;
    }
    @media screen and (max-width: 500px) {
        width: 50%;
        position: relative;
        top: 20vh;
        left: -60vw;
    }
`;

export const MainImg = styled.img`
    height: 80vh;
    @media screen and (max-width: 800px) {
        height: 30vh;
        /* width: 30vw; */
    }
    @media screen and (max-width: 500px) {
        height: 40vh;
        /* width: 30vw; */
    }
`;

export const BottomContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10%;
    margin-top: 4vh;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }

    /* padding-bottom: 20vh; */
`;

export const BottomData = styled.div`
    display: flex;
    align-items: center;
    border-radius: 12px;
    background: #F6F6FB;
    color: #1C1C1C;
    font-size: 1.1rem;
    font-family: Maven Pro;
    font-weight: 500;
    line-height: 153.391%;
    width: 25%;
    padding: 5px 5px;
    @media screen and (max-width: 500px) {
        width: 90%;
        padding: 10px 5px;
    }
    
`;

export const BottomDataImg = styled.img`
    height: 2.2rem;
`;

export const BottomHr = styled.hr`
    height: 0px;
    margin-bottom: 5vh;
    width: 80%;
    border: none;
    margin-top: 5vh;
    border-top: 1px dashed #E3E3E3;
    border-style: 2px none dashed;
    border-color: #E3E3E3;
`;