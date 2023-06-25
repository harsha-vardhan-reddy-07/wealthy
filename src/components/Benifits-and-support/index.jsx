import React from 'react'
import { Container, Heading, HeadingColored, ListIcon, ListItem, UlContainer, Ulist } from './Benifits-styled'
import Icon55 from '../../images/ICONS-55.svg';
import Icon56 from '../../images/ICONS-56.svg';
import Icon57 from '../../images/ICONS-57.svg';
import Icon58 from '../../images/ICONS-58.svg';
import Icon59 from '../../images/ICONS-59.svg';
import Icon60 from '../../images/ICONS-60.svg';
import Icon61 from '../../images/ICONS-61.svg';
import Icon62 from '../../images/ICONS-62.svg';
import Icon63 from '../../images/ICONS-63.svg';

const Benifits = () => {
  return (
    <Container>

        <Heading><HeadingColored>Benefits and Support</HeadingColored> For Mutual Fund Distributors</Heading>

        <UlContainer>

            <Ulist>
                <ListItem><ListIcon src={Icon55} /> Multiple Financial Products</ListItem>
                <ListItem><ListIcon src={Icon56} /> Best payouts in the industry</ListItem>
                <ListItem><ListIcon src={Icon57} /> Marketing Support</ListItem>
            </Ulist>

            <Ulist>
                <ListItem><ListIcon src={Icon58} /> Dedicated Relationship Manager</ListItem>
                <ListItem><ListIcon src={Icon59} /> Training + Motivation Sessions</ListItem>
                <ListItem><ListIcon src={Icon60} /> Superior back office & tech</ListItem>
            </Ulist>

            <Ulist>
                <ListItem><ListIcon src={Icon62} /> Client App</ListItem>
                <ListItem><ListIcon src={Icon63} /> Rewards & Recognition</ListItem>
                <ListItem><ListIcon src={Icon61} /> All AMC Tie ups</ListItem>
            </Ulist>

        </UlContainer>

    </Container>
  )
}

export default Benifits