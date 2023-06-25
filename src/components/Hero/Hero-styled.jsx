import styled from "styled-components";

export const HeroBody = styled.div`
    padding: 0 8%;
    display: grid;
    height: 88vh;
    grid-template-columns: 40% 30% 30%;


    @media screen and (max-width: 800px) {
        height: max-content;
        margin-bottom: 5vh;
        grid-template-columns: 60% 40%;
    }
    
    @media screen and (max-width: 500px) {
        
        position: relative;
        top: 10vh;
        z-index: 2;
        height: max-content;
        display: flex;
        flex-direction: column;
        margin-bottom: 5vh;

    }
    
`;

export const HeroTextPart = styled.div`
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        
        width: 100%;
     }
    
    @media screen and (max-width: 500px) {
        
       width: 100%;
    }
`;

export const HeroImg = styled.img`
    width: 25vw;
    margin-top: 40%;
    position: relative;
    left: -5vw;

    @media screen and (max-width: 800px) {
        
        display: none;
    }
`;
export const HeroTextTop = styled.div`
    
`;
export const HeroTitle = styled.h3`
    color: #6725F4;
    font-size: 2.2rem;
    font-family: Maven Pro;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 20px;
    margin-top: 15%;
`;

export const HeroP = styled.p`
    color: #7E7E7E;
    font-size: 0.8rem;
    font-family: Maven Pro;
    line-height: 153.391%;
    /* margin: 0px 20px 0px 0px; */
`;

export const HeroBottomPart = styled.div`
    @media screen and (max-width: 500px) {
        
        display: none;
    }
`;

export const BottomHr = styled.hr`
    width:100%;
    height: 1px;
    border: none;
    background:linear-gradient(270deg, rgba(218, 218, 218, 0.00) 0%, #DADADA 100%);
`;

export const BottomData = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 13vh;
`;

export const BottomIcon = styled.img`
    width: 3rem;
    height: 3rem;
`;

export const BottomP = styled.p`
    color: #1C1C1C;
    font-size: 1rem;
    font-family: Maven Pro;
    font-weight: 500;
    /* line-height: 153.391%; */
`;
