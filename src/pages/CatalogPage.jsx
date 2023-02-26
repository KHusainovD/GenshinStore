import React from 'react'
import CardList from '../components/catalogPage/CardList'

export default function CatalogPage(props) {
  return (
    <div className="container">
        <CardList addItemToCart={props.addItemToCart}/>
    </div>
  )
}
