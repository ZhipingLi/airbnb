import React, { memo, useEffect, useState } from 'react'

import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'
import { RightWrapper } from './style'

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false)

  useEffect(() => {
    const windowHandleClick = () => setShowPanel(false)
    window.addEventListener("click", windowHandleClick, true)

    return () => {
      window.removeEventListener("click", windowHandleClick)
    }
  }, [])

  return (
    <RightWrapper>
      <div className="btns">
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal/>
        </span>
      </div>

      <div className="profile" onClick={e => setShowPanel(true)}>
        <IconMenu/>
        <IconAvatar/>

        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item register">出租房源</div>
              <div className="item register">开展体验</div>
              <div className="item login">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight