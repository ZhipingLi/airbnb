import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
  }

  .content {
    position: relative;
    z-index: 99;
    background-color: ${props => props.theme.isAlpha ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 1)"};
    border-bottom: 1px solid ${props => props.theme.isAlpha ? "rgba(255, 255, 255, 0)" : "#eee"};
    transition: all 250ms ease;

    .content-top {
      display: flex;
      align-items: center;
      height: 80px;
      background-color: transparent;
    }
  }

  .cover {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .3);
  }
`

export const SearchAreaWrapper = styled.div`
  transition: height 250ms ease;
  height: ${props => props.isSearch ? "100px" : "0"};
  /** fixedOnSearch状态下的app-header让其下半部分绝对布局 */
  ${props => props.fixedOnSearch ? `
    position: absolute;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: -1;
  ` : ""}
`