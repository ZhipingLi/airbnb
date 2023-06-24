import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

import { CenterWrapper } from './style'
import SearchTabs from './c-cpns/search-tabs'
import SearchSections from './c-cpns/search-sections'
import IconSearchBar from '@/assets/svg/icon_search_bar'

import SearchTitleData from '@/assets/data/search_titles.json'

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClickCallback } = props

  const titles = SearchTitleData.map(item => item.title)
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-bar" onClick={searchBarClickCallback}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar/>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={setTabIndex}/>
          <div className="infos">
            <SearchSections searchInfos={SearchTitleData[tabIndex].searchInfos}/>
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

HeaderCenter.proptypes = {
  isSearch: PropTypes.bool,
  searchBarClickCallback: PropTypes.func
}

export default HeaderCenter