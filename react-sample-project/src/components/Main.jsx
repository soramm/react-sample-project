import React from 'react'
import Lesson from '../components/Lesson'
import Skill from '../components/Skill'
import About from '../components/About'

const Main = ()=> {

    const lessonList = [
        {
          name: 'PIZZA屋さんのHP',
          image: 'img/127.0.0.1_5502_index.html.png',
          text : 'HTML,CSS,jQueryを使用して作成。',
          link:'https://soramm.github.io/myportfolio3/'
        },
        {
          name: '女性向けページ',
          image: 'img/soramm.github.io_myportfolio2_.png',
          text:'HTML,CSS,jQueryを使用して作成',
          link:'https://soramm.github.io/myportfolio3/'
        },
        {
          name: '自己紹介ページ',
          image: 'img/127.0.0.1_5500_html_portlate1.html.png',
          text:'Bootstrapを使用して作成',
          link:'https://soramm.github.io/myportfolio3/'
        },
        
      ];

      const Skillitems =[
          {img : 'fab fa-html5 fa-6x'},
          {img : 'fab fa-css3-alt fa-6x'},
          {img : 'fab fa-react fa-6x'},
          {img : 'fab fa-js fa-6x'},
          {img : 'fab fa-sass fa-6x'},
          {img : 'far fa-gem fa-6x'}

        ]

      return(
          <><div className="main">
            <About />
           <div className='lesson-container' id="lesson">
            <h3 className='section-title text-center'>PRODUCTS</h3>
            <div className="lesson-items">
      {lessonList.map((lessonItem) =>{
              
        return(
        <Lesson
              name={lessonItem.name}
              image={lessonItem.image}
              text={lessonItem.text}
              link={lessonItem.link}  
            />
            )})}

        </div>
        </div>

        <div className="skill-container " id="skill">
        <h2 className='section-title text-center'>SKILL</h2>
            <div className="skill-items">
        {Skillitems.map((Skillitem) =>{
              
              return(
              <Skill
                    img={Skillitem.img}
                  />
                  )})}  
        
        </div>
        </div>
        </div>
   </>
      )}

export default Main
