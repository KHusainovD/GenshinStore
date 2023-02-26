import React, { useState } from 'react'
import ShowAlert from '../ShowAlert'

export default function Card({id, name, price, imageUri, addItemToCart}) {
    const [alert, setAlert] = useState(false)
    const hideAlert = () => {
      setAlert(false)
    }  
    const addToCart = () => {
      setAlert(true);
      addItemToCart({id, name, price, imageUri});
    }
    return (
      <div id={'product-' + id} className="card">
          <img height={350} src={imageUri} alt="не загрузилось :(" />
          <div className='card-content'>
              <span className="card-title activator grey-text text-darken-4">
                  {name}
              </span>
              <p>Цена: {price} руб.</p>
          </div>
          <div className="card-action">
              {alert ? 
                <ShowAlert text={name + " добавлен в корзину"} hideAlert={hideAlert}/> : 
                <button className='waves-effect waves-light btn' onClick={() => addToCart()}>Добавить в корзину</button>}
          </div>
      </div>
    )
}
