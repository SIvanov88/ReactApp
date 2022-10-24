import React from 'react';

export default function Courses(el){
    return(
        <>
            <div className="courses">
                <ul className='list-unstyled' key={el.id}>
                    <li>{el.user}</li>
                </ul>
            </div>
        </>
    )
}