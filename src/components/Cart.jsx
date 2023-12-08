import React, { useContext } from 'react'
import FormContext from './contexts/FormContext'

const Cart = () => {
    const formCtx = useContext(FormContext);
    return (
        <div className='mr-10'>
            <h2 className='m-3'>Cart:</h2>
            {formCtx.isCartOpen && <ul>
                {formCtx.cartList.map((medicine) => {
                    return (
                        <li key={medicine.name}>
                            <h3>{medicine.name}</h3>
                            <p>{medicine.description}</p>
                            <p>Price: {medicine.price}</p>
                            <p>Quantity: {medicine.cartQuantity}</p>
                        </li>
                    )
                })}
            </ul>}
        </div>
    )
}

export default Cart