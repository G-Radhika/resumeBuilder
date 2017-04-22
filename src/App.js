import React, { Component } from 'react';
import './style/App.css';
import Bio from './components/Bio';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contacts from './components/Contacts'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      bioData : {}
    }
  }
  render() {
    return (
      <div className="App">
        
        <h1>Resume Builder</h1>
        <Bio name='Radhika' location='97124' summary="BLA BLA BLA...." photo="./girl.jpg"/>
        <WorkExperience WorkExperience="This is my firstever project from scratch... Hopfully I can recreate it again!" />
        <Skills skillsArr={['HTML','javascript','CSS']}/>
        <Projects projectsArr={[{title:"Project 1",description:"Bla bla bla and a bla...",language:['javaScript', 'HTML','CSS']},
                             {title:"Project 2",description:"Bla bla bla and a bla...",language:['javaScript', 'HTML','CSS']},
                             {title:"Project 3",description:"Bla bla bla and a bla...",language:['javaScript', 'HTML','CSS']}]} />
        <Contacts contactsArr={['gitHub','LinkedIn','Email','Phone']} />
      </div>
    );
  }
}

export default App;