import React from 'react';

const Experience = (props) =>{

    return(
        <>
            <div className="experience" key={props.id}>
                <strong>{props.title}</strong>
                <p>Dates: {props.date}</p>
                <p>Occupation or position held: {props.position}</p>
                <p>Name of employer: {props.employer}</p>
                <p>Location: {props.location}</p>
                <p>Type of business or sector: {props.sector}</p>
            </div>
            <hr />
        </>
    )

}

export default Experience;