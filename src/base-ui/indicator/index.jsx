import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'

import { IndicatorStyleWrapper } from './style'

const Indicator = memo((props) => {
  const { selectedIndex = 0 } = props
  const indicatorWrapperRef = useRef()

  useEffect(() => {
    /**
     * 获取索引为selectedIndex的indicator元素要滚动距离
     * distance = el.offsetLeft + el.width * 0.5 - elWrapper.width * 0.5
     */
    const selectedEl = indicatorWrapperRef.current.children[selectedIndex]
    const offsetLeft = selectedEl.offsetLeft
    const elWidth = selectedEl.clientWidth
    const elWrapperWidth = indicatorWrapperRef.current.clientWidth
    let distance = offsetLeft + elWidth * 0.5 - elWrapperWidth * 0.5

    // 右移临界值
    if (distance < 0) distance = 0
    // 左移临界值
    const elWrapperScrollWidth = indicatorWrapperRef.current.scrollWidth
    const totalDistance = elWrapperScrollWidth - elWrapperWidth
    if (distance > totalDistance) distance = totalDistance

    indicatorWrapperRef.current.style.transform = `translate(${-distance}px)`
  }, [selectedIndex])

  return (
    <IndicatorStyleWrapper>
      <div className="indicator-content" ref={indicatorWrapperRef}>
        {props.children}
      </div>
    </IndicatorStyleWrapper>
  )
})

Indicator.propTypes = {
  selectedIndex: PropTypes.number
}

export default Indicator