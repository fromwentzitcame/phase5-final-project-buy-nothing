import React from 'react'
import styled from 'styled-components'
import Toolbar from './Toolbar'

function LandingPage({user}) {
    return (
        <Homepage>
            {/* {user? <Toolbar/> : null} */}
            <Toolbar/>
            {user===null?
            <WelcomeDisplay>
                <p>buy less, share more</p>
                <Summary>the buy nothing project was founded in 2013 with the mission to build community by connecting people through hyperlocal gifting, and reducing our impact on the environment.</Summary>
            </WelcomeDisplay> : null}
        </Homepage>

    )
}

export default LandingPage

const WelcomeDisplay = styled.div`
    margin-top: 100px;
    font-size: 36px;
`

const Summary = styled.p`
    margin: auto;
    font-size: 24px;
    width: 60%;
`

const Homepage = styled.div`

`