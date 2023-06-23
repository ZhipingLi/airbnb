import React, { memo } from 'react'

import { DetailWrapper } from './style'
import DetailPictures from './c-cpns/detail-pictures'
import DetailInfo from './c-cpns/detail-info'

const Detail = memo(() => {
  return (
    <DetailWrapper>
      <DetailPictures/>
      <DetailInfo/>
    </DetailWrapper>
  )
})

export default Detail