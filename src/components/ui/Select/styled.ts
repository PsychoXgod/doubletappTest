import styled from "styled-components"


export const Base = styled.div`
  width: 100%;
  height: 49px;
`
export const Title = styled.h2`
  font-size: 15px;
  line-height: 20px;
  margin: 0;
  margin-bottom: 8px;
`
export const PopupSelect = styled.div`
  position: relative;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 20px;
`
export const PopupSelectSpan = styled.span`
  font-size: 16px;
  line-height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 89%;
`
export const PopupSpanPlaceholder = styled.span`
  font-size: 16px;
  line-height: 20px;
  width: 89%;
  color: rgba(0,0,0,0.3);
`
export const Options = styled.div`
  position: absolute;
  overflow: auto;
  max-height: 110px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgb(0 0 0 / 9%);
  border-radius: 10px;
  width: 100%;
  text-align: start;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 6px;
  z-index: 1;
  top: 47px;
  left: 0;
  animation-duration: .4s;
  animation-fill-mode: both; 
  animation-name: fadeInDown; 
  @keyframes fadeInDown { 
    0% {                
        opacity: 0;
        transform: translate3d(0px, -20px, 0px);
    }
    100% {
        opacity: 1;
        transform: none;
    }
  }
`
export const Option = styled.div`
  box-sizing: border-box;
  width: 96%;
  height: 35px;
  margin: 0 auto;
  margin-bottom: 4px;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 12px;
  line-height: 15px;
  list-style-type: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  :active,
  :hover {
    background: ${props => props.theme.palette.action.hover};
    border-radius: 5px;
  } 
`
export const OptionActive = styled.div`
  position: relative;
  background: rgba(73, 194, 232, 0.11);
  border-radius: 5px;
  box-sizing: border-box;
  width: 96%;
  height: 35px;
  margin: 0 auto;
  margin-bottom: 4px;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 12px;
  line-height: 15px;
  list-style-type: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  :active,
  :hover {
    background: ${props => props.theme.palette.action.hover};
  } 
`
export const ErrorMessage = styled.p`
  color: ${props => props.theme.palette.error.main};
  margin: 0;
  font-size: 14px;
`
export const Icon = styled.div`
  width: 12px;
  height: 11px;
  margin-left: 5px;
  svg {
    width: 100%;
    height: 100%;
  }
`
export const RotatedIcon = styled.div`
  width: 12px;
  height: 11px;
  margin-left: 5px;
  margin-top: 13px;
  transform: rotate(180deg);
  svg {
    width: 100%;
    height: 100%;
  }
`
export const IconActive = styled.div`
  top: 13px;
  right: 13px;
  position: absolute;
  max-width: 10px;
  height: 10px;
  svg {
    width: 100%;
    height: 100%;
  }
`