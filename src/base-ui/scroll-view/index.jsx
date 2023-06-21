import React, { memo, useRef, useEffect, useState } from 'react'

import { ScrollWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon_arrow_left'
import IconArrowRight from '@/assets/svg/icon_arrow_right'

const ScrollView = memo((props) => {
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const scrollContentRef = useRef()
  const posIdx = useRef(0)
  const scrollableDistance = useRef(0)
  
  /** 组件渲染完毕，判断是否显示右侧按钮 */
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth // 可滚动区域（子元素宽度和）
    const clientWidth = scrollContentRef.current.clientWidth // 容器宽度
    scrollableDistance.current = scrollWidth - clientWidth
    setShowRight(scrollableDistance.current > 0)
  }, [props.children])

  function controlClickHandle(isRight) {
    const newPosIdx = isRight ? posIdx.current + 1 : posIdx.current - 1
    const leftEl = scrollContentRef.current.children[newPosIdx]
    const offsetLeft = leftEl.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${offsetLeft}px)`
    posIdx.current = newPosIdx // 更新左侧第一个子元素index
    setShowRight(offsetLeft < scrollableDistance.current) // 重新判断是否显示右侧按钮
    setShowLeft(offsetLeft > 0) // 重新判断是否显示左侧按钮
  }

  return (
    <ScrollWrapper>
      { showLeft && (
        <div className='control left' onClick={e => controlClickHandle(false)}>
          <IconArrowLeft/>
        </div>
      ) }
      { showRight && (
        <div className='control right' onClick={e => controlClickHandle(true)}>
          <IconArrowRight/>
        </div>
      ) }
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollWrapper>
  )
})

export default ScrollView