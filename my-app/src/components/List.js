import React,{useState} from "react";
export default function List(props){
    let cvqt = "black";

    const [fontSize , setFontSize] = useState(30);

    if (props.children > 4 ){
        cvqt = "green";
    }

   

    return(
        <>
            <ul>
                <li style={{color:cvqt, fontSize:`${fontSize}px`}}>{props.children}</li>
            </ul>
        </>
        
    )
}