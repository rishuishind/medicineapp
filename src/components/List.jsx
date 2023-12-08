import React from 'react'
import { useContext } from 'react'
import FormContext from './contexts/FormContext.jsx';

const List = () => {
    const formCtx = useContext(FormContext);

    const handleCartAdd = (medicine) => {
        const newMedicine = {
            name: medicine.name,
            description: medicine.description,
            price: medicine.price,
            cartQuantity: 1
        }
        formCtx.addToCart(newMedicine);
    }
    return (
        <>
            <div>
                <ul>
                    {formCtx.medicineList.map((medicine) => {
                        return (
                            <li key={medicine.name}>
                                <h3>{medicine.name}</h3>
                                <p>{medicine.description}</p>
                                <p>Price: {medicine.price}</p>
                                <p>Quantity: {medicine.quantity}</p>
                                <button onClick={() => handleCartAdd(medicine)} type='button'>Add to cart</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default List