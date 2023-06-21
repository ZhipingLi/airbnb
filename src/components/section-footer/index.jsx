import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon_more_arrow'

const SectionFooter = memo((props) => {
  const { name } = props
  const showMessage = name ? `显示更多${name}房源` : "显示全部"

  return (
    <FooterWrapper name={name}>
      <div className="info">
        <span className="text">{showMessage}</span>
        <IconMoreArrow/>
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter