import React, { Component } from 'react';

class Result extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        let sequences = this.props.sequences;
        let sequenceList = sequences.map(function (result) {
            return <div className="dot">
                <div className="result-dot">{ result.value }</div>
             </div>
        });

        return(
            <div>
                <div className="wrapper">
                <div className="button">
                        <div className="float-left">
                            <button onClick={() => {this.props.methods.next()}} className="btn btn-success">Next ( )</button>
                        </div>

                        <div className="float-right">
                            <button onClick={() => {this.props.methods.exit()}} className="btn btn-danger">Cancel Sequence</button>
                        </div>
                        <div className="clear"></div>
                  {/* End of Button Container  */}  
                </div>

                {/* Results Container  */} 
                    <div className="result-box">

                    { sequenceList }
                                                        
                    {/* End of Results Container  */}   
                    </div>

                        {/* Sequence Description */} 
                        <div className="sequence-desc">
                            <p>The Fibonacci sequence is one of the most famous formulas in mathematics.
                                Each number in the sequence is the sum of the two numbers that precede it. So, the sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so on.
                                The mathematical equation describing it is Xn+2= Xn+1 + Xn</p>
                        </div>

                 {/* End of Result Wrapper  */}
                 </div>   
                
            </div>
        );
    }
};

export default Result;