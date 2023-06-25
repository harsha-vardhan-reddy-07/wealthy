import styled from "styled-components";

export const Nav = styled.div`
    width: 100%;
    height: 12vh;
    display: flex;
    align-items: end;
    gap: 2vw;
    position: relative;
    top: 0;
    background-color: #fff;

    @media screen and (max-width: 500px){
        height: 10vh;
        padding-bottom: 0.5vh;

        position: fixed;
        top: 0vh;
        z-index: 999;

    }

`;

export const NavLogo = styled.img`

    height: 7vh;
    margin-left: 5vw;

    @media screen and (max-width: 500px){
        height: 5vh;
        margin-left: 5vw;
    }

`;

export const NavMF = styled.div`

    display: flex;
    background: #F6F6FB;
    align-items: center;
    gap: 5px;
    height: 4vh;
    padding: 0px 3vw;
    border-radius: 2rem;
    margin-bottom: 0.5vh;

    @media screen and (min-width: 500px){
        display: none;
    }


`;

export const NavMFIcon = styled.img`
    height: 2vh;

`;
export const NavMFP = styled.p`
    color: #1C1C1C;
    text-align: center;
    font-size: 14px;
    font-family: Maven Pro;
    font-weight: 500;
    line-height: 153.391%;
`;