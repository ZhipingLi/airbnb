import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import classNames from 'classnames'

import { BrowserWrapper } from './style'
import Indicator from '../indicator'

import IconClose from '@/assets/svg/icon-close'
import IconArrowLeft from '@/assets/svg/icon_arrow_left'
import IconArrowRight from '@/assets/svg/icon_arrow_right'
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom'
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top'

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props
  const [isNext, setIsNext] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [showPreview, setShowPreview] = useState(true)

  // 图片浏览器出现时，浏览器滚动功能失效
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  function closeBtnClickHandle() {
    closeClick && closeClick()
  }

  function controlClickHandle(isNext = true) {
    let newIndex = isNext ? selectedIndex + 1 : selectedIndex - 1
    if (newIndex < 0) newIndex = pictureUrls.length - 1 
    if (newIndex > pictureUrls.length - 1) newIndex = 0
    setSelectedIndex(newIndex)
    setIsNext(isNext)
  }

  function itemClickHandle(index) {
    setIsNext(index > selectedIndex)
    setSelectedIndex(index)
  }

  return (
    <BrowserWrapper isNext={isNext} showPreview={showPreview}>
      <div className="top">
        <div className="close-btn" onClick={closeBtnClickHandle}>
          <IconClose/>
        </div>
      </div>
      <div className="viewer">
        <div className="control">
          <div className="btn left" onClick={e => controlClickHandle(false)}>
            <IconArrowLeft height="77" width="77"/>
          </div>
          <div className="btn right" onClick={e => controlClickHandle(true)}>
            <IconArrowRight height="77" width="77"/>
          </div>
        </div>
        <div className="picture">
          <SwitchTransition mode='in-out'>
            <CSSTransition
              key={pictureUrls[selectedIndex]}
              classNames="pic"
              timeout={200}
            >
              <img src={pictureUrls[selectedIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>{selectedIndex + 1}/{pictureUrls.length}: </span>
              <span>room apartment图片{selectedIndex + 1}</span>
            </div>
            <div className="toggle" onClick={e => setShowPreview(!showPreview)}>
              <span>{ showPreview ? "隐藏" : "显示" }照片列表</span>
              { showPreview ? <IconTriangleArrowBottom/> : <IconTriangleArrowTop/> }
            </div>
          </div>
          <div className="list">
            <Indicator selectedIndex={selectedIndex}>
              {
                pictureUrls.map((item, index) => {
                  return (
                    <div
                      key={item}
                      className={classNames("item", { active: selectedIndex === index })}
                      onClick={e => itemClickHandle(index)}
                    >
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  closeClick: PropTypes.func
}

export default PictureBrowser