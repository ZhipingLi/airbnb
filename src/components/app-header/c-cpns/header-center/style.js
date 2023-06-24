import styled from 'styled-components'

export const CenterWrapper = styled.div`
  /**
    flex布局优先级高于定位元素：
    子元素（定位元素）在relative/absoulte/fixed定位下没有设置left/right/top/bottom，且父元素（相对定位元素）使用display: flex时，
    子元素会受到justify-content/align-items的影响，甚至在相对定位元素为爷爷元素的情况下也会。

    总结：定位元素的初始位置是flex布局结束后的位置，但如果出现left/right或top/bottom，则相对于定位父元素在水平或垂直方向上推移。
  */
  position: relative;
  display: flex;
  justify-content: center;
  /* 此处使用"align-items: center;"、"height: 48px;"均可，都是为了调整absolute元素（.search-bar）的初始位置 */
  align-items: center;
  /* height: 48px; */

  .search-bar {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 48px;
    box-sizing: border-box;
    padding: 0 8px;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;
    
    ${props => props.theme.mixins.boxShadow}

    .text {
      padding: 0 16px;
      color: #222;
      font-weight: 600;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #fff;
      background-color: ${props => props.theme.color.primaryColor};
    }
  }

  .search-detail {
    position: relative;
    transform-origin: 50% 0;
    will-change: transform, opacity;

    .infos {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .detail-exit {
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .detail-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter-active {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .bar-enter {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }

  .bar-enter-active {
    transition: all 250ms ease;
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .bar-exit {
    opacity: 0;
  }
`