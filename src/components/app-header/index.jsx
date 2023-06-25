import React, { memo, useRef, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import { ThemeProvider } from 'styled-components'

import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper, SearchAreaWrapper } from './style'

import { useScrollPosition } from '@/hooks'

const AppHeader = memo(() => {
  const [isSearch, setIsSearch] = useState(false)
  
  const { headerConfig } = useSelector(state => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)
  const { isFixed, topAlpha = false, fixedOnSearch = false } = headerConfig

  /** 弹出搜索功能情况下，滚动距离超过30px取消搜索 */
  const { scrollY } = useScrollPosition()
  const prevScrollY = useRef(0)
  if (isSearch && Math.abs(scrollY - prevScrollY.current) > 30) {
    setIsSearch(false)
  }

  const isAlpha = topAlpha && scrollY === 0

  function searchBarClickCallback() {
    // 打开搜索功能时记录此刻scrollY
    prevScrollY.current = scrollY
    setIsSearch(true)
  }

  return (
    <ThemeProvider theme={{isAlpha}}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="content-top">
            <HeaderLeft/>
            <HeaderCenter
              isSearch={isAlpha || isSearch}
              searchBarClickCallback={searchBarClickCallback}
            />
            <HeaderRight/>
          </div>
          <SearchAreaWrapper fixedOnSearch={fixedOnSearch} isSearch={isAlpha || isSearch}/>
        </div>
        { isSearch && <div className="cover" onClick={e => setIsSearch(false)}></div> }
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader