import React from 'react';

export default function EducationInfo(props){
   return(
    <>
        <div className="education" key={props.id}>
            <strong>{props.title}</strong>
            <p>Dates: {props.date}</p>
            <p>Title of qualification awarded: {props.qualification}</p>
            <p>Name and type of organisation providing education and training: {props.training}</p>
            <p>Location: {props.location}</p>
            <p>Level: {props.level}</p>
        </div>
        <hr />
    </>
   )
}