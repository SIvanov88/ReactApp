import React, {useState,useEffect} from "react";

const  AutoCounter = () => { 

    const [timer, setTimer] = useState(0);
    const [increment, setIncrement] = useState(false);

    

    useEffect(() =>{
        let incrementTime = null;
        if(increment){
            incrementTime = setInterval(()=>{
                setTimer(number => number  += 1)
            },1000);
        }else if(!increment){
            clearInterval(incrementTime);
        }

        return () => {
            clearInterval(incrementTime)
        };


    },[increment])

    // const [state,setState] = useState({
    //     Count: 0
    // })


    // const incremantState = (number,action) =>{
    //     setState((prevState) =>{
    //         return{
    //             ...prevState,
    //             [number]:action === 'up'
    //             ? state[number] + 1
    //             : state[number] - 1
    //         }
    //     })
    // }
    
    



        return(
            <>
                <div className="container">
                    <div className="row p-5 d-flex justify-content-center align-items-center">
                        <div className={timer % 2 === 0  ? 'col-3 bgPurple' : 'col-3 bgOrange'}>
                                <p className={timer % 2 === 0 ? 'numGreen' : 'numRed'}>{timer}</p>
                                <button className="increment" onClick={()=> setIncrement(true)}>start</button>
                                <button className="stop" onClick={()=> setIncrement(false)}>Stop</button>
                                <button className="reset" onClick={()=> setTimer(0)}>Reset</button>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default AutoCounter;

