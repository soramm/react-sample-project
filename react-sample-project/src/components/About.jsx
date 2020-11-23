import React from 'react'
import styled from 'styled-components'

const StyleAbout = styled.div`
    .about-container{
        display:flex;
        width:100%;
        margin: 0 auto;
    }
    .about-img img{
        width:70%;
    }
    h2{
        text-align:center;
    }
`;

function About() {
    return (
        <>
        <StyleAbout>
                <h2>About 
                </h2>
            <div className="about-container">
                <div className="about-img">
                     <img src="img/6034.png" alt=""/>       
                </div>
                <div className="about-text">
                   <p> イニシャル：U A</p>
                   <p>出身地：熊本県</p> 
                   <p>言語：日本語、英語（日常会話レベル）</p> 
                   <p>趣味：食べ歩き、散歩、歌詞を覚えること</p> 
                   <p>好きな食べ物：お肉、カボチャ、アイス</p> 
                  <p>  嫌いな食べ物：チーズ、さといも、たくさん混ぜた納豆</p>
                </div>
            </div>
            </StyleAbout>
        </>
    )
}

export default About
