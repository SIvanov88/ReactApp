import React, {useState , useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ItemDetails = () =>{
    
    const [item ,setItem] = useState([]);

    const { id } = useParams();

    const url = `https://fakestoreapi.com/products/${id}`;
    
    
        useEffect(() =>{
            axios.get(url)
                .then( res =>{
                    setItem(res.data)
                }).catch( err =>{
                    console.log(err);
                })
    }, [url])
    
    console.log(url);
    return(
        <div className="container">
            <div className="row my-5">
                <div className="col-4 information">
                    <img className='img-fluid ' src={item.image} alt="" />
                    <div className='details'>
                        <h3>Name: {item.title}</h3>
                        <h6>Category: {item.category}</h6>
                        <p>Description: {item.description}</p>
                        <strong>Price: {item.price} </strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetails;