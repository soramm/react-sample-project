import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { Route, Link } from 'react-router-dom'
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
    transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(100%)'};
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
              <li><Link to='/'>HOME</Link></li>
              <li><Link to='/About'>ABOUT</Link></li>
              <li><Link to='./Lesson'>PRODUCTS</Link></li>
              <li><Link to='./Skill'>SKILL</Link></li>
        </ul>  
        </div>
        <Route path="/" />
        <Route path="Lesson" />
        <Route path="Skill"/>

        </StyleRightnav>
    )
}

export default Rightnav
