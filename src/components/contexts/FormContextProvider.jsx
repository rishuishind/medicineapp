import FormContext from "./FormContext.jsx"
import { useState } from "react"

const FormContextProvider = (props) => {

    const [medicineList, setMedicineList] = useState([]);
    const [cartList, setCartList] = useState([]); // [medicine1, medicine2, medicine3
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addMedicine = (medicine) => {
        setMedicineList([...medicineList, medicine]);
    };

    const addToCart = (medicine) => {
        setCartList([...cartList, medicine]);
    }

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    }

    const storeVal = {
        isCartOpen: isCartOpen,
        medicineList: medicineList,
        cartList: cartList,
        addMedicine: addMedicine,
        addToCart: addToCart,
        toggleCart: toggleCart,
    }

    return (
        <FormContext.Provider value={storeVal}>
            {props.children}
        </FormContext.Provider>
    );
};
export default FormContextProvider;