import React, { memo } from 'react'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'

const Home = memo(() => {
  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className="content">
        conent
      </div>
    </HomeWrapper>
  )
})

export default Home