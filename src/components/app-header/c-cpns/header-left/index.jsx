import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import { LeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon_logo'

const HeaderLeft = memo(() => {
  
  const navigate = useNavigate()
  function logoClickHandle() {
    navigate("/home")
    window.scrollTo(0, 0)
  }

  return (
    <LeftWrapper>
      <div className='logo' onClick={logoClickHandle}>
        <IconLogo/>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft