import { useState } from "react";
import React from 'react';
import AutoCounter from './AutoCounter';

const Counter = () => {
    
    const [count ,setCount ] = useState(0);
 
    return (
        <>
            <div className="container">
                <div className="row p-5 d-flex justify-content-center align-items-center">
                    <div className={count % 2 === 0 ? 'col-3 bgPurple' : 'col-3 bgOrange'}>
                        <p className={count % 2 === 0 ? 'numGreen' : 'numRed'}>{count}</p>
                        <button className="increment" onClick={() => setCount(count + 1)}>+</button>
                        <button className="decrement" onClick={() => setCount(count - 1)}>-</button>
                        <button className="reset" onClick={() => setCount(0)}>Reset</button>
                    </div>
                </div>
            </div>
            <AutoCounter />
        </>
    )
}

export default Counter;