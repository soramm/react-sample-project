import React,{useState} from 'react';
import Burger from './Burger'
import styled from 'styled-components'

const StyleNavbar = styled.div`
width: 90%;
padding: 80px  20px 0 20px;
display: flex;
justify-content: space-around;
background:#fff;
position:fixed;
z-index:20px;

.logo {
  padding: 15px 0;
  font-size:25px;
}

@media screen and (max-width: 767px){
    position:fixed;
}


`;




const Navbar = () =>{

    return (
        <>
            <StyleNavbar>
                <div className="logo">
                    My portfolio
                </div>
                <Burger/>
            </StyleNavbar>
        </>
    )
}

export default Navbar
