import { createSlice } from '@reduxjs/toolkit'

const mainSlice = createSlice({
  name: "name",
  initialState: {
    headerConfig: {
      isFixed: false,
      topAlpha: false,
      fixedOnSearch: false
    }
  },
  reducers: {
    changeHeaderConfig(state, { payload }) {
      state.headerConfig = payload
    }
  }
})

export default mainSlice.reducer
export const { changeHeaderConfig } = mainSlice.actions