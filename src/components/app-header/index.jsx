import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper } from './style'
import classNames from 'classnames'

const AppHeader = memo(() => {
  const { headerConfig } = useSelector(state => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)
  const { isFixed } = headerConfig

  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <HeaderLeft/>
      <HeaderCenter/>
      <HeaderRight/>
    </HeaderWrapper>
  )
})

export default AppHeader