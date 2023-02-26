import React from 'react'

export default function CartPage(props) {
    
  return (
    <div className="container">
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {props.items?.length ? props.items.map(item => (
                    <tr>
                        <td><img src={item.imageUri} height={150}/></td>
                        <td>{item.name}</td>
                        <td>{item.amount}</td>
                        <td>{item.price * item.amount}</td>
                        <td><button className='btn' onClick={() => props.deleteItemFromCart(item)}>Удалить</button></td>
                    </tr>
                )): "nothing"}
            </tbody>
        </table>
    </div>
  )
}
