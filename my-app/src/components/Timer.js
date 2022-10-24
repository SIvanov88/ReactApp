import '../App.css';
import React,{Component} from 'react';

export default class Timer extends Component{
    constructor (props){
        super(props);
        this.state = {
            counter: 0,
            textColor: []
        }
    }

    changeColor(){
        if(this.counter > 4){
            this.setState(this.textColor.push('textColor'))
        }
    }

    componentDidMount(){
        this.myTimer = setInterval(() =>{
            this.setState({
                counter: this.state.counter + 1
            })
        },1000)
    }

    componentWillUnmount(){
            clearInterval(this.myTimer)
    }

   
    
    
   render(){
        const {counter} = this.state
        return(
            <>
                <div className="container">
                    <div className="row">
                        <div className='position col-xxl-6'>
                            <h1>Time:</h1>
                            <p className={counter % 2 == 0 ? 'textCss': 'textCss2'}>{this.state.counter}</p>
                        </div>
                        <div className='position col-xxl-6'>
                            <h1>Time:</h1>
                            <p className={counter % 2 == 0 ? 'textCss2' : 'textCss'}>{counter}</p>
                        </div>
                    </div>
                </div>
            </>
        )
   }
    
}

