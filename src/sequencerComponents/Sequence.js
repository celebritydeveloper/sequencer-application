import React, { Component } from "react";

import rangeSeq from '../sequenceFunctions/rangeSeq';
import partialSumSeq from '../sequenceFunctions/partialSumSeq';
import primeSeq from '../sequenceFunctions/primeSeq';

class Sequencer extends Component {
    constructor (props) {
        super(props);
        // this.loadSequence = this.loadSequence.bind(this);
    }


    render() {
        return (
            <div>
                <div className="sequence-name">
                    <button >Factorial Sequence</button>
                    <button>Fibonacci Sequence</button>
                    <button onClick = {() => {this.props.onClick(partialSumSeq)}}>Partial Sum Sequence</button>
                    <button onClick = {() => {this.props.onClick(primeSeq)}} >Prime Sequence</button>
                    <button >Range Sequence</button>
                </div>
            </div>
        );
    }

};

export default Sequencer;