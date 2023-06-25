import styled from "styled-components";

export const Container = styled.div`
    background: #F2F4FC;
    padding: 20px 0%;

    @media screen and (max-width: 500px) {
        position: relative;
        top: 10vh;
    }
`;

export const Heading = styled.h3`
    
    font-size: 1.6rem;
    font-family: Maven Pro;
    font-weight: 400;
    line-height: 153.391%;

    margin-left: 7%;
`;

export const HeadingColored = styled.span`
    color: #6725F4;
    font-weight: 600;
`;

export const UlContainer = styled.div`
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 500px) {
        justify-content: center;
        overflow-y: scroll;
        padding: 0 2vw;
        gap: 0vw;
    }
`;


export const Ulist = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;
    @media screen and (max-width: 500px) {
        display: none;
    }
`;

export const ListItem = styled.li`
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 10px;

    color: #1C1C1C;
    font-size: 1.1rem;
    font-family: Maven Pro;
    line-height: 153.391%;

    @media screen and (max-width: 500px) {
        margin-left: 5vw;
    }
`;

export const ListIcon = styled.img`
    height: 2.7rem;
` ;