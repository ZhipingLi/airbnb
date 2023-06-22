import { getEntireRoomList } from '@/services/modules/entire'
import * as actionTypes from './constants'

/** sync */
export const changeCurrentPageAction = currentPage => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeRoomListAction = roomList => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotalCountAction = totalCount => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

/** async */
/** 
 * Pagination发起网络请求逻辑：
 * 1. 点击上/下一页或页码，先同步修改store中currentPage，再发起网络请求
 * 2. 通过offset = (currentPage - 1) * size计算出offset偏移量
 * 3. offset作为参数发起网络请求
 */
export const fetchRoomListAction = (size = 20) => {
  return (dispatch, getState) => {
    const { currentPage } = getState().entire
    const offset = currentPage * 20
    
    getEntireRoomList(offset, size).then(res => {
      const { list: roomList, totalCount } = res
      dispatch(changeRoomListAction(roomList))
      dispatch(changeTotalCountAction(totalCount))
    })
  }
}