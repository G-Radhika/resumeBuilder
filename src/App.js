import React, { Component } from 'react';
import './style/App.css';
import Bio from './components/Bio';
import BioForm from './formInputs/BioForm';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contacts from './components/Contacts';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
     // bioData: {}
    }
  }
  /*bioFormSubmit(bioData2){
		  this.setState({bioData: bioData2})
	}*/

   /*componentDidMount(){
    this.emitter.addListener('NewBioData', (bioData) => this.bioFormSubmit(bioData) )
    //this.emitter.addListener('NewProjectsData', (projects) => this.handleProjecstData(projects) )
    //this.emitter.addListener('NewSkillsData', (skills) => this.handleSkillsData(skills) )

<BioForm buttonName="Bio" onFormSubmit={this.bioFormSubmit.bind(this)}/>

	}*/



  render() {
    return (
      <div className="App">

        <h1>Resume Builder</h1>        
        <Bio name='Radhika' location='97124' summary="BLA BLA BLA...." photo="./girl.jpg" />
        <BioForm />
        
        <WorkExperience WorkExperience="This is my firstever project from scratch... Hopfully I can recreate it again!" />
        <Skills skillsArr={['HTML', 'javascript', 'CSS']} />
        <Projects projectsArr={[{ title: "Project 1", description: "Bla bla bla and a bla...", language: ['javaScript', 'HTML', 'CSS'] },
        { title: "Project 2", description: "Bla bla bla and a bla...", language: ['javaScript', 'HTML', 'CSS'] },
        { title: "Project 3", description: "Bla bla bla and a bla...", language: ['javaScript', 'HTML', 'CSS'] }]} />
        <Contacts contactsArr={['gitHub', 'LinkedIn', 'Email', 'Phone']} />
      </div>
    );
  }
}

export default App;