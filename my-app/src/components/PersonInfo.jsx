import React, { useState } from 'react';

const Personal = (props) =>{

    const [style] = useState({
        phone: 'pulse',
        email: 'email'
    });

  


    return(
        <>
            <h2>{props.title}</h2>
            <img className='img-fluid' width='300' height='400' src={props.img} alt="" />
            <div className='personal-info'>
                <h4>Name: {props.name}</h4>
                <p className={style.phone}>Phone: {props.phone}</p>
                <p className={style.email}>Email: {props.email}</p>
                <hr />
            </div>
        </>
    )
}


export default Personal;