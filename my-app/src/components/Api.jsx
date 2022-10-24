import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const Api = () =>{
    const [items , setItems ] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://fakestoreapi.com/products',
      };

    useEffect(() =>{
        
        axios.request(options).then(function (response) {
            const data = Object.keys(response.data).map(key => response.data[key])
            console.log(data);
            setItems(data)
        }).catch(function (error) {
            console.error(error);
        });
    },[items])


    

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 boxItems">
                            {items.map(item => (
                                <div className="showItems" key={item.id}>
                                    <Link to={`/api/${item.id}`}>
                                        <img src={item.image}  alt=''/>
                                        <h6>{item.title}</h6>
                                    </Link>
                                </div>)
                            )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Api;