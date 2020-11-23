import './App.css';
import Main from './components/Main'
import Navbar from './components/Navbar'
import Top from './components/Top'
import Footer from './components/Footer'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import React from 'react'
import Lesson from './components/Lesson'

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Top />
      <Main />
      <Footer />
      <Switch>
      <Route path='/' exact/>
      <Route path="/Lesson"/>
        <Route path="/Skill" />
         {/* <Route path="/about" component = {About}/> */}

      </Switch>
      </Router>
    </>
  );
}

export default App;
