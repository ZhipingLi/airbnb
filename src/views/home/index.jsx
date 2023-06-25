import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'
import HomeLongFor from './c-cpns/home-longfor'

import { fetchHomeDataAction } from '@/store/modules/home'
import { changeHeaderConfig } from '@/store/modules/main'
import { isEmptyObj } from '@/utils'

const Home = memo(() => {
  /** 从redux中获取数据 */
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longForInfo,
    plusInfo
  } = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longForInfo: state.home.longForInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)

  /** 派发异步事件，发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfig({ isFixed: true, topAlpha: true, fixedOnSearch: false }))
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>   
      <HomeBanner/>
      <div className="content">
        { !isEmptyObj(discountInfo) && <HomeSectionV2 infoData={discountInfo}/> }
        { !isEmptyObj(recommendInfo) && <HomeSectionV2 infoData={recommendInfo}/> }
        { !isEmptyObj(longForInfo) && <HomeLongFor infoData={longForInfo}/> }
        { !isEmptyObj(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}/> }
        { !isEmptyObj(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo}/> }
        { !isEmptyObj(plusInfo) && <HomeSectionV3 infoData={plusInfo}/> }
      </div>
    </HomeWrapper>
  )
})

export default Home