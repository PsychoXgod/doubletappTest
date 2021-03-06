import styled from 'styled-components'
import { viewportWidth, widthBreakpoints } from 'styles/mediaQueryMixins'


export const SearchAndSortContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: start;
  justify-content: space-between;
  margin-bottom: 32px;
  ${viewportWidth.lowerThan(widthBreakpoints.desktopRegular)} {
    box-sizing: border-box;
    max-width: 1024px;
  }

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    box-sizing: border-box;
    max-width: 768px;
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    max-width: 414px;
    margin-bottom: 10px;
  }
`
export const SearchIconWrapper = styled.div`
  margin: 0;
  position: absolute;
  top: calc(50% - 9px);
  left: 10px;
`
export const InputWrapper = styled.div`
  width: 80%;
  position: relative;
  animation-duration: 0.55s;
  animation-fill-mode: both; 
  animation-name: fadeInLeft; 
  @keyframes fadeInLeft { 
    0% {                
        opacity: 0;
        transform: translateX(-50px);
    }
    100% {
        opacity: 1;
        transform: none;
    }
  }
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    width: 100%;
  }
`
export const PopupWrapper = styled.div`
  width: 17%;
  height: 48px;
  z-index: 1;
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    display: none;
  }
`