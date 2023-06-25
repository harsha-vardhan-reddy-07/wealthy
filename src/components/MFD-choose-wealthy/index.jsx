import React from 'react'
import { BodyDecor, BodyImg, BodyText, Container, DecorIcon1, DecorIcon2, SelectorBody, SelectorContainer, SelectorItem, SelectorListUL, Title } from './MFD-styled'
import Image121 from '../../images/image-121.png';
import Image144 from '../../images/image-144.png';

const MfdChooseWealthy = () => {

    const imgUrl = 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80';
  return (
    <Container>

        <Title>Why do MFDs choose Wealthy?</Title>

        <SelectorContainer>

            <SelectorListUL>
                <SelectorItem active>Team Office</SelectorItem>
                <SelectorItem>Reports</SelectorItem>
                <SelectorItem>Training</SelectorItem>
                <SelectorItem>Dedicated Support Team</SelectorItem>
                <SelectorItem>App for</SelectorItem>
            </SelectorListUL>
            
        </SelectorContainer>

        <SelectorBody>

            <BodyImg src={imgUrl} />

            <BodyText>Top MFDs use the My Teams feature to manage their employees. Grow their business and track employee performance.</BodyText>

            <BodyDecor>
                <DecorIcon1 src={Image121} />
                <DecorIcon2 src={Image144} />
            </BodyDecor>

        </SelectorBody>

    </Container>
  )
}

export default MfdChooseWealthy