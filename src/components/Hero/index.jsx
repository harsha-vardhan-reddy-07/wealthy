import React from 'react'
import { BottomData, BottomHr, BottomIcon, BottomP, HeroBody, HeroBottomPart, HeroImg, HeroP, HeroTextPart, HeroTextTop, HeroTitle } from './Hero-styled';
import HeroImage from '../../images/grow-1.png';
import BottomIconImg from '../../images/Stars.png';
import Form from '../Form'


const Hero = () => {
  return (
    <HeroBody >

        <HeroTextPart>
            <HeroTextTop>

                <HeroTitle>India's top Mutual Fund Distributors Platform</HeroTitle>
                <HeroP>Wealthy’s superior technology, smooth client onboarding, highest payouts and marketing support powers 5000+ MFDs</HeroP>

            </HeroTextTop>

            <HeroBottomPart>

                <BottomHr />
                <BottomData >

                    <BottomIcon src={BottomIconImg} />
                    <BottomP>Build your business and leverage our technology</BottomP>

                </BottomData>
            </HeroBottomPart>

        </HeroTextPart>

        <HeroImg src={HeroImage} />

        <Form />

    </HeroBody>
  )
}

export default Hero