import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import { RoomsWrapper } from './style'
import RoomItem from '@/components/room-item'

const EntireRooms = memo(() => {

  const { roomList, totalCount } = useSelector(state => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount
  }))

  return (
    <RoomsWrapper>
      <h2 className='title'>共{totalCount}处住所</h2>
      <div className="list">
        {
          roomList.map(item => {
            return <RoomItem itemData={item} itemWidth="20%" key={item.id}/>
          })
        }
      </div>
    </RoomsWrapper>
  )
})

export default EntireRooms