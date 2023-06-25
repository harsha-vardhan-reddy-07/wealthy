import React from 'react'
import { BottomText, Button, Container, FormContainer, Input, TopText } from './form-styled'
import {CiMobile3 } from 'react-icons/ci'

const Form = () => {
  return (
    <Container>

        <TopText>Register now to get a call back or to access the platform</TopText>

        <FormContainer>
            <Input placeholder='Your Mobile Number' />
            <Input placeholder='Your First Name'  />
            <Input placeholder='Your Last name'  />
            <Input placeholder='Your Email ID'  />
            <Button >Submit</Button>
            <BottomText>T&C</BottomText>
        </FormContainer>

    </Container>
  )
}

export default Form