import React from 'react'
import styled from 'styled-components'


function Header() {
    return (
        <Container>
            <a href="">
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                <p>Model S</p>
                <p>Model Y</p>
                <p>Model 3</p>
                <p>Model X</p>
                <p>Solar Roof</p>
                <p>Solar Panel</p>
            </Menu>
            <RightMenu>
                <p>Shop</p>
                <p>Account</p>
                <p>Menu</p>

            </RightMenu>
        </Container>
    )
}

export default Header

const Container = styled.div `
    min-height:40px;
    position:fixed;
    padding:0 20px;
    display:flex;
    align-items:center;
    top:0;
    left:0;
    right: 0;
    justify-content:space-between;
`
const Menu = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;

    
    p{
        padding:5px 10px;
        font-weight:500;
        cursor:pointer;
        flex:nowrap;
    }
    @media(max-width:880px){
        display:none;
    }
`

const RightMenu =styled.div `
    display:flex;
    align-items:center;
      p{
        padding:5px 10px;
        font-weight:500;
        cursor:pointer;
        flex:nowrap;
    }
`