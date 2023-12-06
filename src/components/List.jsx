import React from 'react'
import { useContext } from 'react'
import FormContext from './contexts/FormContext.jsx';

const List = () => {
    const formCtx = useContext(FormContext);
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
                                <button type='button'>Add to cart</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default List