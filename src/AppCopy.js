import React, { Component } from 'react';
import './style/App.css';

import Bio from './components/Bio';
import BioForm from './formInputs/BioForm';
import WorkExperience from './components/WorkExperience';
import WorkExperienceForm from './formInputs/WorkExperienceForm';
import Skills from './components/Skills';
import SkillsForm from './formInputs/SkillsForm';

/*import Projects from './components/Projects';

import Contacts from './components/Contacts';
import ContactsForm from './formInputs/ContactsForm';*/

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bioData: {
        name: "",
        location: "",
        summary: ""
      },
      workExpData: "",
      skillsArrData: ""

    }
  }
  handleBioFormSubmit(bioData) {
    console.log("handle Bio Form Submit");
    this.setState({ bioData: bioData })
  }
  handleWorkExpFormSubmit(workExpData) {
    console.log("in handleWorkExpFormSubmit");
    this.setState({ workExpData: workExpData })
  }
  handleSkillsFormSubmit(skillsArrData) {
    console.log("in handle skills FormSubmit");
    this.setState({ skillsArrData: skillsArrData })
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <h1>Resume Builder</h1>
        <Bio bioProps={this.state.bioData} />
        <BioForm bioFormPropsFunc={this.handleBioFormSubmit.bind(this)} />
        <WorkExperience workExpProps={this.state.workExpData} />
        <WorkExperienceForm workFormPropsFunc={this.handleWorkExpFormSubmit.bind(this)} />
        <Skills skillsProps={this.state.skillsArrData} />
        <SkillsForm skillsFormPropsFunc={this.handleSkillsFormSubmit.bind(this)} />
      </div>
    );
  }
}

export default App;