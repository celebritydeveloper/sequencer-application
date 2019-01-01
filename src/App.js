import React, { Component } from 'react';
import './App.css';
import Sequencer from './sequencerComponents/Sequence.js';
import Result from './sequencerComponents/Result';
import generator from './sequenceFunctions/generator';


class App extends Component {
  constructor(props) {
    super(props);
    this.gen = null;
    this.nextGen = this.nextGen.bind(this);
    this.loadSequence = this.loadSequence.bind(this);
    this.exitSequence = this.exitSequence.bind(this);
  }
  
  loadSequence(sequencer) {
    if (this.gen === null){
        this.gen = generator(sequencer);
    }
    else {
      console.log('A sequence is currently running');
    }
  }
  nextGen(){
    if (this.gen) {
      console.log(this.gen.next());
    } else{
      console.log('No sequence is running')
    }
  }
  exitSequence() {
    this.gen = null;
    console.log('exited');
  }


  render() {
    return (
      <div>

        <div className="main-container">
          <div className="sequence">
            <Sequencer onClick={(sequencer) => {this.loadSequence(sequencer)}}/>
          </div>
          
        
          <div className="result">
            <Result methods = {{next: this.nextGen, exit: this.exitSequence } }/>
          </div>

        {/* Main container End */}
        </div>

        <div className="snackbar" id="snackbar">
          This is the snack bar
        </div>
      </div>
    );
  }
};

export default App;
