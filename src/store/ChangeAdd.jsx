import { createSlice } from "@reduxjs/toolkit";
const ChangeAdd = createSlice({
    name: 'chnageadd',
    initialState:{
        address: '904 Oak Ave'
    },
    reducers:{
        addresschange: (state,action)=>{
            state.address = action.payload;
        }
    },
})

export const {addresschange} = ChangeAdd.actions;
export default ChangeAdd.reducer;