import React  from 'react';
import { Component } from 'react';
export default class Input extends Component {

    constructor(props){
        super(props);
        this.state = {text: ''}
    }

    printText = (e) =>{
        this.setState = {
           text: e.target.value
        }
    }

  render(){
    
    return(
        <>
            <div className='inputStype'>
                <input type="text" onKeyUp={this.printText} /><button >Print</button>
            </div>
            <p>Information:{this.text}</p>
        </>
    )
  }
    
}