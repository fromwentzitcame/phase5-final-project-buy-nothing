import React from 'react'
import styled from 'styled-components'
import { Button } from '../styles'
import { useNavigate } from 'react-router-dom'


function LandingPage() {
    const navigate = useNavigate()

    return (
        <>
            <WelcomeDisplay>
                <p>buy less, share more</p>
                <LandingImage src="images/community.png" alt="community"></LandingImage>
                <Summary>the buy nothing project was founded in 2013 with the mission to build community by connecting people through hyperlocal gifting while reducing our impact on the environment</Summary>
                <Button onClick={() => {navigate('/signup')}}>join us</Button>
            </WelcomeDisplay>
        </>

    )
}

export default LandingPage

const WelcomeDisplay = styled.div`
    margin-top: 120px;
    font-size: 40px;
    text-align: center;
`

const LandingImage = styled.img`
    height: 150px;
    width: auto;
    padding-bottom: 24px;
`

const Summary = styled.p`
    margin: auto;
    padding-bottom: 24px;
    font-size: 24px;
    width: 75%;
`