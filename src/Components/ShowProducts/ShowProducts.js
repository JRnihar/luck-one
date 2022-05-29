import React from 'react';
import './ShowProducts.css'

const ShowProducts = (props) => {
    const {picture,price,name}=props.pd
    return (
        <div className='card'>
           
            {/* <img src={img} alt=""></img> */}
            <img src={picture} alt=''></img>
            <p>Name : {name}</p>
            <p>Price : {price}</p>
            <button onClick={() => props.handleAddToCart(props.pd)}>Add to cart <i className="fa-solid fa-cart-plus"></i></button>
            
        </div>
    );
};

export default ShowProducts;