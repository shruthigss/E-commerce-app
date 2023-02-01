import React, { useEffect, useState } from "react";
import "./product.css"

const Product = () => {

    const [items, setItems] = useState([]);
    const [isShown, setIsShow] = useState(false);
    const [isRating, setIsRating] = useState(false);

    useEffect(() => {
        fetch('https://dummyjson.com/products').then((res) => {
            return res.json();
        })
            .then((data) => {
                setItems(data.products);
                console.log(data);
            })
            .catch((e) => {
                if (e) {
                    console.log(e);
                }
            })
    }, [])

    const checkRating =()=>{
        if(isRating >= 4){
            setIsRating(true)
        }
      }

    return (
        <div>   <h1>Shopping Products</h1>
        <div className="container">
            {Object(items).map((elements, index) => {
                return (
                    
                    <div className="product-conatiner" key={index}>
                        <div className="card">
                            <div>Name:{elements.title}</div>
                            <div onMouseEnter={()=>setIsShow(true)}
                                onMouseLeave={()=>setIsShow(false)}>
                            <div className="img-container">
                                <img src={"" + elements.images[0]}/>
                            </div>
                            </div>
                            <div className="description">
                                <div className="price">Price:{elements.price}</div>
                                <div className="stock">Stock:{elements.stock}</div>
                                <div className="brand">Brand:{elements.brand}</div>
                                {isRating && checkRating &&<div>{elements.rating}</div> }
                            </div>
                        {
                            isShown && (<div>
                                <div className="description-container">{elements.description}</div>
                            </div>)
                        }
                            </div>
                        </div>
                 
                )
            })}
        </div>
        </div>
    )
}
export default Product