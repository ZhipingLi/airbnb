import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    detailInfo: {}
  },
  reducers: {
    changeDetailInfoAction(state, { payload }) {
      state.detailInfo = payload
    }
  },
})

export default detailSlice.reducer
export const { changeDetailInfoAction } = detailSlice.actions