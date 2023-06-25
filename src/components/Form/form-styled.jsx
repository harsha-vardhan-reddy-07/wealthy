import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 800px) {
        
        width: 100%;
    }
    @media screen and (max-width: 500px) {
        
        width: 100%;
    }
`;

export const TopText = styled.p`
    text-align: center;
    padding: 0 5%;
    color: #7E7E7E;
    font-size: 0.9rem;
    font-family: Maven Pro;
    line-height: 153.391%;

    @media screen and (max-width: 500px) {
        
        display: none;
    }
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 16px;
    background: #F6F6FB;
    width: 100%;
    height: 60vh;
    padding: 7%;
    gap: 10px;

    @media screen and (max-width:500px) {
        height: max-content;
    }
`;

export const Input = styled.input`
    width: 90%;
    border-radius: 6px;
    border: none;
    background: #FFF;
    height: 15%;
    outline: none;
    padding: 0 5%;

    ::placeholder{
        color: #7E7E7E;
        font-size: 16px;
        font-family: Maven Pro;
    }

    @media screen and (max-width:500px) {
        height: 7.5vh;
    }
`;

export const Button = styled.button`
    border-radius: 51px;
    background: #6725F4;
    width: 100%;
    border: none;
    color: var(--white, #FFF);
    text-align: center;
    font-size: 18px;
    font-family: Lato;
    font-weight: 700;
    height: 15%;
    @media screen and (max-width:500px) {
        height: 7vh;
    }
`;

export const BottomText = styled.p`
    color: #7E7E7E;
    text-align: center;
    font-size: 14px;
    font-family: Maven Pro;
`;