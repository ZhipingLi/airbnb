import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import { DetailWrapper } from './style'

const Detail = memo(() => {
  const { detailInfo } = useSelector(state => ({
    detailInfo: state.detail.detailInfo
  }))

  return (
    <DetailWrapper>
      {detailInfo.name}
    </DetailWrapper>
  )
})

export default Detail