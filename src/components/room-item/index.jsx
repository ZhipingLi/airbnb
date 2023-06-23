import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { Rate, Carousel } from 'antd';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ItemWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon_arrow_left';
import IconArrowRight from '@/assets/svg/icon_arrow_right';
import Indicator from '@/base-ui/indicator';

import { changeDetailInfoAction } from '@/store/modules/detail'

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props

  const sliderRef = useRef()
  const [selectedIndex, setSelectedIndex] = useState(0)
  function controllClickHandle(event, isRight = true) {
    event.stopPropagation()
    //更新图片
    isRight ? sliderRef.current.next() : sliderRef.current.prev()
    // 更新indicator索引
    let newIndex = isRight ? selectedIndex + 1 : selectedIndex - 1
    if (newIndex < 0) newIndex = itemData.picture_urls.length - 1
    if (newIndex > itemData.picture_urls.length - 1) newIndex = 0
    setSelectedIndex(newIndex)
  }

  const navigate = useNavigate()
  const dispatch = useDispatch()
  function sliderClickHandle() {
    dispatch(changeDetailInfoAction(itemData))
    navigate("/detail")
  }

  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  )

  const sliderElement = (
    <div className="slider" onClick={sliderClickHandle}>
      <div className="control">
        <div className="btn left" onClick={e => controllClickHandle(e, false)}>
          <IconArrowLeft height="30" width="30"/>
        </div>
        <div className="btn right" onClick={e => controllClickHandle(e, true)}>
          <IconArrowRight height="30" width="30"/>
        </div>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {
          itemData?.picture_urls?.map(item => {
            return (
              <div className="cover" key={item}>
                <img src={item} alt="" />
              </div>
            )
          })
        }
      </Carousel>
      <div className="indicator">
        <Indicator selectedIndex={selectedIndex}>
          {
            itemData.picture_urls?.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <span
                    className={
                      classNames("dot", {
                        active: selectedIndex === index,
                        'active-ajcn': Math.abs(selectedIndex - index) === 1
                      })
                    }/>
                </div>
              ) 
            })
          }
        </Indicator>
      </div>
    </div>
  )

  return (
    <ItemWrapper 
      verifyColor={itemData?.verify_info?.text_color || "#39579a"}
      itemWidth={itemWidth}
    >
      <div className="inner">
        { itemData.picture_urls ? sliderElement : pictureElement }
        <div className="desc">
          {itemData.verify_info.messages.join(" · ")}
        </div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>
        <div className="bottom">
          <Rate disabled allowHalf defaultValue={itemData.star_rating ?? '5'} />
          <div className="bottom-right">
            <span className='count'>{itemData?.reviews_count}</span>
            { itemData?.bottom_info && <span className='extra'>·{itemData.bottom_info.content}</span> }
          </div>
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string
}

export default RoomItem