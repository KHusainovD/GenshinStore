import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';

export default function CardList({addItemToCart}) {

    const [items, setItems] = useState();
    useEffect(() => {
        axios.get("http://localhost:3050/products").then((data) => {
            setItems(data.data);
        })
    }, [])
    
    
    
    return (
        <div className="cardList">
            {items?.length ? items.map(item => <Card key={item.id} addItemToCart={addItemToCart} {...item} />) : <div>loading</div>}
            
        </div>
    )
}
