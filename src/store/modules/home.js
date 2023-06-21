import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
  getHomeHotRecommendData
} from '@/services'

// export const fetchHomeDataAction = createAsyncThunk("home/fetchData", async () => {
//   const res = await getHomeGoodPriceData()
//   return res
// })

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeRecommendInfoAction(state, { payload }){
      state.recommendInfo = payload
    }
  },
  // extraReducers: {
  //   [fetchHomeDataAction.fulfilled](state, { payload }) {
  //     state.goodPriceInfo = payload
  //   }
  // }
})

export const fetchHomeDataAction = createAsyncThunk("home/fetchData", (extraInfo, { dispatch, getState }) => {
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })
  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })
  getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfoAction(res))
  })
  getHomeHotRecommendData().then(res => {
    dispatch(changeRecommendInfoAction(res))
  })
})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction
} = homeSlice.actions

export default homeSlice.reducer