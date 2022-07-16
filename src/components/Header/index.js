import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {BiMenu, BiLogIn} from 'react-icons/bi'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HeaderContainer,
  HeaderLogo,
  LogoAlignContainer,
  MobileContainer,
  DarkLightIconButton,
  DarkLightIcon,
  DesktopHeaderContainer,
  UserProfile,
  CustomLogoutButton,
  ModalContainer,
  ButtonsContainer,
  ModalDesc,
  CloseButton,
  ConfirmButton,
} from './styledComponents'

const Header = props => {
  const {history} = props
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {toggleTheme} = value
        const navBgColor = toggleTheme ? '#f9f9f9' : '#0f0f0f'

        const websiteLogo = toggleTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

        const darkLightIcon = toggleTheme
          ? 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'

        const buttonColor = toggleTheme ? '#4f46e5' : '#f8fafc'

        const renderMobileHeader = () => (
          <MobileContainer bgColor={navBgColor}>
            <HeaderLogo src={websiteLogo} alt="website logo" />
            <LogoAlignContainer>
              <DarkLightIconButton>
                <DarkLightIcon src={darkLightIcon} />
              </DarkLightIconButton>
              <BiMenu style={{fontSize: '25px', marginLeft: '5px'}} />
              <BiLogIn style={{fontSize: '25px', marginLeft: '5px'}} />
            </LogoAlignContainer>
          </MobileContainer>
        )

        const renderDesktopHeader = () => (
          <DesktopHeaderContainer bgColor={navBgColor}>
            <HeaderLogo src={websiteLogo} alt="website logo" />
            <LogoAlignContainer>
              <DarkLightIconButton>
                <DarkLightIcon src={darkLightIcon} />
              </DarkLightIconButton>
              <UserProfile
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={
                  <CustomLogoutButton
                    color={buttonColor}
                    borderColor={buttonColor}
                  >
                    Logout
                  </CustomLogoutButton>
                }
              >
                {close => (
                  <ModalContainer>
                    <ModalDesc>Are you sure, you want to logout?</ModalDesc>
                    <ButtonsContainer>
                      <CloseButton
                        type="button"
                        data-testid="closeButton"
                        onClick={() => close()}
                      >
                        Cancel
                      </CloseButton>

                      <ConfirmButton type="button" onClick={onClickLogout}>
                        Confirm
                      </ConfirmButton>
                    </ButtonsContainer>
                  </ModalContainer>
                )}
              </Popup>
            </LogoAlignContainer>
          </DesktopHeaderContainer>
        )

        return (
          <HeaderContainer bgColor={navBgColor}>
            {renderMobileHeader()}
            {renderDesktopHeader()}
          </HeaderContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default withRouter(Header)
