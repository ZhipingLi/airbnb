import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { DetailWrapper } from './style'
import DetailPictures from './c-cpns/detail-pictures'
import DetailInfo from './c-cpns/detail-info'

import { changeHeaderConfig } from '@/store/modules/main'

const Detail = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfig({ isFixed: false }))
  }, [])

  return (
    <DetailWrapper>
      <DetailPictures/>
      <DetailInfo/>
    </DetailWrapper>
  )
})

export default Detail