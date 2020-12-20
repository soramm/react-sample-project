import React from 'react'
import styled from 'styled-components'
import {Transition} from 'react-spring/renderprops'


const StyleTop = styled.div`

@media screen and (max-width: 767px){
  .mask-top img{
    width:60%;
  }
  }
`;

const items = [{text:"Design your life"}]

function Top() {
    return (
        <>
        <StyleTop>
               <div className="mask-top" style={{textAlign: 'center',paddingTop:"150px"}}>
            <img src="img/mask-sample.png" alt="" />
                </div>

<Transition
  items={items} keys={item => item.key}
  from={{ transform: 'translate3d(-40px,0,0)'}}
  enter={{ transform: 'translate3d(0,0px,0)' }}
>
  {item => props => <div style={props}>{item.text}</div>}
    </Transition>
    </StyleTop>
        </>
        
    )


   
}

export default Top
