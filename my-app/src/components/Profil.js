import React from 'react';
import Timer from "./Timer";
import Counter from "./Counter";
import { useState } from 'react';

export default function Profil(props){
    const [counters , setCounters] = useState([])
    return(
        <div className="user-card">
            <div className="user-name">
                <h2>{props.name}</h2>
            </div>
            <div className="userinfo">
                <p>{props.info}</p>
            </div>
            <Timer />
            <button onClick={() => setCounters([...counters,<Counter />])}>add new</button>
            {counters}
        </div>
    )
}