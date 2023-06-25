import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'

import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import { changeHeaderConfig } from '@/store/modules/main'

const Entire = memo(() => {
  const dispatch = useDispatch()
  const { roomList } = useSelector(state => ({
    roomList: state.entire.roomList
    // 保证roomList永不造成该组件rerender
  }), () => true)
  
  /** 该组件在任何情况下都不会rerender，此时等同于useEffect(callback, []) */
  useEffect(() => {
    // store中存在roomList时，不再发起网络请求
    if (!roomList.length) dispatch(fetchRoomListAction(0))
    dispatch(changeHeaderConfig({ isFixed: true, topAlpha: false, fixedOnSearch: false }))
  })

  return (
    <EntireWrapper>
      <EntireFilter/>
      <EntireRooms/>
      <EntirePagination/>
    </EntireWrapper>
  )
})

export default Entire