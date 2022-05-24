import {createAction, createSlice} from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    fetchCategoriesDone(state: Array<any>, action) {
      console.log('>>>>>>>>> updating store')
      return action.payload
    }
  }
})

export const { fetchCategoriesDone } = categoriesSlice.actions;
export const fetchCategoriesStart = createAction(`${categoriesSlice.name}/fetchCategoriesStart`);
export const { name } = categoriesSlice;
export default categoriesSlice.reducer;
