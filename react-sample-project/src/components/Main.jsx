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
          {img:'img/kisspng-javascript-logo-html-clip-art-javascript-logo-5b5188b1a2a1f9.2428698915320700656662.png'},
          {img:'img/kisspng-game-react-native-javascript-android-physics-5ac6d5f51879e8.6623465115229803411003.png'},
          {img:'img/kisspng-web-development-html-css3-canvas-element-web-desig-w3c-html5-logo-5ab0c8402a5109.6990536715215350401733.png'},
          {img:'img/kisspng-web-development-cascading-style-sheets-css3-comput-css-5ada20be5eed10.7390827615242446703888.png'},
          {img:'img/kisspng-sass-logo-cascading-style-sheets-scalable-vector-g-codzero-cms-blog-tool-publishing-platform-5b74aaa12bfc04.1827984715343725131802.png'},
          {img:'img/kisspng-ruby-on-rails-computer-programming-programming-lan-meppel-5b1c3689153ed5.075223771528575625087.png'}
        ]

      return(
          <><div className="main">
            <About />
           <div className='lesson-container'>
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

        <div className="skill-container">
        <h3 className='section-title text-center'>SKILL</h3>
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
