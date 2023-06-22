import React, { memo, useState } from 'react'
import classNames from 'classnames'

import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'

const EntireFilter = memo(() => {
  const [selectedItems, setSelectedItems] = useState([])

  function itemClickHandle(item) {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(label => item !== label))
    } else {
      setSelectedItems([...selectedItems, item])
    }
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {
          filterData.map(item => {
            return (
              <div
                className={classNames("item", { active: selectedItems.includes(item) })}
                key={item}
                onClick={e => itemClickHandle(item)}
              >
                {item}
              </div>
            )
          })
        }
      </div>
    </FilterWrapper>
  )
})


export default EntireFilter