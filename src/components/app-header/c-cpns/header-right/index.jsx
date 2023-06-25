import React, { memo, useEffect, useState } from 'react'

import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'

import { RightWrapper } from './style'

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false)

  useEffect(() => {
    /**
     * 除了useCallback，闭包陷阱还会发生在其他需要传入回调函数的场景（如：DOM事件监听函数）。
     * 
     * useRef不会被memorized，useState、普通变量（包括两者的引用数据类型）会被memorized。
     */
    window.addEventListener("click", windowHandleClick)

    return () => {
      window.removeEventListener("click", windowHandleClick)
    }
  })

  function windowHandleClick() {
    if(showPanel) setShowPanel(false)
  }

  function profileClickHandle(event) {
    setShowPanel(!showPanel)
    event.stopPropagation()
  }

  return (
    <RightWrapper>
      <div className="btns">
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal/>
        </span>
      </div>

      <div className="profile" onClick={profileClickHandle}>
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