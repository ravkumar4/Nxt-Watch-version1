import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  min-width: 750px;
  max-width: 1700px;
  width: 100%;
  background-color: ${props => props.bgColor};
  padding: 10px;
`
export const HeaderLogo = styled.img`
  width: 125px;
  height: 30px;
  margin-left: 20px;
`
export const MobileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px;
  width: 100%;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 567px) {
    display: none;
  }
`

export const LogoAlignContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const DarkLightIconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const DarkLightIcon = styled.img`
  width: 25px;
  height: 25px;
`

export const DesktopHeaderContainer = styled.div`
  @media screen and (max-width: 567px) {
    display: none;
  }
  min-width: 700px;
  max-width: 1500px;
  width: 1450px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px;
`

export const UserProfile = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 12px;
`

export const CustomLogoutButton = styled.button`
  width: 90px;
  height: 32px;
  background-color: transparent;
  color: ${props => props.color};
  border-color: ${props => props.borderColor};
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  margin-left: 15px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
`
