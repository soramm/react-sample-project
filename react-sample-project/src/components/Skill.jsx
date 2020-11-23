import React from 'react'
import "./Skill.css"


const Skill = (props) => {
    return (
        <>
                <div className="skillitem">
                <img src={props.img} /> 
                </div>
            </>
    )
}

export default Skill
