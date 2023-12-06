import { createContext } from 'react';

const FormContext = createContext({
    isCartOpen: false,
    medicineList: [],
    cartList: [],
    addMedicine: () => { },
    addToCart: () => { },
    toggleCart: () => { },
});

export default FormContext;