import React from 'react';
import { useState } from 'react';
import Singletask from './Singletask';
import { v4 as uuid } from 'uuid';

export default function Task(){

    const [tasks , setTasks] = useState([]);
    const [input , setInput ] = useState("");
    const unique_id = uuid();

    const deleteTask = () =>{
        const newList = tasks.filter(el => el.unique_id !== unique_id)
        setTasks(newList)
    }

    
    return(
        <>
                <div className="container">
                    <div className="row">
                        <div className="col-4 taskInput">
                            <input type="text" value={input} onChange={e => setInput(e.target.value)}  className='addTask' placeholder='Add new task...'/>
                            <button className='addNew'  
                                onClick={() => 
                                    setTasks((state) =>[...tasks,
                                        <Singletask
                                            key={unique_id}
                                            id={unique_id}
                                            taskText={input}
                                            onDelete={deleteTask}
                                        />])}>Add</button>
                        </div>
                    </div>
                </div>
            
                <div className="container main">
                    <div className="row">
                        <div className='col-12 taskBody'>
                            {tasks}
                        </div>
                    </div>
                </div>
        </>
    )
}