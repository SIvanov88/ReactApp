import React from 'react';
import { Link } from 'react-router-dom';

export default function Main(){

    return (
       <header>
             <ul className='list-unstyled ullist'>
                <li className='mx-2'><Link to='/cv'>CV</Link></li>
                <li className='mx-2'><Link to='/education'>Education</Link></li>
                <li className='mx-2'><Link to='/task'>Task</Link></li>
                <li className='mx-2'><Link to='/counter'>Counter</Link></li>
                <li className='mx-2'><Link to='/api'>AIP</Link></li>
            </ul>
       </header>
    )
}

