import React from 'react';
export default function Avatar(props){
    return (
        <div className="user-img">
            <img className="" src={props.imageSource}  />
        </div>
    )

}