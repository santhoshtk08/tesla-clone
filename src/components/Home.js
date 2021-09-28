import React from 'react'
import styled from 'styled-components'
import Section from '../Section'

function Home() {
    return (
        <Container>
            <Section title="Model S"
                description ="Order Online for Touchless Delivery"
                leftbutton="custom order"
                rightbutton="existing inventory"
                backgroundimg="model-s.jpg"

            />
            <Section title="Model Y"
                description ="Order Online for Touchless Delivery"
                leftbutton="custom order"
                rightbutton="existing inventory" 
                backgroundimg= "model-y.jpg"
                />
            <Section title="Model 3"
                description ="Order Online for Touchless Delivery"
                leftbutton="custom order"
                rightbutton="existing inventory" 
                backgroundimg="model-3.jpg"
                
                />
            <Section title="Model X"
                description ="Order Online for Touchless Delivery"
                leftbutton="custom order"
                rightbutton="existing inventory" 
                backgroundimg="model-x.jpg"
                
                />
            <Section title="Solar Panels"
                description ="Lowest Cost Solar Panels in America"
                leftbutton="order now"
                rightbutton="learn more" 
                backgroundimg="solar-panel.jpg"
                />
            <Section title="Solar Roof"
                description ="Produce Clean Energy From Your Roof"
                leftbutton="order now"
                rightbutton="learn more" 
                backgroundimg="solar-roof.jpg"
                />
            <Section title="Accessories"
                description =""
                leftbutton="shop now" 
                backgroundimg="accessories.jpg"
                />
        </Container>
    )
}

export default Home

const Container = styled.div `
    height:100vh;
`
