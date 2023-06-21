import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'

import { TabsWrapper } from './style'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
  const { tabClick, tabNames = [] } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandle(item, index) {
    setCurrentIndex(index)
    tabClick(item)
  }
  
  return (
    <TabsWrapper>
      <ScrollView>
        {
          tabNames.map((item, index) => {
            return (
              <div
                className={classNames("item", {active: currentIndex === index})}
                onClick={e => itemClickHandle(item, index)}
                key={item}
              >
                {item}
              </div>
            )
          })
        }
      </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs