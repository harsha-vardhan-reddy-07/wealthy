import React from 'react'
import { BottomContainer, BottomData, BottomDataImg, BottomHr, ColorHeading, ColoredContainer, ColoredContainerText, Container, Feature, FeatureIcon, FeatureText, Features, Heading, MainImg, MainImgPart, VideoBtn, VideoBtnImg } from './BestMFA-styled'
import Icon62 from '../../images/ICONS62MobilePlain.svg'
import Image421 from '../../images/image-421.png'
import WealthyPartners from '../../images/wealthPartners.png'
import CroreAnum from '../../images/50CroreAum.png'
import videoImg from '../../images/videoPlayBtn.png'

const MfaAd = () => {
  return (
    <Container>

        <ColoredContainer>

            <ColoredContainerText>

                <Heading> India's best Mobile app experience for <ColorHeading>Mutual Fund Advisors</ColorHeading> </Heading>

                <Features>
                    <Feature><FeatureIcon src={Icon62} /> <FeatureText> Full desktop functionalities on app</FeatureText></Feature>
                    <Feature><FeatureIcon src={Icon62} /><FeatureText> Quick & paperless KYC verification</FeatureText></Feature>
                    <Feature><FeatureIcon src={Icon62} /><FeatureText> Business on the go</FeatureText></Feature>
                </Features>

                <VideoBtn>App Video <VideoBtnImg src={videoImg} /></VideoBtn>
            
            </ColoredContainerText>
            
            <MainImgPart>

                <MainImg src={Image421} />
           
            </MainImgPart>
        
        </ColoredContainer>

        <BottomContainer>

            <BottomData> <BottomDataImg src={WealthyPartners} /> 5000+ Mutual Fund Distributors</BottomData>
            <BottomData> <BottomDataImg src={CroreAnum} /> 6000+ Cr Investments</BottomData>

        </BottomContainer>

        <BottomHr />
    </Container>
  )
}

export default MfaAd;