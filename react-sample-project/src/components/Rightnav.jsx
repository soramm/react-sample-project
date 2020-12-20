import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { Route, Link } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'




const StyleRightnav = styled.div`
list-style: none;
display: flex;
flex-flow: row nowrap;
box-sizing:content-box;
align-items:center;
margin-left:500px;


li{
    padding:10px 20px ;
    list-style:none;
    display:inline;
}
li:hover{
    border-bottom:2px solid rgba(62, 161, 209, 0.7);
}
a{
    text-decoration: none;
    color:#333;
}
@media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    color:#fff;
    /* state(open) の真偽によりスタイルを切り替える */
    transform: ${({ open }) => open ? 'translateX(00%)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    
a{
    color:#fff;
}
    
}


`;
    const Rightnav = ({open})=> {
    return (
        <StyleRightnav>
        <div className="navbar">
       <ul open={open}>
              <li><AnchorLink href='/'>HOME</AnchorLink></li>
              <li><AnchorLink href='#about'>ABOUT</AnchorLink></li>
              <li><AnchorLink href='#lesson'>PRODUCTS</AnchorLink></li>
              <li><AnchorLink href='#skill'>SKILL</AnchorLink></li>
        </ul>  
        </div>
        <Route path="/" />
        <Route path="Lesson" />
        <Route path="Skill"/>

        </StyleRightnav>
    )
}

export default Rightnav
