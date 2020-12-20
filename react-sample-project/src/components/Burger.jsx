import Rightnav from './Rightnav';
import styled from 'styled-components'
import React,{useState} from 'react';
import './Top.css'

const StyleBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    position:fixed;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    z-index:20px;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }

  }
`;


const Burger = ()=> {
    // stateの関数
    const [open, setOpen] = useState(false); 

return (
        < ><div className="burgar">
        <StyleBurger onClick={()=>setOpen(!open)} open={open}>
        <div/>
        <div/>
        <div/>
         </StyleBurger>
         <Rightnav open = {open}/>   
         </div>
        </>
    )
}

export default Burger
