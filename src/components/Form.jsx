import React, { useRef, useContext } from 'react'
import FormContext from './contexts/FormContext';
import Cart from './Cart.jsx';

const Form = () => {

    const nameRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const quantityRef = useRef();

    const formCtx = useContext(FormContext);

    const onFormSubmit = (event) => {
        event.preventDefault();
        const medicine = {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            price: priceRef.current.value,
            quantity: quantityRef.current.value
        }
        console.log('this is medicine ', medicine);
        formCtx.addMedicine(medicine);
    }
    return (
        <>
            <form onSubmit={onFormSubmit}>
                <label htmlFor="name">
                    Medicine Name:
                </label>
                <input ref={nameRef} id='name' type="text" />
                <label htmlFor="description">
                    Description:
                </label>
                <input ref={descriptionRef} id='description' type="text" />
                <label htmlFor="price">
                    Price:
                </label>
                <input ref={priceRef} id='price' type="number" />
                <label htmlFor="quantity">
                    Quantity:
                </label>
                <input ref={quantityRef} id='quantity' type="number" />
                <button type='submit'>Add to Products</button>
            </form>
            <Cart />
        </>
    )
}

export default Form