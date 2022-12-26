import './Eidtor.css';
import React, { Component } from 'react'

export default class Editor extends Component {
    constructor(props) {
        super(props);
        // to bind the method with the event handler without (). 
        // this.handleChange = this.handleChange.bind(this);

        this.state =
         { 
            value: ''
        };
    }
    handleChange(e){
    this.setState({value: e.target.value});
    }
    reset(){
        this.setState({
            value:" "
        })
    }

    render(){
        return(
<div className="container">
                <div className="input">
                    <h3>Input</h3>
                    <textarea className="input-text" onChange={(changedText)=>this.handleChange(changedText)} value={this.state.value}/>

                    <button className='btn'  onClick={()=>this.reset()}>reset</button>
                </div>
                <div className="output">
                    <h3>Pro Note</h3>
                    <div className="output-text">{this.state.value}</div>
                </div>                
            </div>
            )
    }

}



