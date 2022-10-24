import React from 'react';




const Line = ({taskText , onDelete , id}) =>{

    

    return(
        <div className='d-flex tasksContent'> 
            <p>{taskText}</p><button onClick={() => onDelete(id)}><i className="fa-solid fa-trash"></i></button>
        </div>
    )
}

export default Line;