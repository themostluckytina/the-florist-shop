import { createSlice } from '@reduxjs/toolkit';

export const plantsSlice = createSlice({
    name: 'plants',
    initialState: {
        selectedCategory: 'ВСЕ'
    },
    reducers:{
        filterCategory:(state, action) =>{
            state.selectedCategory = action.payload
        }
       
    }
})
    
export const getSelectedCategory = state => state.plants.selectedCategory;
export const {filterCategory} = plantsSlice.actions;
export default plantsSlice.reducer;