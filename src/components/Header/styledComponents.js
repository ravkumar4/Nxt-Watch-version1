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
  min-width: 200px;
  max-width: 567px;
  width: 100%;

  @media screen and (max-width: 566px) {
    min-width: 200px;
    max-width: 567px;
    width: 100%;
  }

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

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 150px;
  width: 250px;
  background-color: #cbd5e1;
  border-radius: 10px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 400px;
  }
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  color: grey;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`
export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  padding: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`
export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin: 10px;
  color: black;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 0;
`
