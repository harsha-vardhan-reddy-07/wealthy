import styled from "styled-components";

export const Container = styled.div`
    padding: 30px 4%;

    @media screen and (max-width: 500px) {
        position: relative;
        top: 10vh;
    }
`;

export const Title = styled.h3`

    border-radius: 1000px;
    background: #FFF0D2;
    width: fit-content;
    padding: 10px 20px;
    color: #B47F1A;
    text-align: center;
    font-size: 1.2rem;
    font-family: Maven Pro;
    font-weight: 500;
    line-height: 153.391%;

    @media screen and (max-width: 500px) {
        text-align: center;
    }
    
`;

export const SelectorContainer = styled.div`
    width: 60%;
    overflow-x: scroll;
    -ms-overflow-style: none; 
    scrollbar-width: none; 
    margin-bottom: 30px;
    cursor: pointer;

    ::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 500px) {
        width: 100%;
    }

`;

export const SelectorListUL = styled.ul`
    display: flex;
    gap: 30px;
    justify-content: left;
    align-items: center;
    width: max-content;
`;

export const SelectorItem = styled.li`
    list-style-type: none;
    color: #BEBEBE;
    color: ${props=> props.active ? '#1C1C1C' : '#BEBEBE'};
    font-size: 1.1rem;
    font-family: Maven Pro;
    font-weight: 500;
    line-height: 153.391%;
    border-bottom: ${props=> props.active ? '2px solid #6725F4' : 'none'};
    @media screen and (max-width: 500px) {
        width: fit-content;
        display: inline;
    }
`;

export const SelectorBody = styled.div`
    display: flex;
    padding: 0 3%;
    align-items: center;
    gap: 5%;

    @media screen and (max-width: 500px) {
        flex-direction: column;
    }

`;

export const BodyImg = styled.img`
    width: 30vw;
    @media screen and (max-width: 500px) {
        width: 90%;
    }
`;

export const BodyText = styled.p`
    color: #7E7E7E;
    font-size: 1.1rem;
    font-family: Maven Pro;
    line-height: 153.391%;
    width: 30%;
    @media screen and (max-width: 500px) {
        width: 90%;
    }
`;

export const BodyDecor = styled.div`
    width: 30%;
    height: 40vh;

    @media screen and (max-width: 500px) {
        display: none;
    }
`;

export const DecorIcon1 = styled.img`
    position: relative;
    top:90%;
    left: 80%;

`;

export const DecorIcon2 = styled.img`
    position: relative;
    top:65%;
    left: 75%;
`;