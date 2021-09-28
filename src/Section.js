import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title,description,leftbutton,rightbutton,backgroundimg}) {
    return (
        <Wrap bgimg={backgroundimg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftbutton}
                        </LeftButton>
                        {rightbutton &&
                             <RightButton>
                             {rightbutton}
                            </RightButton>
                        }
                        </ButtonGroup>
                    
                        <DownArrow src="/images/down-arrow.svg" />
                </Fade>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width : 100 vw;
    height : 100vh;
    background-size : cover;
    background-position : center;
    background-repeat : no-repeat;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-items: center;
    background-image : ${props => `url("/images/${props.bgimg}")`}
    

`

const ItemText = styled.div `
    padding-top :15vh;
    
`
const ButtonGroup = styled.div `
    display : flex;
    margin-bottom : 30px;
    @media(max-width:750px){
        flex-direction:column;
    }
    
    
`
const LeftButton = styled.div `
    background-color : black;
    color : white;
    height : 40px;
    width : 250px;
    cursor : pointer;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius: 100px;
    
    text-transform : uppercase;
    font-size : 12px;
    margin : 10px;
    margin-bottom : 0px;
`
const RightButton = styled(LeftButton) `
    background : white;  
    color: black;
`

const DownArrow = styled.img `
    height : 40px;
    margin-top : 0px;
    animation : animateDown infinite 1.5s;
    
`

const Buttons = styled.div `

`