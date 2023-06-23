import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon_more_arrow'

const SectionFooter = memo((props) => {
  const { name } = props
  const showMessage = name ? `显示更多${name}房源` : "显示全部"

  /** 跳转全部房源entire page*/
  const navigate = useNavigate()
  function moreClickHandle() {
    navigate("/entire")
  }

  return (
    <FooterWrapper name={name}>
      <div className="info" onClick={moreClickHandle}>
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