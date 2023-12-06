import React, { useContext } from 'react'
import FormContext from './contexts/FormContext'

const Cart = () => {
    const formCtx = useContext(FormContext);
    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {formCtx.medicineList.map((medicine) => {
                    return (
                        <li key={medicine.name}>
                            <h3>{medicine.name}</h3>
                            <p>{medicine.description}</p>
                            <p>Price: {medicine.price}</p>
                            <p>Quantity: {medicine.quantity}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Cart