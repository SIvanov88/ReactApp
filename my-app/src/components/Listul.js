import React, { Component } from 'react';

export default class Listul extends Component{

    render(){
        const list = [1,2,3,4,5]
        return(
            list.map((el) => <li>{el  * 22}</li>)
        )
    }
}