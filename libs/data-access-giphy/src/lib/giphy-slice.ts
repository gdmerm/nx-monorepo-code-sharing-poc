import { createAction, createSlice } from '@reduxjs/toolkit';

const giphySlice = createSlice({
  name: 'giphies',
  initialState: [],
  reducers: {
    searchGiphiesDone(state: Array<any>, action) {
      return action.payload
    }
  }
})

export const selectGiphies = (state: any) => state.giphies
export const { searchGiphiesDone } = giphySlice.actions
export const searchGiphiesStart = createAction<string>(`${giphySlice.name}/searchGiphiesStart`)
export const { name } = giphySlice
export default giphySlice.reducer
