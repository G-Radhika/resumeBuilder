import React, { Component } from 'react';
import './style/App.css';

import Bio from './components/Bio';
import BioForm from './containers/BioForm';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bioData: {
                name: "",
                location: "",
                summary: ""
            }
        }
    }
    handleBioFormSubmit(bioData) {
        console.log("handle Bio Form Submit");
        this.setState({ bioData: bioData })
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="App">
                <h1>Resume Builder</h1>
                <Bio bioProps={this.state.bioData} />
                <BioForm bioFormPropsFunc={this.handleBioFormSubmit.bind(this)} />
            </div>
        );
    }
}
export default App;