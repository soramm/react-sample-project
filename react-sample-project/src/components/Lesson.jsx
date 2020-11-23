import React from 'react'
import './Lesson.css'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const Lesson = (props)=> {
    return (
        <>
        <div className='lesson-card'>
        <div className='lesson-item'>
          <p>{props.name}</p>
          <img src={props.image} />
          <p>{props.text}</p>
          <Button href={props.link} color="primary">github</Button>

          {/* <a href={props.link}>Githubはこちら</a> */}
        </div>
      </div>
        </>
    )
}

export default Lesson
