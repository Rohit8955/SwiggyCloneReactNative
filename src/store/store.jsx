import { configureStore } from "@reduxjs/toolkit"
import CartSlice from "./CartSlice"
import ChangeAdd from "./ChangeAdd"
const store = configureStore({
    reducer:{
        cart: CartSlice,
        address: ChangeAdd
    }
})

export default store