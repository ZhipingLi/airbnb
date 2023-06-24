import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon_more_arrow'

import { changeRoomListAction } from '@/store/modules/entire/actionCreators'

const SectionFooter = memo((props) => {
  const { name } = props
  const showMessage = name ? `显示更多${name}房源` : "显示全部"

  /** 跳转全部房源entire page*/
  const navigate = useNavigate()
  const dispatch = useDispatch()
  function moreClickHandle() {
    // 从home page跳转到entire page，清空store中的roomList，重置entire page
    dispatch(changeRoomListAction([]))
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