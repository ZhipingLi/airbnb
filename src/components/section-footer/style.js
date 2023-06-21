import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  margin-top: 10px;

  .info {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 17px;
    color: ${props => props.name ? props.theme.color.secondaryColor : "#000" };
    
    .text {
      margin-right: 6px;
    }

    &:hover {
      text-decoration: underline;
    }

  }
`