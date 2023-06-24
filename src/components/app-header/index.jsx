import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'

import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper, SearchAreaWrapper } from './style'

const AppHeader = memo(() => {
  const [isSearch, setIsSearch] = useState(false)

  const { headerConfig } = useSelector(state => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)
  const { isFixed } = headerConfig

  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <div className="content">
        <div className="content-top">
          <HeaderLeft/>
          <HeaderCenter
            isSearch={isSearch}
            searchBarClickCallback={e => setIsSearch(true)}
          />
          <HeaderRight/>
        </div>
        <SearchAreaWrapper isSearch={isSearch}/>
      </div>
      { isSearch && <div className="cover" onClick={e => setIsSearch(false)}></div> }
    </HeaderWrapper>
  )
})

export default AppHeader