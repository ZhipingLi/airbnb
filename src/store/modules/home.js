import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getHomeGoodPriceData } from '@/services'

export const fetchHomeGoodPriceData = createAsyncThunk("home/goodPrice", async (extraInfo, { dispatch, getState }) => {
  const res = await getHomeGoodPriceData()
  return res
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {}
  },
  reducers: {
    changeGoodPriceInfo(state, { payload }) {
      state.goodPriceInfo = payload
    }
  },
  extraReducers: {
    [fetchHomeGoodPriceData.fulfilled](state, { payload }) {
      state.goodPriceInfo = payload
    }
  }
})

export const { changeGoodPriceInfo } = homeSlice.actions
export default homeSlice.reducer