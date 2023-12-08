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
        nameRef.current.value = '';
        descriptionRef.current.value = '';
        priceRef.current.value = '';
        quantityRef.current.value = '';
        formCtx.addMedicine(medicine);
    }

    const handleToggle = () => {
        formCtx.toggleCart();
    }
    return (
        <div className='flex justify-between'>
            <form onSubmit={onFormSubmit}>
                <label htmlFor="name">
                    Medicine Name:
                </label>
                <input className=' bg-slate-100 border border-black rounded-md m-3' ref={nameRef} id='name' type="text" />
                <label htmlFor="description">
                    Description:
                </label>
                <input className=' bg-slate-100 border border-black rounded-md m-3' ref={descriptionRef} id='description' type="text" />
                <label htmlFor="price">
                    Price:
                </label>
                <input className=' bg-slate-100 border border-black rounded-md m-3' ref={priceRef} id='price' type="number" />
                <label htmlFor="quantity">
                    Quantity:
                </label>
                <input className=' bg-slate-100 border border-black rounded-md m-3' ref={quantityRef} id='quantity' type="number" />
                <button className=' bg-black text-white rounded-md p-2' type='submit'>Add to Products</button>
            </form>
            <button onClick={handleToggle}>
                <Cart />
            </button>
        </div>
    )
}

export default Form