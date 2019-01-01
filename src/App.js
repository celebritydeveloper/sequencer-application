import React, { Component } from 'react';
import './App.css';
import Sequencer from './sequencerComponents/Sequence.js';
import Result from './sequencerComponents/Result';
import generator from './sequenceFunctions/generator';
import rangeSeq from './sequenceFunctions/rangeSeq';
import partialSumSeq from './sequenceFunctions/partialSumSeq';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sequences: []
    }
    this.gen = null;
    this.sequences = [];
    this.nextGen = this.nextGen.bind(this);
    this.loadSequence = this.loadSequence.bind(this);
    this.exitSequence = this.exitSequence.bind(this);
  }
  
  loadSequence(sequencer) {
    if (this.gen === null){
      console.log(sequencer);
      let firstValue, secondValue;
      switch(sequencer) {
        case partialSumSeq:
          firstValue = prompt("Please enter first value");
          secondValue = prompt("Please enter second value");
          this.gen = generator(sequencer,parseInt(firstValue),parseInt(secondValue));
          break;
        case rangeSeq:
          firstValue = prompt("Please enter first value");
          secondValue = prompt("Please enter second value");
          this.gen = generator(sequencer,parseInt(firstValue),parseInt(secondValue));
          break;
        default:
          this.gen = generator(sequencer);
      }
      this.nextGen()
    }
    else {
      alert('A sequence is currently running');
    }
  }
  nextGen(){
    if (this.gen) {
      // console.log(this.gen.next());
      let value = this.gen.next();
      if( value.value === undefined){
        alert('Sequence out values');
        this.exitSequence()
      }else{
        this.sequences.push(value);
        this.setState({ sequences: this.sequences });  
      }
    } else{
      alert('No sequence is running')
    }
  }
  exitSequence() {
    this.gen = null;
    this.sequences = [];
    this.setState({ sequences: this.sequences });
    console.log('exited');
  }
  getSequence() {

  }

  render() {
    return (
      <div>

        <div className="main-container">
          <div className="sequence">
            <Sequencer onClick={(sequencer) => {this.loadSequence(sequencer)}}/>
          </div>
          
        
          <div className="result">
            <Result sequences= { this.state.sequences } methods = {{next: this.nextGen, exit: this.exitSequence } }/>
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
