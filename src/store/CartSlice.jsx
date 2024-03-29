import { createSlice } from "@reduxjs/toolkit";

const Slicecart = createSlice({
    name:'cart',
    initialState:{
        cart: [],
        amount: 0,
        items: 0
    },
    reducers:{
        addtocart: (state,action)=>{
                state.items++;
                state.amount  += action.payload.price;
                state.cart.push({...action.payload,quantity:1});
            
            // console.log(action.payload)
        },
        increaseQuantity: (state,action)=>{
                state.items++;
                state.amount  += action.payload.price;
                let itempresent = state.cart.findIndex((item)=>item.id===action.payload.id);
                let arr = state.cart;
                // console.log("before changing arr", arr);
                arr[itempresent] = {...arr[itempresent],quantity:arr[itempresent].quantity+1}
                // console.log("after changing",arr)
                state.cart = arr
                // console.log(state.cart[itempresent].quantity)
        },
        decreaseQuantity:(state,action)=>{
            state.items--;
            state.amount  -= action.payload.price;
            let itempresent = state.cart.findIndex((item)=>item.id===action.payload.id);
            let arr = state.cart;
            if(arr[itempresent].quantity===1){
                let a = arr.filter((elem)=>{
                    return elem.id!==action.payload.id
                })
                state.cart = a;
            }
            else{
                arr[itempresent] = {...arr[itempresent],quantity:arr[itempresent].quantity-1}
                state.cart = arr
            }
        },
        clearcart: (state,action)=>{
            state.cart = [];
            state.items = 0;
            state.amount = 0;
        }
    },
});

export const {addtocart,increaseQuantity,decreaseQuantity,clearcart} = Slicecart.actions;
export default Slicecart.reducer