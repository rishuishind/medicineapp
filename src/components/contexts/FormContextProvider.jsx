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
        const medicineIndex = cartList.findIndex((cartMedicine) => cartMedicine.name === medicine.name);
        if (medicineIndex >= 0) {
            const newCartList = [...cartList];
            newCartList[medicineIndex].cartQuantity += 1;
            setCartList(newCartList);
        } else {
            setCartList([...cartList, medicine])
        }

        //for removing medicine quantity from medicine list
        const medicineListIndex = medicineList.findIndex((medicineItem) => medicineItem.name === medicine.name);
        let newMedicineList = [...medicineList];
        newMedicineList[medicineListIndex].quantity -= 1;
        setMedicineList(newMedicineList);
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