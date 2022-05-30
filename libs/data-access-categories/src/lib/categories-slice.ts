import {createAction, createSlice} from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    fetchCategoriesDone(state: Array<any>, action) {
      return action.payload
    }
  }
})

export const selectCategories = (state: any) => state.categories;
export const { fetchCategoriesDone } = categoriesSlice.actions;
export const fetchCategoriesStart = createAction(`${categoriesSlice.name}/fetchCategoriesStart`);
export const { name } = categoriesSlice;
export default categoriesSlice.reducer;
