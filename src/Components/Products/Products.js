import React, { useEffect, useState } from 'react';

import ShowProducts from '../ShowProducts/ShowProducts';
import './Products.css'

const Products = () => {
    const[products,setProducts]=useState([]);
    const[cart,setCart]=useState([])
    useEffect(()=>{
        fetch('./data.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    },[])

    const handleAddToCart = (products) => {
        // console.log(products)
        const newCart = [...cart, products]
        setCart(newCart)
    }

    const clearCart = () => setCart([]);
    //random Name

    const randomName=()=>{
        const randomNum = cart[Math.floor(Math.random() * cart.length)]
        alert( "Random Name : "+randomNum.name)
        
//   console.log(randomNum.name);
    }

    return (
        <div className='shop-container'>
         <div className="product-container">
               
                {
                    products.map(pd => <ShowProducts key={pd.id}
                        pd={pd} handleAddToCart={handleAddToCart}></ShowProducts>)
                }
         </div>
            <div className='cart-container'>
                <h4 className='special-word'>Selected Painting</h4>
                
               {

                    cart.map((item) =><li key={item.id}>{item.name}</li>)
                
               }
                <button className='btn-1' onClick={randomName}>CHOOSE 1 FOR ME</button>
               
               
                <button className='btn-2' onClick={clearCart} >CHOOSE AGAIN</button>
             
               
            </div>
        </div>
    );
};

export default Products;